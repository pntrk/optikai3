import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  parseUniversalFile,
  UniversalFilePayload,
} from "../utils/universalFileParser";
import {
  gradeExamWithGemini,
  gradeExamBatchWithGemini,
  extractScenarioFromRubric,
  GradingResult,
  QuestionEvaluation,
  CriterionBreakdown,
} from "../services/geminiGrader";
import {
  MEB_2026_2027_TABLES,
  MebDistributionTable,
  ScenarioQuestion,
  expandMebTableScenarioToQuestions,
  getAvailableMebSubjects,
  getAvailableMebGradesForSubject,
  parseUploadedMebXmlToTables,
  scenarioQuestionsToRubricText,
  generateSampleStudentPaperText,
} from "../utils/maarifScenarios";
import {
  exportStudentExcelReport,
  exportClassExcelReport,
  exportStudentPdfReport,
  exportClassPdfReport,
} from "../utils/maarifReportExporter";
import { Student } from "../types";
import { Icons } from "./Icons";

interface MaarifTabProps {
  schoolStudents: Student[];
  institutionName?: string;
  showAlert: (msg: string) => void;
  showConfirm: (msg: string, onConfirm: () => void) => void;
}

export const MaarifTab: React.FC<MaarifTabProps> = ({
  schoolStudents,
  institutionName = "EĞİTİM KURUMU",
  showAlert,
  showConfirm,
}) => {
  // Özel yüklenen XML tabloları (varsa MEB_2026_2027_TABLES ile birleşir)
  const [customXmlTables, setCustomXmlTables] = useState<MebDistributionTable[]>([]);

  const allMebTables = useMemo(
    () => [...customXmlTables, ...MEB_2026_2027_TABLES],
    [customXmlTables]
  );

  const availableSubjects = useMemo(() => {
    const base = getAvailableMebSubjects();
    const extra = customXmlTables
      .map((t) => t.subject)
      .filter((s) => !base.includes(s));
    return [...extra, ...base];
  }, [customXmlTables]);

  const [subjectName, setSubjectName] = useState<string>("Matematik");
  const [gradeLevel, setGradeLevel] = useState<string>("5. Sınıf");
  const [selectedScenarioCol, setSelectedScenarioCol] = useState<string>("D");
  const [examTerm, setExamTerm] = useState<string>("1. Dönem 1. Ortak Yazılı Sınav");
  const [scenarioNo, setScenarioNo] = useState<string>("Senaryo 1");
  const [examTitle, setExamTitle] = useState<string>(
    "5. Sınıf Matematik 1. Dönem 1. Ortak Yazılı Sınav - Senaryo 1"
  );
  const [strictness, setStrictness] = useState<"esnek" | "standart" | "titiz">("standart");

  // Seçili ders için mevcut sınıflar
  const availableTablesForSubject = useMemo(() => {
    const custom = customXmlTables.filter((t) => t.subject === subjectName);
    const official = getAvailableMebGradesForSubject(subjectName);
    return [...custom, ...official];
  }, [subjectName, customXmlTables]);

  // Seçili ders + sınıf için aktif MEB Konu Soru Dağılım Tablosu
  const activeMebTable = useMemo(() => {
    return (
      availableTablesForSubject.find((t) => t.grade === gradeLevel) ||
      availableTablesForSubject[0] ||
      allMebTables[0]
    );
  }, [availableTablesForSubject, gradeLevel, allMebTables]);

  const activeScenarioColMeta = useMemo(() => {
    if (!activeMebTable) return undefined;
    return (
      activeMebTable.scenarios.find((s) => s.col === selectedScenarioCol) ||
      activeMebTable.scenarios[0]
    );
  }, [activeMebTable, selectedScenarioCol]);

  const [scenarioQuestions, setScenarioQuestions] = useState<ScenarioQuestion[]>(() => {
    try {
      const saved = localStorage.getItem("omr_maarif_scenario_questions_v3");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    const defaultTable = MEB_2026_2027_TABLES[0];
    return expandMebTableScenarioToQuestions(defaultTable, "D");
  });

  // Cevap Anahtarı Hafıza Durumu: "draft_preview" (Önizleme / Onay Bekliyor) | "locked_in_memory" (Hafızaya Alındı)
  const [answerKeyStatus, setAnswerKeyStatus] = useState<
    "draft_preview" | "locked_in_memory"
  >(() => {
    try {
      const saved = localStorage.getItem("omr_maarif_answer_key_status_v1");
      if (saved === "draft_preview" || saved === "locked_in_memory") return saved;
    } catch {
      // ignore
    }
    return "locked_in_memory";
  });

  const [lockedAnswerKeyMeta, setLockedAnswerKeyMeta] = useState<{
    sourceName: string;
    lockedAt: string;
  }>(() => {
    try {
      const saved = localStorage.getItem("omr_maarif_answer_key_meta_v1");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      sourceName: "MEB 2026-2027 Standart Senaryo Şablonu",
      lockedAt: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  });

  const [rubricFile, setRubricFile] = useState<UniversalFilePayload | null>(() => {
    try {
      const saved = localStorage.getItem("omr_maarif_active_rubric");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [paperFiles, setPaperFiles] = useState<UniversalFilePayload[]>([]);
  const [loading, setLoading] = useState(false);
  const [extractingScenario, setExtractingScenario] = useState(false);
  const [batchProgress, setBatchProgress] = useState<{
    current: number;
    total: number;
  } | null>(null);
  const [result, setResult] = useState<GradingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Ana Görünüm: "evaluate" (Kağıt Oku) | "matrix" (Sonuç & Karne) | "history" (Sınıf Listesi)
  const [activeSubView, setActiveSubView] = useState<"evaluate" | "matrix" | "history">(
    "evaluate"
  );

  // Sınıf Listesi alt sekmesi: "students" | "outcomes" | "compare"
  const [classSubTab, setClassSubTab] = useState<"students" | "outcomes" | "compare">(
    "students"
  );

  // Modal içi sekme: "questions" (Senaryo Soruları & Rubrik) | "mebTable" (Resmi MEB Konu-Soru Dağılım Matrisi)
  const [scenarioModalTab, setScenarioModalTab] = useState<"questions" | "mebTable">(
    "questions"
  );

  // Soru kartlarında açık olan alt kriter detayları
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  // Modallar
  const [showScenarioModal, setShowScenarioModal] = useState<boolean>(false);
  const [showPaperTextModal, setShowPaperTextModal] = useState<boolean>(false);
  const [manualPaperTitle, setManualPaperTitle] = useState("Ogrenci_Cevap_Kagidi.txt");
  const [manualPaperText, setManualPaperText] = useState("");

  // Kayıtlı Değerlendirme Geçmişi
  const [savedHistory, setSavedHistory] = useState<GradingResult[]>(() => {
    try {
      const raw = localStorage.getItem("omr_maarif_results_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [selectedStudentNo, setSelectedStudentNo] = useState<string>("");
  const [historySearch, setHistorySearch] = useState<string>("");
  const [historyClassFilter, setHistoryClassFilter] = useState<string>("ALL");
  const [compareIds, setCompareIds] = useState<[string, string]>(["", ""]);

  const rubricInputRef = useRef<HTMLInputElement>(null);
  const paperInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(
        "omr_maarif_scenario_questions_v3",
        JSON.stringify(scenarioQuestions)
      );
    } catch {
      // ignore
    }
  }, [scenarioQuestions]);

  useEffect(() => {
    try {
      localStorage.setItem("omr_maarif_answer_key_status_v1", answerKeyStatus);
      localStorage.setItem(
        "omr_maarif_answer_key_meta_v1",
        JSON.stringify(lockedAnswerKeyMeta)
      );
    } catch {
      // ignore
    }
  }, [answerKeyStatus, lockedAnswerKeyMeta]);

  useEffect(() => {
    try {
      if (rubricFile) {
        localStorage.setItem("omr_maarif_active_rubric", JSON.stringify(rubricFile));
      } else {
        localStorage.removeItem("omr_maarif_active_rubric");
      }
    } catch {
      // ignore
    }
  }, [rubricFile]);

  useEffect(() => {
    try {
      localStorage.setItem("omr_maarif_results_v1", JSON.stringify(savedHistory));
    } catch (e) {
      console.warn("Maarif history save error:", e);
    }
  }, [savedHistory]);

  // MEB Tablosu + Senaryo Sütunu seçildiğinde soruları otomatik yapılandır
  const applyMebTableScenario = (
    table: MebDistributionTable,
    colLetter: string,
    asDraft = false
  ) => {
    const sc =
      table.scenarios.find((s) => s.col === colLetter) || table.scenarios[0];
    if (!sc) return;

    const expanded = expandMebTableScenarioToQuestions(table, sc.col);
    const title = `${table.grade} ${table.subject} ${sc.examTerm} - ${sc.scenarioName}`;

    setSubjectName(table.subject);
    setGradeLevel(table.grade);
    setSelectedScenarioCol(sc.col);
    setExamTerm(sc.examTerm);
    setScenarioNo(sc.scenarioName);
    setExamTitle(title);
    setScenarioQuestions(expanded);
    if (asDraft) {
      setAnswerKeyStatus("draft_preview");
    } else {
      setAnswerKeyStatus("locked_in_memory");
      setLockedAnswerKeyMeta({
        sourceName: `${table.grade} ${table.subject} (${sc.scenarioName})`,
        lockedAt: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }
    setError(null);
  };

  const handleSubjectSelect = (newSubject: string) => {
    const tables = [
      ...customXmlTables.filter((t) => t.subject === newSubject),
      ...getAvailableMebGradesForSubject(newSubject),
    ];
    const firstTable = tables[0];
    if (firstTable && firstTable.scenarios[0]) {
      applyMebTableScenario(firstTable, firstTable.scenarios[0].col);
    } else {
      setSubjectName(newSubject);
    }
  };

  const handleGradeSelect = (newGrade: string) => {
    const table = availableTablesForSubject.find((t) => t.grade === newGrade);
    if (table && table.scenarios[0]) {
      applyMebTableScenario(table, table.scenarios[0].col);
    } else {
      setGradeLevel(newGrade);
    }
  };

  const handleScenarioColSelect = (newCol: string) => {
    if (activeMebTable) {
      applyMebTableScenario(activeMebTable, newCol);
    }
  };

  const handleApproveAndLockAnswerKey = () => {
    setAnswerKeyStatus("locked_in_memory");
    setLockedAnswerKeyMeta({
      sourceName: rubricFile
        ? rubricFile.fileName
        : `${gradeLevel} ${subjectName} (${scenarioNo})`,
      lockedAt: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  const handleLoadSampleStudentPaper = () => {
    const sampleText = generateSampleStudentPaperText(
      subjectName,
      gradeLevel,
      scenarioNo,
      scenarioQuestions
    );
    setPaperFiles([
      {
        fileName: `Ornek_${gradeLevel.replace(/\s+/g, "")}_${subjectName.replace(/\s+/g, "")}_Kagidi.txt`,
        mode: "text",
        extractedText: sampleText,
      },
    ]);
    setError(null);
  };

  const scenarioSummary = useMemo(() => {
    let basicCount = 0;
    let basicPoints = 0;
    let complexCount = 0;
    let complexPoints = 0;

    scenarioQuestions.forEach((q) => {
      const pts = Number(q.maxScore) || 0;
      if (String(q.cognitiveLevel).includes("Karmaşık")) {
        complexCount += 1;
        complexPoints += pts;
      } else {
        basicCount += 1;
        basicPoints += pts;
      }
    });

    return {
      totalQuestions: scenarioQuestions.length,
      totalPoints: basicPoints + complexPoints,
      basicCount,
      basicPoints,
      complexCount,
      complexPoints,
    };
  }, [scenarioQuestions]);

  const convertUploadedAnswerKeyToDraft = async (parsedFile: UniversalFilePayload) => {
    setExtractingScenario(true);
    setError(null);
    try {
      const extracted = await extractScenarioFromRubric(parsedFile);
      if (extracted.subjectName) setSubjectName(extracted.subjectName);
      if (extracted.gradeLevel) setGradeLevel(extracted.gradeLevel);
      if (extracted.examTerm) setExamTerm(extracted.examTerm);
      if (extracted.scenarioNo) setScenarioNo(extracted.scenarioNo);
      if (extracted.title) setExamTitle(extracted.title);
      if (Array.isArray(extracted.questions) && extracted.questions.length > 0) {
        const formatted: ScenarioQuestion[] = extracted.questions.map((q, idx) => ({
          questionNo: q.questionNo || idx + 1,
          theme: q.theme || "Genel Öğrenme Alanı",
          topic: q.topic || "",
          learningOutcomeCode: q.learningOutcomeCode || `Ç.${idx + 1}`,
          learningOutcome: q.learningOutcome || `Soru ${idx + 1} Kazanımı`,
          processComponent: q.processComponent || "Çözümleme",
          cognitiveLevel: String(q.cognitiveLevel || "").includes("Karmaşık")
            ? "Karmaşık Bilişsel Süreçler"
            : "Basit Bilişsel Süreçler",
          maxScore: Number(q.maxScore) || 20,
          expectedAnswer: q.expectedAnswer || "",
          criteria: Array.isArray(q.criteria)
            ? q.criteria.map((c, cIdx) => ({
                id: `q${idx + 1}-c${cIdx + 1}`,
                description: c.description || "",
                points: Number(c.points) || 5,
              }))
            : [],
        }));
        setScenarioQuestions(formatted);
        // Öğretmenin önizleme yapıp onaylaması için draft_preview moduna al
        setAnswerKeyStatus("draft_preview");
      }
    } catch (err: any) {
      setError(
        err?.message || "Puanlı cevap anahtarı şablona dönüştürülürken hata oluştu."
      );
    } finally {
      setExtractingScenario(false);
    }
  };

  const handleRubricUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      const parsed = await parseUniversalFile(file);
      setRubricFile(parsed);

      // Eğer yüklenen dosya bir MEB XML Konu Soru Dağılım Tablosu ise doğrudan tabloları ayrıştır ve önizlemeye al
      if (parsed.rawXml) {
        const xmlTables = parseUploadedMebXmlToTables(parsed.rawXml, parsed.fileName);
        if (xmlTables.length > 0) {
          setCustomXmlTables((prev) => [...xmlTables, ...prev]);
          applyMebTableScenario(xmlTables[0], xmlTables[0].scenarios[0].col, true);
        }
      } else {
        // Puanlı cevap anahtarı (PDF, Görsel, Word, Excel, TXT) yüklendiğinde otomatik şablona çevirip önizleme göster
        await convertUploadedAnswerKeyToDraft(parsed);
      }
    } catch (err: any) {
      setError(err?.message || "Cevap anahtarı dosyası okunurken hata oluştu.");
    } finally {
      e.target.value = "";
    }
  };

  const handleExtractScenarioFromRubric = async () => {
    if (!rubricFile) {
      showAlert("Önce bir puanlı cevap anahtarı dosyası yükleyin.");
      return;
    }
    await convertUploadedAnswerKeyToDraft(rubricFile);
  };

  const handlePaperUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setError(null);
    try {
      const parsedList: UniversalFilePayload[] = [];
      for (let i = 0; i < files.length; i++) {
        const parsed = await parseUniversalFile(files[i]);
        parsedList.push(parsed);
      }
      setPaperFiles((prev) => [...prev, ...parsedList]);
    } catch (err: any) {
      setError(err?.message || "Öğrenci kağıdı okunurken hata oluştu.");
    } finally {
      e.target.value = "";
    }
  };

  const handleRemovePaperAt = (idx: number) => {
    setPaperFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSaveManualPaper = () => {
    if (!manualPaperText.trim()) {
      showAlert("Lütfen öğrenci cevap metnini girin.");
      return;
    }
    setPaperFiles([
      {
        fileName: manualPaperTitle.trim() || "Manuel_Ogrenci_Kagidi.txt",
        mode: "text",
        extractedText: manualPaperText,
      },
    ]);
    setShowPaperTextModal(false);
  };

  const handleUpdateScenarioQuestion = (
    qIdx: number,
    updates: Partial<ScenarioQuestion>
  ) => {
    setScenarioQuestions((prev) =>
      prev.map((q, i) => (i === qIdx ? { ...q, ...updates } : q))
    );
  };

  const handleAddScenarioQuestion = () => {
    const nextNo = scenarioQuestions.length + 1;
    setScenarioQuestions((prev) => [
      ...prev,
      {
        questionNo: nextNo,
        theme: "Yeni Öğrenme Alanı",
        topic: "",
        learningOutcomeCode: `Ç.${nextNo}`,
        learningOutcome: "Öğrenme çıktısı tanımını girin",
        processComponent: "Çözümleme ve Yorumlama",
        cognitiveLevel: "Basit Bilişsel Süreçler",
        maxScore: 20,
        expectedAnswer: "Beklenen ideal cevabı girin",
        criteria: [
          {
            id: `q${nextNo}-c1`,
            description: "1. kabul kriteri / değerlendirme basamağı",
            points: 10,
          },
          {
            id: `q${nextNo}-c2`,
            description: "2. kabul kriteri / değerlendirme basamağı",
            points: 10,
          },
        ],
      },
    ]);
  };

  const handleRemoveScenarioQuestion = (qIdx: number) => {
    if (scenarioQuestions.length <= 1) {
      showAlert("Cevap anahtarı şablonunda en az 1 soru bulunmalıdır.");
      return;
    }
    setScenarioQuestions((prev) =>
      prev
        .filter((_, i) => i !== qIdx)
        .map((q, idx) => ({ ...q, questionNo: idx + 1 }))
    );
  };

  const enrichGradedPaper = (graded: GradingResult): GradingResult => {
    let finalStudentName = graded.studentName || "Öğrenci";
    let finalStudentNo = graded.studentNumber || "";
    let finalClass = graded.className || "";

    if (selectedStudentNo && paperFiles.length === 1) {
      const matched = schoolStudents.find((s) => s.no === selectedStudentNo);
      if (matched) {
        finalStudentName = matched.name;
        finalStudentNo = matched.no;
        finalClass = `${matched.classStr}-${matched.sectionStr}`;
      }
    } else if (finalStudentNo && schoolStudents.length > 0) {
      const matched = schoolStudents.find(
        (s) => s.no.trim() === String(finalStudentNo).trim()
      );
      if (matched) {
        finalStudentName = matched.name;
        finalClass = `${matched.classStr}-${matched.sectionStr}`;
      }
    }

    const questions = Array.isArray(graded.questions) ? graded.questions : [];
    const computedMax =
      questions.reduce((acc, q) => acc + (Number(q.maxScore) || 0), 0) ||
      graded.maxTotalScore ||
      100;
    const computedTotal = questions.reduce(
      (acc, q) => acc + (Number(q.awardedScore) || 0),
      0
    );

    return {
      ...graded,
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      gradedAt: new Date().toLocaleString("tr-TR"),
      strictness,
      subjectName: graded.subjectName || subjectName,
      gradeLevel: graded.gradeLevel || gradeLevel,
      examTerm: graded.examTerm || examTerm,
      scenarioNo: graded.scenarioNo || scenarioNo,
      examTitle: graded.examTitle || examTitle,
      studentName: finalStudentName,
      studentNumber: finalStudentNo,
      className: finalClass,
      totalScore: computedTotal,
      maxTotalScore: computedMax,
      questions,
    };
  };

  const handleRunGrading = async () => {
    if (scenarioQuestions.length === 0) {
      setError("Lütfen önce sol bölümden puanlı cevap anahtarını yükleyin veya MEB senaryosu seçin.");
      return;
    }
    if (answerKeyStatus === "draft_preview") {
      setError(
        "Lütfen sol bölümde önizlemesi gösterilen cevap anahtarı şablonunu 'Onayla ve Hafızaya Al' butonuyla onaylayın."
      );
      return;
    }
    if (paperFiles.length === 0) {
      setError("Lütfen sağ bölümden taranmış öğrenci cevap kağıdını yükleyin.");
      return;
    }

    setError(null);
    setLoading(true);
    setBatchProgress({ current: 0, total: paperFiles.length });

    try {
      const newlyGraded: GradingResult[] = [];
      // Token tasarrufu için çoklu öğrenci kağıtlarını 3'erli paketler (batch) halinde
      // hafızadaki kilitli cevap anahtarı şablonuyla (useLockedTemplateOnly: true) değerlendir.
      const BATCH_SIZE = 3;
      for (let i = 0; i < paperFiles.length; i += BATCH_SIZE) {
        const chunk = paperFiles.slice(i, i + BATCH_SIZE);
        setBatchProgress({
          current: Math.min(paperFiles.length, i + chunk.length),
          total: paperFiles.length,
        });

        const gradedList =
          chunk.length === 1
            ? [
                await gradeExamWithGemini(null, chunk[0], {
                  strictness,
                  subjectName,
                  gradeLevel,
                  examTerm,
                  scenarioNo,
                  examTitle,
                  scenarioQuestions,
                  useLockedTemplateOnly: true,
                }),
              ]
            : await gradeExamBatchWithGemini(null, chunk, {
                strictness,
                subjectName,
                gradeLevel,
                examTerm,
                scenarioNo,
                examTitle,
                scenarioQuestions,
                useLockedTemplateOnly: true,
              });

        gradedList.forEach((graded) => {
          newlyGraded.push(enrichGradedPaper(graded));
        });
      }

      if (newlyGraded.length > 0) {
        setResult(newlyGraded[newlyGraded.length - 1]);
        setSavedHistory((prev) => [...newlyGraded.reverse(), ...prev]);
        setActiveSubView("matrix");
      }
    } catch (err: any) {
      setError(err?.message || "Puanlama sırasında hata oluştu.");
    } finally {
      setLoading(false);
      setBatchProgress(null);
    }
  };

  const handleQuestionScoreChange = (questionNo: number, newScore: number) => {
    if (!result) return;
    const updatedQuestions: QuestionEvaluation[] = result.questions.map((q) => {
      if (q.questionNo === questionNo) {
        const clamped = Math.max(0, Math.min(q.maxScore, Number(newScore) || 0));
        return { ...q, awardedScore: clamped };
      }
      return q;
    });
    const newTotal = updatedQuestions.reduce(
      (sum, q) => sum + (Number(q.awardedScore) || 0),
      0
    );
    const updatedResult: GradingResult = {
      ...result,
      questions: updatedQuestions,
      totalScore: newTotal,
    };
    setResult(updatedResult);
    if (updatedResult.id) {
      setSavedHistory((prev) =>
        prev.map((item) => (item.id === updatedResult.id ? updatedResult : item))
      );
    }
  };

  const handleCriterionScoreChange = (
    questionNo: number,
    criterionIdx: number,
    newEarned: number
  ) => {
    if (!result) return;
    const updatedQuestions: QuestionEvaluation[] = result.questions.map((q) => {
      if (q.questionNo !== questionNo || !q.criteriaBreakdown) return q;
      const updatedBreakdown: CriterionBreakdown[] = q.criteriaBreakdown.map(
        (cb, idx) => {
          if (idx !== criterionIdx) return cb;
          const clamped = Math.max(
            0,
            Math.min(cb.maxPoints || 100, Number(newEarned) || 0)
          );
          const status =
            clamped >= (cb.maxPoints || 1)
              ? "tam"
              : clamped > 0
              ? "kismi"
              : "eksik";
          return { ...cb, earnedPoints: clamped, status };
        }
      );
      const qAwarded = Math.min(
        q.maxScore,
        updatedBreakdown.reduce(
          (acc, cb) => acc + (Number(cb.earnedPoints) || 0),
          0
        )
      );
      return {
        ...q,
        criteriaBreakdown: updatedBreakdown,
        awardedScore: qAwarded,
      };
    });

    const newTotal = updatedQuestions.reduce(
      (sum, q) => sum + (Number(q.awardedScore) || 0),
      0
    );
    const updatedResult: GradingResult = {
      ...result,
      questions: updatedQuestions,
      totalScore: newTotal,
    };
    setResult(updatedResult);
    if (updatedResult.id) {
      setSavedHistory((prev) =>
        prev.map((item) => (item.id === updatedResult.id ? updatedResult : item))
      );
    }
  };

  const handleDeleteHistoryItem = (id?: string) => {
    if (!id) return;
    showConfirm(
      "Bu öğrenci değerlendirme kaydını silmek istediğinize emin misiniz?",
      () => {
        setSavedHistory((prev) => prev.filter((item) => item.id !== id));
        if (result?.id === id) {
          setResult(null);
        }
      }
    );
  };

  const handleClearAllHistory = () => {
    if (savedHistory.length === 0) return;
    showConfirm(
      `Kayıtlı tüm (${savedHistory.length} adet) Maarif yazılı değerlendirme geçmişini silmek istediğinize emin misiniz?`,
      () => {
        setSavedHistory([]);
        setResult(null);
      }
    );
  };

  const toggleQuestionExpand = (qNo: number) => {
    setExpandedQuestions((prev) => ({ ...prev, [qNo]: !prev[qNo] }));
  };

  const activeStudentCognitiveStats = useMemo(() => {
    if (!result)
      return { basicEarned: 0, basicMax: 0, complexEarned: 0, complexMax: 0 };
    let basicEarned = 0;
    let basicMax = 0;
    let complexEarned = 0;
    let complexMax = 0;
    result.questions.forEach((q) => {
      if (String(q.cognitiveLevel || "").includes("Karmaşık")) {
        complexEarned += Number(q.awardedScore) || 0;
        complexMax += Number(q.maxScore) || 0;
      } else {
        basicEarned += Number(q.awardedScore) || 0;
        basicMax += Number(q.maxScore) || 0;
      }
    });
    return { basicEarned, basicMax, complexEarned, complexMax };
  }, [result]);

  const totalMaxScore = result
    ? result.maxTotalScore ||
      result.questions.reduce((acc, q) => acc + (Number(q.maxScore) || 0), 0) ||
      100
    : 100;
  const totalPct =
    result && totalMaxScore > 0
      ? Math.round((result.totalScore / totalMaxScore) * 100)
      : 0;

  const classAnalytics = useMemo(() => {
    const filtered = savedHistory.filter((item) => {
      const matchesClass =
        historyClassFilter === "ALL" ||
        (item.className || "").toLowerCase() ===
          historyClassFilter.toLowerCase();
      const matchesSearch =
        !historySearch ||
        (item.studentName || "")
          .toLowerCase()
          .includes(historySearch.toLowerCase()) ||
        (item.studentNumber || "")
          .toLowerCase()
          .includes(historySearch.toLowerCase());
      return matchesClass && matchesSearch;
    });

    const uniqueClasses = Array.from(
      new Set(savedHistory.map((h) => h.className).filter(Boolean))
    ) as string[];

    const scores = filtered.map((h) => Number(h.totalScore) || 0);
    const avgScore =
      scores.length > 0
        ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
        : 0;
    const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
    const minScore = scores.length > 0 ? Math.min(...scores) : 0;
    const passCount = scores.filter((s) => s >= 50).length;
    const passRate =
      scores.length > 0 ? Math.round((passCount / scores.length) * 100) : 0;

    const qMap = new Map<
      number,
      {
        questionNo: number;
        learningOutcomeCode: string;
        learningOutcome: string;
        processComponent: string;
        cognitiveLevel: string;
        maxScore: number;
        sumScore: number;
        count: number;
        fullCount: number;
        partialCount: number;
        zeroCount: number;
      }
    >();

    filtered.forEach((h) => {
      (h.questions || []).forEach((q) => {
        const cur = qMap.get(q.questionNo) || {
          questionNo: q.questionNo,
          learningOutcomeCode: q.learningOutcomeCode || `Ç.${q.questionNo}`,
          learningOutcome: q.learningOutcome || `Soru ${q.questionNo}`,
          processComponent: q.processComponent || "Çözümleme",
          cognitiveLevel: q.cognitiveLevel || "Basit Bilişsel Süreçler",
          maxScore: q.maxScore || 0,
          sumScore: 0,
          count: 0,
          fullCount: 0,
          partialCount: 0,
          zeroCount: 0,
        };
        const sc = Number(q.awardedScore) || 0;
        cur.sumScore += sc;
        cur.count += 1;
        if (sc >= cur.maxScore && cur.maxScore > 0) cur.fullCount += 1;
        else if (sc > 0) cur.partialCount += 1;
        else cur.zeroCount += 1;
        qMap.set(q.questionNo, cur);
      });
    });

    const outcomes = Array.from(qMap.values())
      .sort((a, b) => a.questionNo - b.questionNo)
      .map((o) => {
        const avg = o.count > 0 ? Number((o.sumScore / o.count).toFixed(1)) : 0;
        const pct = o.maxScore > 0 ? Math.round((avg / o.maxScore) * 100) : 0;
        return { ...o, avg, pct };
      });

    return {
      filtered,
      uniqueClasses,
      avgScore,
      maxScore,
      minScore,
      passRate,
      outcomes,
    };
  }, [savedHistory, historySearch, historyClassFilter]);

  const comparedStudentA = useMemo(
    () => savedHistory.find((s) => s.id === compareIds[0]) || null,
    [savedHistory, compareIds]
  );
  const comparedStudentB = useMemo(
    () => savedHistory.find((s) => s.id === compareIds[1]) || null,
    [savedHistory, compareIds]
  );

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      {/* MODAL 1: MEB 2026-2027 KONU SORU DAĞILIM TABLOSU & ORTAK YAZILI SENARYOSU MODALI */}
      {showScenarioModal && (
        <div
          className="fixed inset-0 z-[9995] bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setShowScenarioModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  MEB 2026-2027 Konu Soru Dağılım Tablosu & Senaryo Yapılandırma
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {subjectName} · {gradeLevel} · {examTerm} · {scenarioNo} ({scenarioSummary.totalQuestions} Soru · {scenarioSummary.totalPoints} Puan)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setScenarioModalTab("questions")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      scenarioModalTab === "questions"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Senaryo Soruları ({scenarioQuestions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setScenarioModalTab("mebTable")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      scenarioModalTab === "mebTable"
                        ? "bg-white text-indigo-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Resmi MEB Dağılım Tablosu
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowScenarioModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <Icons.X />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar">
              {/* Üst Filtre: Ders -> Sınıf -> Ortak Yazılı Senaryosu */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Ders (MEB 2026-2027 Branşları)
                  </label>
                  <select
                    value={subjectName}
                    onChange={(e) => handleSubjectSelect(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-indigo-500 outline-none font-semibold text-slate-900"
                  >
                    {availableSubjects.map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Sınıf Düzeyi
                  </label>
                  <select
                    value={activeMebTable?.grade || gradeLevel}
                    onChange={(e) => handleGradeSelect(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-indigo-500 outline-none font-semibold text-slate-900"
                  >
                    {availableTablesForSubject.map((t) => (
                      <option key={t.id} value={t.grade}>
                        {t.grade} ({t.outcomes.length} Kazanım)
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    1. Dönem Ortak Yazılı & Senaryo
                  </label>
                  <select
                    value={activeScenarioColMeta?.col || selectedScenarioCol}
                    onChange={(e) => handleScenarioColSelect(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-indigo-500 outline-none font-semibold text-indigo-700"
                  >
                    {(activeMebTable?.scenarios || []).map((sc) => (
                      <option key={sc.col} value={sc.col}>
                        {sc.examTerm.replace("Ortak Yazılı Sınav", "Yazılı")} — {sc.scenarioName} ({sc.totalQuestions} Soru)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {scenarioModalTab === "mebTable" && activeMebTable ? (
                /* RESMİ MEB 2026-2027 KONU SORU DAĞILIM TABLOSU MATRİSİ */
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs bg-indigo-50/70 border border-indigo-100 p-3 rounded-xl">
                    <div>
                      <strong className="text-indigo-950">
                        {activeMebTable.grade} {activeMebTable.subject} Konu Soru Dağılım Tablosu
                      </strong>
                      <span className="text-indigo-700 ml-2">
                        ({activeMebTable.outcomes.length} Öğrenme Çıktısı / Kazanım · {activeMebTable.scenarios.length} Senaryo Sütunu)
                      </span>
                    </div>
                    <span className="text-[11px] text-indigo-700 font-medium">
                      Sütun başlığına tıklayarak ilgili senaryoyu aktif edebilirsiniz
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-700">
                          <th className="py-2.5 px-3 min-w-[140px]">Ünite / Tema</th>
                          <th className="py-2.5 px-3 min-w-[260px]">Öğrenme Çıktısı / Kazanım</th>
                          {activeMebTable.scenarios.map((sc) => {
                            const isSelected = sc.col === activeScenarioColMeta?.col;
                            const shortTerm = sc.examTerm.includes("2.") ? "2.Yazılı" : "1.Yazılı";
                            return (
                              <th
                                key={sc.col}
                                onClick={() => handleScenarioColSelect(sc.col)}
                                className={`py-2 px-2 text-center cursor-pointer transition-colors whitespace-nowrap ${
                                  isSelected
                                    ? "bg-indigo-600 text-white"
                                    : "hover:bg-indigo-50 text-slate-700"
                                }`}
                                title={`${sc.examTerm} - ${sc.scenarioName} uygulamak için tıklayın`}
                              >
                                <div className="text-[10px] opacity-80">{shortTerm}</div>
                                <div>{sc.scenarioName.replace("Senaryo ", "S.")}</div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {activeMebTable.outcomes.map((o, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80">
                            <td className="py-2 px-3 text-[11px] font-medium text-slate-600">
                              <div>{o.theme}</div>
                              {o.topic && (
                                <div className="text-[10px] text-slate-400 mt-0.5">{o.topic}</div>
                              )}
                            </td>
                            <td className="py-2 px-3">
                              <span className="font-mono font-bold text-indigo-700 mr-1.5">
                                {o.code}
                              </span>
                              <span className="text-slate-800">{o.text}</span>
                            </td>
                            {activeMebTable.scenarios.map((sc) => {
                              const count = o.counts[sc.col];
                              const isSelected = sc.col === activeScenarioColMeta?.col;
                              return (
                                <td
                                  key={sc.col}
                                  className={`py-2 px-2 text-center font-mono font-bold tabular-nums ${
                                    isSelected
                                      ? count && count > 0
                                        ? "bg-indigo-50 text-indigo-700"
                                        : "bg-indigo-50/30 text-slate-300"
                                      : count && count > 0
                                      ? "text-slate-900"
                                      : "text-slate-300"
                                  }`}
                                >
                                  {count === -1 ? "ÜG" : count && count > 0 ? count : "-"}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* AKTİF SENARYO SORULARI VE RUBRİK KRİTERLERİ DÜZENLEME LİSTESİ */
                <div className="space-y-3">
                  {scenarioQuestions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                        <div className="sm:col-span-3 flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 tabular-nums shrink-0">
                            S.{q.questionNo}
                          </span>
                          <input
                            type="text"
                            value={q.learningOutcomeCode}
                            onChange={(e) =>
                              handleUpdateScenarioQuestion(qIdx, {
                                learningOutcomeCode: e.target.value,
                              })
                            }
                            placeholder="MAT.5.3.1"
                            className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white font-mono font-bold text-indigo-700"
                          />
                        </div>
                        <div className="sm:col-span-5">
                          <input
                            type="text"
                            value={q.learningOutcome}
                            onChange={(e) =>
                              handleUpdateScenarioQuestion(qIdx, {
                                learningOutcome: e.target.value,
                              })
                            }
                            placeholder="Öğrenme çıktısı tanımı..."
                            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <select
                            value={q.cognitiveLevel}
                            onChange={(e) =>
                              handleUpdateScenarioQuestion(qIdx, {
                                cognitiveLevel: e.target
                                  .value as ScenarioQuestion["cognitiveLevel"],
                              })
                            }
                            className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700"
                          >
                            <option value="Basit Bilişsel Süreçler">Basit Bilişsel</option>
                            <option value="Karmaşık Bilişsel Süreçler">Karmaşık Bilişsel</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2 flex items-center justify-end gap-1.5">
                          <input
                            type="number"
                            min={1}
                            max={100}
                            value={q.maxScore}
                            onChange={(e) =>
                              handleUpdateScenarioQuestion(qIdx, {
                                maxScore: Number(e.target.value) || 0,
                              })
                            }
                            className="w-14 text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white font-bold text-center tabular-nums"
                          />
                          <span className="text-xs text-slate-500">p</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveScenarioQuestion(qIdx)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                            title="Soruyu Sil"
                          >
                            <Icons.Trash />
                          </button>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 flex flex-wrap items-center gap-2">
                        <span>
                          <strong>Ünite/Tema:</strong> {q.theme}
                        </span>
                        {q.processComponent && (
                          <span>
                            · <strong>Süreç:</strong> {q.processComponent}
                          </span>
                        )}
                      </div>

                      <input
                        type="text"
                        value={q.expectedAnswer}
                        onChange={(e) =>
                          handleUpdateScenarioQuestion(qIdx, {
                            expectedAnswer: e.target.value,
                          })
                        }
                        placeholder="Beklenen ideal cevap çerçevesi..."
                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleAddScenarioQuestion}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Icons.Plus />
                <span>Soru Ekle</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleApproveAndLockAnswerKey();
                  setShowScenarioModal(false);
                }}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
              >
                Şablonu Onayla, Hafızaya Al ve Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: MANUEL ÖĞRENCİ CEVAP METNİ MODALI */}
      {showPaperTextModal && (
        <div
          className="fixed inset-0 z-[9995] bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setShowPaperTextModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-2xl shadow-xl border border-slate-200 max-w-xl w-full p-5 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Öğrenci Cevap Metni Gir
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Öğrencinin açık uçlu sorulara verdiği yanıtları metin olarak yapıştırabilirsiniz.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPaperTextModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <Icons.X />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={manualPaperTitle}
                onChange={(e) => setManualPaperTitle(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-indigo-500 outline-none"
                placeholder="Örn: Ahmet_Yilmaz_6A_Cevap_Kagidi.txt"
              />
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Cevap Metni
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setManualPaperText(
                        generateSampleStudentPaperText(
                          subjectName,
                          gradeLevel,
                          scenarioNo,
                          scenarioQuestions
                        )
                      )
                    }
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                  >
                    Seçili Senaryoya Uygun Örnek Cevap Doldur
                  </button>
                </div>
                <textarea
                  rows={9}
                  value={manualPaperText}
                  onChange={(e) => setManualPaperText(e.target.value)}
                  placeholder="Öğrenci Adı: ...&#10;Cevap 1: ...&#10;Cevap 2: ..."
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:border-indigo-500 outline-none font-mono leading-relaxed"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowPaperTextModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                type="button"
                onClick={handleSaveManualPaper}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              >
                Kağıdı Ekle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ÜST BAR: SADE BAŞLIK VE 3 TEMİZ SEKME */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate">
              Maarif Açık Uçlu Yazılı Değerlendirme
            </h1>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold">
              MEB 2026-2027 Senaryoları
            </span>
          </div>
          <p className="text-xs text-slate-500 truncate mt-0.5">
            {subjectName} · {gradeLevel} · {examTerm.replace("Ortak Yazılı Sınav", "Yazılı")} · {scenarioNo} ({scenarioSummary.totalQuestions} Soru · {scenarioSummary.totalPoints} Puan)
          </p>
        </div>

        <div className="grid grid-cols-3 sm:flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0">
          <button
            type="button"
            onClick={() => setActiveSubView("evaluate")}
            className={`min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap text-center ${
              activeSubView === "evaluate"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Kağıt Oku
          </button>
          <button
            type="button"
            onClick={() => setActiveSubView("matrix")}
            className={`min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap text-center tabular-nums ${
              activeSubView === "matrix"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {result ? `Karne (${result.totalScore}p)` : "Sonuç & Karne"}
          </button>
          <button
            type="button"
            onClick={() => setActiveSubView("history")}
            className={`min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap text-center tabular-nums ${
              activeSubView === "history"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sınıf ({savedHistory.length})
          </button>
        </div>
      </div>

      {/* SEKME 1: KAĞIT OKU (HAFIZALI CEVAP ANAHTARI ŞABLONU & TOKEN TASARRUFLU KAĞIT OKUMA) */}
      {activeSubView === "evaluate" && (
        <div className="space-y-4">
          {/* Adım 1 ve Adım 2: Yan Yana İki Eşit Kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* SOL KART (CSS SELECTOR 1): 1. PUANLI CEVAP ANAHTARI YÜKLEME, ÖNİZLEME VE HAFIZAYA ALMA */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-indigo-600">
                        1. Adım · Puanlı Cevap Anahtarı
                      </span>
                      <span aria-hidden="true" className="text-slate-300">
                        ·
                      </span>
                      <span
                        className={`font-semibold ${
                          answerKeyStatus === "locked_in_memory"
                            ? "text-emerald-700"
                            : "text-amber-700"
                        }`}
                      >
                        {answerKeyStatus === "locked_in_memory"
                          ? "Hafızada Aktif"
                          : "Onay Bekliyor"}
                      </span>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Cevap Anahtarı Şablonu ve Hafıza
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setScenarioModalTab("questions");
                      setShowScenarioModal(true);
                    }}
                    className="min-h-[38px] px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Icons.Sliders />
                    <span>Şablonu Düzenle</span>
                  </button>
                </div>

                {/* Puanlı Cevap Anahtarı Dosya Yükleme Alanı */}
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    ref={rubricInputRef}
                    type="file"
                    accept=".pdf,.xlsx,.xls,.csv,.docx,.txt,.xml,image/*"
                    onChange={handleRubricUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => rubricInputRef.current?.click()}
                    disabled={extractingScenario}
                    className="flex-1 min-h-[42px] py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Icons.Upload />
                    <span>
                      {extractingScenario
                        ? "Cevap Anahtarı Şablona Çevriliyor..."
                        : "Puanlı Cevap Anahtarı Yükle (PDF / Görsel / Word)"}
                    </span>
                  </button>
                  {rubricFile && !rubricFile.rawXml && (
                    <button
                      type="button"
                      onClick={handleExtractScenarioFromRubric}
                      disabled={extractingScenario}
                      className="min-h-[42px] py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                      title="Cevap anahtarını yeniden şablona dönüştür"
                    >
                      <Icons.Sparkles />
                      <span>Yeniden Çözümle</span>
                    </button>
                  )}
                </div>

                {/* MEB 2026-2027 Hazır Senaryo Seçici */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">
                      Branş
                    </label>
                    <select
                      value={subjectName}
                      onChange={(e) => handleSubjectSelect(e.target.value)}
                      className="w-full text-xs px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none font-semibold text-slate-900"
                    >
                      {availableSubjects.map((subj) => (
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">
                      Sınıf Düzeyi
                    </label>
                    <select
                      value={activeMebTable?.grade || gradeLevel}
                      onChange={(e) => handleGradeSelect(e.target.value)}
                      className="w-full text-xs px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none font-semibold text-slate-900"
                    >
                      {availableTablesForSubject.map((t) => (
                        <option key={t.id} value={t.grade}>
                          {t.grade}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">
                      MEB Senaryosu
                    </label>
                    <select
                      value={activeScenarioColMeta?.col || selectedScenarioCol}
                      onChange={(e) => handleScenarioColSelect(e.target.value)}
                      className="w-full text-xs px-2.5 py-2 rounded-xl border border-slate-200 bg-indigo-50/60 focus:bg-white focus:border-indigo-500 outline-none font-bold text-indigo-700"
                    >
                      {(activeMebTable?.scenarios || []).map((sc) => {
                        const shortExam = sc.examTerm.includes("2.")
                          ? "1.Dönem 2.Yazılı"
                          : "1.Dönem 1.Yazılı";
                        return (
                          <option key={sc.col} value={sc.col}>
                            {shortExam} · {sc.scenarioName} ({sc.totalQuestions}S)
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* CEVAP ANAHTARI ÖNİZLEME VEYA HAFIZADA KİLİTLİ ŞABLON KUTUSU */}
                {answerKeyStatus === "draft_preview" ? (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-amber-950">
                        Cevap Anahtarı Şablon Önizlemesi (Onay Bekliyor)
                      </span>
                      <span className="font-mono font-bold text-amber-900 tabular-nums shrink-0">
                        {scenarioSummary.totalQuestions} Soru · {scenarioSummary.totalPoints}p
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-relaxed">
                      Yüklediğiniz cevap anahtarı aşağıdaki standart soru-puan-kriter şablonuna çevrildi. Kontrol edip onayladığınızda hafızaya alınacaktır.
                    </p>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {scenarioQuestions.map((q, qIdx) => (
                        <div
                          key={q.questionNo}
                          className="p-2 rounded-lg bg-white border border-amber-200/80 text-[11px] space-y-1"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-slate-900 truncate">
                              S.{q.questionNo} · [{q.learningOutcomeCode}] {q.learningOutcome}
                            </span>
                            <div className="flex items-center gap-1 shrink-0">
                              <input
                                type="number"
                                min={1}
                                max={100}
                                value={q.maxScore}
                                onChange={(e) =>
                                  handleUpdateScenarioQuestion(qIdx, {
                                    maxScore: Number(e.target.value) || 0,
                                  })
                                }
                                className="w-12 px-1.5 py-0.5 text-center font-mono font-bold text-indigo-700 border border-slate-300 rounded bg-slate-50 tabular-nums"
                              />
                              <span className="text-slate-500 font-semibold">p</span>
                            </div>
                          </div>
                          <div className="text-slate-600 truncate">
                            <strong className="text-slate-700">Cevap:</strong> {q.expectedAnswer}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleApproveAndLockAnswerKey}
                        className="flex-1 min-h-[38px] py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Icons.CheckCircle />
                        <span>Onayla ve Hafızaya Al</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setScenarioModalTab("questions");
                          setShowScenarioModal(true);
                        }}
                        className="min-h-[38px] py-2 px-3 rounded-xl bg-white border border-amber-300 hover:bg-amber-100/50 text-amber-900 text-xs font-semibold cursor-pointer whitespace-nowrap"
                      >
                        Detaylı İncele
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-950 truncate pr-2">
                        Hafızadaki Şablon: {lockedAnswerKeyMeta.sourceName}
                      </span>
                      <span className="font-mono font-bold text-emerald-800 shrink-0 tabular-nums">
                        {scenarioSummary.totalQuestions} Soru · {scenarioSummary.totalPoints}p
                      </span>
                    </div>

                    <div className="text-[11px] text-emerald-800 flex items-center justify-between gap-2">
                      <span>
                        Cevap anahtarı şablonu hafızada kilitli (Saat {lockedAnswerKeyMeta.lockedAt}) · Tekrar dosya gönderilmez
                      </span>
                      <button
                        type="button"
                        onClick={() => setAnswerKeyStatus("draft_preview")}
                        className="text-indigo-700 hover:text-indigo-900 font-semibold shrink-0 cursor-pointer whitespace-nowrap"
                      >
                        Önizle / Değiştir
                      </button>
                    </div>

                    <div className="space-y-1 max-h-28 overflow-y-auto pr-1 pt-1 border-t border-emerald-200/60">
                      {scenarioQuestions.map((q) => (
                        <div
                          key={q.questionNo}
                          className="flex items-center justify-between text-[11px] text-slate-700 py-0.5"
                        >
                          <span className="truncate pr-2">
                            <strong className="text-slate-900 tabular-nums">
                              S.{q.questionNo}
                            </strong>{" "}
                            <span className="font-mono font-semibold text-indigo-700">
                              [{q.learningOutcomeCode}]
                            </span>{" "}
                            {q.expectedAnswer || q.learningOutcome}
                          </span>
                          <span className="font-mono font-bold text-slate-800 shrink-0 tabular-nums">
                            {q.maxScore}p
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Alt Bilgi & Resmi MEB Dağılım Tablosu Butonu */}
              <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-slate-500">
                <span className="truncate">
                  {rubricFile
                    ? `Kaynak: ${rubricFile.fileName}`
                    : `MEB 2026-2027 ${subjectName} ${gradeLevel} ${scenarioNo}`}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setScenarioModalTab("mebTable");
                    setShowScenarioModal(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold shrink-0 cursor-pointer whitespace-nowrap"
                >
                  MEB Dağılım Tablosu
                </button>
              </div>
            </div>

            {/* SAĞ KART (CSS SELECTOR 2): 2. TARANMIŞ ÖĞRENCİ KAĞITLARI YÜKLEME VE ŞABLONA DÖNÜŞTÜRME */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-indigo-600">
                        2. Adım · Taranmış Öğrenci Kağıtları
                      </span>
                      <span aria-hidden="true" className="text-slate-300">
                        ·
                      </span>
                      <span className="text-slate-500 font-medium tabular-nums">
                        {paperFiles.length} Kağıt Yüklü
                      </span>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Şablon Formatına Dönüştür ve Puanla
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {paperFiles.length === 0 && (
                      <button
                        type="button"
                        onClick={handleLoadSampleStudentPaper}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer whitespace-nowrap"
                      >
                        Örnek Kağıt Doldur
                      </button>
                    )}
                    {paperFiles.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setPaperFiles([])}
                        className="text-xs text-slate-400 hover:text-rose-600 font-semibold cursor-pointer whitespace-nowrap"
                      >
                        Tümünü Temizle
                      </button>
                    )}
                  </div>
                </div>

                {/* Dosya Sürükle/Seç Alanı */}
                <label className="p-3.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50/60 hover:bg-indigo-50/15 transition-colors cursor-pointer block">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                      <Icons.Image />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {paperFiles.length === 0
                          ? "Taranmış Öğrenci Kağıtlarını Yükleyin (Tekli / Çoklu)"
                          : `${paperFiles.length} Öğrenci Kağıdı Şablon Eşleştirmesine Hazır`}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                        Kağıtlar S.1–S.{scenarioSummary.totalQuestions} cevap anahtarı formatına çevrilip düşük token ile okunur
                      </div>
                    </div>
                  </div>
                  <input
                    ref={paperInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.xlsx,.xls,.csv,.docx,.txt,image/*"
                    onChange={handlePaperUpload}
                    className="hidden"
                  />
                </label>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePaperUpload}
                  className="hidden"
                />

                {/* Yüklenen Öğrenci Kağıtları Kuyruğu ve Token Tasarrufu Özeti */}
                {paperFiles.length > 0 ? (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">
                        Yüklenen Öğrenci Kağıtları ({paperFiles.length})
                      </span>
                      <span className="text-emerald-700 font-semibold tabular-nums">
                        {paperFiles.length > 1
                          ? `3'lü Paket Okuma Aktif (%70 Token Tasarrufu)`
                          : `Optimize Şablon Okuma Aktif`}
                      </span>
                    </div>
                    <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
                      {paperFiles.map((pf, pIdx) => {
                        const savedPct =
                          pf.originalBytes &&
                          pf.compressedBytes &&
                          pf.originalBytes > pf.compressedBytes
                            ? Math.round(
                                ((pf.originalBytes - pf.compressedBytes) /
                                  pf.originalBytes) *
                                  100
                              )
                            : 0;
                        return (
                          <div
                            key={`${pf.fileName}-${pIdx}`}
                            className="flex items-center justify-between gap-2 py-1 px-2 rounded-lg bg-white border border-slate-200/70 text-[11px]"
                          >
                            <span className="font-medium text-slate-800 truncate">
                              {pIdx + 1}. {pf.fileName}
                            </span>
                            <div className="flex items-center gap-2 shrink-0">
                              {savedPct > 0 && (
                                <span className="text-emerald-700 font-mono tabular-nums">
                                  -%{savedPct} boyut
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() => handleRemovePaperAt(pIdx)}
                                className="text-slate-400 hover:text-rose-600 font-bold cursor-pointer"
                                title="Kağıdı Kaldır"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
                    Sağ bölümden yüklediğiniz taranmış kağıtlar, sol bölümde hafızaya alınan <strong>{scenarioSummary.totalQuestions} soruluk Cevap Anahtarı Şablonu</strong> ile aynı veri yapısına dönüştürülür ve her alt kriter için kanıtlı-gerekçeli puanlanır.
                  </div>
                )}
              </div>

              {/* Mobil ve Web Dostu Hızlı Kağıt Yükleme Butonları */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="min-h-[42px] py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Icons.Camera />
                  <span>Kamera</span>
                </button>
                <button
                  type="button"
                  onClick={() => paperInputRef.current?.click()}
                  className="min-h-[42px] py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Icons.Upload />
                  <span>Kağıt Yükle</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      paperFiles.length === 1 &&
                      paperFiles[0].mode === "text" &&
                      paperFiles[0].extractedText
                    ) {
                      setManualPaperTitle(paperFiles[0].fileName);
                      setManualPaperText(paperFiles[0].extractedText);
                    }
                    setShowPaperTextModal(true);
                  }}
                  className="min-h-[42px] py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Icons.Edit />
                  <span>Metin Gir</span>
                </button>
              </div>
            </div>
          </div>

          {/* ALT EYLEM ÇUBUĞU (CSS SELECTOR 3): OKUMA MODU SEÇİMİ, TUTARLILIK KİLİDİ VE GEREKÇELİ PUANLAMA */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Öğrenci Eşleştirme */}
              <div className="flex items-center gap-2 flex-1">
                <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                  Öğrenci:
                </label>
                <select
                  value={selectedStudentNo}
                  onChange={(e) => setSelectedStudentNo(e.target.value)}
                  className="w-full sm:max-w-xs text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none"
                >
                  <option value="">Kağıttan Otomatik Oku (OCR)</option>
                  {schoolStudents.map((s) => (
                    <option key={s.no} value={s.no}>
                      {s.no} - {s.name} ({s.classStr}/{s.sectionStr})
                    </option>
                  ))}
                </select>
              </div>

              {/* Puanlama / Okuma Modu Seçici */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                  Okuma Modu:
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
                  {(
                    [
                      { id: "esnek", label: "Esnek (Gidiş Yolu)" },
                      { id: "standart", label: "Standart (Dengeli)" },
                      { id: "titiz", label: "Katı (Tam Kriter)" },
                    ] as const
                  ).map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setStrictness(mode.id)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap text-center ${
                        strictness === mode.id
                          ? "bg-white text-indigo-700 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Seçili Okuma Modunun Ölçme ve Puanlama Kuralı Özeti */}
            <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-900">
                  {strictness === "esnek"
                    ? "Esnek Okuma Modu Aktif: "
                    : strictness === "titiz"
                    ? "Katı / Titiz Okuma Modu Aktif: "
                    : "Standart Maarif Okuma Modu Aktif: "}
                </strong>
                {strictness === "esnek"
                  ? "Öğrencinin farklı kelimelerle doğru açıklamalarına ve doğru gidiş yoluna (sonuçta işlem kayması olsa bile) puan verilir."
                  : strictness === "titiz"
                  ? "Cevap anahtarı şablonundaki akademik kavramlar, birimler ve işlem basamakları birebir aranır; eksik ifadeye puan verilmez."
                  : "Hafızadaki cevap anahtarı alt kriterleri dengeli uygulanır; eşdeğer kavramlar ve doğru yöntem adımları orantılı puanlanır."}
              </div>
              <span className="text-[11px] font-semibold text-indigo-700 shrink-0 whitespace-nowrap">
                Çelişkisiz Puan Kilidi Aktif
              </span>
            </div>

            {/* Ana Puanlama Butonu */}
            <button
              type="button"
              onClick={handleRunGrading}
              disabled={loading}
              className="w-full min-h-[48px] py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icons.Sparkles />
              <span>
                {loading
                  ? batchProgress && batchProgress.total > 1
                    ? `Kağıtlar Cevap Anahtarı Formatına Dönüştürülüp Puanlanıyor (${batchProgress.current} / ${batchProgress.total})...`
                    : "Öğrenci Kağıdı Cevap Anahtarı Şablonuyla Karşılaştırılıyor..."
                  : answerKeyStatus === "draft_preview"
                  ? "Önce Sol Bölümden Cevap Anahtarı Şablonunu Onaylayın"
                  : paperFiles.length > 1
                  ? `${paperFiles.length} Öğrenci Kağıdını Hafızadaki Cevap Anahtarıyla Toplu Puanla`
                  : "Öğrenci Kağıdını Cevap Anahtarı Formatına Çevir ve Gerekçeli Puanla"}
              </span>
            </button>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Icons.AlertCircle />
                  <span className="font-medium">{error}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="text-rose-700 font-bold text-xs cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SEKME 2: SONUÇ & KARNE (HEM MOBİL KART HEM WEB UYUMLU SADE GÖRÜNÜM) */}
      {activeSubView === "matrix" && (
        <div className="space-y-4">
          {!result ? (
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 text-center space-y-3">
              <p className="text-sm font-bold text-slate-800">
                Henüz değerlendirilmiş bir öğrenci kağıdı seçilmedi.
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                "Kağıt Oku" sekmesinden yeni bir kağıt okutabilir veya seçili MEB 2026-2027 senaryosu için örnek kağıt yükleyebilirsiniz.
              </p>
              <button
                type="button"
                onClick={() => {
                  handleLoadSampleStudentPaper();
                  setActiveSubView("evaluate");
                }}
                className="min-h-[42px] px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer"
              >
                Seçili MEB Senaryosu İçin Örnek Kağıt Yükle
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Öğrenci Karne Özeti ve PDF / Excel Butonları */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                      <span className="font-semibold text-indigo-600">
                        {result.subjectName || subjectName}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{result.gradeLevel || gradeLevel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{result.scenarioNo || scenarioNo}</span>
                      {result.strictness && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>
                            Mod:{" "}
                            {result.strictness === "esnek"
                              ? "Esnek"
                              : result.strictness === "titiz"
                              ? "Katı"
                              : "Standart"}
                          </span>
                        </>
                      )}
                      {result.className && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Şube: {result.className}</span>
                        </>
                      )}
                      {result.studentNumber && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">No: {result.studentNumber}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                      {result.studentName}
                    </h2>
                  </div>

                  {/* PDF ve Excel İndirme Butonları */}
                  <div className="grid grid-cols-2 sm:flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => exportStudentPdfReport(result, institutionName)}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Icons.Printer />
                      <span>PDF Karne İndir</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => exportStudentExcelReport(result, institutionName)}
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Icons.Download />
                      <span>Excel Tablo İndir</span>
                    </button>
                  </div>
                </div>

                {/* Kompakt Puan ve Bilişsel Süreç Kartları */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100">
                    <div className="text-[11px] font-medium text-indigo-700">
                      Toplam Puan
                    </div>
                    <div className="text-xl font-black text-indigo-900 tabular-nums mt-0.5">
                      {result.totalScore} / {totalMaxScore}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] font-medium text-slate-500">
                      Başarı Oranı
                    </div>
                    <div className="text-xl font-black text-slate-900 tabular-nums mt-0.5">
                      %{totalPct}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] font-medium text-slate-500">
                      Basit Bilişsel
                    </div>
                    <div className="text-lg font-bold text-slate-900 tabular-nums mt-0.5">
                      {activeStudentCognitiveStats.basicEarned} /{" "}
                      {activeStudentCognitiveStats.basicMax || "-"}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] font-medium text-slate-500">
                      Karmaşık Bilişsel
                    </div>
                    <div className="text-lg font-bold text-slate-900 tabular-nums mt-0.5">
                      {activeStudentCognitiveStats.complexEarned} /{" "}
                      {activeStudentCognitiveStats.complexMax || "-"}
                    </div>
                  </div>
                </div>

                {/* Güçlü Yönler & Gelişim Alanları */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/80">
                    <span className="font-bold text-emerald-900 block mb-1">
                      Edinilen Kazanımlar & Güçlü Yönler
                    </span>
                    <p className="text-emerald-800 leading-relaxed">
                      {result.overallStrengths || "-"}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/80">
                    <span className="font-bold text-amber-900 block mb-1">
                      Gelişim Alanları & Telafi Önerileri
                    </span>
                    <p className="text-amber-800 leading-relaxed">
                      {result.overallImprovements || "-"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Soru Bazlı Karşılaştırma Listesi */}
              <div className="space-y-3">
                {result.questions.map((q) => {
                  const qPct =
                    q.maxScore > 0
                      ? Math.round((q.awardedScore / q.maxScore) * 100)
                      : 0;
                  const isExpanded = !!expandedQuestions[q.questionNo];
                  const hasCriteria =
                    q.criteriaBreakdown && q.criteriaBreakdown.length > 0;

                  return (
                    <div
                      key={q.questionNo}
                      className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3"
                    >
                      {/* Soru Üst Başlığı ve Puan Kutusu */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 pb-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="font-black text-slate-900">
                              Soru {q.questionNo}
                            </span>
                            {q.learningOutcomeCode && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="font-mono font-bold text-indigo-700">
                                  {q.learningOutcomeCode}
                                </span>
                              </>
                            )}
                            {q.theme && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-slate-500 truncate max-w-xs">
                                  {q.theme}
                                </span>
                              </>
                            )}
                            {q.cognitiveLevel && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-slate-500">
                                  {q.cognitiveLevel}
                                </span>
                              </>
                            )}
                            {q.ocrConfidence && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-slate-400">
                                  OCR: {q.ocrConfidence}
                                </span>
                              </>
                            )}
                            {q.errorType && q.errorType !== "Yok" && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-rose-700 font-semibold">
                                  {q.errorType}
                                </span>
                              </>
                            )}
                          </div>
                          <p className="text-xs font-medium text-slate-800 mt-0.5">
                            {q.learningOutcome}
                          </p>
                          {q.extractedQuestionText && (
                            <p className="text-[11px] text-slate-500 mt-0.5 italic">
                              Soru Kökü: {q.extractedQuestionText}
                            </p>
                          )}
                        </div>

                        {/* Puan Düzenleme */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                          <span
                            className={`text-xs font-bold tabular-nums ${
                              qPct >= 75
                                ? "text-emerald-700"
                                : qPct >= 40
                                ? "text-amber-700"
                                : "text-rose-700"
                            }`}
                          >
                            %{qPct}
                          </span>
                          <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                            <input
                              type="number"
                              min={0}
                              max={q.maxScore}
                              value={q.awardedScore}
                              onChange={(e) =>
                                handleQuestionScoreChange(
                                  q.questionNo,
                                  Number(e.target.value)
                                )
                              }
                              className="w-12 text-xs font-black text-indigo-700 bg-white border border-slate-300 rounded-lg py-0.5 text-center tabular-nums outline-none focus:border-indigo-500"
                            />
                            <span className="text-xs font-bold text-slate-600 tabular-nums">
                              / {q.maxScore}p
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Öğrenci Cevabı (Şablona Dönüştürülmüş) ve Hafızadaki Cevap Anahtarı Yan Yana */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 leading-relaxed space-y-1.5">
                          <div>
                            <span className="font-bold text-slate-900 block mb-0.5">
                              Öğrenci Cevabı (Okunan Metin & İşlemler):
                            </span>
                            <p className="text-slate-700 whitespace-pre-wrap">
                              {q.transcribedAnswer || "Boş bırakılmış."}
                            </p>
                          </div>
                          {q.normalizedStudentSteps &&
                            q.normalizedStudentSteps !== q.transcribedAnswer && (
                              <div className="pt-1.5 border-t border-slate-200/80">
                                <span className="font-bold text-indigo-800 block mb-0.5">
                                  Cevap Anahtarı Formatına Dönüştürülmüş Öğrenci Adımları:
                                </span>
                                <p className="text-slate-700 whitespace-pre-wrap">
                                  {q.normalizedStudentSteps}
                                </p>
                              </div>
                            )}
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 leading-relaxed">
                          <span className="font-bold text-indigo-900 block mb-1">
                            Hafızadaki Cevap Anahtarı Şablonu & Ölçüt:
                          </span>
                          <p className="text-slate-700 whitespace-pre-wrap">
                            {q.expectedIdealAnswer ||
                              "Değerlendirme listesi kriterlerine göre puanlandı."}
                          </p>
                        </div>
                      </div>

                      {/* Öğretmen Gerekçesi ve Alt Kriter Aç/Kapat Butonu */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900">Gerekçeli Puanlama: </strong>
                          {q.teacherFeedback}
                          {q.remediationTip && (
                            <span className="text-teal-800 font-medium ml-1">
                              ({q.remediationTip})
                            </span>
                          )}
                        </div>

                        {hasCriteria && (
                          <button
                            type="button"
                            onClick={() => toggleQuestionExpand(q.questionNo)}
                            className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer whitespace-nowrap"
                          >
                            <span>
                              {isExpanded
                                ? "Alt Kriterleri Gizle"
                                : `Alt Kriterler (${q.criteriaBreakdown?.length})`}
                            </span>
                            <span
                              className={`transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            >
                              <Icons.ChevronDown />
                            </span>
                          </button>
                        )}
                      </div>

                      {/* Açılır Alt Kriter Listesi */}
                      {isExpanded && hasCriteria && (
                        <div className="pt-2 border-t border-slate-100 space-y-2">
                          {(q.criteriaBreakdown || []).map((cb, cIdx) => {
                            const stNorm = String(cb.status || "").toLowerCase();
                            const isFull = stNorm.includes("tam");
                            const isPartial =
                              stNorm.includes("kismi") || stNorm.includes("kısmi");
                            return (
                              <div
                                key={cIdx}
                                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                              >
                                <div className="space-y-0.5 flex-1">
                                  <div className="font-semibold text-slate-900">
                                    {cb.criterion}
                                  </div>
                                  <div className="text-slate-500 text-[11px]">
                                    {cb.evidence}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                                  <span
                                    className={`text-[11px] font-bold ${
                                      isFull
                                        ? "text-emerald-700"
                                        : isPartial
                                        ? "text-amber-700"
                                        : "text-rose-700"
                                    }`}
                                  >
                                    {isFull ? "Tam" : isPartial ? "Kısmi" : "Eksik"}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <input
                                      type="number"
                                      min={0}
                                      max={cb.maxPoints || 100}
                                      value={cb.earnedPoints ?? 0}
                                      onChange={(e) =>
                                        handleCriterionScoreChange(
                                          q.questionNo,
                                          cIdx,
                                          Number(e.target.value)
                                        )
                                      }
                                      className="w-12 px-1.5 py-0.5 text-xs font-bold text-indigo-700 bg-white border border-slate-300 rounded text-center tabular-nums"
                                    />
                                    <span className="text-slate-500 tabular-nums">
                                      / {cb.maxPoints}p
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* SEKME 3: SINIF DEĞERLENDİRME LİSTESİ VE KAZANIM ANALİZİ */}
      {activeSubView === "history" && (
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-4">
          {/* Üst Özet ve Toplu Rapor Butonları */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Sınıf Değerlendirme Listesi ve Kazanım Raporu
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {classAnalytics.filtered.length} Öğrenci · Sınıf Ortalaması:{" "}
                <strong className="text-slate-800">{classAnalytics.avgScore}</strong> · Başarı:{" "}
                <strong className="text-emerald-700">%{classAnalytics.passRate}</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  exportClassPdfReport(classAnalytics.filtered, institutionName)
                }
                disabled={classAnalytics.filtered.length === 0}
                className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Icons.Printer />
                <span>Sınıf PDF İndir</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  exportClassExcelReport(classAnalytics.filtered, institutionName)
                }
                disabled={classAnalytics.filtered.length === 0}
                className="min-h-[40px] px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Icons.Download />
                <span>Sınıf Excel İndir</span>
              </button>
              {savedHistory.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAllHistory}
                  className="col-span-2 sm:col-span-1 min-h-[40px] px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Icons.Trash />
                  <span>Temizle</span>
                </button>
              )}
            </div>
          </div>

          {/* Alt Görünüm Seçici (Öğrenci Listesi | Kazanım Başarısı | Karşılaştır) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="grid grid-cols-3 sm:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setClassSubTab("students")}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  classSubTab === "students"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Öğrenci Puanları
              </button>
              <button
                type="button"
                onClick={() => setClassSubTab("outcomes")}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  classSubTab === "outcomes"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Kazanım Analizi
              </button>
              <button
                type="button"
                onClick={() => setClassSubTab("compare")}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  classSubTab === "compare"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                İkili Karşılaştır
              </button>
            </div>

            {classSubTab === "students" && savedHistory.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-56">
                  <input
                    type="text"
                    value={historySearch}
                    onChange={(e) => setHistorySearch(e.target.value)}
                    placeholder="Öğrenci ara..."
                    className="w-full text-xs px-3 py-2 pl-8 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none"
                  />
                  <span className="absolute left-2.5 top-2.5 text-slate-400">
                    <Icons.Search />
                  </span>
                </div>
                {classAnalytics.uniqueClasses.length > 1 && (
                  <select
                    value={historyClassFilter}
                    onChange={(e) => setHistoryClassFilter(e.target.value)}
                    className="text-xs px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    <option value="ALL">Tüm Sınıflar</option>
                    {classAnalytics.uniqueClasses.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </div>

          {/* ALT SEKME 1: ÖĞRENCİ PUAN LİSTESİ */}
          {classSubTab === "students" && (
            <>
              {classAnalytics.filtered.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="text-sm font-semibold text-slate-700">
                    Henüz değerlendirilmiş öğrenci bulunmuyor.
                  </p>
                  <p className="text-xs text-slate-500">
                    "Kağıt Oku" sekmesinden öğrenci kağıtlarını okutarak sınıf listesini oluşturabilirsiniz.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600">
                        <th className="py-2.5 px-3">#</th>
                        <th className="py-2.5 px-3">Öğrenci</th>
                        {classAnalytics.outcomes.map((o) => (
                          <th
                            key={o.questionNo}
                            className="hidden md:table-cell py-2.5 px-2.5 text-center tabular-nums"
                          >
                            S.{o.questionNo} ({o.maxScore}p)
                          </th>
                        ))}
                        <th className="py-2.5 px-3 text-center">Toplam</th>
                        <th className="py-2.5 px-3 text-right">İşlem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {classAnalytics.filtered.map((item, idx) => (
                        <tr
                          key={item.id || idx}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-3 px-3 font-mono text-slate-400 tabular-nums">
                            {idx + 1}
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">
                              {item.studentName}
                            </div>
                            <div className="text-[11px] text-slate-500 tabular-nums">
                              No: {item.studentNumber || "-"} · Sınıf:{" "}
                              {item.className || "-"}
                            </div>
                          </td>
                          {classAnalytics.outcomes.map((o) => {
                            const fq = (item.questions || []).find(
                              (q) => q.questionNo === o.questionNo
                            );
                            return (
                              <td
                                key={o.questionNo}
                                className="hidden md:table-cell py-3 px-2.5 text-center font-mono font-semibold text-slate-700 tabular-nums"
                              >
                                {fq ? fq.awardedScore : "-"}
                              </td>
                            );
                          })}
                          <td className="py-3 px-3 text-center font-black text-indigo-700 text-sm tabular-nums">
                            {item.totalScore}
                          </td>
                          <td className="py-3 px-3 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setResult(item);
                                  setActiveSubView("matrix");
                                }}
                                className="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs cursor-pointer"
                              >
                                Karne
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  exportStudentPdfReport(item, institutionName)
                                }
                                className="px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] cursor-pointer"
                                title="PDF İndir"
                              >
                                PDF
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  exportStudentExcelReport(item, institutionName)
                                }
                                className="hidden sm:inline-block px-2 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-[11px] cursor-pointer"
                                title="Excel İndir"
                              >
                                XLSX
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteHistoryItem(item.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                                title="Sil"
                              >
                                <Icons.Trash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {/* ALT SEKME 2: ÖĞRENME ÇIKTISI (KAZANIM) ANALİZ TABLOSU */}
          {classSubTab === "outcomes" && (
            <div className="space-y-3">
              {classAnalytics.outcomes.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-500">
                  Kazanım analizi için en az bir öğrenci kağıdı değerlendirilmelidir.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {classAnalytics.outcomes.map((o) => (
                    <div
                      key={o.questionNo}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-0.5 flex-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold text-slate-900">
                            Soru {o.questionNo}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono font-bold text-indigo-700">
                            {o.learningOutcomeCode}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-500">
                            {o.cognitiveLevel}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-slate-800">
                          {o.learningOutcome}
                        </div>
                        <div className="text-[11px] text-slate-500 tabular-nums">
                          Tam Puan: {o.fullCount} Öğr. · Kısmi: {o.partialCount} Öğr. · Boş/0: {o.zeroCount} Öğr.
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right tabular-nums">
                          <div className="text-[11px] text-slate-500">
                            Sınıf Ort.
                          </div>
                          <div className="text-sm font-black text-slate-900">
                            {o.avg} / {o.maxScore}
                          </div>
                        </div>
                        <div className="w-24 space-y-1">
                          <div className="text-right text-xs font-bold tabular-nums">
                            %{o.pct}
                          </div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                o.pct >= 75
                                  ? "bg-emerald-600"
                                  : o.pct >= 50
                                  ? "bg-amber-500"
                                  : "bg-rose-600"
                              }`}
                              style={{ width: `${Math.min(100, o.pct)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ALT SEKME 3: İKİLİ ÖĞRENCİ KARŞILAŞTIRMA */}
          {classSubTab === "compare" && (
            <div className="space-y-3">
              {savedHistory.length < 2 ? (
                <div className="text-center py-8 text-xs text-slate-500">
                  İkili karşılaştırma için sınıfta en az 2 değerlendirilmiş öğrenci bulunmalıdır.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <select
                      value={compareIds[0]}
                      onChange={(e) =>
                        setCompareIds([e.target.value, compareIds[1]])
                      }
                      className="text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium"
                    >
                      <option value="">1. Öğrenciyi Seçin</option>
                      {savedHistory.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.studentName} ({s.totalScore}p)
                        </option>
                      ))}
                    </select>
                    <select
                      value={compareIds[1]}
                      onChange={(e) =>
                        setCompareIds([compareIds[0], e.target.value])
                      }
                      className="text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium"
                    >
                      <option value="">2. Öğrenciyi Seçin</option>
                      {savedHistory.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.studentName} ({s.totalScore}p)
                        </option>
                      ))}
                    </select>
                  </div>

                  {comparedStudentA && comparedStudentB && (
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-700">
                            <th className="py-2.5 px-3">Soru & Kazanım</th>
                            <th className="py-2.5 px-3 text-center">
                              {comparedStudentA.studentName}
                            </th>
                            <th className="py-2.5 px-3 text-center">
                              {comparedStudentB.studentName}
                            </th>
                            <th className="py-2.5 px-3 text-center">Fark</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {classAnalytics.outcomes.map((o) => {
                            const qa = comparedStudentA.questions.find(
                              (q) => q.questionNo === o.questionNo
                            );
                            const qb = comparedStudentB.questions.find(
                              (q) => q.questionNo === o.questionNo
                            );
                            const sa = qa ? Number(qa.awardedScore) || 0 : 0;
                            const sb = qb ? Number(qb.awardedScore) || 0 : 0;
                            const diff = sa - sb;
                            return (
                              <tr key={o.questionNo}>
                                <td className="py-2.5 px-3 font-medium text-slate-800">
                                  S.{o.questionNo} · [{o.learningOutcomeCode}]{" "}
                                  {o.learningOutcome}
                                </td>
                                <td className="py-2.5 px-3 text-center font-bold text-indigo-700 tabular-nums">
                                  {sa} / {o.maxScore}
                                </td>
                                <td className="py-2.5 px-3 text-center font-bold text-indigo-700 tabular-nums">
                                  {sb} / {o.maxScore}
                                </td>
                                <td className="py-2.5 px-3 text-center font-mono font-bold tabular-nums">
                                  {diff > 0 ? `+${diff}` : diff}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
