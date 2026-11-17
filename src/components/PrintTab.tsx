import React, { useState, useMemo } from 'react';
import { Exam, Student } from '../types';
import { Icons } from './Icons';
import { LocalQRCode } from './LocalQRCode';
import { DEFAULT_OMR, OPTS_4, OPTS_5, getQuestionsLayout, isTytExam, isAytExam, getTotalQuestions } from '../constants';

interface PrintLayoutProps {
  exam: Exam;
  isColorMode: boolean;
  student: Student | null;
}

export function PrintLayout({ exam, isColorMode, student }: PrintLayoutProps) {
  const options = exam.optionsCount === 4 ? OPTS_4 : OPTS_5;
  const isTyt = isTytExam(exam);
  const isAyt = isAytExam(exam);

  // Kişiye özel karekodlu optik form düzeni
  const renderOMR = {
    ...DEFAULT_OMR,
    infoBox: { ...DEFAULT_OMR.infoBox, h: 35 },
    qBox: { ...DEFAULT_OMR.qBox, y: 65 }
  };

  const { items: layoutItems, finalQBoxH, isSplit, hasFourSections } = getQuestionsLayout(exam, renderOMR) as any;

  const themeColor = isColorMode ? '#ef4444' : '#000000';
  const themeBg = isColorMode ? '#fef2f2' : '#e5e7eb';

  const studentName = student?.name || "...................................................";
  const studentNo = student?.no ? String(student.no) : "...................";
  const studentClass = student ? `${student.classStr || ''} / ${student.sectionStr || ''}` : "...................";
  const qrData = student
    ? `E:${exam.id}|N:${student.no}`
    : `E:${exam.id}|N:1001`;

  return (
    <div
      className="optik-page bg-white text-black font-sans relative select-none"
      style={{
        width: '210mm',
        height: '297mm',
        ['--print-color' as any]: themeColor,
        ['--print-bg' as any]: themeBg
      }}
    >
      {/* 4 Köşe Siyah Optik Çapa İşaretleri (Kamera Hizalama İçin) */}
      <div className="anchor-mark" style={{ left: `${DEFAULT_OMR.anchorMargin}mm`, top: `${DEFAULT_OMR.anchorMargin}mm` }} />
      <div className="anchor-mark" style={{ left: `${DEFAULT_OMR.paperW - DEFAULT_OMR.anchorMargin}mm`, top: `${DEFAULT_OMR.anchorMargin}mm` }} />
      <div className="anchor-mark" style={{ left: `${DEFAULT_OMR.anchorMargin}mm`, top: `${DEFAULT_OMR.paperH - DEFAULT_OMR.anchorMargin}mm` }} />
      <div className="anchor-mark" style={{ left: `${DEFAULT_OMR.paperW - DEFAULT_OMR.anchorMargin}mm`, top: `${DEFAULT_OMR.paperH - DEFAULT_OMR.anchorMargin}mm` }} />

      {/* Sınav ve Kurum Üst Başlığı */}
      <div
        className="absolute border-[2px] print-border bg-gray-50 flex items-center justify-between px-3 py-1"
        style={{ left: `${renderOMR.header.x}mm`, top: `${renderOMR.header.y}mm`, width: `${renderOMR.header.w}mm`, height: `${renderOMR.header.h}mm` }}
      >
        <img
          src={exam.logo || "logo.png"}
          alt="Logo"
          style={{ maxHeight: '7mm', maxWidth: '20mm', objectFit: 'contain', filter: 'grayscale(100%)' }}
          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
        />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
          <h1 className="text-[12px] font-black uppercase tracking-widest print-text leading-none">{exam.institution || "EĞİTİM KURUMU"}</h1>
          <h2 className="text-[8px] font-bold text-slate-600 mt-0.5 tracking-wider">{exam.name} • {exam.date || "Tarih Yok"}</h2>
        </div>
      </div>

      {/* Öğrenciye Özel Karekodlu Bilgi Kutusu */}
      <div
        className="absolute border-[2px] print-border bg-white"
        style={{ left: `${renderOMR.infoBox.x}mm`, top: `${renderOMR.infoBox.y}mm`, width: `${renderOMR.infoBox.w}mm`, height: `${renderOMR.infoBox.h}mm` }}
      >
        <div className="flex p-3 gap-3 h-full items-center justify-between relative">
          <div className="flex-1 flex flex-col justify-center gap-1 pl-3">
            <div className="text-[13px] font-black tracking-tight text-slate-900 truncate max-w-[100mm]">{studentName}</div>
            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600 mt-0.5">
              <div>ÖĞRENCİ NO: <span className="text-[12px] text-black font-mono font-bold">{studentNo}</span></div>
              <div>SINIF / ŞUBE: <span className="text-[12px] text-black font-bold">{studentClass}</span></div>
            </div>
            <div className="text-[7.5px] text-slate-400 font-medium">
              * Kodlamalarınızı kurşun kalemle, dairelerin dışına taşırmadan yapınız.
            </div>
          </div>

          {/* Kitapçık Türü (Öğrencinin kodlayabilmesi için hazır işaretli basılmaz, boş bırakılır) */}
          <div className="absolute text-[8px] font-bold text-center w-[30mm] -translate-x-1/2" style={{ left: '145.5mm', top: '7.5mm' }}>
            KİTAPÇIK TÜRÜ
          </div>
          {["A", "B", "C", "D"].map((b, idx) => {
            const bx = 135 + (idx * 7);
            const by = 18;
            return (
              <div
                key={b}
                className="info-bubble absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${bx}mm`, top: `${by}mm` }}
              >
                {b}
              </div>
            );
          })}

          {/* Öğrenci Karekodu (Otomatik Eşleşme İçin) */}
          <div className="absolute right-[5mm] top-[5mm] w-[25mm] h-[25mm] flex flex-col items-center justify-center border-2 border-black p-1 bg-white">
            <LocalQRCode data={qrData} size={150} />
          </div>
        </div>
      </div>

      {/* Soru ve Cevap Optik Kabarcık Alanı */}
      <div
        className="absolute border-[2px] print-border bg-white"
        style={{ left: `${renderOMR.qBox.x}mm`, top: `${renderOMR.qBox.y}mm`, width: `${renderOMR.qBox.w}mm`, height: `${finalQBoxH}mm` }}
      >
        {/* Bölüm Başlık Şeritleri (TYT / AYT 4 Bölüm veya Standart Split Mod) */}
        {hasFourSections ? (
          <>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[7px] tracking-wider uppercase border print-border rounded-xs px-1 text-center truncate"
              style={{ left: '1mm', width: '45.5mm' }}
            >
              {isTyt ? '1. TÜRKÇE TESTİ' : isAyt ? '1. EDEBİYAT - SOS-1' : '1. TEST ALANI'}
            </div>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[7px] tracking-wider uppercase border print-border rounded-xs px-1 text-center truncate"
              style={{ left: '48.5mm', width: '45.5mm' }}
            >
              {isTyt ? '2. SOSYAL BİLİMLER' : isAyt ? '2. SOSYAL BİLİMLER-2' : '2. TEST ALANI'}
            </div>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[7px] tracking-wider uppercase border print-border rounded-xs px-1 text-center truncate"
              style={{ left: '96mm', width: '45.5mm' }}
            >
              {isTyt ? '3. TEMEL MATEMATİK' : isAyt ? '3. MATEMATİK TESTİ' : '3. TEST ALANI'}
            </div>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[7px] tracking-wider uppercase border print-border rounded-xs px-1 text-center truncate"
              style={{ left: '143.5mm', width: '45.5mm' }}
            >
              {isTyt ? '4. FEN BİLİMLERİ' : isAyt ? '4. FEN BİLİMLERİ' : '4. TEST ALANI'}
            </div>
          </>
        ) : isSplit ? (
          <>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[8px] tracking-wider uppercase border print-border rounded-sm"
              style={{ left: '1mm', width: '92.5mm' }}
            >
              1. BÖLÜM (SÖZEL ALAN)
            </div>
            <div
              className="absolute top-[1.2mm] h-[5.2mm] flex items-center justify-center print-bg print-text font-black text-[8px] tracking-wider uppercase border print-border rounded-sm"
              style={{ left: '96.5mm', width: '92.5mm' }}
            >
              2. BÖLÜM (SAYISAL ALAN)
            </div>
          </>
        ) : null}

        {/* Ana Seksiyon Ayraçları */}
        {hasFourSections ? (
          <>
            <div className="absolute top-0 bottom-0 border-r-[1.5px] print-border" style={{ left: '47.5mm' }} />
            <div className="absolute top-0 bottom-0 border-r-[2px] print-border" style={{ left: '95mm' }} />
            <div className="absolute top-0 bottom-0 border-r-[1.5px] print-border" style={{ left: '142.5mm' }} />
          </>
        ) : isSplit ? (
          <>
            <div className="absolute top-0 bottom-0 border-r-[2px] print-border" style={{ left: '95mm' }} />
            <div className="absolute border-r border-dashed border-slate-200 pointer-events-none" style={{ left: '47.5mm', top: '7.5mm', bottom: '1mm' }} />
            <div className="absolute border-r border-dashed border-slate-200 pointer-events-none" style={{ left: '142.5mm', top: '7.5mm', bottom: '1mm' }} />
          </>
        ) : (
          <>
            <div className="absolute border-r border-dashed border-slate-200 pointer-events-none" style={{ left: '47.5mm', top: '1mm', bottom: '1mm' }} />
            <div className="absolute border-r border-dashed border-slate-200 pointer-events-none" style={{ left: '95mm', top: '1mm', bottom: '1mm' }} />
            <div className="absolute border-r border-dashed border-slate-200 pointer-events-none" style={{ left: '142.5mm', top: '1mm', bottom: '1mm' }} />
          </>
        )}

        {layoutItems.map((item: any, idx: number) => {
          const topY = item.y - renderOMR.qBox.y;
          const colW = renderOMR.questions.colW;
          const colLeft = item.cIdx * colW;

          if (item.type === 'header') {
            return (
              <div
                key={`h-${idx}`}
                className="absolute font-black text-[7.5px] tracking-wider uppercase text-center print-text print-bg py-0.5 border-t border-b print-border flex items-center justify-center -translate-y-1/2 px-1"
                style={{
                  left: `${colLeft + 1}mm`,
                  top: `${topY}mm`,
                  width: `${colW - 2}mm`,
                  height: `${item.h}mm`
                }}
              >
                <span className="truncate">{item.text}</span>
              </div>
            );
          }

          const qNumLeft = colLeft + (renderOMR.questions.qNumOffset ?? 0.8);
          const qNumWidth = renderOMR.questions.qNumWidth ?? 6.6;
          const qNumber = (item.localIdx !== undefined ? item.localIdx + 1 : (item.qIdx !== undefined ? item.qIdx + 1 : 1));

          return (
            <React.Fragment key={`q-${item.qIdx ?? idx}`}>
              {/* Soru Numarası: Her zaman tam hesaplanmış koordinat ile hizalanır */}
              <div
                className="absolute font-mono font-bold text-[8.5px] print-text text-right select-none flex items-center justify-end pr-1 pointer-events-none"
                style={{
                  left: `${qNumLeft}mm`,
                  top: `${topY}mm`,
                  width: `${qNumWidth}mm`,
                  height: `${Math.max(3.2, item.h)}mm`,
                  transform: 'translateY(-50%)',
                  lineHeight: 1
                }}
              >
                {qNumber}.
              </div>

              {/* Seçenek Kabarcıkları */}
              {options.map((o, optIdx) => {
                const centerX = colLeft + renderOMR.questions.startXOffset + (optIdx * renderOMR.questions.bubbleGap);
                return (
                  <div
                    key={`${item.qIdx}-${o}`}
                    className="bubble absolute font-bold -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${centerX}mm`, top: `${topY}mm` }}
                  >
                    {o}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>

      {/* Sayfa Altı Kurumsal Bilgilendirme */}
      <div
        className="absolute text-[7.5px] font-bold tracking-widest text-slate-400 uppercase text-center w-full select-none pointer-events-none"
        style={{ bottom: '4mm', left: 0 }}
      >
        {exam.institution || "EĞİTİM KURUMU"} • {exam.name} • KAREKODLU AKILLI OPTİK FORM
      </div>
    </div>
  );
}

interface PrintTabProps {
  exam: Exam;
  updateExam: (updates: Partial<Exam>) => void;
  schoolStudents?: Student[];
  showAlert: (msg: string) => void;
}

export function PrintTab({ exam, updateExam: _updateExam, schoolStudents, showAlert }: PrintTabProps) {
  const [isColorMode, setIsColorMode] = useState(true);
  const [selectedClassFilter, setSelectedClassFilter] = useState("ALL");
  const [isPrinting, setIsPrinting] = useState(false);
  const [printingStudent, setPrintingStudent] = useState<Student | null>(null);
  const [showTipsModal, setShowTipsModal] = useState(false);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [activeStudentIdx, setActiveStudentIdx] = useState(0);

  const totalQ = getTotalQuestions(exam.subjects);

  // Aktif öğrenci listesi (varsa genel okul listesinden veya sınav listesinden)
  const effectiveStudentList = useMemo(() => {
    if (schoolStudents && schoolStudents.length > 0) return schoolStudents;
    return exam.studentList || [];
  }, [schoolStudents, exam.studentList]);

  // Önizleme ölçeği (mobil ve masaüstü duyarlı)
  const [previewScale, setPreviewScale] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return 0.38;
    }
    return 0.6;
  });

  const availableClasses = useMemo(() => {
    if (!effectiveStudentList) return [];
    const classesList = effectiveStudentList.map(r => {
      const c = r.classStr && r.classStr !== "-" ? r.classStr : "";
      const s = r.sectionStr && r.sectionStr !== "-" ? r.sectionStr : "";
      if (!c && !s) return null;
      if (c && s) return `${c}/${s}`;
      return c || s;
    }).filter(Boolean) as string[];
    return [...new Set(classesList)].sort((a, b) => a.localeCompare(b, 'tr', { numeric: true }));
  }, [effectiveStudentList]);

  // Yazdırılacak / Önizlenecek Öğrenciler (Her zaman kişiye özel karekodlu)
  const printStudents: Student[] = useMemo(() => {
    if (!effectiveStudentList || effectiveStudentList.length === 0) {
      // Liste boş ise örnek önizleme tek kartı
      return [{
        name: "ÖRNEK ÖĞRENCİ (ÖNİZLEME)",
        no: "1001",
        classStr: "8",
        sectionStr: "A",
        booklet: "A"
      }];
    }

    if (selectedClassFilter === "ALL") {
      return effectiveStudentList;
    }

    return effectiveStudentList.filter(r => {
      const c = r.classStr && r.classStr !== "-" ? r.classStr : "";
      const s = r.sectionStr && r.sectionStr !== "-" ? r.sectionStr : "";
      const val = (c && s) ? `${c}/${s}` : (c || s || "");
      return val === selectedClassFilter;
    });
  }, [effectiveStudentList, selectedClassFilter]);

  const hasRealStudents = effectiveStudentList && effectiveStudentList.length > 0;
  const totalPages = hasRealStudents ? printStudents.length : 1;

  // Güvenli aktif öğrenci seçimi
  const safeActiveStudent = printStudents[Math.min(activeStudentIdx, Math.max(0, printStudents.length - 1))] || printStudents[0];

  const handlePrint = (singleStudent?: Student) => {
    const targetList = singleStudent ? [singleStudent] : printStudents;

    if (!hasRealStudents && !singleStudent) {
      showAlert("Henüz Öğrenci Listesi sekmesinde kayıtlı öğrenci bulunmuyor. Gerçek formları basabilmek için lütfen 'Öğrenci Listesi' sekmesinden e-Okul öğrenci listenizi ekleyin veya aktarın.");
      return;
    }

    if (targetList.length === 0) {
      showAlert("Seçilen filtreye uygun öğrenci bulunamadı. Lütfen sınıf filtresini değiştirin.");
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) return showAlert("Lütfen tarayıcınızın açılır pencere (pop-up) engelleyicisine izin verin.");

    printWindow.document.open();
    printWindow.document.write('<!DOCTYPE html><html lang="tr"><head><title>Baskı Hazırlanıyor...</title><style>body{font-family:sans-serif;text-align:center;padding-top:20%;color:#475569;background:#f8fafc;}</style></head><body><h2>Karekodlu Optik Formlar Yazıcıya Gönderiliyor, lütfen bekleyin...</h2></body></html>');
    printWindow.document.close();

    setPrintingStudent(singleStudent || null);
    setIsPrinting(true);

    setTimeout(() => {
      let printHTML = '<div id="print-wrapper">';
      document.querySelectorAll('.print-page-node').forEach(c => {
        const optikPage = c.querySelector('.optik-page');
        if (optikPage) {
          printHTML += optikPage.outerHTML;
        } else {
          printHTML += c.outerHTML;
        }
      });
      printHTML += '</div>';

      printWindow.document.head.innerHTML = '<title>Karekodlu Optik Form Baskı</title>';
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(n => printWindow.document.head.appendChild(n.cloneNode(true)));

      const s = printWindow.document.createElement('style');
      s.innerHTML = `
        @page { size: A4 portrait; margin: 0 !important; }
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          width: 210mm !important;
          height: 297mm !important;
        }
        #print-wrapper {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .optik-page {
          width: 210mm !important;
          height: 297mm !important;
          margin: 0 auto !important;
          padding: 0 !important;
          background: white !important;
          box-sizing: border-box !important;
          border: none !important;
          box-shadow: none !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          overflow: hidden !important;
          position: relative !important;
        }
        .optik-page:last-child {
          page-break-after: auto !important;
        }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      `;
      printWindow.document.head.appendChild(s);
      printWindow.document.body.innerHTML = printHTML;

      setIsPrinting(false);
      setPrintingStudent(null);

      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 500);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full w-full no-print bg-slate-100 overflow-hidden">
      {/* 1. ÜST KONTROL PANELİ (Modern, Sade, Ergonomik) */}
      <div id="print-top-panel" className="bg-white px-3.5 sm:px-6 py-3 shadow-2xs border-b border-slate-200/90 shrink-0 z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Sol: Başlık, Format ve Durum Rozeti */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs text-base">
              <Icons.Printer />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                  Karekodlu Optik Form Baskısı
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {hasRealStudents ? `${totalPages} Öğrenci Formu Hazır` : 'Örnek Önizleme Modu'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 flex-wrap">
                <span className="font-bold text-slate-800">{exam.name}</span>
                <span className="text-slate-300">•</span>
                <span>{totalQ} Soru</span>
                <span className="text-slate-300">•</span>
                <span>{exam.optionsCount} Şık</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-semibold">Kişiye Özel QR</span>
              </div>
            </div>
          </div>

          {/* Sağ: İpuçları & Birincil Yazdır Butonu */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0 flex-wrap">
            <button
              type="button"
              onClick={() => setShowTipsModal(true)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-2xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
              title="Yazdırma kalitesi ve ölçek ayarları hakkında rehber"
            >
              <Icons.Sparkles />
              <span>Yazdırma İpuçları</span>
            </button>

            <button
              type="button"
              onClick={() => handlePrint()}
              disabled={isPrinting}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-xs shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Icons.Printer />
              <span>
                {isPrinting
                  ? 'Baskı Hazırlanıyor...'
                  : `Formları Yazdır (${totalPages} Sayfa)`}
              </span>
            </button>
          </div>
        </div>

        {/* Alt Şerit: Renk Modu, Sınıf Filtresi, Önizleme Modu ve Ölçek */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Renk Seçimi: Kırmızı Optik vs Siyah-Beyaz Fotokopi */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => setIsColorMode(true)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                  isColorMode
                    ? 'bg-white text-red-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Geleneksel Kırmızı Optik Form Rengi"
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Kırmızı Optik</span>
              </button>
              <button
                type="button"
                onClick={() => setIsColorMode(false)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                  !isColorMode
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Siyah-Beyaz Fotokopi ve Lazer Yazıcı Uyumu"
              >
                <span className="w-2 h-2 rounded-full bg-slate-900" />
                <span>Siyah / Beyaz</span>
              </button>
            </div>

            {/* Sınıf Filtresi */}
            {availableClasses.length > 0 && (
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/90 text-xs font-bold shadow-2xs">
                <span className="text-slate-400">
                  <Icons.Users />
                </span>
                <select
                  value={selectedClassFilter}
                  onChange={(e) => {
                    setSelectedClassFilter(e.target.value);
                    setActiveStudentIdx(0);
                  }}
                  className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer pr-1 text-xs"
                >
                  <option value="ALL">Tüm Sınıflar ({effectiveStudentList.length} Öğrenci)</option>
                  {availableClasses.map(c => (
                    <option key={c} value={c}>{c} Sınıfı</option>
                  ))}
                </select>
              </div>
            )}

            {/* Görünüm Modu: Tekli İnceleme vs Liste */}
            {printStudents.length > 1 && (
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-semibold shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('single')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 active:scale-95 ${
                    viewMode === 'single'
                      ? 'bg-white text-blue-700 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Tek tek öğrencilerin optik formlarını detaylı incele"
                >
                  <Icons.Eye />
                  <span>Tekli Önizle</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 active:scale-95 ${
                    viewMode === 'list'
                      ? 'bg-white text-blue-700 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Sayfalar halinde sıralı liste"
                >
                  <Icons.List />
                  <span>Sıralı Akış</span>
                </button>
              </div>
            )}
          </div>

          {/* Sağ Alt: Önizleme Ölçeği (Scale) */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-bold shadow-2xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 px-1 hidden sm:inline">Ölçek:</span>
            <button
              type="button"
              onClick={() => setPreviewScale(0.38)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer active:scale-95 ${
                previewScale === 0.38 ? 'bg-white text-slate-900 shadow-2xs font-extrabold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sığdır
            </button>
            <button
              type="button"
              onClick={() => setPreviewScale(0.6)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer active:scale-95 ${
                previewScale === 0.6 ? 'bg-white text-slate-900 shadow-2xs font-extrabold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              %60
            </button>
            <button
              type="button"
              onClick={() => setPreviewScale(0.85)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer active:scale-95 ${
                previewScale === 0.85 ? 'bg-white text-slate-900 shadow-2xs font-extrabold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              %85
            </button>
          </div>
        </div>
      </div>

      {/* 2. ÖNİZLEME ALANI */}
      <div className="flex-1 overflow-auto p-3 sm:p-6 md:p-8 flex flex-col items-center custom-scrollbar">
        <div className="flex flex-col gap-4 items-center w-full max-w-5xl">
          {/* Öğrenci Listesi Uyarısı (Liste Boşsa) */}
          {!hasRealStudents ? (
            <div className="w-full max-w-[210mm] bg-amber-50 border border-amber-200/90 text-amber-900 p-3.5 sm:p-4 rounded-2xl text-xs flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-base">
                  💡
                </div>
                <div>
                  <div className="font-extrabold text-sm text-amber-950">Örnek Önizleme Gösteriliyor</div>
                  <div className="text-amber-800 mt-0.5 leading-relaxed">
                    Henüz öğrenci eklenmediği için örnek bir form gösterilmektedir. <b>"Öğrenci Listesi"</b> sekmesinden e-Okul listenizi eklediğinizde her öğrenci için adı, numarası ve sınıfı karekoda otomatik işlenmiş olarak basılacaktır.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[210mm] flex items-center justify-between gap-2 px-2 text-xs text-slate-600 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-700">
                  {selectedClassFilter === 'ALL' ? 'Tüm Sınıflar' : `${selectedClassFilter} Sınıfı`}
                </span>
                <span className="text-slate-400">•</span>
                <span>{printStudents.length} Öğrenci Formu</span>
              </div>

              {/* Tekli Önizleme Navigasyon Kontrolleri */}
              {viewMode === 'single' && printStudents.length > 1 && (
                <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl px-2 py-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setActiveStudentIdx(prev => Math.max(0, prev - 1))}
                    disabled={activeStudentIdx <= 0}
                    className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 cursor-pointer active:scale-95"
                    title="Önceki Öğrenci"
                  >
                    ◀
                  </button>
                  <span className="font-mono font-bold text-xs text-blue-700 px-1">
                    {activeStudentIdx + 1} / {printStudents.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveStudentIdx(prev => Math.min(printStudents.length - 1, prev + 1))}
                    disabled={activeStudentIdx >= printStudents.length - 1}
                    className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 cursor-pointer active:scale-95"
                    title="Sonraki Öğrenci"
                  >
                    ▶
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TEKLİ ÖNİZLEME MODU */}
          {viewMode === 'single' ? (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-[210mm] rounded-2xl overflow-hidden shadow-xl border border-slate-300/90 bg-white flex flex-col items-center">
                {/* Form Üst Şeridi */}
                <div className="w-full bg-slate-900 text-white text-xs font-bold px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">
                      #{activeStudentIdx + 1}
                    </span>
                    <span className="font-extrabold">{safeActiveStudent.name}</span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      (No: {safeActiveStudent.no || 'Yok'} {safeActiveStudent.classStr ? `• ${safeActiveStudent.classStr}/${safeActiveStudent.sectionStr || ''}` : ''})
                    </span>
                  </div>

                  {hasRealStudents && (
                    <button
                      type="button"
                      onClick={() => handlePrint(safeActiveStudent)}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1 transition-all cursor-pointer active:scale-95 shadow-2xs"
                      title="Yalnızca bu öğrencinin formunu tek sayfa olarak yazdır"
                    >
                      <Icons.Printer />
                      <span>Bu Öğrenciyi Yazdır</span>
                    </button>
                  )}
                </div>

                {/* A4 Kağıt Konteyneri */}
                <div
                  className="a4-preview-container origin-top transform-gpu"
                  style={{
                    transform: `scale(${previewScale})`,
                    marginBottom: `calc((297mm * ${previewScale}) - 297mm)`
                  }}
                >
                  <PrintLayout exam={exam} isColorMode={isColorMode} student={safeActiveStudent} />
                </div>
              </div>

              {/* Hızlı Öğrenci Değiştirme Şeridi */}
              {printStudents.length > 1 && (
                <div className="mt-4 flex items-center gap-2 flex-wrap justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveStudentIdx(prev => Math.max(0, prev - 1))}
                    disabled={activeStudentIdx <= 0}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer shadow-2xs"
                  >
                    ◀ Önceki Öğrenci
                  </button>

                  <select
                    value={activeStudentIdx}
                    onChange={(e) => setActiveStudentIdx(Number(e.target.value))}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-2xs outline-none cursor-pointer"
                  >
                    {printStudents.map((st, idx) => (
                      <option key={idx} value={idx}>
                        {idx + 1}. {st.name} ({st.no || '-'})
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => setActiveStudentIdx(prev => Math.min(printStudents.length - 1, prev + 1))}
                    disabled={activeStudentIdx >= printStudents.length - 1}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer shadow-2xs"
                  >
                    Sonraki Öğrenci ▶
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* SIRALI AKIŞ MODU (İLK 3 FORM) */
            <>
              {printStudents.slice(0, 3).map((student, idx) => (
                <div
                  key={`preview-${idx}`}
                  className="rounded-2xl overflow-hidden shadow-xl border border-slate-300/90 bg-white flex flex-col items-center"
                >
                  <div className="w-full bg-slate-900 text-white text-xs font-bold px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-mono">#{idx + 1}</span>
                      <span className="font-extrabold">{student.name}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">
                      No: {student.no} {student.classStr ? `(${student.classStr}/${student.sectionStr || ''})` : ''}
                    </span>
                  </div>
                  <div
                    className="a4-preview-container origin-top transform-gpu"
                    style={{
                      transform: `scale(${previewScale})`,
                      marginBottom: `calc((297mm * ${previewScale}) - 297mm)`
                    }}
                  >
                    <PrintLayout exam={exam} isColorMode={isColorMode} student={student} />
                  </div>
                </div>
              ))}

              {/* 3'ten fazla öğrenci varsa bilgilendirme kutusu */}
              {printStudents.length > 3 && (
                <div className="p-4 sm:p-5 bg-white border border-blue-200 text-blue-900 rounded-2xl text-center w-full max-w-[210mm] shadow-xs flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                    <Icons.List />
                  </div>
                  <h4 className="font-black text-sm sm:text-base">
                    + {printStudents.length - 3} Öğrencinin Formu Daha Hazır
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                    Tarayıcı hızını ve performansını korumak için akışta ilk 3 form gösterilir.<br />
                    <b>"Formları Yazdır"</b> butonuna bastığınızda seçili sınıftaki <b>{printStudents.length} sayfanın tümü</b> eksiksiz yazıcıya gönderilir.
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePrint()}
                    className="mt-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Icons.Printer />
                    <span>Tümünü Yazdır ({printStudents.length} Sayfa)</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Yazdırma işlemi için gizli DOM düğümleri */}
        {isPrinting && (
          <div className="hidden">
            {(printingStudent ? [printingStudent] : printStudents).map((student, idx) => (
              <div key={`print-node-${idx}`} className="print-page-node">
                <PrintLayout exam={exam} isColorMode={isColorMode} student={student} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. YAZDIRMA İPUÇLARI VE TAVSİYELER MODALI */}
      {showTipsModal && (
        <div
          className="fixed inset-0 z-[250] bg-slate-900/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowTipsModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full flex flex-col overflow-hidden border border-slate-300 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Başlığı */}
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-lg shrink-0">
                  <Icons.Sparkles />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-800 tracking-tight">Kusursuz Baskı İpuçları</h3>
                  <p className="text-xs text-slate-500">Optik okuyucunun hatasız taraması için önemli tavsiyeler</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowTipsModal(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <Icons.X />
              </button>
            </div>

            {/* Modal İçeriği */}
            <div className="p-5 space-y-3.5 text-xs text-slate-600">
              <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 flex items-start gap-3">
                <span className="text-base shrink-0">🎯</span>
                <div>
                  <div className="font-extrabold text-blue-950 mb-0.5">Ölçek Mutlaka %100 (Varsayılan) Olmalıdır</div>
                  <p className="text-blue-900 leading-relaxed">
                    Yazıcı iletişim penceresinde <b>"Sayfaya Sığdır (Fit to Page)"</b> seçeneğini <u>işaretlemeyiniz</u>. Ölçek ayarını <b>%100</b> olarak bırakınız. Böylece A4 dört köşesindeki optik çapa işaretleri milimetrik doğrulukta basılır.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="text-base shrink-0">📑</span>
                <div>
                  <div className="font-extrabold text-slate-900 mb-0.5">Fotokopi & Siyah-Beyaz Baskı</div>
                  <p className="text-slate-600 leading-relaxed">
                    Siyah-beyaz lazer veya fotokopi makineleriyle basım yapacaksanız üst araç çubuğundan <b>"Siyah / Beyaz"</b> modunu seçebilirsiniz. Optik okuma algoritması her iki modu da eksiksiz algılar.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 flex items-start gap-3">
                <span className="text-base shrink-0">⚡</span>
                <div>
                  <div className="font-extrabold text-emerald-950 mb-0.5">Kişiye Özel Otomatik Eşleşme</div>
                  <p className="text-emerald-900 leading-relaxed">
                    Her optik formun sağ üst köşesinde öğrencinin okul numarası karekod olarak basılır. Canlı taramada kamera formu görür görmez öğrenciyi, sınıfını ve kitapçığını anında tanır; manuel numara kodlamaya gerek kalmaz.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Altı */}
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowTipsModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
