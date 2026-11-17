import { UniversalFilePayload } from "../utils/universalFileParser";
import { ScenarioQuestion } from "../utils/maarifScenarios";

export interface CriterionBreakdown {
  criterion: string;
  maxPoints: number;
  earnedPoints: number;
  status: "tam" | "kismi" | "eksik" | string;
  evidence: string;
}

export interface QuestionEvaluation {
  questionNo: number;
  theme?: string;
  topic?: string;
  learningOutcomeCode?: string;
  learningOutcome: string;
  processComponent?: string;
  cognitiveLevel?: "Basit Bilişsel Süreçler" | "Karmaşık Bilişsel Süreçler" | string;
  maxScore: number;
  awardedScore: number;
  extractedQuestionText?: string;
  transcribedAnswer: string;
  normalizedStudentSteps?: string;
  expectedIdealAnswer?: string;
  ocrConfidence?: "Yüksek" | "Orta" | "Düşük" | string;
  errorType?:
    | "Yok"
    | "Kavram Yanılgısı"
    | "İşlem / Hesap Hatası"
    | "Eksik Gerekçelendirme"
    | "Birim / Sembol Eksikliği"
    | "Dil ve Anlatım Eksikliği"
    | "Boş / Cevapsız"
    | string;
  remediationTip?: string;
  criteriaBreakdown?: CriterionBreakdown[];
  matchedCriteria: string[];
  missingCriteria: string[];
  teacherFeedback: string;
}

export interface GradingOptions {
  strictness?: "esnek" | "standart" | "titiz";
  subjectName?: string;
  gradeLevel?: string;
  examTerm?: string;
  scenarioNo?: string;
  examTitle?: string;
  scenarioQuestions?: ScenarioQuestion[];
  useLockedTemplateOnly?: boolean;
}

export interface GradingResult {
  id?: string;
  gradedAt?: string;
  strictness?: "esnek" | "standart" | "titiz";
  subjectName?: string;
  gradeLevel?: string;
  examTerm?: string;
  scenarioNo?: string;
  examTitle?: string;
  studentName: string;
  studentNumber: string;
  className: string;
  totalScore: number;
  maxTotalScore?: number;
  achievementLevel?: string;
  executiveSummary?: string;
  questions: QuestionEvaluation[];
  overallStrengths: string;
  overallImprovements: string;
}

export interface ExtractedScenarioResponse {
  title?: string;
  subjectName?: string;
  gradeLevel?: string;
  examTerm?: string;
  scenarioNo?: string;
  questions: ScenarioQuestion[];
}

export async function extractScenarioFromRubric(
  rubric: UniversalFilePayload
): Promise<ExtractedScenarioResponse> {
  const response = await fetch("/api/maarif/extract-scenario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rubric }),
  });

  if (!response.ok) {
    let errorMsg = `Sunucu hatası (${response.status})`;
    try {
      const errData = await response.json();
      if (errData?.error) errorMsg = errData.error;
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  return (await response.json()) as ExtractedScenarioResponse;
}

export async function gradeExamWithGemini(
  rubric: UniversalFilePayload | null,
  studentPaper: UniversalFilePayload,
  options?: GradingOptions
): Promise<GradingResult> {
  const response = await fetch("/api/maarif/grade", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Hafızada kilitli cevap anahtarı şablonu varsa ham dosyayı tekrar gönderme (Token Tasarrufu)
      rubric: options?.useLockedTemplateOnly ? null : rubric,
      studentPaper,
      options,
    }),
  });

  if (!response.ok) {
    let errorMsg = `Sunucu hatası (${response.status})`;
    try {
      const errData = await response.json();
      if (errData?.error) {
        errorMsg = errData.error;
      }
    } catch {
      // ignore json parse error
    }
    throw new Error(errorMsg);
  }

  const data = await response.json();
  return data as GradingResult;
}

/**
 * Çoklu taranmış öğrenci kağıtlarını hafızadaki kilitli cevap anahtarı şablonuna göre
 * tek API isteğinde (batch) şablon formatına dönüştürüp gerekçeli puanlar.
 */
export async function gradeExamBatchWithGemini(
  rubric: UniversalFilePayload | null,
  studentPapers: UniversalFilePayload[],
  options?: GradingOptions
): Promise<GradingResult[]> {
  if (studentPapers.length === 1) {
    const single = await gradeExamWithGemini(rubric, studentPapers[0], options);
    return [single];
  }

  const response = await fetch("/api/maarif/grade-batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rubric: options?.useLockedTemplateOnly ? null : rubric,
      studentPapers,
      options,
    }),
  });

  if (!response.ok) {
    let errorMsg = `Sunucu hatası (${response.status})`;
    try {
      const errData = await response.json();
      if (errData?.error) {
        errorMsg = errData.error;
      }
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  const data = await response.json();
  return Array.isArray(data?.results) ? (data.results as GradingResult[]) : [];
}
