import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";

const PORT = 3000;

interface UniversalFilePayload {
  fileName: string;
  mode: "inlineData" | "text";
  mimeType?: string;
  base64Data?: string;
  extractedText?: string;
  rawXml?: string;
}

interface ScenarioCriterionInput {
  id?: string;
  description: string;
  points: number;
}

interface ScenarioQuestionInput {
  questionNo: number;
  theme?: string;
  topic?: string;
  learningOutcomeCode?: string;
  learningOutcome: string;
  processComponent?: string;
  cognitiveLevel?: string;
  maxScore: number;
  expectedAnswer?: string;
  criteria?: ScenarioCriterionInput[];
}

interface GradingOptions {
  strictness?: "esnek" | "standart" | "titiz";
  subjectName?: string;
  gradeLevel?: string;
  examTerm?: string;
  scenarioNo?: string;
  examTitle?: string;
  scenarioQuestions?: ScenarioQuestionInput[];
  useLockedTemplateOnly?: boolean;
}

function toGeminiPart(file: UniversalFilePayload, label: string) {
  if (file.mode === "inlineData" && file.base64Data && file.mimeType) {
    return [
      { text: `[${label}: ${file.fileName}]` },
      { inlineData: { mimeType: file.mimeType, data: file.base64Data } },
    ];
  }
  return [
    {
      text: `[${label} (${file.fileName})]:\n${file.extractedText || ""}`,
    },
  ];
}

function getStrictnessInstruction(strictness?: "esnek" | "standart" | "titiz"): string {
  if (strictness === "esnek") {
    return `SEÇİLEN OKUMA MODU: ESNEK MOD (GİDİŞ YOLU, YÖNTEM VE ANLAMSAL EŞDEĞERLİK ODAKLI)
1. FARKLI KELİMELER VE ÖZGÜN İFADE KABULÜ: Öğrenci cevap anahtarındaki kelimeleri birebir kullanmasa bile aynı kavramı kendi cümleleriyle, eş anlamlı ifadelerle veya günlük dille doğru açıkladıysa TAM PUAN ver.
2. GİDİŞ YOLU VE ARA BASAMAK ÖDÜLLENDİRMESİ: Sayısal ve analitik sorularda öğrencinin kurduğu denklem, çizim, mantıksal strateji veya gidiş yolu doğruysa, son adımda aritmetik/işlem hatası yapsa bile gidiş yolu ve yöntem alt kriterlerine TAM PUAN ver; yalnızca sonuç kriterinden puan kır.
3. YAZIM VE SEMBOL TOLERANSI: İmla hataları, devrik cümleler veya unutulan ufak sembollerden puan kırma.`;
  }
  if (strictness === "titiz") {
    return `SEÇİLEN OKUMA MODU: KATI / TİTİZ MOD (TAM KRİTER, AKADEMİK TERMİNOLOJİ VE KESİN ADIM KİLİDİ)
1. BİREBİR AKADEMİK KAVRAM VE TERMİNOLOJİ ŞARTI: Cevap anahtarı şablonundaki temel bilimsel/akademik kavramların, formüllerin, sembollerin ve birimlerin eksiksiz yer almasını şart koş. Farklı/gündelik kelimelerle üstü kapalı veya yuvarlak ifadelerle yazılmış yanıtlara ilgili kriterden PUAN VERME (0 puan).
2. EKSİKSİZ İŞLEM BASAMAĞI: Ara işlem basamaklarını atlayan, gerekçesini yazmayan veya birimini unutan öğrenciden ilgili alt kriter puanını kes.
3. KANIT ZORUNLULUĞU: Verilen her puan öğrencinin kağıdındaki açık ve tam ifadeye dayanmalıdır.`;
  }
  return `SEÇİLEN OKUMA MODU: STANDART MOD (MEB MAARİF DENGELİ ÖLÇME VE DEĞERLENDİRME)
1. ŞABLON UYUMU: Hafızadaki cevap anahtarı şablonunda yer alan ideal cevap adımlarını ve alt kriter puanlarını esas al.
2. DENGELİ GİDİŞ YOLU VE KAVRAM PUANLAMASI: Kavramsal olarak doğru olan eşdeğer ifadeleri kabul et; sayısal sorularda doğru gidiş yoluna ilgili alt kriter puanını eksiksiz ver, ancak temel kavram yanılgısı veya işlem eksikliği varsa yalnızca ilgili alt kriterden orantılı puan kır.`;
}

function getSubjectSpecificGuidance(subjectName?: string): string {
  const s = (subjectName || "").toLowerCase();
  if (s.includes("matematik")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (MATEMATİK): Cebirsel ifadeleri, kesir/üs/kök gösterimlerini, geometrik çizimleri ve eşitlik adımlarını satır satır çözümle.`;
  }
  if (s.includes("biyoloji")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (BİYOLOJİ): Hücresel yapılar, metabolik tepkimeler, sistemler, sınıflandırma ve deney değişkenlerini dikkatle oku.`;
  }
  if (s.includes("fizik") || s.includes("kimya") || s.includes("fen")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (FEN / FİZİK / KİMYA): Fiziksel büyüklükleri, vektörleri, birimleri (N, J, m/s, mol vb.), kimyasal formül ve tepkime denklemlerini dikkatle oku.`;
  }
  if (s.includes("edebiyat") || s.includes("türkçe")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (TÜRK DİLİ VE EDEBİYATI / TÜRKÇE): Metin çözümleme (yapı, tema, dil/üslup) ve yazma kriterlerini (içerik, planlama, bağdaşıklık, imla) ayrı ayrı değerlendir.`;
  }
  if (s.includes("coğrafya")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (COĞRAFYA): Harita, koordinat/ölçek, grafik yorumlama ve mekânsal dağılış-nedensellik ilkelerini değerlendir.`;
  }
  if (s.includes("felsefe")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (FELSEFE): Felsefi kavramların doğruluğunu, metindeki argüman çözümlemesini ve mantıksal tutarlılığı değerlendir.`;
  }
  if (s.includes("din kültürü") || s.includes("dkab")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (DKAB): Ayet/hadis/sure meali çıkarımlarını ve dini-ahlaki kavramların doğru ilişkilendirilmesini değerlendir.`;
  }
  if (s.includes("ingilizce")) {
    return `BRANŞ ÖZEL OKUMA PRENSİBİ (İNGİLİZCE): Reading comprehension doğruluğunu, iletişimsel amacı (task fulfillment) ve hedef kelime/dil bilgisi kullanımını değerlendir.`;
  }
  return `BRANŞ ÖZEL OKUMA PRENSİBİ (SOSYAL BİLGİLER / TARİH / İNKILAP TARİHİ): Tarihsel kaynak/harita/kronoloji yorumlarını, neden-sonuç ilişkisini ve dönemsel kavram doğruluğunu değerlendir.`;
}

/**
 * Hafızadaki Cevap Anahtarı Şablonunu düşük token tüketimli, kesin referans formatında serileştirir.
 */
function formatStructuredScenario(questions?: ScenarioQuestionInput[]): string {
  if (!questions || questions.length === 0) return "";
  const lines = [
    "HAFIZADAKİ KİLİTLİ CEVAP ANAHTARI ŞABLONU (TÜM ÖĞRENCİ KAĞITLARI BU ŞABLONA DÖNÜŞTÜRÜLEREK PUANLANACAKTIR):",
  ];
  questions.forEach((q) => {
    const cList = (q.criteria || [])
      .map((c, idx) => `K${idx + 1}(${c.points}p): ${c.description}`)
      .join(" | ");
    lines.push(
      `[S.${q.questionNo} | Tam Puan:${q.maxScore}p | Kazanım:${q.learningOutcomeCode || `Ç.${q.questionNo}`} - ${q.learningOutcome}]\n` +
        `  Beklenen Cevap Anahtarı: ${q.expectedAnswer || "-"}\n` +
        `  Puanlama Alt Kriterleri: ${cList || `Tam Doğru Çözüm (${q.maxScore}p)`}`
    );
  });
  return lines.join("\n");
}

function getGradedPaperSchema() {
  return {
    type: Type.OBJECT,
    properties: {
      studentName: { type: Type.STRING },
      studentNumber: { type: Type.STRING },
      className: { type: Type.STRING },
      subjectName: { type: Type.STRING },
      gradeLevel: { type: Type.STRING },
      examTerm: { type: Type.STRING },
      scenarioNo: { type: Type.STRING },
      examTitle: { type: Type.STRING },
      totalScore: { type: Type.NUMBER },
      maxTotalScore: { type: Type.NUMBER },
      achievementLevel: { type: Type.STRING },
      executiveSummary: { type: Type.STRING },
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            questionNo: { type: Type.NUMBER },
            theme: { type: Type.STRING },
            topic: { type: Type.STRING },
            learningOutcomeCode: { type: Type.STRING },
            learningOutcome: { type: Type.STRING },
            processComponent: { type: Type.STRING },
            cognitiveLevel: { type: Type.STRING },
            maxScore: { type: Type.NUMBER },
            awardedScore: { type: Type.NUMBER },
            extractedQuestionText: { type: Type.STRING },
            transcribedAnswer: { type: Type.STRING },
            normalizedStudentSteps: { type: Type.STRING },
            expectedIdealAnswer: { type: Type.STRING },
            ocrConfidence: { type: Type.STRING },
            errorType: { type: Type.STRING },
            remediationTip: { type: Type.STRING },
            criteriaBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  criterion: { type: Type.STRING },
                  maxPoints: { type: Type.NUMBER },
                  earnedPoints: { type: Type.NUMBER },
                  status: { type: Type.STRING },
                  evidence: { type: Type.STRING },
                },
                required: [
                  "criterion",
                  "maxPoints",
                  "earnedPoints",
                  "status",
                  "evidence",
                ],
              },
            },
            matchedCriteria: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            missingCriteria: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            teacherFeedback: { type: Type.STRING },
          },
          required: [
            "questionNo",
            "learningOutcome",
            "maxScore",
            "awardedScore",
            "transcribedAnswer",
            "normalizedStudentSteps",
            "expectedIdealAnswer",
            "errorType",
            "criteriaBreakdown",
            "matchedCriteria",
            "missingCriteria",
            "teacherFeedback",
          ],
        },
      },
      overallStrengths: { type: Type.STRING },
      overallImprovements: { type: Type.STRING },
    },
    required: [
      "studentName",
      "totalScore",
      "maxTotalScore",
      "questions",
      "overallStrengths",
      "overallImprovements",
    ],
  };
}

/**
 * Sunucu Tarafı Çelişki Önleyici (Anti-Contradiction) ve Matematiksel Puan Kilidi:
 * 1. Boş veya cevapsız bırakılan soruya kesinlikle >0 puan verilmesini engeller.
 * 2. Öğrenci cevabı beklenen cevapla tam örtüşüyorsa veya tüm alt kriterler "tam" ise puan kırılmasını engeller.
 * 3. Alt kriterlerin toplamını soru puanına, soru puanlarının toplamını sınav toplamına kilitler.
 * 4. matchedCriteria ve missingCriteria dizilerini doğrudan alt kriter puanlarından türeterek
 *    yorum-puan çelişkilerini ortadan kaldırır.
 */
function normalizeAndValidateGradedPaper(rawResult: any, options?: GradingOptions) {
  if (!rawResult || !Array.isArray(rawResult.questions)) return rawResult;

  let normalizedTotal = 0;
  let normalizedMaxTotal = 0;

  rawResult.questions = rawResult.questions.map((q: any, idx: number) => {
    const scenarioMatch =
      options?.scenarioQuestions?.find((sq) => sq.questionNo === q.questionNo) ||
      options?.scenarioQuestions?.[idx];

    const qMax = Number(scenarioMatch?.maxScore ?? q.maxScore) || 0;
    const rawTranscribed = String(q.transcribedAnswer || "").trim();
    const lowerTranscribed = rawTranscribed.toLowerCase();

    // Boş cevap tespiti
    const isBlank =
      !rawTranscribed ||
      rawTranscribed.length < 2 ||
      lowerTranscribed === "boş" ||
      lowerTranscribed === "boş bırakılmış" ||
      lowerTranscribed === "boş bırakılmış." ||
      lowerTranscribed === "cevapsız" ||
      lowerTranscribed === "yok" ||
      lowerTranscribed === "-";

    const templateCriteria = scenarioMatch?.criteria || [];
    let criteriaList: any[] = Array.isArray(q.criteriaBreakdown) ? q.criteriaBreakdown : [];

    // Eğer model alt kriter döndürmediyse şablondaki kriterlerden oluştur
    if (criteriaList.length === 0 && templateCriteria.length > 0) {
      criteriaList = templateCriteria.map((tc) => ({
        criterion: tc.description,
        maxPoints: tc.points,
        earnedPoints: isBlank ? 0 : tc.points,
        status: isBlank ? "eksik" : "tam",
        evidence: isBlank
          ? "Öğrenci bu soruyu boş bırakmıştır."
          : "Cevap anahtarı kriteriyle eşleştirildi.",
      }));
    }

    if (criteriaList.length > 0) {
      criteriaList = criteriaList.map((cb: any, cIdx: number) => {
        const tmplC = templateCriteria[cIdx];
        const cMax = Math.max(0, Number(tmplC?.points ?? cb.maxPoints) || 0);
        const criterionDesc = tmplC?.description || cb.criterion || `${cIdx + 1}. Alt Kriter`;

        if (isBlank) {
          return {
            criterion: criterionDesc,
            maxPoints: cMax,
            earnedPoints: 0,
            status: "eksik",
            evidence: "Öğrenci kağıdında bu soru için yanıt bulunmamaktadır (Boş).",
          };
        }

        let cEarned = Math.max(0, Math.min(cMax, Math.round(Number(cb.earnedPoints) || 0)));
        const rawStatus = String(cb.status || "").toLowerCase();

        // Çelişki Kilidi: Model status="tam" dediyse ama puanı eksik verdiyse tam puana tamamla;
        // status="eksik" dediyse ama puan verdiyse 0'a çek.
        if (rawStatus === "tam" && cEarned < cMax) {
          cEarned = cMax;
        } else if (rawStatus === "eksik" && cEarned > 0) {
          cEarned = 0;
        }

        // Katı (titiz) modda çok düşük kısmi puanları (<%35) sıfırla; Esnek modda gidiş yolu varsa en az %50 ver
        if (options?.strictness === "titiz" && cEarned > 0 && cEarned < cMax * 0.35) {
          cEarned = 0;
        } else if (
          options?.strictness === "esnek" &&
          rawStatus.includes("kismi") &&
          cEarned > 0 &&
          cEarned < Math.ceil(cMax * 0.5)
        ) {
          cEarned = Math.ceil(cMax * 0.5);
        }

        const status =
          cMax > 0 && cEarned >= cMax ? "tam" : cEarned > 0 ? "kismi" : "eksik";

        return {
          criterion: criterionDesc,
          maxPoints: cMax,
          earnedPoints: cEarned,
          status,
          evidence:
            cb.evidence ||
            (status === "tam"
              ? "Cevap anahtarı basamağıyla tam uyumlu."
              : status === "kismi"
              ? "Gidiş yolu/kavram kısmen doğru, eksik adım mevcut."
              : "Cevap anahtarındaki bu basamak öğrenci yanıtında yer almıyor."),
        };
      });
    }

    const sumFromCriteria =
      criteriaList.length > 0
        ? criteriaList.reduce((s: number, c: any) => s + (Number(c.earnedPoints) || 0), 0)
        : isBlank
        ? 0
        : Number(q.awardedScore) || 0;

    const qAwarded = isBlank ? 0 : Math.max(0, Math.min(qMax, sumFromCriteria));
    normalizedTotal += qAwarded;
    normalizedMaxTotal += qMax;

    // matchedCriteria ve missingCriteria listelerini alt kriter puanlarıyla %100 tutarlı hale getir
    const syncedMatched = criteriaList
      .filter((c: any) => Number(c.earnedPoints) > 0)
      .map((c: any) =>
        Number(c.earnedPoints) >= Number(c.maxPoints)
          ? `${c.criterion} (${c.earnedPoints}/${c.maxPoints}p - Tam)`
          : `${c.criterion} (${c.earnedPoints}/${c.maxPoints}p - Kısmi)`
      );

    const syncedMissing = criteriaList
      .filter((c: any) => Number(c.earnedPoints) < Number(c.maxPoints))
      .map((c: any) =>
        Number(c.earnedPoints) === 0
          ? `${c.criterion} (0/${c.maxPoints}p - Eksik)`
          : `${c.criterion} (${c.maxPoints - c.earnedPoints}p kesildi: ${c.evidence})`
      );

    const resolvedErrorType = isBlank
      ? "Boş / Cevapsız"
      : qAwarded >= qMax
      ? "Yok"
      : q.errorType && q.errorType !== "Yok"
      ? q.errorType
      : "Eksik Gerekçelendirme";

    return {
      ...q,
      questionNo: scenarioMatch?.questionNo || q.questionNo || idx + 1,
      theme: scenarioMatch?.theme || q.theme || "Genel Öğrenme Alanı",
      topic: scenarioMatch?.topic || q.topic || "",
      learningOutcomeCode:
        scenarioMatch?.learningOutcomeCode ||
        q.learningOutcomeCode ||
        `Ç.${q.questionNo || idx + 1}`,
      learningOutcome: scenarioMatch?.learningOutcome || q.learningOutcome,
      processComponent:
        scenarioMatch?.processComponent || q.processComponent || "Çözümleme",
      cognitiveLevel:
        scenarioMatch?.cognitiveLevel ||
        q.cognitiveLevel ||
        "Basit Bilişsel Süreçler",
      maxScore: qMax,
      awardedScore: qAwarded,
      transcribedAnswer: isBlank ? "Boş bırakılmış." : rawTranscribed,
      normalizedStudentSteps:
        q.normalizedStudentSteps ||
        (isBlank
          ? "Öğrenci tarafından herhangi bir çözüm basamağı veya yanıt yazılmamıştır."
          : rawTranscribed),
      expectedIdealAnswer:
        scenarioMatch?.expectedAnswer || q.expectedIdealAnswer || "-",
      ocrConfidence: q.ocrConfidence || "Yüksek",
      criteriaBreakdown: criteriaList,
      matchedCriteria: syncedMatched,
      missingCriteria: syncedMissing,
      errorType: resolvedErrorType,
      teacherFeedback:
        isBlank
          ? `Soru boş bırakıldığı için 0/${qMax} puan verilmiştir.`
          : q.teacherFeedback || `Cevap anahtarı şablonuna göre ${qAwarded}/${qMax} puan olarak değerlendirildi.`,
    };
  });

  rawResult.totalScore = normalizedTotal;
  rawResult.maxTotalScore = normalizedMaxTotal || 100;
  rawResult.subjectName = options?.subjectName || rawResult.subjectName;
  rawResult.gradeLevel = options?.gradeLevel || rawResult.gradeLevel;
  rawResult.examTerm = options?.examTerm || rawResult.examTerm;
  rawResult.scenarioNo = options?.scenarioNo || rawResult.scenarioNo;

  return rawResult;
}

function buildCoreGradingPrompt(
  strictnessText: string,
  subjectGuidance: string,
  contextLine: string,
  paperCount: number
): string {
  return `Sen MEB 2026-2027 Türkiye Yüzyılı Maarif Modeli açık uçlu yazılı sınav ölçme ve değerlendirme motorusun.
${contextLine ? `SINAV BAĞLAMI: ${contextLine}\n` : ""}
${strictnessText}

${subjectGuidance}

KESİN VE ÇELİŞKİSİZ ÖLÇME-PUANLAMA PROTOKOLÜ (${paperCount} KAĞIT):
1. ADIM — ÖĞRENCİ KAĞIDINI CEVAP ANAHTARI FORMATINA DÖNÜŞTÜRME:
   - Öğrencinin taranmış kağıdındaki el yazısını ve işlemleri her soru için oku (transcribedAnswer). Üzeri karalanmış ifadeleri yok say.
   - Öğrencinin yanıtını Hafızadaki Cevap Anahtarı Şablonuyla aynı yapısal formata çevirerek "normalizedStudentSteps" alanına yaz (Örn: "1. Adım: Verilenleri yazmış | 2. Adım: Formülü kurmuş | 3. Adım: Sonucu 24 bulmuş").
2. ADIM — ALT KRİTER EŞLEŞTİRME VE GEREKÇELİ NOTLAMA:
   - Hafızadaki Cevap Anahtarı Şablonundaki her sorunun alt kriterlerini (criteriaBreakdown) tek tek öğrenci adımlarıyla karşılaştır.
   - Her alt kriter için:
     * status: "tam", "kismi" veya "eksik"
     * earnedPoints: 0 ile maxPoints arasında tam sayı
     * evidence: Öğrencinin kağıdındaki doğrudan kanıt ifadesi ve neden bu puanın verildiğinin/kırıldığının net gerekçesi.
3. ADIM — MANTIKSAL TUTARLILIK KİLİDİ (ÇELİŞKİ YASAĞI):
   - Boş bırakılan soruya kesinlikle 0 puan ver.
   - Cevap anahtarındaki beklenen çözümü (veya seçilen okuma modunun izin verdiği eşdeğer çözümü) eksiksiz yapan öğrenciye TAM PUAN ver; keyfi puan kırma.
   - teacherFeedback alanında verdiğin puanın gerekçesini açık ve yapıcı bir dille yaz; yazdığın yorum ile verdiğin sayısal puan arasında hiçbir çelişki olmasın.`;
}

async function startServer() {
  const app = express();

  app.use(express.json({ limit: "50mb" }));

  // 1. Sol Bölüm: Puanlı Cevap Anahtarını Yapılandırılmış Şablona Çevirme Endpoint'i
  app.post("/api/maarif/extract-scenario", async (req, res) => {
    try {
      const { rubric } = req.body as { rubric?: UniversalFilePayload };
      if (!rubric) {
        res.status(400).json({
          error: "Lütfen ayrıştırılacak puanlı cevap anahtarı veya MEB senaryo dosyasını yükleyin.",
        });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          error:
            "GEMINI_API_KEY tanımlı değil. Lütfen Settings > Secrets panelinden API anahtarınızı kontrol edin.",
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: { "User-Agent": "aistudio-build" },
        },
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: [
          ...toGeminiPart(rubric, "YÜKLENEN PUANLI CEVAP ANAHTARI / RUBRİK BELGESİ"),
          {
            text: `Yüklenen yazılı sınav cevap anahtarını standart, yapılandırılmış bir Cevap Anahtarı Şablonuna (JSON) dönüştür.
- Her soru için: soru numarası (questionNo), konu/ünite (theme), kazanım kodu ve açıklaması (learningOutcomeCode, learningOutcome), bilişsel düzey ("Basit Bilişsel Süreçler" veya "Karmaşık Bilişsel Süreçler"), sorunun tam puanı (maxScore), beklenen adım adım ideal cevap (expectedAnswer) ve puanlı alt değerlendirme basamaklarını (criteria) çıkar.
- Her sorunun alt kriter puanlarının (criteria.points) toplamı o sorunun maxScore değerine tam eşit olmalıdır.`,
          },
        ],
        config: {
          seed: 42,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subjectName: { type: Type.STRING },
              gradeLevel: { type: Type.STRING },
              examTerm: { type: Type.STRING },
              scenarioNo: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    questionNo: { type: Type.NUMBER },
                    theme: { type: Type.STRING },
                    topic: { type: Type.STRING },
                    learningOutcomeCode: { type: Type.STRING },
                    learningOutcome: { type: Type.STRING },
                    processComponent: { type: Type.STRING },
                    cognitiveLevel: { type: Type.STRING },
                    maxScore: { type: Type.NUMBER },
                    expectedAnswer: { type: Type.STRING },
                    criteria: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          description: { type: Type.STRING },
                          points: { type: Type.NUMBER },
                        },
                        required: ["description", "points"],
                      },
                    },
                  },
                  required: [
                    "questionNo",
                    "learningOutcome",
                    "maxScore",
                    "expectedAnswer",
                    "criteria",
                  ],
                },
              },
            },
            required: ["questions"],
          },
        },
      });

      const parsed = JSON.parse((response.text ?? "{}").trim());

      // Alt kriter puanlarının soru tam puanına eşitliğini garanti altına al
      if (Array.isArray(parsed.questions)) {
        parsed.questions = parsed.questions.map((q: any, idx: number) => {
          const maxScore = Math.max(1, Number(q.maxScore) || 10);
          let criteria = Array.isArray(q.criteria) && q.criteria.length > 0 ? q.criteria : [];
          if (criteria.length === 0) {
            const p1 = Math.max(1, Math.floor(maxScore * 0.4));
            const p2 = Math.max(1, maxScore - p1);
            criteria = [
              { description: "1. Basamak: Doğru yöntem / kavram kurgusu", points: p1 },
              { description: "2. Basamak: Doğru işlem / gerekçeli sonuç", points: p2 },
            ];
          } else {
            const sumC = criteria.reduce((s: number, c: any) => s + (Number(c.points) || 0), 0);
            if (sumC !== maxScore && sumC > 0) {
              let running = 0;
              criteria = criteria.map((c: any, cIdx: number) => {
                if (cIdx === criteria.length - 1) {
                  return { ...c, points: Math.max(1, maxScore - running) };
                }
                const scaled = Math.max(1, Math.round(((Number(c.points) || 1) / sumC) * maxScore));
                running += scaled;
                return { ...c, points: scaled };
              });
            }
          }
          return {
            ...q,
            questionNo: Number(q.questionNo) || idx + 1,
            maxScore,
            criteria,
          };
        });
      }

      res.json(parsed);
    } catch (error: any) {
      console.error("Maarif scenario extraction error:", error);
      res.status(500).json({
        error: error?.message || "Cevap anahtarı şablona dönüştürülürken hata oluştu.",
      });
    }
  });

  // 2. Tekli Öğrenci Kağıdı Okuma Endpoint'i
  app.post("/api/maarif/grade", async (req, res) => {
    try {
      const { rubric, studentPaper, options } = req.body as {
        rubric?: UniversalFilePayload | null;
        studentPaper?: UniversalFilePayload;
        options?: GradingOptions;
      };

      if (
        (!rubric && (!options?.scenarioQuestions || options.scenarioQuestions.length === 0)) ||
        !studentPaper
      ) {
        res.status(400).json({
          error: "Lütfen cevap anahtarı şablonunu ve öğrenci cevap kağıdını yükleyin.",
        });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          error:
            "GEMINI_API_KEY tanımlı değil. Lütfen Settings > Secrets panelinden API anahtarınızı kontrol edin.",
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: { "User-Agent": "aistudio-build" },
        },
      });

      const strictnessText = getStrictnessInstruction(options?.strictness);
      const subjectGuidance = getSubjectSpecificGuidance(options?.subjectName);
      const structuredScenarioBlock = formatStructuredScenario(options?.scenarioQuestions);
      const contextLine = [
        options?.subjectName ? `Ders: ${options.subjectName}` : "",
        options?.gradeLevel ? `Sınıf: ${options.gradeLevel}` : "",
        options?.examTerm ? `Dönem: ${options.examTerm}` : "",
        options?.scenarioNo ? `Senaryo: ${options.scenarioNo}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      const contents: any[] = [];
      // Token Tasarrufu: Hafızada kilitli cevap anahtarı şablonu varsa ağır dosyayı tekrar gönderme
      if (rubric && !options?.useLockedTemplateOnly) {
        contents.push(...toGeminiPart(rubric, "EK CEVAP ANAHTARI BELGESİ"));
      }
      if (structuredScenarioBlock) {
        contents.push({ text: structuredScenarioBlock });
      }
      contents.push(...toGeminiPart(studentPaper, "TARANMIŞ ÖĞRENCİ CEVAP KAĞIDI"));
      contents.push({
        text: buildCoreGradingPrompt(strictnessText, subjectGuidance, contextLine, 1),
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents,
        config: {
          seed: 42,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: "application/json",
          responseSchema: getGradedPaperSchema(),
        },
      });

      const rawResult = JSON.parse((response.text ?? "{}").trim());
      const validated = normalizeAndValidateGradedPaper(rawResult, options);

      res.json(validated);
    } catch (error: any) {
      console.error("Maarif grading error:", error);
      res.status(500).json({
        error: error?.message || "Puanlama sırasında beklenmeyen bir hata oluştu.",
      });
    }
  });

  // 3. Token Tasarruflu Çoklu Öğrenci Kağıdı (Batch) Okuma Endpoint'i
  app.post("/api/maarif/grade-batch", async (req, res) => {
    try {
      const { rubric, studentPapers, options } = req.body as {
        rubric?: UniversalFilePayload | null;
        studentPapers?: UniversalFilePayload[];
        options?: GradingOptions;
      };

      if (
        (!rubric && (!options?.scenarioQuestions || options.scenarioQuestions.length === 0)) ||
        !Array.isArray(studentPapers) ||
        studentPapers.length === 0
      ) {
        res.status(400).json({
          error: "Lütfen cevap anahtarı şablonunu ve en az bir öğrenci kağıdını yükleyin.",
        });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          error:
            "GEMINI_API_KEY tanımlı değil. Lütfen Settings > Secrets panelinden API anahtarınızı kontrol edin.",
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: { "User-Agent": "aistudio-build" },
        },
      });

      const strictnessText = getStrictnessInstruction(options?.strictness);
      const subjectGuidance = getSubjectSpecificGuidance(options?.subjectName);
      const structuredScenarioBlock = formatStructuredScenario(options?.scenarioQuestions);
      const contextLine = [
        options?.subjectName ? `Ders: ${options.subjectName}` : "",
        options?.gradeLevel ? `Sınıf: ${options.gradeLevel}` : "",
        options?.examTerm ? `Dönem: ${options.examTerm}` : "",
        options?.scenarioNo ? `Senaryo: ${options.scenarioNo}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      const contents: any[] = [];
      if (rubric && !options?.useLockedTemplateOnly) {
        contents.push(...toGeminiPart(rubric, "EK CEVAP ANAHTARI BELGESİ"));
      }
      if (structuredScenarioBlock) {
        contents.push({ text: structuredScenarioBlock });
      }

      studentPapers.forEach((paper, idx) => {
        contents.push(
          ...toGeminiPart(paper, `ÖĞRENCİ KAĞIDI #${idx + 1}`)
        );
      });

      contents.push({
        text:
          buildCoreGradingPrompt(
            strictnessText,
            subjectGuidance,
            contextLine,
            studentPapers.length
          ) +
          `\nYukarıdaki ${studentPapers.length} adet öğrenci kağıdının her birini sırasıyla Cevap Anahtarı Şablonu formatına dönüştür ve 'results' dizisi içinde döndür.`,
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents,
        config: {
          seed: 42,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              results: {
                type: Type.ARRAY,
                items: getGradedPaperSchema(),
              },
            },
            required: ["results"],
          },
        },
      });

      const parsed = JSON.parse((response.text ?? "{}").trim());
      const rawList = Array.isArray(parsed.results) ? parsed.results : [];
      const validatedList = rawList.map((item: any) =>
        normalizeAndValidateGradedPaper(item, options)
      );

      res.json({ results: validatedList });
    } catch (error: any) {
      console.error("Maarif batch grading error:", error);
      res.status(500).json({
        error: error?.message || "Toplu kağıt okuma sırasında hata oluştu.",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
