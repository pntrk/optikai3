import {
  MEB_2026_2027_TABLES,
  MebDistributionTable,
  MebScenarioColumn,
  MebOutcomeRow,
} from "./meb2026Scenarios";

export type { MebDistributionTable, MebScenarioColumn, MebOutcomeRow };
export { MEB_2026_2027_TABLES };

export type CognitiveLevel = "Basit Bilişsel Süreçler" | "Karmaşık Bilişsel Süreçler";

export interface ScenarioCriterion {
  id: string;
  description: string;
  points: number;
}

export interface ScenarioQuestion {
  questionNo: number;
  theme: string;
  topic?: string;
  learningOutcomeCode: string;
  learningOutcome: string;
  processComponent: string;
  cognitiveLevel: CognitiveLevel;
  maxScore: number;
  expectedAnswer: string;
  criteria: ScenarioCriterion[];
}

export interface MaarifScenarioPreset {
  id: string;
  title: string;
  subjectName: string;
  gradeLevel: string;
  examTerm?: string;
  scenarioNo: string;
  description: string;
  isNationalExam?: boolean;
  sourceFile?: string;
  questions: ScenarioQuestion[];
}

/**
 * Öğrenme çıktısı metninden bilişsel düzeyi ve süreç bileşenini çıkarır.
 */
export function inferCognitiveProfile(
  outcomeText: string,
  subject: string
): { cognitiveLevel: CognitiveLevel; processComponent: string } {
  const lower = outcomeText.toLowerCase();

  // Karmaşık bilişsel süreç göstergeleri (Türkiye Yüzyılı Maarif Modeli)
  const complexMatchers: { keywords: string[]; component: string }[] = [
    {
      keywords: ["muhakeme", "ispat", "doğrulayabilme", "varsayımda", "önermeleri", "analojik"],
      component: "Matematiksel / Mantıksal Muhakeme ve İspat",
    },
    {
      keywords: [
        "çözümleyebilme",
        "analiz",
        "ilişkilendirebilme",
        "karşılaştırabilme",
        "mukayese",
      ],
      component: "Çözümleme, Karşılaştırma ve İlişkilendirme",
    },
    {
      keywords: [
        "çıkarım",
        "tahmin",
        "genelleme",
        "tümevarım",
        "tümdengelim",
        "hipotez",
        "deney yapabilme",
      ],
      component: "Bilimsel / Mantıksal Çıkarım ve Deneysel Sorgulama",
    },
    {
      keywords: [
        "yorumlayabilme",
        "değerlendirebilme",
        "tartışabilme",
        "eleştirel",
        "sorgulayabilme",
        "yargıda",
        "idrak edebilme",
        "müşahede edebilme",
        "anlam oluşturabilme",
      ],
      component: "Yorumlama, Sorgulama ve Eleştirel Değerlendirme",
    },
    {
      keywords: [
        "model",
        "tasarlayabilme",
        "inşa",
        "problem çöz",
        "üretebilme",
        "oluşturabilme",
        "harita uygulamaları",
      ],
      component: "Modelleme, Harita Uygulaması ve Problem Çözme",
    },
    {
      keywords: [
        "yansıtabilme",
        "aktarabilme",
        "yazabilme",
        "yazılı üretim",
        "convey",
        "construct",
        "reorganize",
        "ek 5",
        "şiir yazabilme",
        "hikâye yazabilme",
      ],
      component: "Yazılı Anlatım, Edebi Üretim ve Sentez",
    },
  ];

  for (const m of complexMatchers) {
    if (m.keywords.some((k) => lower.includes(k))) {
      return {
        cognitiveLevel: "Karmaşık Bilişsel Süreçler",
        processComponent: m.component,
      };
    }
  }

  // Basit bilişsel süreç göstergeleri
  if (lower.includes("sınıflandır") || lower.includes("gruplandır")) {
    return {
      cognitiveLevel: "Basit Bilişsel Süreçler",
      processComponent: "Sınıflandırma ve Gruplandırma",
    };
  }
  if (lower.includes("grafik") || lower.includes("tablo") || lower.includes("temsil") || lower.includes("harita")) {
    return {
      cognitiveLevel: "Basit Bilişsel Süreçler",
      processComponent: "Tablo / Grafik / Harita Okuma ve Temsil",
    };
  }
  if (subject === "İngilizce") {
    return {
      cognitiveLevel: "Basit Bilişsel Süreçler",
      processComponent: "Okuduğunu Anlama ve Hedef Dil Yapılarını Kullanma (Reading & Use of English)",
    };
  }

  return {
    cognitiveLevel: "Basit Bilişsel Süreçler",
    processComponent: "Kavramsal Tanımlama ve Uygulama",
  };
}

/**
 * Bir soru için ders ve öğrenme çıktısına uygun 3 basamaklı Maarif değerlendirme listesi (rubrik) üretir.
 */
export function buildDefaultCriteriaForOutcome(
  outcome: MebOutcomeRow,
  subject: string,
  maxScore: number,
  qNo: number
): { expectedAnswer: string; criteria: ScenarioCriterion[] } {
  const p1 = Math.max(1, Math.floor(maxScore * 0.3));
  const p2 = Math.max(1, Math.floor(maxScore * 0.45));
  const p3 = Math.max(1, maxScore - p1 - p2);

  const topicInfo = outcome.topic ? `${outcome.theme} / ${outcome.topic}` : outcome.theme;

  if (subject === "Matematik" || subject === "Fizik" || subject === "Kimya") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" kazanımı kapsamında (${topicInfo}); verilenleri ve istenenleri matematiksel/bilimsel sembollerle doğru modelleme, işlem ve formül basamaklarını eksiksiz yürütme ve sonucu doğru birim/gerekçe ile ifade etme.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Verilenleri belirleme, temel kavramı/formülü veya modeli doğru kurma (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `İşlem basamaklarını, matematiksel/bilimsel muhakemeyi ve çözüm stratejisini hatasız yürütme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Doğru sonuca ulaşma, birim/sembol doğruluğu ve sonucu yorumlama`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "Biyoloji" || subject === "Fen Bilimleri") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; biyolojik/bilimsel kavramları, yapı-görev ilişkilerini veya deneysel değişkenleri doğru tanımlama, mekanizmayı neden-sonuç zinciriyle çözümleme ve bilimsel terminolojiyle sonuca ulaşma.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Biyolojik/bilimsel kavramı, yapıyı veya deneysel değişkenleri doğru tanımlama (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `Yaşamsal süreci, yapı-görev ilişkisini veya deney verilerini neden-sonuç bütünlüğünde çözümleme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Bilimsel terminoloji doğruluğu ve çıkarımı kanıtlarıyla özetleme`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "Coğrafya") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; coğrafi olgu/süreçleri mekânsal dağılış, harita/grafik verisi ve insan-doğa etkileşimi çerçevesinde çözümleyerek kanıtlı çıkarımda bulunma.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Coğrafi kavramı, mekânsal konumu veya harita/tablo/grafik verisini doğru okuma (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `Fiziki ve beşerî unsurlar arasındaki dağılış, bağlantı ve neden-sonuç ilişkilerini çözümleme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Coğrafi terminoloji kullanımı, mekânsal sentez ve örneklendirme`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "Türk Dili ve Edebiyatı" || subject === "Türkçe") {
    const isWriting =
      outcome.code.startsWith("B.") ||
      outcome.code.includes("TDE3") ||
      outcome.text.toLowerCase().includes("yazabilme");
    return {
      expectedAnswer: isWriting
        ? `[${outcome.code}] "${outcome.text}" (${topicInfo} - EK 5 Yazma Kriterleri) kapsamında; temaya ve türe uygun planlama yapma, edebî/anlatım tekniklerini işlevsel kullanma, bağdaşıklık-bağlaşıklık ilkelerine ve yazım-noktalama kurallarına uygun özgün metin üretme.`
        : `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; verilen edebî/bilgilendirici metnin yapı, tema, dil ve anlatım özelliklerini metinden somut örneklerle çözümleme ve doğru terminolojiyle yorumlama.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: isWriting
            ? `Konu, ana düşünce/tema ve türün yapısal özelliklerine uygun içerik kurgulama (${outcome.code})`
            : `Metnin temasını, ana düşüncesini veya yapı/tür unsurunu doğru belirleme (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: isWriting
            ? `Düşünceyi geliştirme yolları, söz sanatları ve anlatım biçimlerini bağlama uygun kullanma`
            : `Metinden somut kanıt/örnek göstererek dil, üslup ve anlam ilişkisini çözümleme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Anlatım bütünlüğü (bağdaşıklık/bağlaşıklık), imla ve noktalama doğruluğu`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "Felsefe") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; felsefi problemi ve temel kavramları doğru tanımlama, filozofların/akımların görüşlerini argümanlarıyla karşılaştırma ve tutarlı felsefi muhakeme yürütme.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Felsefi kavramı, problemi veya yaklaşımı doğru tanımlama (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `Verilen metin veya problem üzerinden mantıksal argümantasyon ve felsefi sorgulama yürütme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Felsefi terminoloji doğruluğu, kavramsal tutarlılık ve özgün çıkarım`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "Din Kültürü ve Ahlak Bilgisi") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; dini ve ahlaki kavramları doğru tanımlama, ilgili ayet/hadis/sure mesajlarını bağlamına uygun yorumlama ve günlük hayat/insani değerlerle ilişkilendirme.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Ünite kapsamındaki temel dini/ahlaki kavramları ve ilkeleri doğru ifade etme (${outcome.code})`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `Verilen ayet, hadis veya örnek olay üzerinden ana mesajı çözümleme ve ilişkilendirme`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Kavramsal bütünlük, değer çıkarımı ve açık/anlaşılır yazılı anlatım`,
          points: p3,
        },
      ],
    };
  }

  if (subject === "İngilizce") {
    return {
      expectedAnswer: `[${outcome.code}] "${outcome.text}" (${outcome.theme}) kapsamında; hedef kelime kadrosunu (target vocabulary) ve dil bilgisi yapılarını (grammar structures) bağlama uygun, anlaşılır ve doğru cümlelerle yazılı olarak ifade etme.`,
      criteria: [
        {
          id: `q${qNo}-c1`,
          description: `Soruyu/metni doğru anlama ve iletişimsel amaca uygun içerik üretme (Task Fulfillment & Comprehension)`,
          points: p1,
        },
        {
          id: `q${qNo}-c2`,
          description: `Tema kapsamındaki hedef kelime ve dil yapılarını doğru kullanma (Target Vocabulary & Grammar Accuracy)`,
          points: p2,
        },
        {
          id: `q${qNo}-c3`,
          description: `Cümle bütünlüğü, bağlaç kullanımı ve yazım/imla doğruluğu (Coherence & Mechanics)`,
          points: p3,
        },
      ],
    };
  }

  return {
    expectedAnswer: `[${outcome.code}] "${outcome.text}" (${topicInfo}) kapsamında; temel kavramları doğru açıklama, metin/kaynak veya tarihsel-toplumsal bağlam üzerinden neden-sonuç ilişkisi kurarak kanıtlı çıkarımda bulunma ve dil-anlatım bütünlüğüyle ifade etme.`,
    criteria: [
      {
        id: `q${qNo}-c1`,
        description: `Kazanıma (${outcome.code}) ait temel kavramı, ana fikri veya olguyu doğru tespit etme`,
        points: p1,
      },
      {
        id: `q${qNo}-c2`,
        description: `Neden-sonuç ilişkisi kurarak çözümleme, çıkarım yapma ve somut kanıt/örnekle gerekçelendirme`,
        points: p2,
      },
      {
        id: `q${qNo}-c3`,
        description: `Kavramsal bütünlük, doğru terminoloji ve açık/anlaşılır yazılı anlatım`,
        points: p3,
      },
    ],
  };
}

/**
 * MEB 2026-2027 Konu Soru Dağılım Tablosundaki belirli bir senaryo sütununu
 * 100 puan üzerinden dengelenmiş ScenarioQuestion[] listesine dönüştürür.
 */
export function expandMebTableScenarioToQuestions(
  table: MebDistributionTable,
  scenarioColLetter: string
): ScenarioQuestion[] {
  const scMeta =
    table.scenarios.find((s) => s.col === scenarioColLetter) || table.scenarios[0];

  // Her kazanımın bu senaryodaki soru sayısını aç
  const expandedRows: { outcome: MebOutcomeRow; instanceIndex: number; totalInstances: number }[] =
    [];

  if (scMeta?.isNationalExam) {
    // Ülke Geneli Ortak Yazılı için tablodaki ilk 7 kazanımdan 1'er soru oluştur
    const sampleOutcomes = table.outcomes.slice(0, Math.min(7, table.outcomes.length));
    sampleOutcomes.forEach((o) => {
      expandedRows.push({ outcome: o, instanceIndex: 1, totalInstances: 1 });
    });
  } else {
    table.outcomes.forEach((o) => {
      const count = o.counts[scenarioColLetter] || 0;
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          expandedRows.push({ outcome: o, instanceIndex: i, totalInstances: count });
        }
      }
    });
  }

  if (expandedRows.length === 0) {
    // Fallback: ilk 6 kazanımı al
    table.outcomes.slice(0, 6).forEach((o) => {
      expandedRows.push({ outcome: o, instanceIndex: 1, totalInstances: 1 });
    });
  }

  const n = expandedRows.length;
  // Bilişsel düzeye göre ağırlıklı 100 puan dağıtımı
  const profiles = expandedRows.map((item) =>
    inferCognitiveProfile(item.outcome.text, table.subject)
  );

  // Temel eşit puan + karmaşık sorulara öncelikli kalan puan dağıtımı
  const baseScore = Math.floor(100 / n / 5) * 5 || Math.floor(100 / n);
  const scores = new Array(n).fill(baseScore);
  let remainder = 100 - baseScore * n;

  // Önce karmaşık bilişsel süreçli sorulara, sonra sırayla +5 veya +1 dağıt
  const orderIndices = profiles
    .map((p, idx) => ({ idx, isComplex: p.cognitiveLevel === "Karmaşık Bilişsel Süreçler" }))
    .sort((a, b) => Number(b.isComplex) - Number(a.isComplex))
    .map((x) => x.idx);

  let ptr = 0;
  while (remainder > 0) {
    const step = remainder >= 5 && n <= 10 ? 5 : 1;
    scores[orderIndices[ptr % n]] += step;
    remainder -= step;
    ptr++;
  }

  return expandedRows.map((item, idx) => {
    const qNo = idx + 1;
    const maxScore = scores[idx];
    const profile = profiles[idx];
    const { expectedAnswer, criteria } = buildDefaultCriteriaForOutcome(
      item.outcome,
      table.subject,
      maxScore,
      qNo
    );

    const themeLabel = item.outcome.topic
      ? `${item.outcome.theme} — ${item.outcome.topic}`
      : item.outcome.theme;

    const suffix =
      item.totalInstances > 1 ? ` (${item.instanceIndex}. Soru Uygulaması)` : "";

    return {
      questionNo: qNo,
      theme: themeLabel,
      topic: item.outcome.topic || item.outcome.theme,
      learningOutcomeCode: item.outcome.code,
      learningOutcome: `${item.outcome.text}${suffix}`,
      processComponent: profile.processComponent,
      cognitiveLevel: profile.cognitiveLevel,
      maxScore,
      expectedAnswer,
      criteria,
    };
  });
}

/**
 * MEB 2026-2027 veri tabanındaki tüm benzersiz dersleri döndürür.
 */
export function getAvailableMebSubjects(): string[] {
  const order = [
    "Matematik",
    "Türkçe",
    "Türk Dili ve Edebiyatı",
    "Fen Bilimleri",
    "Fizik",
    "Kimya",
    "Biyoloji",
    "Sosyal Bilgiler",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Tarih",
    "Coğrafya",
    "Felsefe",
    "Din Kültürü ve Ahlak Bilgisi",
    "İngilizce",
  ];
  const set = new Set(MEB_2026_2027_TABLES.map((t) => t.subject));
  const ordered = order.filter((s) => set.has(s));
  const extras = Array.from(set).filter((s) => !ordered.includes(s));
  return [...ordered, ...extras];
}

/**
 * Seçilen derse ait sınıf düzeylerini (5. Sınıf .. 12. Sınıf) döndürür.
 */
export function getAvailableMebGradesForSubject(subject: string): MebDistributionTable[] {
  return MEB_2026_2027_TABLES.filter((t) => t.subject === subject).sort(
    (a, b) => a.gradeNum - b.gradeNum
  );
}

/**
 * Ders ve sınıf düzeyine göre ilgili MEB 2026-2027 Konu Soru Dağılım Tablosunu döndürür.
 */
export function getMebDistributionTable(
  subject: string,
  grade: string
): MebDistributionTable | undefined {
  return (
    MEB_2026_2027_TABLES.find((t) => t.subject === subject && t.grade === grade) ||
    MEB_2026_2027_TABLES.find((t) => t.subject === subject)
  );
}

/**
 * Kullanıcının doğrudan yüklediği MEB XML Konu Soru Dağılım Tablosunu tarayıcıda ayrıştırır.
 */
export function parseUploadedMebXmlToTables(
  xmlText: string,
  fileName: string
): MebDistributionTable[] {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, "text/xml");
    const worksheets = Array.from(doc.getElementsByTagName("Worksheet"));
    if (worksheets.length === 0) return [];

    const parsedTables: MebDistributionTable[] = [];

    worksheets.forEach((ws, wsIdx) => {
      const wsName = ws.getAttribute("name") || `${wsIdx + 1}. Sınıf`;
      const infos = Array.from(ws.getElementsByTagName("Info")).map((i) =>
        (i.textContent || "").trim()
      );
      const firstInfo = infos[0] || fileName;

      // Ders adını tahmin et
      let subject = "Genel Ders";
      const upperInfo = (firstInfo + " " + wsName + " " + fileName).toUpperCase();
      if (
        upperInfo.includes("MATEMATİK") ||
        upperInfo.includes("MATEMATIK") ||
        upperInfo.includes("ILKMAT")
      )
        subject = "Matematik";
      else if (upperInfo.includes("EDEBİYAT") || upperInfo.includes("EDEBIYAT"))
        subject = "Türk Dili ve Edebiyatı";
      else if (upperInfo.includes("TÜRKÇE") || upperInfo.includes("TURKCE"))
        subject = "Türkçe";
      else if (upperInfo.includes("İNKILAP") || upperInfo.includes("INKILAP"))
        subject = "T.C. İnkılap Tarihi ve Atatürkçülük";
      else if (upperInfo.includes("SOSYAL")) subject = "Sosyal Bilgiler";
      else if (upperInfo.includes("TARİH") || upperInfo.includes("TARIH")) subject = "Tarih";
      else if (upperInfo.includes("COĞRAFYA") || upperInfo.includes("COGRAFYA"))
        subject = "Coğrafya";
      else if (upperInfo.includes("FELSEFE")) subject = "Felsefe";
      else if (
        upperInfo.includes("DİN KÜLTÜRÜ") ||
        upperInfo.includes("DIN KULTURU") ||
        upperInfo.includes("DKAB")
      )
        subject = "Din Kültürü ve Ahlak Bilgisi";
      else if (upperInfo.includes("BİYOLOJİ") || upperInfo.includes("BIYOLOJI"))
        subject = "Biyoloji";
      else if (upperInfo.includes("FİZİK") || upperInfo.includes("FIZIK")) subject = "Fizik";
      else if (upperInfo.includes("KİMYA") || upperInfo.includes("KIMYA")) subject = "Kimya";
      else if (upperInfo.includes("İNGİLİZCE") || upperInfo.includes("INGILIZCE"))
        subject = "İngilizce";
      else if (upperInfo.includes("FEN")) subject = "Fen Bilimleri";

      const gradeMatch = (wsName + " " + firstInfo).match(/(\d+)/);
      const gradeNum = gradeMatch ? parseInt(gradeMatch[1], 10) : 9;
      const grade = `${gradeNum}. Sınıf`;

      const colEls = Array.from(ws.getElementsByTagName("Column"));
      const colTags = colEls.map((c) => ({
        letter: c.getAttribute("excelColumn") || "",
        group: (c.getAttribute("group") || "").trim(),
        header: (c.getAttribute("header") || "").trim(),
      }));

      const firstLetter = colTags[0]?.letter || "A";
      const secondLetter = firstLetter === "B" ? "C" : "B";
      const thirdLetter = firstLetter === "B" ? "D" : "C";
      const colThird = colTags.find((c) => c.letter === thirdLetter);
      const has3MetaCols =
        colThird &&
        !colThird.header.toLowerCase().includes("senaryo") &&
        !colThird.group.toLowerCase().includes("yazılı");
      const outcomeCol = has3MetaCols ? thirdLetter : secondLetter;
      const topicCol = has3MetaCols ? secondLetter : "";
      const themeCol = firstLetter;
      const scenarioCols = colTags.filter(
        (c) =>
          c.letter > outcomeCol &&
          (c.header.toLowerCase().includes("senaryo") ||
            c.group.toLowerCase().includes("yazılı"))
      );

      const rowEls = Array.from(ws.getElementsByTagName("Row"));
      let lastTheme = "";
      let lastTopic = "";
      const outcomes: MebOutcomeRow[] = [];

      rowEls.forEach((rEl, rIdx) => {
        const cellEls = Array.from(rEl.getElementsByTagName("Cell"));
        const cells: Record<string, string> = {};
        let outcomeMergedFromAbove = false;
        cellEls.forEach((cEl) => {
          const col = cEl.getAttribute("excelColumn") || cEl.getAttribute("col") || "";
          cells[col] = (cEl.textContent || "").replace(/\s+/g, " ").trim();
          if (col === outcomeCol && cEl.getAttribute("mergedFromAbove") === "true") {
            outcomeMergedFromAbove = true;
          }
        });

        const rawOutcome = cells[outcomeCol] || "";
        if (
          !rawOutcome ||
          rawOutcome === "Kazanımlar" ||
          rawOutcome === "Öğrenme Çıktıları" ||
          rawOutcome.toLowerCase().startsWith("senaryo")
        )
          return;

        if (outcomeMergedFromAbove && outcomes.length > 0) {
          const prev = outcomes[outcomes.length - 1];
          if (prev.fullOutcome === rawOutcome) {
            scenarioCols.forEach((sc) => {
              const val = cells[sc.letter] || "";
              const num = parseInt(val, 10);
              if (!isNaN(num) && num > 0 && !prev.counts[sc.letter]) {
                prev.counts[sc.letter] = num;
              }
            });
            return;
          }
        }

        const rawTheme = cells[themeCol] || lastTheme || "Genel Öğrenme Alanı";
        const rawTopic = topicCol ? cells[topicCol] || lastTopic || "" : "";
        if (cells[themeCol]) lastTheme = cells[themeCol];
        if (topicCol && cells[topicCol]) lastTopic = cells[topicCol];

        const codeMatch = rawOutcome.match(
          /^([A-ZÇĞİÖŞÜa-zçğıöşü0-9]+(?:\.[A-ZÇĞİÖŞÜa-zçğıöşü0-9]+){1,6})\.?\s*(.*)$/
        );
        const code = codeMatch ? codeMatch[1] : `K.${gradeNum}.1.${rIdx + 1}`;
        const text = codeMatch && codeMatch[2] ? codeMatch[2].trim() : rawOutcome;

        const counts: Record<string, number> = {};
        scenarioCols.forEach((sc) => {
          const val = cells[sc.letter] || "";
          const num = parseInt(val, 10);
          if (!isNaN(num) && num > 0) counts[sc.letter] = num;
          else if (val.toLowerCase().includes("ülke geneli")) counts[sc.letter] = -1;
        });

        outcomes.push({
          theme: rawTheme,
          topic: rawTopic,
          code,
          text,
          fullOutcome: rawOutcome,
          counts,
        });
      });

      if (outcomes.length > 0 && scenarioCols.length > 0) {
        parsedTables.push({
          id: `uploaded-${wsIdx}-${gradeNum}`,
          sourceFile: fileName,
          subject,
          level: gradeNum <= 8 ? "Ortaokul" : "Lise",
          grade,
          gradeNum,
          scenarios: scenarioCols.map((sc) => {
            const isNational =
              outcomes.some((o) => o.counts[sc.letter] === -1) ||
              sc.header.toLowerCase().includes("ülke geneli");
            const totalQ = outcomes.reduce(
              (acc, o) => acc + (o.counts[sc.letter] > 0 ? o.counts[sc.letter] : 0),
              0
            );
            return {
              col: sc.letter,
              examTerm: sc.group || "1. Dönem 1. Ortak Yazılı Sınav",
              scenarioName: isNational ? "Ülke Geneli Ortak Yazılı" : sc.header || "Senaryo 1",
              isNationalExam: isNational,
              totalQuestions: isNational ? Math.min(7, outcomes.length) : totalQ,
            };
          }),
          outcomes,
        });
      }
    });

    return parsedTables;
  } catch {
    return [];
  }
}

// Hızlı erişim için popüler MEB 2026-2027 hazır senaryo presetleri
export const MAARIF_SCENARIO_PRESETS: MaarifScenarioPreset[] = MEB_2026_2027_TABLES.flatMap(
  (table) =>
    table.scenarios.slice(0, 2).map((sc) => ({
      id: `${table.id}-${sc.col}`,
      title: `${table.grade} ${table.subject} ${sc.examTerm} - ${sc.scenarioName}`,
      subjectName: table.subject,
      gradeLevel: table.grade,
      examTerm: sc.examTerm,
      scenarioNo: sc.scenarioName,
      description: `MEB ODSGM 2026-2027 1. Dönem Konu Soru Dağılım Tablosu (${sc.examTerm} • ${sc.scenarioName} • ${sc.totalQuestions} Açık Uçlu Soru)`,
      isNationalExam: sc.isNationalExam,
      sourceFile: table.sourceFile,
      questions: expandMebTableScenarioToQuestions(table, sc.col),
    }))
);

export function scenarioQuestionsToRubricText(
  title: string,
  subjectName: string,
  gradeLevel: string,
  scenarioNo: string,
  questions: ScenarioQuestion[]
): string {
  const lines: string[] = [
    `MEB 2026-2027 TÜRKİYE YÜZYILI MAARİF MODELİ AÇIK UÇLU YAZILI DEĞERLENDİRME LİSTESİ (RUBRİK)`,
    `Sınav Başlığı: ${title}`,
    `Ders: ${subjectName} | Sınıf: ${gradeLevel} | Senaryo: ${scenarioNo}`,
    `Toplam Soru: ${questions.length} | Toplam Puan: ${questions.reduce((acc, q) => acc + (Number(q.maxScore) || 0), 0)}`,
    `--------------------------------------------------------------------------------`,
  ];

  questions.forEach((q) => {
    lines.push(
      `\nSORU ${q.questionNo} (${q.maxScore} Puan)` +
        `\nÜnite/Tema: ${q.theme}` +
        (q.topic ? `\nKonu (İçerik Çerçevesi): ${q.topic}` : "") +
        `\nÖğrenme Çıktısı / Kazanım: [${q.learningOutcomeCode}] ${q.learningOutcome}` +
        `\nSüreç Bileşeni: ${q.processComponent} | Bilişsel Düzey: ${q.cognitiveLevel}` +
        `\nBeklenen İdeal Cevap: ${q.expectedAnswer}` +
        `\nDeğerlendirme Listesi Alt Kriterleri:`
    );
    (q.criteria || []).forEach((c, idx) => {
      lines.push(`  ${idx + 1}. ${c.description} (${c.points} Puan)`);
    });
  });

  return lines.join("\n");
}

export function generateSampleStudentPaperText(
  subjectName: string,
  gradeLevel: string,
  scenarioNo: string,
  questions: ScenarioQuestion[]
): string {
  const header = [
    `ÖĞRENCİ CEVAP KAĞIDI — ${gradeLevel.toUpperCase()} ${subjectName.toUpperCase()} (${scenarioNo})`,
    `Öğrenci Adı Soyadı: Zeynep Demir`,
    `Öğrenci No: 418`,
    `Sınıf / Şube: ${gradeLevel.replace(". Sınıf", "")}-A`,
    `------------------------------------------------------------`,
  ];

  const answers = questions.map((q, idx) => {
    const isPartial = idx % 3 === 1;
    if (isPartial) {
      return `Cevap ${q.questionNo} [${q.learningOutcomeCode}]:\n${q.theme} konusu kapsamında temel kavramı ve başlangıç bağıntısını doğru yazdım ancak ikinci adımda işlem/gerekçelendirme kısmını kısa bıraktım.`;
    }
    return `Cevap ${q.questionNo} [${q.learningOutcomeCode}]:\n${q.expectedAnswer}`;
  });

  return [...header, ...answers].join("\n\n");
}

