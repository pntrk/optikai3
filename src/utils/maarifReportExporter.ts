import XLSXStyle from "xlsx-js-style";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { GradingResult, CriterionBreakdown } from "../services/geminiGrader";

// Initialize pdfMake VFS fonts (Roboto with full Turkish character support)
const anyPdfMake = pdfMake as any;
const anyPdfFonts = pdfFonts as any;
if (typeof anyPdfMake.addVirtualFileSystem === "function") {
  anyPdfMake.addVirtualFileSystem(anyPdfFonts);
} else if (anyPdfFonts?.pdfMake?.vfs) {
  anyPdfMake.vfs = anyPdfFonts.pdfMake.vfs;
} else {
  anyPdfMake.vfs = anyPdfFonts;
}

function getSafeFileName(raw: string): string {
  return (raw || "Rapor")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9ğüşıöçĞÜŞİÖÇ_-]/g, "");
}

function getAchievementInfo(pct: number): {
  label: string;
  hexBg: string;
  hexText: string;
} {
  if (pct >= 85) {
    return { label: "Çok İyi (Üst Düzey)", hexBg: "DCFCE7", hexText: "166534" };
  }
  if (pct >= 70) {
    return { label: "İyi (Yeterli)", hexBg: "E0F2FE", hexText: "075985" };
  }
  if (pct >= 50) {
    return { label: "Orta (Gelişmekte)", hexBg: "FEF3C7", hexText: "92400E" };
  }
  return { label: "Geliştirilmeli", hexBg: "FFE4E6", hexText: "9F1239" };
}

function makeVisualBar(pct: number): string {
  const filled = Math.max(0, Math.min(10, Math.round(pct / 10)));
  return "█".repeat(filled) + "░".repeat(10 - filled) + ` %${Math.round(pct)}`;
}

const thinBorder = {
  top: { style: "thin", color: { rgb: "CBD5E1" } },
  bottom: { style: "thin", color: { rgb: "CBD5E1" } },
  left: { style: "thin", color: { rgb: "CBD5E1" } },
  right: { style: "thin", color: { rgb: "CBD5E1" } },
};

const headerStyle = {
  font: { bold: true, color: { rgb: "FFFFFF" }, sz: 10 },
  fill: { fgColor: { rgb: "1E293B" } },
  alignment: { horizontal: "center", vertical: "center", wrapText: true },
  border: thinBorder,
};

const bannerTitleStyle = {
  font: { bold: true, color: { rgb: "FFFFFF" }, sz: 13 },
  fill: { fgColor: { rgb: "312E81" } },
  alignment: { horizontal: "center", vertical: "center" },
};

const bannerSubStyle = {
  font: { bold: false, color: { rgb: "E0E7FF" }, sz: 10 },
  fill: { fgColor: { rgb: "3730A3" } },
  alignment: { horizontal: "center", vertical: "center" },
};

const sectionHeaderStyle = {
  font: { bold: true, color: { rgb: "1E293B" }, sz: 10.5 },
  fill: { fgColor: { rgb: "F1F5F9" } },
  alignment: { horizontal: "left", vertical: "center" },
  border: thinBorder,
};

const cellStyleBase = {
  font: { sz: 10, color: { rgb: "1E293B" } },
  alignment: { vertical: "top", wrapText: true },
  border: thinBorder,
};

const cellCenterStyle = {
  font: { sz: 10, color: { rgb: "1E293B" } },
  alignment: { horizontal: "center", vertical: "center", wrapText: true },
  border: thinBorder,
};

const cellBoldCenterStyle = {
  font: { bold: true, sz: 10, color: { rgb: "1E293B" } },
  alignment: { horizontal: "center", vertical: "center", wrapText: true },
  border: thinBorder,
};

/**
 * 1. BİREYSEL ÖĞRENCİ EXCEL ANALİZ RAPORU (.xlsx)
 */
export function exportStudentExcelReport(
  result: GradingResult,
  institutionName = "EĞİTİM KURUMU"
) {
  const wb = XLSXStyle.utils.book_new();
  const maxTotal =
    result.maxTotalScore ||
    result.questions.reduce((acc, q) => acc + (Number(q.maxScore) || 0), 0) ||
    100;
  const pct = maxTotal > 0 ? Math.round((result.totalScore / maxTotal) * 100) : 0;
  const ach = getAchievementInfo(pct);

  // --- SAYFA 1: SORU, ÖĞRENME ÇIKTISI VE SENARYO ANALİZ TABLOSU ---
  const sheet1Rows: any[][] = [];

  sheet1Rows.push([
    {
      v: `${institutionName.toUpperCase()} — TÜRKİYE YÜZYILI MAARİF MODELİ YAZILI ANALİZ RAPORU`,
      s: bannerTitleStyle,
    },
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  sheet1Rows.push([
    {
      v: `${result.subjectName || "Açık Uçlu Yazılı Sınav"} · ${result.gradeLevel || ""} · ${result.scenarioNo || "Senaryo 1"} · ${result.examTitle || "Değerlendirme Listesi Karşılaştırma Raporu"} · Tarih: ${result.gradedAt || new Date().toLocaleDateString("tr-TR")}`,
      s: bannerSubStyle,
    },
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  sheet1Rows.push([]);

  const infoHeaderStyle = {
    font: { bold: true, sz: 9, color: { rgb: "475569" } },
    fill: { fgColor: { rgb: "F8FAFC" } },
    alignment: { horizontal: "center", vertical: "center" },
    border: thinBorder,
  };
  const infoValueStyle = {
    font: { bold: true, sz: 11, color: { rgb: "0F172A" } },
    fill: { fgColor: { rgb: "FFFFFF" } },
    alignment: { horizontal: "center", vertical: "center" },
    border: thinBorder,
  };

  sheet1Rows.push([
    { v: "ÖĞRENCİ ADI SOYADI", s: infoHeaderStyle },
    { v: "ÖĞRENCİ NO", s: infoHeaderStyle },
    { v: "SINIF / ŞUBE", s: infoHeaderStyle },
    { v: "SENARYO / SORU", s: infoHeaderStyle },
    { v: "ALINAN / TAM PUAN", s: infoHeaderStyle },
    { v: "BAŞARI YÜZDESİ", s: infoHeaderStyle },
    { v: "BAŞARI DÜZEYİ", s: infoHeaderStyle },
    { v: "GÜÇLÜ YÖNLER ÖZETİ", s: infoHeaderStyle },
    "",
    "",
    "",
  ]);

  sheet1Rows.push([
    { v: result.studentName || "-", s: infoValueStyle },
    { v: result.studentNumber || "-", s: infoValueStyle },
    { v: result.className || "-", s: infoValueStyle },
    {
      v: `${result.scenarioNo || "Senaryo 1"} (${result.questions.length} Soru)`,
      s: infoValueStyle,
    },
    {
      v: `${result.totalScore} / ${maxTotal}`,
      s: {
        ...infoValueStyle,
        font: { bold: true, sz: 12, color: { rgb: "3730A3" } },
        fill: { fgColor: { rgb: "EEF2FF" } },
      },
    },
    {
      v: `%${pct}`,
      s: {
        ...infoValueStyle,
        font: { bold: true, sz: 11, color: { rgb: ach.hexText } },
        fill: { fgColor: { rgb: ach.hexBg } },
      },
    },
    {
      v: result.achievementLevel || ach.label,
      s: {
        ...infoValueStyle,
        font: { bold: true, sz: 10, color: { rgb: ach.hexText } },
        fill: { fgColor: { rgb: ach.hexBg } },
      },
    },
    {
      v: result.overallStrengths || "-",
      s: { ...cellStyleBase, font: { sz: 9, color: { rgb: "166534" } } },
    },
    "",
    "",
    "",
  ]);

  sheet1Rows.push([]);

  sheet1Rows.push([
    { v: "Soru No", s: headerStyle },
    { v: "Öğrenme Çıktısı Kodu & Tanımı", s: headerStyle },
    { v: "Bilişsel Düzey & Süreç Bileşeni", s: headerStyle },
    { v: "Tam Puan", s: headerStyle },
    { v: "Alınan Puan", s: headerStyle },
    { v: "Başarı (%)", s: headerStyle },
    { v: "Hata / Kavram Yanılgısı Tespiti", s: headerStyle },
    { v: "Okunan Öğrenci Cevabı (OCR)", s: headerStyle },
    { v: "Beklenen İdeal Cevap", s: headerStyle },
    { v: "Öğretmen Değerlendirme Gerekçesi", s: headerStyle },
    { v: "Telafi / Gelişim Önerisi", s: headerStyle },
  ]);

  result.questions.forEach((q) => {
    const qPct = q.maxScore > 0 ? Math.round((q.awardedScore / q.maxScore) * 100) : 0;
    const qAch = getAchievementInfo(qPct);
    const outcomeFull = q.learningOutcomeCode
      ? `[${q.learningOutcomeCode}] ${q.learningOutcome}`
      : q.learningOutcome;
    const cogFull = [q.cognitiveLevel, q.processComponent]
      .filter(Boolean)
      .join(" · ");

    sheet1Rows.push([
      { v: `Soru ${q.questionNo}`, s: cellBoldCenterStyle },
      { v: outcomeFull || "-", s: cellStyleBase },
      { v: cogFull || "Basit Bilişsel Süreçler", s: cellCenterStyle },
      { v: q.maxScore, s: cellCenterStyle },
      {
        v: q.awardedScore,
        s: {
          ...cellBoldCenterStyle,
          font: { bold: true, sz: 11, color: { rgb: "312E81" } },
          fill: { fgColor: { rgb: "F8FAFC" } },
        },
      },
      { v: makeVisualBar(qPct), s: cellCenterStyle },
      {
        v: q.errorType || (qPct >= 85 ? "Yok" : "Eksik Gerekçelendirme"),
        s: {
          ...cellBoldCenterStyle,
          font: { bold: true, sz: 9, color: { rgb: qAch.hexText } },
          fill: { fgColor: { rgb: qAch.hexBg } },
        },
      },
      { v: q.transcribedAnswer || "-", s: cellStyleBase },
      { v: q.expectedIdealAnswer || "-", s: cellStyleBase },
      { v: q.teacherFeedback || "-", s: cellStyleBase },
      { v: q.remediationTip || "-", s: cellStyleBase },
    ]);
  });

  const totalRowStyle = {
    font: { bold: true, sz: 10, color: { rgb: "FFFFFF" } },
    fill: { fgColor: { rgb: "1E293B" } },
    alignment: { horizontal: "center", vertical: "center" },
    border: thinBorder,
  };
  sheet1Rows.push([
    { v: "TOPLAM / GENEL ÖZET", s: totalRowStyle },
    { v: `${result.questions.length} Açık Uçlu Soru Değerlendirildi`, s: totalRowStyle },
    { v: result.scenarioNo || "Senaryo 1", s: totalRowStyle },
    { v: maxTotal, s: totalRowStyle },
    { v: result.totalScore, s: totalRowStyle },
    { v: `%${pct}`, s: totalRowStyle },
    { v: ach.label, s: totalRowStyle },
    {
      v: `Gelişim Önerisi: ${result.overallImprovements || "-"}`,
      s: {
        ...totalRowStyle,
        alignment: { horizontal: "left", vertical: "center", wrapText: true },
      },
    },
    "",
    "",
    "",
  ]);

  const ws1 = XLSXStyle.utils.aoa_to_sheet(sheet1Rows);
  ws1["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 10 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: 10 } },
    { s: { r: 3, c: 7 }, e: { r: 3, c: 10 } },
    { s: { r: 4, c: 7 }, e: { r: 4, c: 10 } },
    {
      s: { r: sheet1Rows.length - 1, c: 7 },
      e: { r: sheet1Rows.length - 1, c: 10 },
    },
  ];
  ws1["!cols"] = [
    { wch: 11 },
    { wch: 34 },
    { wch: 24 },
    { wch: 10 },
    { wch: 12 },
    { wch: 18 },
    { wch: 20 },
    { wch: 36 },
    { wch: 32 },
    { wch: 34 },
    { wch: 30 },
  ];
  XLSXStyle.utils.book_append_sheet(wb, ws1, "Soru ve Kazanım Analizi");

  // --- SAYFA 2: DEĞERLENDİRME LİSTESİ (RUBRİK) ALT KRİTER MATRİSİ ---
  const sheet2Rows: any[][] = [];
  sheet2Rows.push([
    {
      v: `${result.studentName} — MAARİF DEĞERLENDİRME LİSTESİ KARŞILAŞTIRMA MATRİSİ`,
      s: bannerTitleStyle,
    },
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  sheet2Rows.push([]);
  sheet2Rows.push([
    { v: "Soru No", s: headerStyle },
    { v: "Maarif Öğrenme Çıktısı", s: headerStyle },
    { v: "Değerlendirme Listesi Kriteri / Alt Basamak", s: headerStyle },
    { v: "Kriter Tam Puanı", s: headerStyle },
    { v: "Alınan Puan", s: headerStyle },
    { v: "Karşılanma Durumu", s: headerStyle },
    { v: "Öğrenci Cevabındaki Kanıt / Eksiklik Açıklaması", s: headerStyle },
  ]);

  result.questions.forEach((q) => {
    const breakdown: CriterionBreakdown[] =
      q.criteriaBreakdown && q.criteriaBreakdown.length > 0
        ? q.criteriaBreakdown
        : [
            ...(q.matchedCriteria || []).map((c) => ({
              criterion: c,
              maxPoints: 0,
              earnedPoints: 0,
              status: "tam",
              evidence: "Öğrenci cevabında karşılandı.",
            })),
            ...(q.missingCriteria || []).map((c) => ({
              criterion: c,
              maxPoints: 0,
              earnedPoints: 0,
              status: "eksik",
              evidence: "Öğrenci cevabında yer almıyor.",
            })),
          ];

    const outcomeLabel = q.learningOutcomeCode
      ? `[${q.learningOutcomeCode}] ${q.learningOutcome}`
      : q.learningOutcome;

    if (breakdown.length === 0) {
      sheet2Rows.push([
        { v: `Soru ${q.questionNo}`, s: cellBoldCenterStyle },
        { v: outcomeLabel || "-", s: cellStyleBase },
        { v: "Genel Rubrik Değerlendirmesi", s: cellStyleBase },
        { v: q.maxScore, s: cellCenterStyle },
        { v: q.awardedScore, s: cellBoldCenterStyle },
        { v: q.awardedScore >= q.maxScore ? "TAM" : "KISMİ", s: cellCenterStyle },
        { v: q.teacherFeedback || "-", s: cellStyleBase },
      ]);
    } else {
      breakdown.forEach((cb) => {
        const stNorm = String(cb.status || "").toLowerCase();
        const isFull = stNorm.includes("tam");
        const isPartial = stNorm.includes("kismi") || stNorm.includes("kısmi");
        const badgeBg = isFull ? "DCFCE7" : isPartial ? "FEF3C7" : "FFE4E6";
        const badgeFg = isFull ? "166534" : isPartial ? "92400E" : "9F1239";
        const badgeText = isFull
          ? "TAM KARŞILANDI"
          : isPartial
          ? "KISMİ KARŞILANDI"
          : "EKSİK / KARŞILANMADI";

        sheet2Rows.push([
          { v: `Soru ${q.questionNo}`, s: cellBoldCenterStyle },
          { v: outcomeLabel || "-", s: cellStyleBase },
          { v: cb.criterion || "-", s: cellStyleBase },
          { v: cb.maxPoints || "-", s: cellCenterStyle },
          { v: cb.earnedPoints ?? "-", s: cellBoldCenterStyle },
          {
            v: badgeText,
            s: {
              ...cellBoldCenterStyle,
              font: { bold: true, sz: 9, color: { rgb: badgeFg } },
              fill: { fgColor: { rgb: badgeBg } },
            },
          },
          { v: cb.evidence || "-", s: cellStyleBase },
        ]);
      });
    }
  });

  const ws2 = XLSXStyle.utils.aoa_to_sheet(sheet2Rows);
  ws2["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }];
  ws2["!cols"] = [
    { wch: 11 },
    { wch: 30 },
    { wch: 38 },
    { wch: 15 },
    { wch: 13 },
    { wch: 20 },
    { wch: 45 },
  ];
  XLSXStyle.utils.book_append_sheet(wb, ws2, "Değerlendirme Listesi Matrisi");

  const safeName = getSafeFileName(result.studentName || "Ogrenci");
  XLSXStyle.writeFile(wb, `${safeName}_Maarif_Analiz_Raporu.xlsx`);
}

/**
 * 2. SINIF GENELİ MODERN EXCEL ANALİZ TABLOSU (.xlsx)
 */
export function exportClassExcelReport(
  history: GradingResult[],
  institutionName = "EĞİTİM KURUMU"
) {
  if (!history || history.length === 0) return;

  const wb = XLSXStyle.utils.book_new();

  const questionMap = new Map<
    number,
    {
      questionNo: number;
      learningOutcomeCode: string;
      learningOutcome: string;
      processComponent: string;
      cognitiveLevel: string;
      maxScore: number;
    }
  >();
  history.forEach((h) => {
    (h.questions || []).forEach((q) => {
      if (!questionMap.has(q.questionNo)) {
        questionMap.set(q.questionNo, {
          questionNo: q.questionNo,
          learningOutcomeCode: q.learningOutcomeCode || `Ç.${q.questionNo}`,
          learningOutcome: q.learningOutcome || `Soru ${q.questionNo}`,
          processComponent: q.processComponent || "Çözümleme",
          cognitiveLevel: q.cognitiveLevel || "Basit Bilişsel Süreçler",
          maxScore: q.maxScore || 0,
        });
      }
    });
  });
  const sortedQuestions = Array.from(questionMap.values()).sort(
    (a, b) => a.questionNo - b.questionNo
  );

  const scores = history.map((h) => Number(h.totalScore) || 0);
  const avgScore =
    scores.length > 0
      ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
      : 0;
  const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
  const minScore = scores.length > 0 ? Math.min(...scores) : 0;
  const passCount = scores.filter((s) => s >= 50).length;
  const passRate =
    scores.length > 0 ? Math.round((passCount / scores.length) * 100) : 0;

  // --- SAYFA 1: SINIF DEĞERLENDİRME LİSTESİ VE PUAN TABLOSU ---
  const totalCols = 7 + sortedQuestions.length;
  const s1Rows: any[][] = [];

  const padRow = (arr: any[]) => {
    while (arr.length < totalCols) arr.push("");
    return arr;
  };

  s1Rows.push(
    padRow([
      {
        v: `${institutionName.toUpperCase()} — MAARİF YAZILI SINAV SINIF DEĞERLENDİRME LİSTESİ`,
        s: bannerTitleStyle,
      },
    ])
  );
  s1Rows.push(
    padRow([
      {
        v: `Öğrenci Sayısı: ${history.length} · Sınıf Ortalaması: ${avgScore} · Başarı Oranı (≥50p): %${passRate} · En Yüksek: ${maxScore} · En Düşük: ${minScore}`,
        s: bannerSubStyle,
      },
    ])
  );
  s1Rows.push([]);

  const s1Header: any[] = [
    { v: "Sıra", s: headerStyle },
    { v: "Öğrenci No", s: headerStyle },
    { v: "Ad Soyad", s: headerStyle },
    { v: "Sınıf", s: headerStyle },
  ];
  sortedQuestions.forEach((q) => {
    s1Header.push({
      v: `Soru ${q.questionNo}\n[${q.learningOutcomeCode}]\n(${q.maxScore}p)`,
      s: headerStyle,
    });
  });
  s1Header.push(
    { v: "Toplam Puan", s: headerStyle },
    { v: "Başarı Düzeyi", s: headerStyle },
    { v: "Bireysel Değerlendirme Özeti", s: headerStyle }
  );
  s1Rows.push(s1Header);

  const sortedHistory = [...history].sort(
    (a, b) => (Number(b.totalScore) || 0) - (Number(a.totalScore) || 0)
  );

  sortedHistory.forEach((item, idx) => {
    const ach = getAchievementInfo(item.totalScore);
    const row: any[] = [
      { v: idx + 1, s: cellCenterStyle },
      { v: item.studentNumber || "-", s: cellBoldCenterStyle },
      {
        v: item.studentName || "-",
        s: { ...cellStyleBase, font: { bold: true, sz: 10, color: { rgb: "0F172A" } } },
      },
      { v: item.className || "-", s: cellCenterStyle },
    ];

    sortedQuestions.forEach((sq) => {
      const found = (item.questions || []).find(
        (q) => q.questionNo === sq.questionNo
      );
      const val = found ? found.awardedScore : 0;
      row.push({ v: val, s: cellCenterStyle });
    });

    row.push(
      {
        v: item.totalScore,
        s: {
          ...cellBoldCenterStyle,
          font: { bold: true, sz: 11, color: { rgb: "312E81" } },
          fill: { fgColor: { rgb: "EEF2FF" } },
        },
      },
      {
        v: ach.label,
        s: {
          ...cellBoldCenterStyle,
          font: { bold: true, sz: 9, color: { rgb: ach.hexText } },
          fill: { fgColor: { rgb: ach.hexBg } },
        },
      },
      {
        v: `Güçlü: ${item.overallStrengths || "-"} | Gelişim: ${item.overallImprovements || "-"}`,
        s: cellStyleBase,
      }
    );

    s1Rows.push(row);
  });

  const avgRow: any[] = [
    { v: "", s: sectionHeaderStyle },
    { v: "", s: sectionHeaderStyle },
    { v: "SINIF SORU ORTALAMASI", s: sectionHeaderStyle },
    { v: "-", s: { ...sectionHeaderStyle, alignment: { horizontal: "center" } } },
  ];
  sortedQuestions.forEach((sq) => {
    const qScores = history.map((h) => {
      const f = (h.questions || []).find((q) => q.questionNo === sq.questionNo);
      return f ? Number(f.awardedScore) || 0 : 0;
    });
    const qAvg =
      qScores.length > 0
        ? Number((qScores.reduce((a, b) => a + b, 0) / qScores.length).toFixed(1))
        : 0;
    avgRow.push({
      v: qAvg,
      s: { ...cellBoldCenterStyle, fill: { fgColor: { rgb: "F1F5F9" } } },
    });
  });
  avgRow.push(
    {
      v: avgScore,
      s: {
        ...cellBoldCenterStyle,
        fill: { fgColor: { rgb: "E0E7FF" } },
        font: { bold: true, sz: 11, color: { rgb: "312E81" } },
      },
    },
    {
      v: `Ortalama Başarı: %${Math.round(avgScore)}`,
      s: { ...cellBoldCenterStyle, fill: { fgColor: { rgb: "F1F5F9" } } },
    },
    { v: "", s: sectionHeaderStyle }
  );
  s1Rows.push(avgRow);

  const pctRow: any[] = [
    { v: "", s: sectionHeaderStyle },
    { v: "", s: sectionHeaderStyle },
    { v: "ÖĞRENME ÇIKTISI BAŞARI ORANI (%)", s: sectionHeaderStyle },
    { v: "-", s: { ...sectionHeaderStyle, alignment: { horizontal: "center" } } },
  ];
  sortedQuestions.forEach((sq) => {
    const qScores = history.map((h) => {
      const f = (h.questions || []).find((q) => q.questionNo === sq.questionNo);
      return f ? Number(f.awardedScore) || 0 : 0;
    });
    const qAvg =
      qScores.length > 0
        ? qScores.reduce((a, b) => a + b, 0) / qScores.length
        : 0;
    const qPct = sq.maxScore > 0 ? Math.round((qAvg / sq.maxScore) * 100) : 0;
    const qAch = getAchievementInfo(qPct);
    pctRow.push({
      v: `%${qPct}`,
      s: {
        ...cellBoldCenterStyle,
        fill: { fgColor: { rgb: qAch.hexBg } },
        font: { bold: true, sz: 10, color: { rgb: qAch.hexText } },
      },
    });
  });
  pctRow.push(
    { v: `%${Math.round(avgScore)}`, s: cellBoldCenterStyle },
    { v: `Geçme Oranı: %${passRate}`, s: cellBoldCenterStyle },
    { v: "", s: sectionHeaderStyle }
  );
  s1Rows.push(pctRow);

  const wsClass1 = XLSXStyle.utils.aoa_to_sheet(s1Rows);
  wsClass1["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: totalCols - 1 } },
  ];
  wsClass1["!cols"] = [
    { wch: 7 },
    { wch: 13 },
    { wch: 24 },
    { wch: 11 },
    ...sortedQuestions.map(() => ({ wch: 13 })),
    { wch: 14 },
    { wch: 18 },
    { wch: 48 },
  ];
  XLSXStyle.utils.book_append_sheet(wb, wsClass1, "Sınıf Değerlendirme Listesi");

  // --- SAYFA 2: MAARİF ÖĞRENME ÇIKTISI VE BİLİŞSEL SÜREÇ MATRİSİ ---
  const s2Rows: any[][] = [];
  s2Rows.push([
    {
      v: `${institutionName.toUpperCase()} — MAARİF ÖĞRENME ÇIKTISI VE BİLİŞSEL SÜREÇ ANALİZ MATRİSİ`,
      s: bannerTitleStyle,
    },
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  s2Rows.push([]);
  s2Rows.push([
    { v: "Soru No", s: headerStyle },
    { v: "Öğrenme Çıktısı Kodu & Tanımı", s: headerStyle },
    { v: "Bilişsel Düzey & Süreç Bileşeni", s: headerStyle },
    { v: "Tam Puan", s: headerStyle },
    { v: "Sınıf Ortalaması", s: headerStyle },
    { v: "Başarı Oranı (%)", s: headerStyle },
    { v: "Tam Puan Alan", s: headerStyle },
    { v: "Kısmi Puan Alan", s: headerStyle },
    { v: "0 Puan Alan", s: headerStyle },
    { v: "Pedagojik Değerlendirme", s: headerStyle },
  ]);

  sortedQuestions.forEach((sq) => {
    let fullCount = 0;
    let partialCount = 0;
    let zeroCount = 0;
    let sum = 0;

    history.forEach((h) => {
      const f = (h.questions || []).find((q) => q.questionNo === sq.questionNo);
      const sc = f ? Number(f.awardedScore) || 0 : 0;
      sum += sc;
      if (sc >= sq.maxScore && sq.maxScore > 0) fullCount++;
      else if (sc > 0) partialCount++;
      else zeroCount++;
    });

    const avg = history.length > 0 ? Number((sum / history.length).toFixed(2)) : 0;
    const pct = sq.maxScore > 0 ? Math.round((avg / sq.maxScore) * 100) : 0;
    const ach = getAchievementInfo(pct);
    const comment =
      pct >= 75
        ? "Öğrenme çıktısı sınıf genelinde yüksek oranda edinilmiştir."
        : pct >= 50
        ? "Öğrenme çıktısı kısmen edinilmiştir; örnek uygulamalarla pekiştirilmelidir."
        : "Kritik öğrenme çıktısı eksiği tespit edildi; telafi çalışması önerilir.";

    s2Rows.push([
      { v: `Soru ${sq.questionNo}`, s: cellBoldCenterStyle },
      { v: `[${sq.learningOutcomeCode}] ${sq.learningOutcome}`, s: cellStyleBase },
      { v: `${sq.cognitiveLevel} · ${sq.processComponent}`, s: cellCenterStyle },
      { v: sq.maxScore, s: cellCenterStyle },
      { v: avg, s: cellBoldCenterStyle },
      {
        v: makeVisualBar(pct),
        s: {
          ...cellBoldCenterStyle,
          fill: { fgColor: { rgb: ach.hexBg } },
          font: { bold: true, sz: 9, color: { rgb: ach.hexText } },
        },
      },
      { v: `${fullCount} Öğr.`, s: cellCenterStyle },
      { v: `${partialCount} Öğr.`, s: cellCenterStyle },
      { v: `${zeroCount} Öğr.`, s: cellCenterStyle },
      { v: comment, s: cellStyleBase },
    ]);
  });

  const wsClass2 = XLSXStyle.utils.aoa_to_sheet(s2Rows);
  wsClass2["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 9 } }];
  wsClass2["!cols"] = [
    { wch: 11 },
    { wch: 36 },
    { wch: 24 },
    { wch: 11 },
    { wch: 15 },
    { wch: 20 },
    { wch: 14 },
    { wch: 14 },
    { wch: 13 },
    { wch: 42 },
  ];
  XLSXStyle.utils.book_append_sheet(wb, wsClass2, "Öğrenme Çıktısı Analizi");

  XLSXStyle.writeFile(
    wb,
    `Maarif_Sinif_Degerlendirme_Listesi_${history.length}_Ogrenci.xlsx`
  );
}

/**
 * 3. BİREYSEL ÖĞRENCİ PDF ANALİZ KARNESİ (.pdf)
 */
export function exportStudentPdfReport(
  result: GradingResult,
  institutionName = "EĞİTİM KURUMU"
) {
  const maxTotal =
    result.maxTotalScore ||
    result.questions.reduce((acc, q) => acc + (Number(q.maxScore) || 0), 0) ||
    100;
  const pct = maxTotal > 0 ? Math.round((result.totalScore / maxTotal) * 100) : 0;
  const ach = getAchievementInfo(pct);

  const questionTableBody: any[][] = [
    [
      { text: "Soru", style: "tableHeader", alignment: "center" },
      { text: "Maarif Öğrenme Çıktısı & Bilişsel Süreç", style: "tableHeader" },
      { text: "Puan", style: "tableHeader", alignment: "center" },
      { text: "Öğrenci Cevabı (OCR) & Beklenen Cevap", style: "tableHeader" },
      { text: "Değerlendirme Gerekçesi & Hata Analizi", style: "tableHeader" },
    ],
  ];

  result.questions.forEach((q) => {
    const qPct = q.maxScore > 0 ? Math.round((q.awardedScore / q.maxScore) * 100) : 0;
    const outcomeText = q.learningOutcomeCode
      ? `[${q.learningOutcomeCode}] ${q.learningOutcome}`
      : q.learningOutcome;

    questionTableBody.push([
      {
        text: `Soru ${q.questionNo}`,
        bold: true,
        alignment: "center",
        fontSize: 9,
        margin: [0, 3, 0, 3],
      },
      {
        stack: [
          { text: outcomeText || "-", bold: true, fontSize: 8.5, color: "#0f172a" },
          {
            text: [q.cognitiveLevel, q.processComponent].filter(Boolean).join(" · "),
            fontSize: 7.5,
            color: "#4338ca",
            margin: [0, 2, 0, 0],
          },
        ],
        margin: [0, 2, 0, 2],
      },
      {
        stack: [
          {
            text: `${q.awardedScore} / ${q.maxScore}`,
            bold: true,
            fontSize: 10,
            color: "#312e81",
            alignment: "center",
          },
          {
            text: `%${qPct}`,
            fontSize: 8,
            color: qPct >= 75 ? "#166534" : qPct >= 40 ? "#92400e" : "#9f1239",
            alignment: "center",
            bold: true,
          },
        ],
        margin: [0, 2, 0, 2],
      },
      {
        stack: [
          { text: "Öğrenci Cevabı:", bold: true, fontSize: 7.5, color: "#334155" },
          {
            text: q.transcribedAnswer || "-",
            fontSize: 8,
            color: "#0f172a",
            margin: [0, 1, 0, 4],
          },
          ...(q.expectedIdealAnswer
            ? [
                {
                  text: "Beklenen Cevap:",
                  bold: true,
                  fontSize: 7.5,
                  color: "#4338ca",
                },
                {
                  text: q.expectedIdealAnswer,
                  fontSize: 7.5,
                  color: "#312e81",
                },
              ]
            : []),
        ],
        margin: [0, 2, 0, 2],
      },
      {
        stack: [
          ...(q.errorType && q.errorType !== "Yok"
            ? [
                {
                  text: `Tespit: ${q.errorType}`,
                  bold: true,
                  fontSize: 7.5,
                  color: "#9f1239",
                  margin: [0, 0, 0, 2],
                },
              ]
            : []),
          {
            text: q.teacherFeedback || "-",
            fontSize: 8,
            color: "#1e293b",
          },
          ...(q.remediationTip
            ? [
                {
                  text: `Öneri: ${q.remediationTip}`,
                  fontSize: 7.5,
                  color: "#0f766e",
                  margin: [0, 2, 0, 0],
                },
              ]
            : []),
        ],
        margin: [0, 2, 0, 2],
      },
    ]);
  });

  const criteriaTableBody: any[][] = [
    [
      { text: "Soru", style: "tableHeader", alignment: "center" },
      { text: "Değerlendirme Listesi Kriteri / Alt Basamak", style: "tableHeader" },
      { text: "Puan", style: "tableHeader", alignment: "center" },
      { text: "Durum", style: "tableHeader", alignment: "center" },
      { text: "Öğrenci Cevabındaki Kanıt / Eksiklik Açıklaması", style: "tableHeader" },
    ],
  ];

  result.questions.forEach((q) => {
    const breakdown = q.criteriaBreakdown || [];
    if (breakdown.length > 0) {
      breakdown.forEach((cb) => {
        const stNorm = String(cb.status || "").toLowerCase();
        const isFull = stNorm.includes("tam");
        const isPartial = stNorm.includes("kismi") || stNorm.includes("kısmi");
        criteriaTableBody.push([
          { text: `S.${q.questionNo}`, bold: true, fontSize: 8, alignment: "center" },
          { text: cb.criterion || "-", fontSize: 8 },
          {
            text: `${cb.earnedPoints ?? 0} / ${cb.maxPoints ?? 0}`,
            bold: true,
            fontSize: 8,
            alignment: "center",
          },
          {
            text: isFull ? "TAM" : isPartial ? "KISMİ" : "EKSİK",
            bold: true,
            fontSize: 7.5,
            alignment: "center",
            color: isFull ? "#166534" : isPartial ? "#92400e" : "#9f1239",
          },
          { text: cb.evidence || "-", fontSize: 8, color: "#334155" },
        ]);
      });
    }
  });

  const docDefinition: any = {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: [28, 28, 28, 32],
    content: [
      {
        table: {
          widths: ["*", "auto"],
          body: [
            [
              {
                stack: [
                  {
                    text: institutionName.toUpperCase(),
                    fontSize: 9,
                    bold: true,
                    color: "#4338ca",
                  },
                  {
                    text: "TÜRKİYE YÜZYILI MAARİF MODELİ YAZILI SINAV ANALİZ KARNESİ",
                    fontSize: 13,
                    bold: true,
                    color: "#0f172a",
                    margin: [0, 2, 0, 2],
                  },
                  {
                    text: `${result.subjectName || "Açık Uçlu Yazılı"} · ${result.gradeLevel || ""} · ${result.scenarioNo || "Senaryo 1"} · ${result.gradedAt || new Date().toLocaleDateString("tr-TR")}`,
                    fontSize: 8.5,
                    color: "#64748b",
                  },
                ],
                border: [false, false, false, true],
                borderColor: ["", "", "", "#cbd5e1"],
                margin: [0, 0, 0, 6],
              },
              {
                stack: [
                  {
                    text: "TOPLAM PUAN",
                    fontSize: 7.5,
                    bold: true,
                    color: "#4338ca",
                    alignment: "center",
                  },
                  {
                    text: `${result.totalScore} / ${maxTotal}`,
                    fontSize: 16,
                    bold: true,
                    color: "#312e81",
                    alignment: "center",
                  },
                  {
                    text: `%${pct} · ${ach.label}`,
                    fontSize: 8,
                    bold: true,
                    color: "#1e293b",
                    alignment: "center",
                  },
                ],
                fillColor: "#eef2ff",
                border: [false, false, false, true],
                borderColor: ["", "", "", "#cbd5e1"],
                margin: [8, 2, 8, 6],
              },
            ],
          ],
        },
        margin: [0, 0, 0, 10],
      },

      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          body: [
            [
              {
                text: [
                  { text: "Öğrenci Adı Soyadı: ", color: "#64748b", fontSize: 8.5 },
                  { text: result.studentName || "-", bold: true, fontSize: 9.5, color: "#0f172a" },
                ],
              },
              {
                text: [
                  { text: "Öğrenci No: ", color: "#64748b", fontSize: 8.5 },
                  { text: result.studentNumber || "-", bold: true, fontSize: 9.5 },
                ],
              },
              {
                text: [
                  { text: "Sınıf / Şube: ", color: "#64748b", fontSize: 8.5 },
                  { text: result.className || "-", bold: true, fontSize: 9.5 },
                ],
              },
              {
                text: [
                  { text: "Senaryo: ", color: "#64748b", fontSize: 8.5 },
                  { text: `${result.scenarioNo || "Senaryo 1"} (${result.questions.length} Soru)`, bold: true, fontSize: 9.5 },
                ],
              },
            ],
          ],
        },
        layout: {
          fillColor: () => "#f8fafc",
          hLineColor: () => "#e2e8f0",
          vLineColor: () => "#e2e8f0",
          paddingLeft: () => 8,
          paddingRight: () => 8,
          paddingTop: () => 6,
          paddingBottom: () => 6,
        },
        margin: [0, 0, 0, 10],
      },

      {
        columns: [
          {
            width: "50%",
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    stack: [
                      {
                        text: "Güçlü Yönler ve Edinilen Öğrenme Çıktıları",
                        bold: true,
                        fontSize: 8.5,
                        color: "#166534",
                        margin: [0, 0, 0, 3],
                      },
                      {
                        text: result.overallStrengths || "-",
                        fontSize: 8,
                        color: "#14532d",
                      },
                    ],
                  },
                ],
              ],
            },
            layout: {
              fillColor: () => "#f0fdf4",
              hLineColor: () => "#bbf7d0",
              vLineColor: () => "#bbf7d0",
              paddingLeft: () => 8,
              paddingRight: () => 8,
              paddingTop: () => 6,
              paddingBottom: () => 6,
            },
          },
          {
            width: "50%",
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    stack: [
                      {
                        text: "Geliştirilmesi Gereken Alanlar ve Öneriler",
                        bold: true,
                        fontSize: 8.5,
                        color: "#92400e",
                        margin: [0, 0, 0, 3],
                      },
                      {
                        text: result.overallImprovements || "-",
                        fontSize: 8,
                        color: "#78350f",
                      },
                    ],
                  },
                ],
              ],
            },
            layout: {
              fillColor: () => "#fffbeb",
              hLineColor: () => "#fde68a",
              vLineColor: () => "#fde68a",
              paddingLeft: () => 8,
              paddingRight: () => 8,
              paddingTop: () => 6,
              paddingBottom: () => 6,
            },
          },
        ],
        columnGap: 8,
        margin: [0, 0, 0, 12],
      },

      {
        text: "1. Soru, Öğrenme Çıktısı ve Bilişsel Süreç Analiz Tablosu",
        fontSize: 10,
        bold: true,
        color: "#0f172a",
        margin: [0, 0, 0, 5],
      },
      {
        table: {
          headerRows: 1,
          widths: [36, 115, 42, "*", 115],
          body: questionTableBody,
        },
        layout: {
          fillColor: (rowIndex: number) =>
            rowIndex === 0 ? "#1e293b" : rowIndex % 2 === 0 ? "#f8fafc" : "#ffffff",
          hLineColor: () => "#cbd5e1",
          vLineColor: () => "#cbd5e1",
          paddingLeft: () => 5,
          paddingRight: () => 5,
          paddingTop: () => 4,
          paddingBottom: () => 4,
        },
        margin: [0, 0, 0, 12],
      },

      ...(criteriaTableBody.length > 1
        ? [
            {
              text: "2. Değerlendirme Listesi (Rubrik) Alt Kriter Karşılaştırma Matrisi",
              fontSize: 10,
              bold: true,
              color: "#0f172a",
              margin: [0, 2, 0, 5],
            },
            {
              table: {
                headerRows: 1,
                widths: [30, 150, 42, 42, "*"],
                body: criteriaTableBody,
              },
              layout: {
                fillColor: (rowIndex: number) =>
                  rowIndex === 0
                    ? "#334155"
                    : rowIndex % 2 === 0
                    ? "#f8fafc"
                    : "#ffffff",
                hLineColor: () => "#cbd5e1",
                vLineColor: () => "#cbd5e1",
                paddingLeft: () => 5,
                paddingRight: () => 5,
                paddingTop: () => 3,
                paddingBottom: () => 3,
              },
              margin: [0, 0, 0, 14],
            },
          ]
        : []),

      {
        columns: [
          {
            width: "50%",
            text: "Ders Öğretmeni\nİmza",
            alignment: "center",
            fontSize: 8.5,
            color: "#475569",
            margin: [0, 12, 0, 0],
          },
          {
            width: "50%",
            text: "Okul Müdürü\nOnay / İmza",
            alignment: "center",
            fontSize: 8.5,
            color: "#475569",
            margin: [0, 12, 0, 0],
          },
        ],
      },
    ],
    styles: {
      tableHeader: {
        bold: true,
        fontSize: 8.5,
        color: "#ffffff",
      },
    },
    defaultStyle: {
      font: "Roboto",
    },
  };

  const safeName = getSafeFileName(result.studentName || "Ogrenci");
  anyPdfMake.createPdf(docDefinition).download(`${safeName}_Maarif_Analiz_Karnesi.pdf`);
}

/**
 * 4. SINIF GENELİ PDF ANALİZ RAPORU (.pdf - Yatay A4)
 */
export function exportClassPdfReport(
  history: GradingResult[],
  institutionName = "EĞİTİM KURUMU"
) {
  if (!history || history.length === 0) return;

  const questionMap = new Map<
    number,
    {
      questionNo: number;
      learningOutcomeCode: string;
      learningOutcome: string;
      processComponent: string;
      cognitiveLevel: string;
      maxScore: number;
    }
  >();
  history.forEach((h) => {
    (h.questions || []).forEach((q) => {
      if (!questionMap.has(q.questionNo)) {
        questionMap.set(q.questionNo, {
          questionNo: q.questionNo,
          learningOutcomeCode: q.learningOutcomeCode || `Ç.${q.questionNo}`,
          learningOutcome: q.learningOutcome || `Soru ${q.questionNo}`,
          processComponent: q.processComponent || "Çözümleme",
          cognitiveLevel: q.cognitiveLevel || "Basit Bilişsel Süreçler",
          maxScore: q.maxScore || 0,
        });
      }
    });
  });
  const sortedQuestions = Array.from(questionMap.values()).sort(
    (a, b) => a.questionNo - b.questionNo
  );

  const scores = history.map((h) => Number(h.totalScore) || 0);
  const avgScore =
    scores.length > 0
      ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
      : 0;
  const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
  const minScore = scores.length > 0 ? Math.min(...scores) : 0;
  const passCount = scores.filter((s) => s >= 50).length;
  const passRate =
    scores.length > 0 ? Math.round((passCount / scores.length) * 100) : 0;

  const outcomeBody: any[][] = [
    [
      { text: "Soru", style: "tableHeader", alignment: "center" },
      { text: "Maarif Öğrenme Çıktısı Kodu & Tanımı", style: "tableHeader" },
      { text: "Bilişsel Düzey & Süreç", style: "tableHeader", alignment: "center" },
      { text: "Tam Puan", style: "tableHeader", alignment: "center" },
      { text: "Sınıf Ort.", style: "tableHeader", alignment: "center" },
      { text: "Başarı (%)", style: "tableHeader", alignment: "center" },
      { text: "Tam / Kısmi / 0", style: "tableHeader", alignment: "center" },
      { text: "Pedagojik Değerlendirme", style: "tableHeader" },
    ],
  ];

  sortedQuestions.forEach((sq) => {
    let full = 0;
    let partial = 0;
    let zero = 0;
    let sum = 0;
    history.forEach((h) => {
      const f = (h.questions || []).find((q) => q.questionNo === sq.questionNo);
      const sc = f ? Number(f.awardedScore) || 0 : 0;
      sum += sc;
      if (sc >= sq.maxScore && sq.maxScore > 0) full++;
      else if (sc > 0) partial++;
      else zero++;
    });
    const avg = history.length > 0 ? Number((sum / history.length).toFixed(1)) : 0;
    const pct = sq.maxScore > 0 ? Math.round((avg / sq.maxScore) * 100) : 0;
    outcomeBody.push([
      { text: `S.${sq.questionNo}`, bold: true, fontSize: 8.5, alignment: "center" },
      { text: `[${sq.learningOutcomeCode}] ${sq.learningOutcome}`, fontSize: 8.5 },
      {
        text: `${sq.cognitiveLevel}\n(${sq.processComponent})`,
        fontSize: 7.5,
        alignment: "center",
      },
      { text: `${sq.maxScore}`, fontSize: 8.5, alignment: "center" },
      { text: `${avg}`, bold: true, fontSize: 8.5, alignment: "center" },
      {
        text: `%${pct}`,
        bold: true,
        fontSize: 8.5,
        alignment: "center",
        color: pct >= 75 ? "#166534" : pct >= 50 ? "#92400e" : "#9f1239",
      },
      { text: `${full} / ${partial} / ${zero}`, fontSize: 8, alignment: "center" },
      {
        text:
          pct >= 75
            ? "Öğrenme çıktısı yüksek düzeyde edinildi."
            : pct >= 50
            ? "Kısmi kazanım; pekiştirme önerilir."
            : "Öğrenme çıktısı eksiği var; telafi yapılmalı.",
        fontSize: 8,
      },
    ]);
  });

  const studentHeader: any[] = [
    { text: "#", style: "tableHeader", alignment: "center" },
    { text: "Öğr. No", style: "tableHeader", alignment: "center" },
    { text: "Ad Soyad", style: "tableHeader" },
    { text: "Sınıf", style: "tableHeader", alignment: "center" },
    ...sortedQuestions.map((sq) => ({
      text: `S.${sq.questionNo}\n(${sq.maxScore}p)`,
      style: "tableHeader",
      alignment: "center",
    })),
    { text: "Toplam", style: "tableHeader", alignment: "center" },
    { text: "Düzey", style: "tableHeader", alignment: "center" },
    { text: "Değerlendirme Özeti", style: "tableHeader" },
  ];

  const studentBody: any[][] = [studentHeader];
  const sortedHistory = [...history].sort(
    (a, b) => (Number(b.totalScore) || 0) - (Number(a.totalScore) || 0)
  );

  sortedHistory.forEach((item, idx) => {
    const ach = getAchievementInfo(item.totalScore);
    studentBody.push([
      { text: `${idx + 1}`, fontSize: 8, alignment: "center" },
      { text: item.studentNumber || "-", fontSize: 8, bold: true, alignment: "center" },
      { text: item.studentName || "-", fontSize: 8.5, bold: true },
      { text: item.className || "-", fontSize: 8, alignment: "center" },
      ...sortedQuestions.map((sq) => {
        const f = (item.questions || []).find((q) => q.questionNo === sq.questionNo);
        return {
          text: `${f ? f.awardedScore : 0}`,
          fontSize: 8,
          alignment: "center",
        };
      }),
      {
        text: `${item.totalScore}`,
        fontSize: 9,
        bold: true,
        color: "#312e81",
        alignment: "center",
      },
      { text: ach.label, fontSize: 7.5, bold: true, alignment: "center" },
      { text: item.overallStrengths || "-", fontSize: 7.5, color: "#334155" },
    ]);
  });

  const docDefinition: any = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [24, 24, 24, 28],
    content: [
      {
        text: `${institutionName.toUpperCase()} — MAARİF YAZILI SINAV SINIF DEĞERLENDİRME LİSTESİ VE KAZANIM RAPORU`,
        fontSize: 13,
        bold: true,
        color: "#0f172a",
      },
      {
        text: `Değerlendirilen Öğrenci: ${history.length} · Sınıf Ortalaması: ${avgScore} · Başarı Oranı (≥50p): %${passRate} · En Yüksek: ${maxScore} · En Düşük: ${minScore} · Tarih: ${new Date().toLocaleDateString("tr-TR")}`,
        fontSize: 9,
        color: "#4338ca",
        bold: true,
        margin: [0, 3, 0, 10],
      },
      {
        text: "1. Maarif Öğrenme Çıktısı (Kazanım) ve Bilişsel Süreç Analiz Tablosu",
        fontSize: 10,
        bold: true,
        margin: [0, 0, 0, 4],
      },
      {
        table: {
          headerRows: 1,
          widths: [30, "*", 95, 38, 42, 45, 62, 155],
          body: outcomeBody,
        },
        layout: {
          fillColor: (rowIndex: number) =>
            rowIndex === 0 ? "#1e293b" : rowIndex % 2 === 0 ? "#f8fafc" : "#ffffff",
          hLineColor: () => "#cbd5e1",
          vLineColor: () => "#cbd5e1",
        },
        margin: [0, 0, 0, 12],
      },
      {
        text: "2. Sınıf Değerlendirme Listesi ve Öğrenci Puan Çizelgesi",
        fontSize: 10,
        bold: true,
        margin: [0, 2, 0, 4],
      },
      {
        table: {
          headerRows: 1,
          widths: [
            22,
            45,
            110,
            42,
            ...sortedQuestions.map(() => 34),
            42,
            75,
            "*",
          ],
          body: studentBody,
        },
        layout: {
          fillColor: (rowIndex: number) =>
            rowIndex === 0 ? "#312e81" : rowIndex % 2 === 0 ? "#f8fafc" : "#ffffff",
          hLineColor: () => "#cbd5e1",
          vLineColor: () => "#cbd5e1",
        },
      },
    ],
    styles: {
      tableHeader: {
        bold: true,
        fontSize: 8,
        color: "#ffffff",
      },
    },
    defaultStyle: {
      font: "Roboto",
    },
  };

  anyPdfMake
    .createPdf(docDefinition)
    .download(`Maarif_Sinif_Degerlendirme_Listesi_${history.length}_Ogrenci.pdf`);
}
