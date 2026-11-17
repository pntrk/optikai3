// Otomatik Üretilen MEB ODSGM 2026-2027 Eğitim Öğretim Yılı 1. Dönem
// Konu Soru Dağılım Tabloları ve Ortak Yazılı Senaryoları Veri Tabanı (15 Resmi XML Dosyası + Fen Bilimleri)
// Kaynak: https://odsgm.meb.gov.tr/www/1donem-konu-soru-dagilim-tablolari-2026-2027/icerik/1724

export interface MebScenarioColumn {
  col: string;
  examTerm: string;
  scenarioName: string;
  isNationalExam: boolean;
  totalQuestions: number;
}

export interface MebOutcomeRow {
  theme: string;
  topic: string;
  code: string;
  text: string;
  fullOutcome: string;
  counts: Record<string, number>;
}

export interface MebDistributionTable {
  id: string;
  sourceFile: string;
  subject: string;
  level: string;
  grade: string;
  gradeNum: number;
  scenarios: MebScenarioColumn[];
  outcomes: MebOutcomeRow[];
}

export const MEB_2026_2027_TABLES: MebDistributionTable[] = [
  {
    "id": "matematik-5",
    "sourceFile": "/assets/aistudio/ilkmat2_a01b3b4e.xml",
    "subject": "Matematik",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "Temel Geometrik Çizimler ve İnşalar",
        "topic": "",
        "code": "MAT.5.3.1",
        "text": "Temel geometrik çizimler için matematiksel araç ve teknolojiden yararlanabilme",
        "fullOutcome": "MAT.5.3.1. Temel geometrik çizimler için matematiksel araç ve teknolojiden yararlanabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Temel Geometrik Çizimler ve İnşalar",
        "topic": "",
        "code": "MAT.5.3.2",
        "text": "Temel geometrik çizimlere dayalı deneyimlerini yansıtabilme",
        "fullOutcome": "MAT.5.3.2. Temel geometrik çizimlere dayalı deneyimlerini yansıtabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Açı Ölçme",
        "topic": "",
        "code": "MAT.5.3.3",
        "text": "Açıları ölçmek için matematiksel araç ve teknolojiden yararlanabilme",
        "fullOutcome": "MAT.5.3.3. Açıları ölçmek için matematiksel araç ve teknolojiden yararlanabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2
        }
      },
      {
        "theme": "Açı Ölçme",
        "topic": "",
        "code": "MAT.5.3.4",
        "text": "Düzlemde iki veya üç doğrunun birbirine göre durumuna bağlı olarak oluşabilecek açılara dair çıkarım yapabilme",
        "fullOutcome": "MAT.5.3.4. Düzlemde iki veya üç doğrunun birbirine göre durumuna bağlı olarak oluşabilecek açılara dair çıkarım yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 2
        }
      },
      {
        "theme": "Çokgenler ve Çember",
        "topic": "",
        "code": "MAT.5.3.5",
        "text": "Çokgenleri düzlemde ardışık olarak kesişen doğruların oluşturduğu kapalı şekiller olarak yorumlayabilme",
        "fullOutcome": "MAT.5.3.5. Çokgenleri düzlemde ardışık olarak kesişen doğruların oluşturduğu kapalı şekiller olarak yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "Çokgenler ve Çember",
        "topic": "",
        "code": "MAT.5.3.6",
        "text": "Çokgenlerin özellikleri ile ilgili edindiği deneyimleri yansıtabilme",
        "fullOutcome": "MAT.5.3.6. Çokgenlerin özellikleri ile ilgili edindiği deneyimleri yansıtabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "J": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Çokgenler ve Çember",
        "topic": "",
        "code": "MAT.5.3.7",
        "text": "Matematiksel araç ve teknoloji yardımıyla düzlemde iki noktada kesişen çember çiftinin merkezleri ve kesişim noktalarından biri ile inşa edilen üçgenlerin kenar özelliklerine yönelik çıkarım yapabilme",
        "fullOutcome": "MAT.5.3.7. Matematiksel araç ve teknoloji yardımıyla düzlemde iki noktada kesişen çember çiftinin merkezleri ve kesişim noktalarından biri ile inşa edilen üçgenlerin kenar özelliklerine yönelik çıkarım yapabilme",
        "counts": {
          "D": 1,
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Basamak Değerlerini Çözümleme",
        "topic": "",
        "code": "MAT.5.1.1",
        "text": "Altı basamaklı sayıları okuma ve yazmayı çok basamaklı sayılara genelleyebilme",
        "fullOutcome": "MAT.5.1.1. Altı basamaklı sayıları okuma ve yazmayı çok basamaklı sayılara genelleyebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1
        }
      },
      {
        "theme": "Doğal Sayılarla Dört İşlem İçeren Problem Çözme",
        "topic": "",
        "code": "MAT.5.1.2",
        "text": "Doğal sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme",
        "fullOutcome": "MAT.5.1.2. Doğal sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Dikdörtgenin Çevre Uzunluğu ve Alanı",
        "topic": "",
        "code": "MAT.5.4.1",
        "text": "Kenar uzunlukları doğal sayı olan bir dikdörtgenin çevre uzunluğu verildiğinde kenar uzunluklarını yorumlayabilme",
        "fullOutcome": "MAT.5.4.1. Kenar uzunlukları doğal sayı olan bir dikdörtgenin çevre uzunluğu verildiğinde kenar uzunluklarını yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Dikdörtgenin Çevre Uzunluğu ve Alanı",
        "topic": "",
        "code": "MAT.5.4.2",
        "text": "Birim karelerden yola çıkarak dikdörtgenin alanını değerlendirebilme",
        "fullOutcome": "MAT.5.4.2. Birim karelerden yola çıkarak dikdörtgenin alanını değerlendirebilme",
        "counts": {
          "I": 1
        }
      }
    ]
  },
  {
    "id": "matematik-6",
    "sourceFile": "/assets/aistudio/ilkmat2_a01b3b4e.xml",
    "subject": "Matematik",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "Bir Doğal Sayının Çarpanları ve Katları",
        "topic": "",
        "code": "MAT.6.1.1",
        "text": "Karşılaştığı problem durumlarında bir doğal sayının çarpan ve katlarına yönelik muhakeme yapabilme",
        "fullOutcome": "MAT.6.1.1. Karşılaştığı problem durumlarında bir doğal sayının çarpan ve katlarına yönelik muhakeme yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Bölünebilme Kriterleri",
        "topic": "",
        "code": "MAT.6.1.2",
        "text": "Bir doğal sayının 2, 3, 4, 5, 6, 9 ve 10 ile tam bölünebilme kriterlerine ilişkin çıkarım yapabilme",
        "fullOutcome": "MAT.6.1.2. Bir doğal sayının 2, 3, 4, 5, 6, 9 ve 10 ile tam bölünebilme kriterlerine ilişkin çıkarım yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Asal Sayılar ve Asal Çarpanlar",
        "topic": "",
        "code": "MAT.6.1.3",
        "text": "Bir doğal sayının asal olma durumunu ve asal çarpanlarını çözümleyebilme",
        "fullOutcome": "MAT.6.1.3. Bir doğal sayının asal olma durumunu ve asal çarpanlarını çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Bir Doğal Sayının Çarpanları ve Katları",
        "topic": "",
        "code": "MAT.6.1.4",
        "text": "Günlük hayat problemleri ya da matematiksel durumlar üzerinden ortak kat ve ortak böleni yorumlayabilme",
        "fullOutcome": "MAT.6.1.4. Günlük hayat problemleri ya da matematiksel durumlar üzerinden ortak kat ve ortak böleni yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Deneysel Olasılık",
        "topic": "",
        "code": "MAT.6.6.1",
        "text": "Bir olayın olasılığını gözleme dayalı tahmin edebilme",
        "fullOutcome": "MAT.6.6.1. Bir olayın olasılığını gözleme dayalı tahmin edebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "L": 1
        }
      },
      {
        "theme": "Ondalık Gösterimleri Çözümleme",
        "topic": "",
        "code": "MAT.6.1.5",
        "text": "Gerçek yaşam durumlarında ondalık gösterimlerin basamak değerlerini kesirlerden yararlanarak yorumlayabilme",
        "fullOutcome": "MAT.6.1.5. Gerçek yaşam durumlarında ondalık gösterimlerin basamak değerlerini kesirlerden yararlanarak yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "K": 1,
          "M": 2
        }
      },
      {
        "theme": "Kesir-Bölme İlişkisi",
        "topic": "",
        "code": "MAT.6.1.6",
        "text": "Kesir ve bölme işlemi arasındaki ilişkiye yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "MAT.6.1.6. Kesir ve bölme işlemi arasındaki ilişkiye yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Kesirlerle Dört İşlem İçeren Problem Çözme",
        "topic": "",
        "code": "MAT.6.1.7",
        "text": "Gerçek yaşam durumlarında karşılaşılan kesir, ondalık ve yüzde gösterimleri ile ilgili dört işlem gerektiren problemleri çözebilme",
        "fullOutcome": "MAT.6.1.7. Gerçek yaşam durumlarında karşılaşılan kesir, ondalık ve yüzde gösterimleri ile ilgili dört işlem gerektiren problemleri çözebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Uzunluk Ölçme",
        "topic": "",
        "code": "MAT.6.1.8",
        "text": "Karşılaştığı günlük hayat ya da matematiksel durumlarda standart uzunluk ölçme birimlerini değerlendirebilme",
        "fullOutcome": "MAT.6.1.8. Karşılaştığı günlük hayat ya da matematiksel durumlarda standart uzunluk ölçme birimlerini değerlendirebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 1
        }
      },
      {
        "theme": "Kategorik ve Nicel (Kesikli) Veri Dağılımları",
        "topic": "",
        "code": "MAT.6.5.1",
        "text": "Kategorik veya nicel (kesikli) veri ile çalışabilme ve veriye dayalı karar verebilme",
        "fullOutcome": "MAT.6.5.1. Kategorik veya nicel (kesikli) veri ile çalışabilme ve veriye dayalı karar verebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "matematik-7",
    "sourceFile": "/assets/aistudio/ilkmat2_a01b3b4e.xml",
    "subject": "Matematik",
    "level": "Ortaokul",
    "grade": "7. Sınıf",
    "gradeNum": 7,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "Tam Sayılar Rasyonel Sayılar ve Farklı Temsilleri",
        "topic": "",
        "code": "MAT.7.1.1",
        "text": "Gerçek yaşam ya da matematiksel durumlarda doğal sayı, tam sayı ve rasyonel sayıları yorumlayabilme",
        "fullOutcome": "MAT.7.1.1. Gerçek yaşam ya da matematiksel durumlarda doğal sayı, tam sayı ve rasyonel sayıları yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2
        }
      },
      {
        "theme": "Rasyonel Sayılar ve Farklı Temsilleri",
        "topic": "",
        "code": "MAT.7.1.2",
        "text": "Gerçek yaşam durumlarında rasyonel sayıların ondalık gösterimlerini yansıtabilmea) Bölme işlemini kullanarak her rasyonel sayının bir ondalık gösterimi olduğunu inceler..",
        "fullOutcome": "MAT.7.1.2. Gerçek yaşam durumlarında rasyonel sayıların ondalık gösterimlerini yansıtabilmea) Bölme işlemini kullanarak her rasyonel sayının bir ondalık gösterimi olduğunu inceler..",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2
        }
      },
      {
        "theme": "Rasyonel Sayılar ve Farklı Temsilleri",
        "topic": "",
        "code": "MAT.7.1.3",
        "text": "Rasyonel sayıların karşılaştırma ve sıralama ilişkilerini yorumlayabilme",
        "fullOutcome": "MAT.7.1.3. Rasyonel sayıların karşılaştırma ve sıralama ilişkilerini yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2
        }
      },
      {
        "theme": "Rasyonel Sayılarla İşlemler ve Problem Çözme",
        "topic": "",
        "code": "MAT.7.1.4",
        "text": "Rasyonel sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme",
        "fullOutcome": "MAT.7.1.4. Rasyonel sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "I": 1,
          "K": 1,
          "L": 2
        }
      },
      {
        "theme": "Cisimlerin Farklı Yönlerden Görünümleri",
        "topic": "",
        "code": "MAT.7.4.1",
        "text": "Eş küplerle oluşturulan yapılar ile görünümleri arasındaki ilişkiyi çözümleyebilme",
        "fullOutcome": "MAT.7.4.1. Eş küplerle oluşturulan yapılar ile görünümleri arasındaki ilişkiyi çözümleyebilme",
        "counts": {
          "H": 1,
          "K": 1
        }
      },
      {
        "theme": "Dikdörtgenler Prizmasının Hacmi ve Yüzey Alanı",
        "topic": "",
        "code": "MAT.7.4.2",
        "text": "Dikdörtgenler prizmasının yüzey alanını yorumlayabilme",
        "fullOutcome": "MAT.7.4.2. Dikdörtgenler prizmasının yüzey alanını yorumlayabilme",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 2
        }
      },
      {
        "theme": "Dikdörtgenler Prizmasının Hacmi ve Yüzey Alanı",
        "topic": "",
        "code": "MAT.7.4.3",
        "text": "Dikdörtgenler prizmasının hacmini eş nesneler aracılığıyla yorumlayabilme",
        "fullOutcome": "MAT.7.4.3. Dikdörtgenler prizmasının hacmini eş nesneler aracılığıyla yorumlayabilme",
        "counts": {
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Dikdörtgenler Prizmasının Hacmi ve Yüzey Alanı",
        "topic": "",
        "code": "MAT.7.4.4",
        "text": "Dikdörtgenler prizmasının hacim bağıntısını değerlendirebilme",
        "fullOutcome": "MAT.7.4.4. Dikdörtgenler prizmasının hacim bağıntısını değerlendirebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "Hacim Ölçme Birimleri",
        "topic": "",
        "code": "MAT.7.4.5",
        "text": "Hacim ölçme birimleri arasındaki ilişkileri değerlendirebilme",
        "fullOutcome": "MAT.7.4.5. Hacim ölçme birimleri arasındaki ilişkileri değerlendirebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Dikdörtgenler Prizmasının Hacmi ve Yüzey Alanı",
        "topic": "",
        "code": "MAT.7.4.6",
        "text": "Günlük hayat durumlarında dikdörtgenler prizmaları ile modellenen cisimlerin yüzey alanı ve hacmine yönelik problem çözebilme",
        "fullOutcome": "MAT.7.4.6. Günlük hayat durumlarında dikdörtgenler prizmaları ile modellenen cisimlerin yüzey alanı ve hacmine yönelik problem çözebilme",
        "counts": {
          "H": 2,
          "I": 2,
          "J": 1,
          "K": 2,
          "L": 2
        }
      },
      {
        "theme": "Kategorik ve Nicel (Sürekli) Veri Dağılımları",
        "topic": "",
        "code": "MAT.7.6.1",
        "text": "Kategorik veya nicel (sürekli) veri ile çalışabilme ve veriye dayalı karar verebilme",
        "fullOutcome": "MAT.7.6.1. Kategorik veya nicel (sürekli) veri ile çalışabilme ve veriye dayalı karar verebilme",
        "counts": {
          "H": 2,
          "I": 2,
          "J": 2,
          "K": 1
        }
      },
      {
        "theme": "Kategorik ve Nicel (Sürekli) Veri Dağılımları",
        "topic": "",
        "code": "MAT.7.6.2",
        "text": "Başkaları tarafından oluşturulan kategorik veya nicel (sürekli) veriye dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "fullOutcome": "MAT.7.6.2. Başkaları tarafından oluşturulan kategorik veya nicel (sürekli) veriye dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "counts": {
          "H": 1
        }
      }
    ]
  },
  {
    "id": "matematik-8",
    "sourceFile": "/assets/aistudio/ilkmat2_a01b3b4e.xml",
    "subject": "Matematik",
    "level": "Ortaokul",
    "grade": "8. Sınıf",
    "gradeNum": 8,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 11
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 11
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 10
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 11
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Çarpanlar ve Katlar",
        "code": "M.8.1.1.1",
        "text": "Verilen pozitif tam sayıların pozitif tam sayı çarpanlarını bulur, pozitif tam sayıların pozitif tam sayı çarpanlarını üslü ifadelerin çarpımı şeklinde yazar.",
        "fullOutcome": "M.8.1.1.1. Verilen pozitif tam sayıların pozitif tam sayı çarpanlarını bulur, pozitif tam sayıların pozitif tam sayı çarpanlarını üslü ifadelerin çarpımı şeklinde yazar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Çarpanlar ve Katlar",
        "code": "M.8.1.1.2",
        "text": "İki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplar, ilgili problemleri çözer.",
        "fullOutcome": "M.8.1.1.2. İki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplar, ilgili problemleri çözer.",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 3,
          "I": 2
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Çarpanlar ve Katlar",
        "code": "M.8.1.1.3",
        "text": "Verilen iki doğal sayının aralarında asal olup olmadığını belirler.",
        "fullOutcome": "M.8.1.1.3. Verilen iki doğal sayının aralarında asal olup olmadığını belirler.",
        "counts": {
          "D": 1,
          "F": 1,
          "I": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Üslü İfadeler",
        "code": "M.8.1.2.1",
        "text": "Tam sayıların, tam sayı kuvvetlerini hesaplar.",
        "fullOutcome": "M.8.1.2.1. Tam sayıların, tam sayı kuvvetlerini hesaplar.",
        "counts": {
          "D": 1,
          "G": 1,
          "I": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Üslü İfadeler",
        "code": "M.8.1.2.2",
        "text": "Üslü ifadelerle ilgili temel kuralları anlar, birbirine denk ifadeler oluşturur.",
        "fullOutcome": "M.8.1.2.2. Üslü ifadelerle ilgili temel kuralları anlar, birbirine denk ifadeler oluşturur.",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 3,
          "I": 2
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Üslü İfadeler",
        "code": "M.8.1.2.3",
        "text": "Sayıların ondalık gösterimlerini 10’un tam sayı kuvvetlerini kullanarak çözümler.",
        "fullOutcome": "M.8.1.2.3. Sayıların ondalık gösterimlerini 10’un tam sayı kuvvetlerini kullanarak çözümler.",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Üslü İfadeler",
        "code": "M.8.1.2.4",
        "text": "Verilen bir sayıyı 10’un farklı tam sayı kuvvetlerini kullanarak ifade eder.",
        "fullOutcome": "M.8.1.2.4. Verilen bir sayıyı 10’un farklı tam sayı kuvvetlerini kullanarak ifade eder.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Üslü İfadeler",
        "code": "M.8.1.2.5",
        "text": "Çok büyük ve çok küçük sayıları bilimsel gösterimle ifade eder ve karşılaştırır.",
        "fullOutcome": "M.8.1.2.5. Çok büyük ve çok küçük sayıları bilimsel gösterimle ifade eder ve karşılaştırır.",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.1",
        "text": "Tamkare pozitif tam sayılarla bu sayıların karekökleri arasındaki ilişkiyi belirler.",
        "fullOutcome": "M.8.1.3.1. Tamkare pozitif tam sayılarla bu sayıların karekökleri arasındaki ilişkiyi belirler.",
        "counts": {
          "D": 1,
          "F": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.2",
        "text": "Tam kare olmayan kareköklü bir sayının hangi iki doğal sayı arasında olduğunu belirler.",
        "fullOutcome": "M.8.1.3.2. Tam kare olmayan kareköklü bir sayının hangi iki doğal sayı arasında olduğunu belirler.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "L": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.3",
        "text": "Kareköklü bir ifadeyi a√b şeklinde yazar ve a√b şeklindeki ifadede katsayıyı kök içine alır.",
        "fullOutcome": "M.8.1.3.3. Kareköklü bir ifadeyi a√b şeklinde yazar ve a√b şeklindeki ifadede katsayıyı kök içine alır.",
        "counts": {
          "D": 1,
          "E": 2
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.4",
        "text": "Kareköklü ifadelerde çarpma ve bölme işlemlerini yapar.",
        "fullOutcome": "M.8.1.3.4. Kareköklü ifadelerde çarpma ve bölme işlemlerini yapar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 2,
          "O": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.5",
        "text": "Kareköklü ifadelerde toplama ve çıkarma işlemlerini yapar.",
        "fullOutcome": "M.8.1.3.5. Kareköklü ifadelerde toplama ve çıkarma işlemlerini yapar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.6",
        "text": "Kareköklü bir ifade ile çarpıldığında, sonucu bir doğal sayı yapan çarpanlara örnek verir.",
        "fullOutcome": "M.8.1.3.6. Kareköklü bir ifade ile çarpıldığında, sonucu bir doğal sayı yapan çarpanlara örnek verir.",
        "counts": {
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.7",
        "text": "Ondalık ifadelerin kareköklerini belirler.",
        "fullOutcome": "M.8.1.3.7. Ondalık ifadelerin kareköklerini belirler.",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "SAYILAR VE İŞLEMLER",
        "topic": "Kareköklü İfadeler",
        "code": "M.8.1.3.8",
        "text": "Gerçek sayıları tanır, rasyonel ve irrasyonel sayılarla ilişkilendirir.",
        "fullOutcome": "M.8.1.3.8. Gerçek sayıları tanır, rasyonel ve irrasyonel sayılarla ilişkilendirir.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "VERİ İŞLEME",
        "topic": "Veri Analizi",
        "code": "M.8.4.1.1",
        "text": "En fazla üç veri grubuna ait çizgi ve sütun grafiklerini yorumlar.",
        "fullOutcome": "M.8.4.1.1. En fazla üç veri grubuna ait çizgi ve sütun grafiklerini yorumlar.",
        "counts": {
          "J": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "VERİ İŞLEME",
        "topic": "Veri Analizi",
        "code": "M.8.4.1.2",
        "text": "Verileri sütun, daire veya çizgi grafiği ile gösterir ve bu gösterimler arasında uygun olan dönüşümleri yapar.",
        "fullOutcome": "M.8.4.1.2. Verileri sütun, daire veya çizgi grafiği ile gösterir ve bu gösterimler arasında uygun olan dönüşümleri yapar.",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1,
          "N": 2,
          "O": 1
        }
      },
      {
        "theme": "OLASILIK",
        "topic": "Basit Olayların Olma Olasılığı",
        "code": "M.8.5.1.1",
        "text": "Bir olaya ait olası durumları belirler.",
        "fullOutcome": "M.8.5.1.1. Bir olaya ait olası durumları belirler.",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OLASILIK",
        "topic": "Basit Olayların Olma Olasılığı",
        "code": "M.8.5.1.2",
        "text": "“Daha fazla”, “eşit”, “daha az” olasılıklı olayları ayırt eder, örnek verir.",
        "fullOutcome": "M.8.5.1.2. “Daha fazla”, “eşit”, “daha az” olasılıklı olayları ayırt eder, örnek verir.",
        "counts": {
          "J": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OLASILIK",
        "topic": "Basit Olayların Olma Olasılığı",
        "code": "M.8.5.1.3",
        "text": "Eşit şansa sahip olan olaylarda her bir çıktının olasılık değerinin eşit olduğunu ve bu değerin 1/n olduğunu açıklar.",
        "fullOutcome": "M.8.5.1.3. Eşit şansa sahip olan olaylarda her bir çıktının olasılık değerinin eşit olduğunu ve bu değerin 1/n olduğunu açıklar.",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "OLASILIK",
        "topic": "Basit Olayların Olma Olasılığı",
        "code": "M.8.5.1.4",
        "text": "Olasılık değerinin 0 ile 1 arasında (0 ve 1 dâhil) olduğunu anlar.",
        "fullOutcome": "M.8.5.1.4. Olasılık değerinin 0 ile 1 arasında (0 ve 1 dâhil) olduğunu anlar.",
        "counts": {}
      },
      {
        "theme": "OLASILIK",
        "topic": "Basit Olayların Olma Olasılığı",
        "code": "M.8.5.1.5",
        "text": "Basit bir olayın olma olasılığını hesaplar.",
        "fullOutcome": "M.8.5.1.5. Basit bir olayın olma olasılığını hesaplar.",
        "counts": {
          "J": 2,
          "K": 2
        }
      },
      {
        "theme": "CEBİR",
        "topic": "Cebirsel İfadeler ve Özdeşlikler",
        "code": "M.8.2.1.1",
        "text": "Basit cebirsel ifadeleri anlar ve farklı biçimlerde yazar.",
        "fullOutcome": "M.8.2.1.1. Basit cebirsel ifadeleri anlar ve farklı biçimlerde yazar.",
        "counts": {
          "J": 1
        }
      }
    ]
  },
  {
    "id": "matematik-9",
    "sourceFile": "/assets/aistudio/matematik2_3d91ad35.xml",
    "subject": "Matematik",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 5
      }
    ],
    "outcomes": [
      {
        "theme": "Gerçek Sayıların Üslü ve Köklü Gösterimleri ile Yapılan İşlemler",
        "topic": "",
        "code": "9.1.1",
        "text": "Gerçek sayıların üslü ve köklü gösterimleriyle yapılan işlemlere dair muhakeme yapabilme",
        "fullOutcome": "9.1.1. Gerçek sayıların üslü ve köklü gösterimleriyle yapılan işlemlere dair muhakeme yapabilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 2,
          "G": 3,
          "H": 1
        }
      },
      {
        "theme": "Gerçek Sayı Aralıklarının Gösterimi ve Aralıklarla İlgili İşlemlerde Küme Sembollerinin Kullanımı",
        "topic": "",
        "code": "9.1.2",
        "text": "Gerçek sayı aralıklarının gösteriminde ve aralıklarla ilgili işlemlerde küme sembol ve işlemlerinden yararlanabilme",
        "fullOutcome": "9.1.2. Gerçek sayı aralıklarının gösteriminde ve aralıklarla ilgili işlemlerde küme sembol ve işlemlerinden yararlanabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Sayı Kümeleri ve İşlem Özellikleri",
        "topic": "",
        "code": "9.1.3",
        "text": "Farklı sayı kümelerinin özellikleri hakkında muhakeme yapabilme",
        "fullOutcome": "9.1.3. Farklı sayı kümelerinin özellikleri hakkında muhakeme yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Gerçek Sayıların İşlem Özelliklerini Cebirsel Olarak İfade Etme",
        "topic": "",
        "code": "9.1.4",
        "text": "Gerçek sayıların işlem özelliklerini cebirsel olarak ifade etmede analojik akıl yürütebilme",
        "fullOutcome": "9.1.4. Gerçek sayıların işlem özelliklerini cebirsel olarak ifade etmede analojik akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 1
        }
      },
      {
        "theme": "Doğrusal Fonksiyonlar ve Nitel Özellikleri",
        "topic": "",
        "code": "9.2.1",
        "text": "Gerçek sayılarda f(x) = x şeklinde tanımlı doğrusal referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen g(x) = a ∙ f(x ± r) ± k, (a, r, k ∈ ℝ, a≠0) doğrusal fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "fullOutcome": "9.2.1. Gerçek sayılarda f(x) = x şeklinde tanımlı doğrusal referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen g(x) = a ∙ f(x ± r) ± k, (a, r, k ∈ ℝ, a≠0) doğrusal fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "counts": {
          "E": 1,
          "F": 2,
          "H": 1
        }
      }
    ]
  },
  {
    "id": "matematik-10",
    "sourceFile": "/assets/aistudio/matematik2_3d91ad35.xml",
    "subject": "Matematik",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 11
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "Dik Üçgende Trigonometrik Oranlar ve Trigonometrik Özdeşlikler",
        "topic": "",
        "code": "10.1.1",
        "text": "Dik üçgende trigonometrik oranlara (sinüs, kosinüs, tanjant, kotanjant) ve trigonometrik özdeşliklere ilişkin çıkarım yapabilme",
        "fullOutcome": "10.1.1. Dik üçgende trigonometrik oranlara (sinüs, kosinüs, tanjant, kotanjant) ve trigonometrik özdeşliklere ilişkin çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 3,
          "G": 2,
          "H": 2,
          "J": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "Üçgende Yardımcı Elemanlar",
        "topic": "",
        "code": "10.1.2",
        "text": "Üçgenin yardımcı elemanlarının özellikleri ile ilgili çıkarım yapabilme",
        "fullOutcome": "10.1.2. Üçgenin yardımcı elemanlarının özellikleri ile ilgili çıkarım yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Üçgenin Alanı",
        "topic": "",
        "code": "10.1.3",
        "text": "Üçgenin bir kenarı ve o kenara ait yüksekliğinin değişimine bağlı olarak alanının değişimine ilişkin çıkarım yapabilme",
        "fullOutcome": "10.1.3. Üçgenin bir kenarı ve o kenara ait yüksekliğinin değişimine bağlı olarak alanının değişimine ilişkin çıkarım yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "Sinüs ve Kosinüs Teoremleri",
        "topic": "",
        "code": "10.1.4",
        "text": "Sinüs ve kosinüs teoremlerini doğrulayabilme veya ispatlayabilme",
        "fullOutcome": "10.1.4. Sinüs ve kosinüs teoremlerini doğrulayabilme veya ispatlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1,
          "M": 1
        }
      },
      {
        "theme": "İki Kategorik Değişkenli Veriler",
        "topic": "",
        "code": "10.2.1",
        "text": "İki kategorik değişkenli veri ile çalışabilme ve iki kategorik değişken arasındaki ilişkililiğe dayalı karar verebilme",
        "fullOutcome": "10.2.1. İki kategorik değişkenli veri ile çalışabilme ve iki kategorik değişken arasındaki ilişkililiğe dayalı karar verebilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Başkaları Tarafından Oluşturulan İki Kategorik Değişkenli Verileri İnceleme",
        "topic": "",
        "code": "10.2.2",
        "text": "Başkaları tarafından oluşturulan iki kategorik değişkenli verilerin ilişkililiğine dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "fullOutcome": "10.2.2. Başkaları tarafından oluşturulan iki kategorik değişkenli verilerin ilişkililiğine dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "counts": {
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "Bir Doğal Sayının Asal Çarpanları, Bölenleri",
        "topic": "",
        "code": "10.3.1",
        "text": "Bir doğal sayı ile asal çarpanları ve bölenleri arasındaki ilişkilere dair çıkarım yapabilme",
        "fullOutcome": "10.3.1. Bir doğal sayı ile asal çarpanları ve bölenleri arasındaki ilişkilere dair çıkarım yapabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 1
        }
      },
      {
        "theme": "En Büyük Ortak Bölen, En Küçük Ortak Kat",
        "topic": "",
        "code": "10.3.2",
        "text": "Birden çok doğal sayının ortak bölenleriyle bunların en büyüğü ve ortak katlarıyla bunların en küçüğü arasındaki ilişkilere dair muhakeme yapabilme",
        "fullOutcome": "10.3.2. Birden çok doğal sayının ortak bölenleriyle bunların en büyüğü ve ortak katlarıyla bunların en küçüğü arasındaki ilişkilere dair muhakeme yapabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 3,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Bölünebilme",
        "topic": "",
        "code": "10.3.3",
        "text": "Bir doğal sayının belirli doğal sayılara bölümünden kalanlarına dair muhakeme yapabilme",
        "fullOutcome": "10.3.3. Bir doğal sayının belirli doğal sayılara bölümünden kalanlarına dair muhakeme yapabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Gerçek Sayılarda Fonksiyon Olma Şartları",
        "topic": "",
        "code": "10.4.1",
        "text": "Gerçek sayılarda fonksiyon olma şartları ile gerçek sayılarda tanımlı fonksiyonların nitel özelliklerini matematiksel temsillerle değerlendirebilme",
        "fullOutcome": "10.4.1. Gerçek sayılarda fonksiyon olma şartları ile gerçek sayılarda tanımlı fonksiyonların nitel özelliklerini matematiksel temsillerle değerlendirebilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 1
        }
      },
      {
        "theme": "Karesel Fonksiyon ve Nitel Özellikleri",
        "topic": "",
        "code": "10.4.2",
        "text": "Gerçek sayılarda f(x) = x² şeklinde tanımlı karesel referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen (g(x) = a ∙ f(x ± r) ± k (a, r, k ∈ ℝ, a ≠ 0)) karesel fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "fullOutcome": "10.4.2. Gerçek sayılarda f(x) = x² şeklinde tanımlı karesel referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen (g(x) = a ∙ f(x ± r) ± k (a, r, k ∈ ℝ, a ≠ 0)) karesel fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "counts": {
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Karekök Fonksiyonu ve Nitel Özellikleri",
        "topic": "",
        "code": "10.4.3",
        "text": "Gerçek sayılarda f(x) = √x (x ≥ 0) şeklinde tanımlı karekök referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen (g(x) = a ∙ f(x ± r) ± k (a, r, k ∈ ℝ, a ≠ 0)) karekök fonksiyonlarının nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "fullOutcome": "10.4.3. Gerçek sayılarda f(x) = √x (x ≥ 0) şeklinde tanımlı karekök referans fonksiyonun nitel özellikleri ile bu fonksiyondan türetilen (g(x) = a ∙ f(x ± r) ± k (a, r, k ∈ ℝ, a ≠ 0)) karekök fonksiyonlarının nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "counts": {}
      }
    ]
  },
  {
    "id": "matematik-11",
    "sourceFile": "/assets/aistudio/matematik2_3d91ad35.xml",
    "subject": "Matematik",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 10
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "İki Nicel Değişkenli Veriler",
        "topic": "",
        "code": "MAT.11.1.1",
        "text": "İki nicel değişkenli veri ile çalışabilme ve iki nicel değişken arasındaki ilişkililiğe dayalı karar verebilme",
        "fullOutcome": "MAT.11.1.1. İki nicel değişkenli veri ile çalışabilme ve iki nicel değişken arasındaki ilişkililiğe dayalı karar verebilme",
        "counts": {
          "D": 3,
          "E": 3,
          "F": 2,
          "G": 3,
          "H": 3,
          "I": 1,
          "K": 2,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Başkaları Tarafından Oluşturulan İki Nicel Değişkenli Verileri İnceleme",
        "topic": "",
        "code": "MAT.11.1.2",
        "text": "Başkaları tarafından oluşturulan iki nicel değişkenli verilerin ilişkililiğine dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "fullOutcome": "MAT.11.1.2. Başkaları tarafından oluşturulan iki nicel değişkenli verilerin ilişkililiğine dayalı istatistiksel sonuç veya yorumları tartışabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "L": 1
        }
      },
      {
        "theme": "Dörtgenlerin Özellikleri",
        "topic": "",
        "code": "MAT.11.2.1",
        "text": "Üçgenlerde açı, benzerlik ve alan özelliklerinden yola çıkarak dörtgenlerin açı, kenar, köşegen, simetri ve alan özelliklerine ilişkin muhakeme yapabilme",
        "fullOutcome": "MAT.11.2.1. Üçgenlerde açı, benzerlik ve alan özelliklerinden yola çıkarak dörtgenlerin açı, kenar, köşegen, simetri ve alan özelliklerine ilişkin muhakeme yapabilme",
        "counts": {
          "D": 3,
          "E": 4,
          "F": 3,
          "G": 4,
          "H": 3,
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Özel Dörtgenler Arasındaki İlişkiler",
        "topic": "",
        "code": "MAT.11.2.2",
        "text": "Özel dörtgenlerin kenar, açı, köşegen ve simetri özelliklerinden hareketle aralarındaki ilişkileri yapılandırabilme",
        "fullOutcome": "MAT.11.2.2. Özel dörtgenlerin kenar, açı, köşegen ve simetri özelliklerinden hareketle aralarındaki ilişkileri yapılandırabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "Çokgenlerin Sınıflandırılması",
        "topic": "",
        "code": "MAT.11.2.3",
        "text": "Çokgenleri içbükey veya dışbükey olarak sınıflandırabilme",
        "fullOutcome": "MAT.11.2.3. Çokgenleri içbükey veya dışbükey olarak sınıflandırabilme",
        "counts": {
          "I": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "Dışbükey Çokgenlerin Özellikleri",
        "topic": "",
        "code": "MAT.11.2.4",
        "text": "Dışbükey çokgenlerin kenar, açı, köşegen, simetri ve alan özelliklerine dair çıkarım yapabilme",
        "fullOutcome": "MAT.11.2.4. Dışbükey çokgenlerin kenar, açı, köşegen, simetri ve alan özelliklerine dair çıkarım yapabilme",
        "counts": {
          "I": 2,
          "J": 3,
          "K": 3,
          "L": 1,
          "M": 2,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Çokgenlerle İlgili Problemler",
        "topic": "",
        "code": "MAT.11.2.5",
        "text": "Çokgenlerin kenar, açı, köşegen, simetri ve alan özelliklerini içeren problemler çözebilme",
        "fullOutcome": "MAT.11.2.5. Çokgenlerin kenar, açı, köşegen, simetri ve alan özelliklerini içeren problemler çözebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 3,
          "M": 2,
          "N": 3,
          "O": 1
        }
      },
      {
        "theme": "Trigonometrik Fonksiyonlar ve Nitel Özellikleri",
        "topic": "",
        "code": "MAT.11.3.1",
        "text": "f (x) = sinx (x ∈ ℝ), f (x) = cosx (x ∈ ℝ), f (x) = tanx (x ∈ ℝ, x ≠ π /2 + kπ, k ∈ ℤ ) ve f (x) = cotx (x ∈ ℝ, x ≠ kπ, k ∈ ℤ) şeklinde tanımlı trigonometrik referans fonksiyonların nitel özellikleri ile bu fonksiyonlardan türetilen [g(x) = k ∙ f (mx ± r) ± s (k, m, r, s ∈ ℝ, k ≠ 0, m ≠ 0)] trigonometrik fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "fullOutcome": "MAT.11.3.1. f (x) = sinx (x ∈ ℝ), f (x) = cosx (x ∈ ℝ), f (x) = tanx (x ∈ ℝ, x ≠ π /2 + kπ, k ∈ ℤ ) ve f (x) = cotx (x ∈ ℝ, x ≠ kπ, k ∈ ℤ) şeklinde tanımlı trigonometrik referans fonksiyonların nitel özellikleri ile bu fonksiyonlardan türetilen [g(x) = k ∙ f (mx ± r) ± s (k, m, r, s ∈ ℝ, k ≠ 0, m ≠ 0)] trigonometrik fonksiyonların nitel özelliklerine ilişkin matematiksel muhakeme yapabilme",
        "counts": {
          "I": 2,
          "J": 1,
          "N": 1,
          "O": 1
        }
      }
    ]
  },
  {
    "id": "matematik-12",
    "sourceFile": "/assets/aistudio/matematik2_3d91ad35.xml",
    "subject": "Matematik",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 8",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "Q",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "R",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 5
      }
    ],
    "outcomes": [
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.1.1",
        "text": "Üstel fonksiyonu açıklar.",
        "fullOutcome": "12.1.1.1. Üstel fonksiyonu açıklar.",
        "counts": {
          "D": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.2.1",
        "text": "Logaritma fonksiyonu ile üstel fonksiyonu ilişkilendirerek problemler çözer.",
        "fullOutcome": "12.1.2.1. Logaritma fonksiyonu ile üstel fonksiyonu ilişkilendirerek problemler çözer.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "K": 1,
          "Q": 1
        }
      },
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.2.2",
        "text": "10 ve e tabanında logaritma fonksiyonunu tanımlayarak problemler çözer.",
        "fullOutcome": "12.1.2.2. 10 ve e tabanında logaritma fonksiyonunu tanımlayarak problemler çözer.",
        "counts": {
          "D": 1,
          "E": 2,
          "G": 1,
          "H": 1,
          "I": 2,
          "J": 1,
          "K": 1,
          "O": 1,
          "R": 1
        }
      },
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.2.3",
        "text": "Logaritma fonksiyonunun özelliklerini kullanarak işlemler yapar.",
        "fullOutcome": "12.1.2.3. Logaritma fonksiyonunun özelliklerini kullanarak işlemler yapar.",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 3,
          "K": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.3.1",
        "text": "Üstel, logaritmik denklemlerin ve eşitsizliklerin çözüm kümelerini bulur.",
        "fullOutcome": "12.1.3.1. Üstel, logaritmik denklemlerin ve eşitsizliklerin çözüm kümelerini bulur.",
        "counts": {
          "D": 2,
          "E": 2,
          "G": 3,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "P": 1
        }
      },
      {
        "theme": "Üstel ve Logaritmik Fonksiyonlar",
        "topic": "",
        "code": "12.1.3.2",
        "text": "Üstel ve logaritmik fonksiyonları gerçek hayat durumlarını modellemede kullanır.",
        "fullOutcome": "12.1.3.2. Üstel ve logaritmik fonksiyonları gerçek hayat durumlarını modellemede kullanır.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "I": 1,
          "K": 1,
          "M": 1,
          "P": 1
        }
      },
      {
        "theme": "Diziler",
        "topic": "",
        "code": "12.2.1.1",
        "text": "Dizi kavramını fonksiyon kavramıyla ilişkilendirerek açıklar.",
        "fullOutcome": "12.2.1.1. Dizi kavramını fonksiyon kavramıyla ilişkilendirerek açıklar.",
        "counts": {
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "Diziler",
        "topic": "",
        "code": "12.2.1.2",
        "text": "Genel terimi veya indirgeme bağıntısı verilen bir sayı dizisinin terimlerini bulur.",
        "fullOutcome": "12.2.1.2. Genel terimi veya indirgeme bağıntısı verilen bir sayı dizisinin terimlerini bulur.",
        "counts": {
          "G": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "Q": 1
        }
      },
      {
        "theme": "Diziler",
        "topic": "",
        "code": "12.2.1.3",
        "text": "Aritmetik ve geometrik dizilerin özelliklerini kullanarak işlemler yapar.",
        "fullOutcome": "12.2.1.3. Aritmetik ve geometrik dizilerin özelliklerini kullanarak işlemler yapar.",
        "counts": {
          "F": 2,
          "J": 1,
          "L": 1,
          "M": 2,
          "O": 1,
          "R": 1
        }
      },
      {
        "theme": "Diziler",
        "topic": "",
        "code": "12.2.1.4",
        "text": "Diziler yardımıyla gerçek hayat durumları ile ilgili problemler çözer.",
        "fullOutcome": "12.2.1.4. Diziler yardımıyla gerçek hayat durumları ile ilgili problemler çözer.",
        "counts": {
          "F": 1,
          "K": 1,
          "N": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "Trigonometri",
        "topic": "",
        "code": "12.3.1.1",
        "text": "İki açının ölçüleri toplamının ve farkının trigonometrik değerlerine ait formülleri oluşturarak işlemler yapar.",
        "fullOutcome": "12.3.1.1. İki açının ölçüleri toplamının ve farkının trigonometrik değerlerine ait formülleri oluşturarak işlemler yapar.",
        "counts": {
          "L": 1,
          "M": 2,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "Trigonometri",
        "topic": "",
        "code": "12.3.1.2",
        "text": "İki kat açı formüllerini oluşturarak işlemler yapar.",
        "fullOutcome": "12.3.1.2. İki kat açı formüllerini oluşturarak işlemler yapar.",
        "counts": {
          "L": 1,
          "M": 2,
          "O": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "Trigonometri",
        "topic": "",
        "code": "12.3.2.1",
        "text": "Trigonometrik denklemlerin çözüm kümelerini bulur.",
        "fullOutcome": "12.3.2.1. Trigonometrik denklemlerin çözüm kümelerini bulur.",
        "counts": {
          "L": 1,
          "M": 2,
          "N": 1,
          "O": 2,
          "P": 1,
          "Q": 3,
          "R": 2
        }
      },
      {
        "theme": "Dönüşümler",
        "topic": "",
        "code": "12.4.1.1",
        "text": "Analitik düzlemde koordinatları verilen bir noktanın öteleme, dönme ve simetri dönüşümleri altındaki görüntüsünün koordinatlarını bulur.",
        "fullOutcome": "12.4.1.1. Analitik düzlemde koordinatları verilen bir noktanın öteleme, dönme ve simetri dönüşümleri altındaki görüntüsünün koordinatlarını bulur.",
        "counts": {
          "N": 1,
          "O": 1
        }
      }
    ]
  },
  {
    "id": "türkçe-5",
    "sourceFile": "/assets/aistudio/turkce2_a16045a0.xml",
    "subject": "Türkçe",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.1",
        "text": "Okumada materyal seçimini yönetebilme",
        "fullOutcome": "T.O.5.1. Okumada materyal seçimini yönetebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.2",
        "text": "Akıcı okuyabilme",
        "fullOutcome": "T.O.5.2. Akıcı okuyabilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.3",
        "text": "Okumada strateji, yöntem ve teknik seçimlerini yönetebilme",
        "fullOutcome": "T.O.5.3. Okumada strateji, yöntem ve teknik seçimlerini yönetebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.4",
        "text": "Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "fullOutcome": "T.O.5.4. Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.5",
        "text": "Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "fullOutcome": "T.O.5.5. Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1,
          "J": 1,
          "K": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.6",
        "text": "Metnin yüzey anlamını belirleyebilme",
        "fullOutcome": "T.O.5.6. Metnin yüzey anlamını belirleyebilme",
        "counts": {
          "C": 2,
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.7",
        "text": "Görselle iletilen anlamı belirleyebilme",
        "fullOutcome": "T.O.5.7. Görselle iletilen anlamı belirleyebilme",
        "counts": {
          "C": 1,
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.11",
        "text": "Metindeki unsurları sınıflandırabilme",
        "fullOutcome": "T.O.5.11. Metindeki unsurları sınıflandırabilme",
        "counts": {
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.13",
        "text": "Öyküleyici metinde hikâye unsurlarını belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.13. Öyküleyici metinde hikâye unsurlarını belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.15",
        "text": "Metnin anahtar kelimelerini belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.15. Metnin anahtar kelimelerini belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.16",
        "text": "Metnin bölümlerini belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.16. Metnin bölümlerini belirlemeye yönelik çözümleme yapabilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.17",
        "text": "Şiirin biçim özelliklerini belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.17. Şiirin biçim özelliklerini belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.18",
        "text": "Bilgilendirici metinde düşünceyi geliştirme yollarını belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.18. Bilgilendirici metinde düşünceyi geliştirme yollarını belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.19",
        "text": "Metindeki söz sanatlarını belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.19. Metindeki söz sanatlarını belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.20",
        "text": "Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.5.20. Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "counts": {
          "C": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.5.22",
        "text": "Okuma sürecini değerlendirebilme",
        "fullOutcome": "T.O.5.22. Okuma sürecini değerlendirebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.1",
        "text": "Yazma sürecini yönetebilme",
        "fullOutcome": "T.Y.5.1. Yazma sürecini yönetebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.2",
        "text": "Yazmada strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.5.2. Yazmada strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.3",
        "text": "Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.5.3. Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "counts": {
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.4",
        "text": "Yazısında çoklu ortam ögeleriyle içerik oluşturabilme",
        "fullOutcome": "T.Y.5.4. Yazısında çoklu ortam ögeleriyle içerik oluşturabilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.5",
        "text": "Yaratıcı yazı yazabilme",
        "fullOutcome": "T.Y.5.5. Yaratıcı yazı yazabilme",
        "counts": {
          "I": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.6",
        "text": "Yazılı üretim ve yazılı etkileşiminde tahminlerinden yararlanabilme",
        "fullOutcome": "T.Y.5.6. Yazılı üretim ve yazılı etkileşiminde tahminlerinden yararlanabilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.8",
        "text": "Yazısında sınıflandırma yapabilme",
        "fullOutcome": "T.Y.5.8. Yazısında sınıflandırma yapabilme",
        "counts": {
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.13",
        "text": "Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "fullOutcome": "T.Y.5.13. Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "N": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.15",
        "text": "Uygun bağlantı ifadelerini kullanabilme",
        "fullOutcome": "T.Y.5.15. Uygun bağlantı ifadelerini kullanabilme",
        "counts": {
          "J": 1,
          "L": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.16",
        "text": "Yazım ve noktalama işaretleriyle ilgili kuralları uygulayabilme",
        "fullOutcome": "T.Y.5.16. Yazım ve noktalama işaretleriyle ilgili kuralları uygulayabilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "J": 1,
          "L": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.5.17",
        "text": "Yazma sürecini değerlendirebilme",
        "fullOutcome": "T.Y.5.17. Yazma sürecini değerlendirebilme",
        "counts": {}
      }
    ]
  },
  {
    "id": "türkçe-6",
    "sourceFile": "/assets/aistudio/turkce2_a16045a0.xml",
    "subject": "Türkçe",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.1",
        "text": "Okumada materyal seçimini yönetebilme",
        "fullOutcome": "T.O.6.1. Okumada materyal seçimini yönetebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.2",
        "text": "Sesli ve sessiz okurken akıcı okuma unsurlarını yönetebilme",
        "fullOutcome": "T.O.6.2. Sesli ve sessiz okurken akıcı okuma unsurlarını yönetebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.3",
        "text": "Okumada strateji ve yöntem seçimlerini yönetebilme",
        "fullOutcome": "T.O.6.3. Okumada strateji ve yöntem seçimlerini yönetebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.4",
        "text": "Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "fullOutcome": "T.O.6.4. Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.5",
        "text": "Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "fullOutcome": "T.O.6.5. Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "counts": {
          "C": 1,
          "E": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "L": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.6",
        "text": "Metnin yüzey anlamını belirleyebilme",
        "fullOutcome": "T.O.6.6. Metnin yüzey anlamını belirleyebilme",
        "counts": {
          "C": 2,
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1,
          "K": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.7",
        "text": "Görselle iletilen anlamı belirleyebilme",
        "fullOutcome": "T.O.6.7. Görselle iletilen anlamı belirleyebilme",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.8",
        "text": "Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme",
        "fullOutcome": "T.O.6.8. Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme",
        "counts": {
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.9",
        "text": "Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme",
        "fullOutcome": "T.O.6.9. Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme",
        "counts": {
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.10",
        "text": "Metin içi karşılaştırma yapabilme",
        "fullOutcome": "T.O.6.10. Metin içi karşılaştırma yapabilme",
        "counts": {
          "I": 1,
          "K": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.11",
        "text": "Metinler arası karşılaştırma yapabilme",
        "fullOutcome": "T.O.6.11. Metinler arası karşılaştırma yapabilme",
        "counts": {
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.12",
        "text": "Metindeki unsurları sınıflandırabilme",
        "fullOutcome": "T.O.6.12. Metindeki unsurları sınıflandırabilme",
        "counts": {
          "K": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.16",
        "text": "Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.6.16. Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.17",
        "text": "Metnin bölümlerini belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.6.17. Metnin bölümlerini belirlemeye yönelik çözümleme yapabilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.18",
        "text": "Şiirin biçim özelliklerini belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.6.18. Şiirin biçim özelliklerini belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.19",
        "text": "Bilgilendirici metinde düşünceyi geliştirme yollarını belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.6.19. Bilgilendirici metinde düşünceyi geliştirme yollarını belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.21",
        "text": "Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.6.21. Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 1,
          "K": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.23",
        "text": "Okuduğunu özetleyebilme",
        "fullOutcome": "T.O.6.23. Okuduğunu özetleyebilme",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.6.27",
        "text": "Okuma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "fullOutcome": "T.O.6.27. Okuma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.1",
        "text": "Yazma sürecini yönetebilme",
        "fullOutcome": "T.Y.6.1. Yazma sürecini yönetebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.2",
        "text": "Yazma strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.6.2. Yazma strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.3",
        "text": "Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.6.3. Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.4",
        "text": "Yazılı üretim ve yazılı etkileşiminde ön bilgilerinden yararlanabilme",
        "fullOutcome": "T.Y.6.4. Yazılı üretim ve yazılı etkileşiminde ön bilgilerinden yararlanabilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.5",
        "text": "Yazılı etkileşiminde uygun tepki verebilme",
        "fullOutcome": "T.Y.6.5. Yazılı etkileşiminde uygun tepki verebilme",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.7",
        "text": "Yaratıcı yazı yazabilme",
        "fullOutcome": "T.Y.6.7. Yaratıcı yazı yazabilme",
        "counts": {
          "I": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.9",
        "text": "Yazısında karşılaştırma yapabilme",
        "fullOutcome": "T.Y.6.9. Yazısında karşılaştırma yapabilme",
        "counts": {
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.10",
        "text": "Yazısında sınıflandırma yapabilme",
        "fullOutcome": "T.Y.6.10. Yazısında sınıflandırma yapabilme",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.11",
        "text": "Yorumunu yazılı olarak ifade edebilme",
        "fullOutcome": "T.Y.6.11. Yorumunu yazılı olarak ifade edebilme",
        "counts": {
          "K": 1,
          "N": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.17",
        "text": "Yazısında düşünceyi geliştirme yollarını kullanabilme",
        "fullOutcome": "T.Y.6.17. Yazısında düşünceyi geliştirme yollarını kullanabilme",
        "counts": {
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.18",
        "text": "Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "fullOutcome": "T.Y.6.18. Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "counts": {
          "C": 1,
          "E": 1,
          "H": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.21",
        "text": "Yazım kuralları ve noktalama işaretlerini uygulayabilme",
        "fullOutcome": "T.Y.6.21. Yazım kuralları ve noktalama işaretlerini uygulayabilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.6.22",
        "text": "Yazma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "fullOutcome": "T.Y.6.22. Yazma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "counts": {}
      }
    ]
  },
  {
    "id": "türkçe-7",
    "sourceFile": "/assets/aistudio/turkce2_a16045a0.xml",
    "subject": "Türkçe",
    "level": "Ortaokul",
    "grade": "7. Sınıf",
    "gradeNum": 7,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.1",
        "text": "Okumada materyal seçimini yönetebilme",
        "fullOutcome": "T.O.7.1. Okumada materyal seçimini yönetebilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.2",
        "text": "Okumada strateji ve yöntem seçimlerini yönetebilme",
        "fullOutcome": "T.O.7.2. Okumada strateji ve yöntem seçimlerini yönetebilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.3",
        "text": "Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "fullOutcome": "T.O.7.3. Okuyacağı metnin içeriğine yönelik tahminde bulunabilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.4",
        "text": "Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "fullOutcome": "T.O.7.4. Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.5",
        "text": "Metnin yüzey anlamını belirleyebilme",
        "fullOutcome": "T.O.7.5. Metnin yüzey anlamını belirleyebilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.7",
        "text": "Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme",
        "fullOutcome": "T.O.7.7. Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.8",
        "text": "Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme",
        "fullOutcome": "T.O.7.8. Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme",
        "counts": {
          "C": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.14",
        "text": "Bilgilendirici metinlerde metin yapılarından hareketle önemli bilgileri belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.7.14. Bilgilendirici metinlerde metin yapılarından hareketle önemli bilgileri belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "D": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.15",
        "text": "Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.7.15. Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme",
        "counts": {
          "D": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.21",
        "text": "Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "fullOutcome": "T.O.7.21. Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "",
        "code": "T.O.7.28",
        "text": "Okuma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "fullOutcome": "T.O.7.28. Okuma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.1",
        "text": "Yazma sürecini yönetebilme",
        "fullOutcome": "T.Y.7.1. Yazma sürecini yönetebilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.2",
        "text": "Yazma strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.7.2. Yazma strateji, yöntem ve tekniklerine yönelik seçimlerini yönetebilme",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.3",
        "text": "Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "fullOutcome": "T.Y.7.3. Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "G": 1,
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.18",
        "text": "Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "fullOutcome": "T.Y.7.18. Yazısını zenginleştirecek biçimde söz varlığını kullanabilme",
        "counts": {
          "C": 1,
          "F": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.21",
        "text": "Yazım kuralları ve noktalama işaretlerini uygulayabilme",
        "fullOutcome": "T.Y.7.21. Yazım kuralları ve noktalama işaretlerini uygulayabilme",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "",
        "code": "T.Y.7.22",
        "text": "Yazma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "fullOutcome": "T.Y.7.22. Yazma sürecine yönelik öz yansıtma yapabilme/kendini uyarlayabilme",
        "counts": {
          "I": 1
        }
      }
    ]
  },
  {
    "id": "türkçe-8",
    "sourceFile": "/assets/aistudio/turkce2_a16045a0.xml",
    "subject": "Türkçe",
    "level": "Ortaokul",
    "grade": "8. Sınıf",
    "gradeNum": 8,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 10
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 10
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "Q",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.1",
        "text": "Noktalama işaretlerine dikkat ederek sesli ve sessiz okur.",
        "fullOutcome": "T.8.3.1. Noktalama işaretlerine dikkat ederek sesli ve sessiz okur.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.2",
        "text": "Metni türün özelliklerine uygun biçimde okur.",
        "fullOutcome": "T.8.3.2. Metni türün özelliklerine uygun biçimde okur.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.3",
        "text": "Farklı yazı karakterleri ile yazılmış yazıları okur.",
        "fullOutcome": "T.8.3.3. Farklı yazı karakterleri ile yazılmış yazıları okur.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.4",
        "text": "Okuma stratejilerini kullanır.",
        "fullOutcome": "T.8.3.4. Okuma stratejilerini kullanır.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.5",
        "text": "Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.",
        "fullOutcome": "T.8.3.5. Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.6",
        "text": "Deyim, atasözü ve özdeyişlerin metne katkısını belirler.",
        "fullOutcome": "T.8.3.6. Deyim, atasözü ve özdeyişlerin metne katkısını belirler.",
        "counts": {
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.7",
        "text": "Metindeki söz sanatlarını tespit eder.",
        "fullOutcome": "T.8.3.7. Metindeki söz sanatlarını tespit eder.",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "O": 1,
          "Q": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.8",
        "text": "Metindeki anlatım bozukluklarını belirler.",
        "fullOutcome": "T.8.3.8. Metindeki anlatım bozukluklarını belirler.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Söz Varlığı",
        "code": "T.8.3.9",
        "text": "Fiilimsilerin cümledeki işlevlerini kavrar.",
        "fullOutcome": "T.8.3.9. Fiilimsilerin cümledeki işlevlerini kavrar.",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "J": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.10",
        "text": "Geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısını değerlendirir.",
        "fullOutcome": "T.8.3.10. Geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısını değerlendirir.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.11",
        "text": "Metindeki anlatım biçimlerini belirler.",
        "fullOutcome": "T.8.3.11. Metindeki anlatım biçimlerini belirler.",
        "counts": {
          "E": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.12",
        "text": "Görsel ve başlıktan hareketle okuyacağı metnin konusunu tahmin eder.",
        "fullOutcome": "T.8.3.12. Görsel ve başlıktan hareketle okuyacağı metnin konusunu tahmin eder.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.13",
        "text": "Okuduklarını özetler.",
        "fullOutcome": "T.8.3.13. Okuduklarını özetler.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.14",
        "text": "Metinle ilgili soruları cevaplar.",
        "fullOutcome": "T.8.3.14. Metinle ilgili soruları cevaplar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.15",
        "text": "Metinle ilgili sorular sorar.",
        "fullOutcome": "T.8.3.15. Metinle ilgili sorular sorar.",
        "counts": {
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.16",
        "text": "Metnin konusunu belirler.",
        "fullOutcome": "T.8.3.16. Metnin konusunu belirler.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "J": 1,
          "K": 1,
          "N": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.17",
        "text": "Metnin ana fikrini/ana duygusunu belirler.",
        "fullOutcome": "T.8.3.17. Metnin ana fikrini/ana duygusunu belirler.",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "I": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.18",
        "text": "Metindeki yardımcı fikirleri belirler.",
        "fullOutcome": "T.8.3.18. Metindeki yardımcı fikirleri belirler.",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.19",
        "text": "Metnin içeriğine uygun başlık/başlıklar belirler.",
        "fullOutcome": "T.8.3.19. Metnin içeriğine uygun başlık/başlıklar belirler.",
        "counts": {
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.20",
        "text": "Okuduğu metinlerdeki hikâye unsurlarını belirler.",
        "fullOutcome": "T.8.3.20. Okuduğu metinlerdeki hikâye unsurlarını belirler.",
        "counts": {
          "L": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.21",
        "text": "Metnin içeriğini yorumlar.",
        "fullOutcome": "T.8.3.21. Metnin içeriğini yorumlar.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.22",
        "text": "Metinde ele alınan sorunlara farklı çözümler üretir.",
        "fullOutcome": "T.8.3.22. Metinde ele alınan sorunlara farklı çözümler üretir.",
        "counts": {
          "N": 1,
          "P": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.23",
        "text": "Metinler arasında karşılaştırma yapar.",
        "fullOutcome": "T.8.3.23. Metinler arasında karşılaştırma yapar.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.24",
        "text": "Metindeki gerçek ve kurgusal unsurları ayırt eder.",
        "fullOutcome": "T.8.3.24. Metindeki gerçek ve kurgusal unsurları ayırt eder.",
        "counts": {
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.25",
        "text": "Okudukları ile ilgili çıkarımlarda bulunur.",
        "fullOutcome": "T.8.3.25. Okudukları ile ilgili çıkarımlarda bulunur.",
        "counts": {
          "E": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "N": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.26",
        "text": "Metin türlerini ayırt eder.",
        "fullOutcome": "T.8.3.26. Metin türlerini ayırt eder.",
        "counts": {
          "E": 1,
          "H": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.27",
        "text": "Görsellerle ilgili soruları cevaplar.",
        "fullOutcome": "T.8.3.27. Görsellerle ilgili soruları cevaplar.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.28",
        "text": "Metinde önemli noktaların vurgulanış biçimlerini kavrar.",
        "fullOutcome": "T.8.3.28. Metinde önemli noktaların vurgulanış biçimlerini kavrar.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.29",
        "text": "Medya metinlerini analiz eder.",
        "fullOutcome": "T.8.3.29. Medya metinlerini analiz eder.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.30",
        "text": "Bilgi kaynaklarını etkili bir şekilde kullanır.",
        "fullOutcome": "T.8.3.30. Bilgi kaynaklarını etkili bir şekilde kullanır.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.31",
        "text": "Bilgi kaynaklarının güvenilirliğini sorgular.",
        "fullOutcome": "T.8.3.31. Bilgi kaynaklarının güvenilirliğini sorgular.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.32",
        "text": "Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.",
        "fullOutcome": "T.8.3.32. Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.33",
        "text": "Edebî eserin yazılı metni ile medya sunumunu karşılaştırır.",
        "fullOutcome": "T.8.3.33. Edebî eserin yazılı metni ile medya sunumunu karşılaştırır.",
        "counts": {}
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.34",
        "text": "Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.",
        "fullOutcome": "T.8.3.34. Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "OKUMA",
        "topic": "Anlama",
        "code": "T.8.3.35",
        "text": "Metindeki iş ve işlem basamaklarını kavrar.",
        "fullOutcome": "T.8.3.35. Metindeki iş ve işlem basamaklarını kavrar.",
        "counts": {
          "P": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.1",
        "text": "Şiir yazar.",
        "fullOutcome": "T.8.4.1. Şiir yazar.",
        "counts": {
          "D": 1,
          "F": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.2",
        "text": "Bilgilendirici metin yazar.",
        "fullOutcome": "T.8.4.2. Bilgilendirici metin yazar.",
        "counts": {
          "P": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.3",
        "text": "Hikâye edici metin yazar.",
        "fullOutcome": "T.8.4.3. Hikâye edici metin yazar.",
        "counts": {
          "M": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.4",
        "text": "Yazma stratejilerini uygular.",
        "fullOutcome": "T.8.4.4. Yazma stratejilerini uygular.",
        "counts": {
          "G": 1,
          "J": 1,
          "K": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.5",
        "text": "Anlatımı desteklemek için grafik ve tablo kullanır.",
        "fullOutcome": "T.8.4.5. Anlatımı desteklemek için grafik ve tablo kullanır.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.6",
        "text": "Bir işi işlem basamaklarına göre yazar.",
        "fullOutcome": "T.8.4.6. Bir işi işlem basamaklarına göre yazar.",
        "counts": {
          "N": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.7",
        "text": "Yazılarını zenginleştirmek için atasözleri, deyimler ve özdeyişler kullanır.",
        "fullOutcome": "T.8.4.7. Yazılarını zenginleştirmek için atasözleri, deyimler ve özdeyişler kullanır.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.8",
        "text": "Yazılarında mizahi ögeler kullanır.",
        "fullOutcome": "T.8.4.8. Yazılarında mizahi ögeler kullanır.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.9",
        "text": "Yazılarında anlatım biçimlerini kullanır.",
        "fullOutcome": "T.8.4.9. Yazılarında anlatım biçimlerini kullanır.",
        "counts": {
          "E": 1,
          "H": 1,
          "J": 1,
          "M": 1,
          "Q": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.10",
        "text": "Yazdıklarında yabancı dillerden alınmış, dilimize henüz yerleşmemiş kelimelerin Türkçelerini kullanır.",
        "fullOutcome": "T.8.4.10. Yazdıklarında yabancı dillerden alınmış, dilimize henüz yerleşmemiş kelimelerin Türkçelerini kullanır.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.12",
        "text": "Kısa metinler yazar.",
        "fullOutcome": "T.8.4.12. Kısa metinler yazar.",
        "counts": {
          "Q": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.13",
        "text": "Yazdıklarının içeriğine uygun başlık belirler.",
        "fullOutcome": "T.8.4.13. Yazdıklarının içeriğine uygun başlık belirler.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.14",
        "text": "Araştırmalarının sonuçlarını yazılı olarak sunar.",
        "fullOutcome": "T.8.4.14. Araştırmalarının sonuçlarını yazılı olarak sunar.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.15",
        "text": "Yazılarında uygun geçiş ve bağlantı ifadelerini kullanır.",
        "fullOutcome": "T.8.4.15. Yazılarında uygun geçiş ve bağlantı ifadelerini kullanır.",
        "counts": {
          "D": 1,
          "G": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.16",
        "text": "Yazdıklarını düzenler.",
        "fullOutcome": "T.8.4.16. Yazdıklarını düzenler.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.17",
        "text": "Yazdıklarını paylaşır.",
        "fullOutcome": "T.8.4.17. Yazdıklarını paylaşır.",
        "counts": {}
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.18",
        "text": "Cümlenin ögelerini ayırt eder.",
        "fullOutcome": "T.8.4.18. Cümlenin ögelerini ayırt eder.",
        "counts": {
          "F": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.19",
        "text": "Cümle türlerini tanır.",
        "fullOutcome": "T.8.4.19. Cümle türlerini tanır.",
        "counts": {
          "N": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "YAZMA",
        "topic": "Alt Öğrenme Alanı Yok",
        "code": "T.8.4.20",
        "text": "Fiillerin çatı özelliklerinin anlama olan katkısını kavrar.",
        "fullOutcome": "T.8.4.20. Fiillerin çatı özelliklerinin anlama olan katkısını kavrar.",
        "counts": {}
      }
    ]
  },
  {
    "id": "türkdiliveedebiyatı-9",
    "sourceFile": "/assets/aistudio/edebiyat2_1fc7acb4.xml",
    "subject": "Türk Dili ve Edebiyatı",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "OKUMA • Tema içeriğine uygun bir şiir • Tema içeriğine uygun bir deneme",
        "code": "TDE2.1",
        "text": "“Sözün İnceliği” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Sözün İnceliği” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "OKUMA • Tema içeriğine uygun bir şiir • Tema içeriğine uygun bir deneme",
        "code": "TDE2.2",
        "text": "“Sözün İnceliği” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Sözün İnceliği” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "D": 4,
          "E": 5,
          "F": 6,
          "G": 2,
          "H": 1,
          "I": 2,
          "J": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "YAZMA • Okuduğu şiiri bir betimleme paragrafı olarak yazabilme",
        "code": "TDE4.1",
        "text": "Edebî söyleyişin inceliğini yansıtmak için paragraf düzeyindeki bir yazısında süreci yönetebilme",
        "fullOutcome": "TDE4.1. Edebî söyleyişin inceliğini yansıtmak için paragraf düzeyindeki bir yazısında süreci yönetebilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "YAZMA • Okuduğu şiiri bir betimleme paragrafı olarak yazabilme",
        "code": "TDE4.2",
        "text": "Edebî söyleyişin inceliğini yansıtan metinlerden edindiği söz varlığını kullanarak yazısına içerik oluşturabilme",
        "fullOutcome": "TDE4.2. Edebî söyleyişin inceliğini yansıtan metinlerden edindiği söz varlığını kullanarak yazısına içerik oluşturabilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "YAZMA • Okuduğu şiiri bir betimleme paragrafı olarak yazabilme",
        "code": "TDE4.3",
        "text": "Edebî söyleyişin inceliğini yansıttığı yazısında kural uygulayabilme",
        "fullOutcome": "TDE4.3. Edebî söyleyişin inceliğini yansıttığı yazısında kural uygulayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN İNCELİĞİ",
        "topic": "YAZMA • Okuduğu şiiri bir betimleme paragrafı olarak yazabilme",
        "code": "TDE4.4",
        "text": "Edebî söyleyişin inceliğini yansıttığı yazısında yazma sürecini değerlendirebilme",
        "fullOutcome": "TDE4.4. Edebî söyleyişin inceliğini yansıttığı yazısında yazma sürecini değerlendirebilme",
        "counts": {}
      },
      {
        "theme": "2. TEMA: ANLAM ARAYIŞI",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye • Tema içeriğine uygun bir anı",
        "code": "TDE2.1",
        "text": "“Anlam Arayışı” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Anlam Arayışı” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {}
      },
      {
        "theme": "2. TEMA: ANLAM ARAYIŞI",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye • Tema içeriğine uygun bir anı",
        "code": "TDE2.2",
        "text": "“Anlam Arayışı” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Anlam Arayışı” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "G": 3,
          "H": 4,
          "I": 4,
          "J": 5
        }
      }
    ]
  },
  {
    "id": "türkdiliveedebiyatı-10",
    "sourceFile": "/assets/aistudio/edebiyat2_1fc7acb4.xml",
    "subject": "Türk Dili ve Edebiyatı",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Ülke Geneli Ortak Yazılı",
        "isNationalExam": true,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "OKUMA • Tema içeriğine uygun bir koşuk • Ara Metin: Tema içeriğine uygun bir koşma • Tema içeriğine uygun bir türkü • Ara Metin: Tema içeriğine uygun bir ninni",
        "code": "TDE2.1",
        "text": "“Sözün Ezgisi” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Sözün Ezgisi” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "OKUMA • Tema içeriğine uygun bir koşuk • Ara Metin: Tema içeriğine uygun bir koşma • Tema içeriğine uygun bir türkü • Ara Metin: Tema içeriğine uygun bir ninni",
        "code": "TDE2.2",
        "text": "“Sözün Ezgisi” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Sözün Ezgisi” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "OKUMA • Tema içeriğine uygun bir koşuk • Ara Metin: Tema içeriğine uygun bir koşma • Tema içeriğine uygun bir türkü • Ara Metin: Tema içeriğine uygun bir ninni",
        "code": "TDE2.3",
        "text": "“Sözün Ezgisi” temasında ele alınan metinleri çözümleyebilme",
        "fullOutcome": "TDE2.3. “Sözün Ezgisi” temasında ele alınan metinleri çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "OKUMA • Tema içeriğine uygun bir koşuk • Ara Metin: Tema içeriğine uygun bir koşma • Tema içeriğine uygun bir türkü • Ara Metin: Tema içeriğine uygun bir ninni",
        "code": "TDE2.4",
        "text": "“Sözün Ezgisi” temasında ele alınan metinlere yönelik okuma sürecini değerlendirebilme",
        "fullOutcome": "TDE2.4. “Sözün Ezgisi” temasında ele alınan metinlere yönelik okuma sürecini değerlendirebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "YAZMA • Dinlediği masalı film şeridi hâline getirebilme",
        "code": "TDE4.1",
        "text": "Dinlediği/izlediği metni film şeridi hâline getireceği yazma sürecini yönetebilme",
        "fullOutcome": "TDE4.1. Dinlediği/izlediği metni film şeridi hâline getireceği yazma sürecini yönetebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "YAZMA • Dinlediği masalı film şeridi hâline getirebilme",
        "code": "TDE4.2",
        "text": "Dinlediği/izlediği metni film şeridi hâline getireceği yazısına içerik oluşturabilme",
        "fullOutcome": "TDE4.2. Dinlediği/izlediği metni film şeridi hâline getireceği yazısına içerik oluşturabilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "YAZMA • Dinlediği masalı film şeridi hâline getirebilme",
        "code": "TDE4.3",
        "text": "Film şeridi hâline getirdiği yazısını düzenlerken kural uygulayabilme",
        "fullOutcome": "TDE4.3. Film şeridi hâline getirdiği yazısını düzenlerken kural uygulayabilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. TEMA: SÖZÜN EZGİSİ",
        "topic": "YAZMA • Dinlediği masalı film şeridi hâline getirebilme",
        "code": "TDE4.4",
        "text": "Film şeridi hâline getirdiği yazısına yönelik yazma sürecini değerlendirebilme",
        "fullOutcome": "TDE4.4. Film şeridi hâline getirdiği yazısına yönelik yazma sürecini değerlendirebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "OKUMA • Tema içeriğine uygun bir gazel • Ara Metin: Tema içeriğine uygun bir kaside • Tema içeriğine uygun bir şiir (Saf şiir)",
        "code": "TDE2.1",
        "text": "“Kelimelerin Ritmi” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Kelimelerin Ritmi” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "OKUMA • Tema içeriğine uygun bir gazel • Ara Metin: Tema içeriğine uygun bir kaside • Tema içeriğine uygun bir şiir (Saf şiir)",
        "code": "TDE2.2",
        "text": "“Kelimelerin Ritmi” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Kelimelerin Ritmi” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 2,
          "I": 2
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "OKUMA • Tema içeriğine uygun bir gazel • Ara Metin: Tema içeriğine uygun bir kaside • Tema içeriğine uygun bir şiir (Saf şiir)",
        "code": "TDE2.3",
        "text": "“Kelimelerin Ritmi” temasında ele alınan metinleri çözümleyebilme",
        "fullOutcome": "TDE2.3. “Kelimelerin Ritmi” temasında ele alınan metinleri çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "OKUMA • Tema içeriğine uygun bir gazel • Ara Metin: Tema içeriğine uygun bir kaside • Tema içeriğine uygun bir şiir (Saf şiir)",
        "code": "TDE2.4",
        "text": "“Kelimelerin Ritmi” temasında ele alınan metinlere yönelik okuma sürecini değerlendirebilme",
        "fullOutcome": "TDE2.4. “Kelimelerin Ritmi” temasında ele alınan metinlere yönelik okuma sürecini değerlendirebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "YAZMA • Bilgilendirici bir metni edebî metne dönüştürebilme",
        "code": "TDE4.1",
        "text": "Bilgilendirici bir metni edebî metne dönüştüreceği yazma sürecini yönetebilme",
        "fullOutcome": "TDE4.1. Bilgilendirici bir metni edebî metne dönüştüreceği yazma sürecini yönetebilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "YAZMA • Bilgilendirici bir metni edebî metne dönüştürebilme",
        "code": "TDE4.2",
        "text": "Bilgilendirici bir metni edebî metne dönüştüreceği yazısına içerik oluşturabilme",
        "fullOutcome": "TDE4.2. Bilgilendirici bir metni edebî metne dönüştüreceği yazısına içerik oluşturabilme",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "YAZMA • Bilgilendirici bir metni edebî metne dönüştürebilme",
        "code": "TDE4.3",
        "text": "Edebî metne dönüştürdüğü yazısında kural uygulayabilme",
        "fullOutcome": "TDE4.3. Edebî metne dönüştürdüğü yazısında kural uygulayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "2. TEMA: KELİMELERİN RİTMİ",
        "topic": "YAZMA • Bilgilendirici bir metni edebî metne dönüştürebilme",
        "code": "TDE4.4",
        "text": "Edebî metne dönüştürdüğü yazısına yönelik yazma sürecini değerlendirebilme",
        "fullOutcome": "TDE4.4. Edebî metne dönüştürdüğü yazısına yönelik yazma sürecini değerlendirebilme",
        "counts": {
          "D": 1
        }
      }
    ]
  },
  {
    "id": "türkdiliveedebiyatı-11",
    "sourceFile": "/assets/aistudio/edebiyat2_1fc7acb4.xml",
    "subject": "Türk Dili ve Edebiyatı",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "OKUMA • Tema içeriğine uygun bir Karagöz oyunu • Tema içeriğine uygun bir mektup • Ara Metin: Tema içeriğine uygun bir dilekçe",
        "code": "TDE2.1",
        "text": "“Bir Diyeceğim Var!” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Bir Diyeceğim Var!” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "OKUMA • Tema içeriğine uygun bir Karagöz oyunu • Tema içeriğine uygun bir mektup • Ara Metin: Tema içeriğine uygun bir dilekçe",
        "code": "TDE2.2",
        "text": "“Bir Diyeceğim Var!” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Bir Diyeceğim Var!” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 2
        }
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "OKUMA • Tema içeriğine uygun bir Karagöz oyunu • Tema içeriğine uygun bir mektup • Ara Metin: Tema içeriğine uygun bir dilekçe",
        "code": "TDE2.3",
        "text": "“Bir Diyeceğim Var!” temasında ele alınan metinleri çözümleyebilme",
        "fullOutcome": "TDE2.3. “Bir Diyeceğim Var!” temasında ele alınan metinleri çözümleyebilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "OKUMA • Tema içeriğine uygun bir Karagöz oyunu • Tema içeriğine uygun bir mektup • Ara Metin: Tema içeriğine uygun bir dilekçe",
        "code": "TDE2.4",
        "text": "“Bir Diyeceğim Var!” temasında ele alınan metinlerden hareketle okuma sürecini değerlendirebilme",
        "fullOutcome": "TDE2.4. “Bir Diyeceğim Var!” temasında ele alınan metinlerden hareketle okuma sürecini değerlendirebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1
        }
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "YAZMA • e-posta yazabilme",
        "code": "TDE4.1",
        "text": "Duygu, düşünce ve isteklerini etkili bir şekilde ileteceği yazısını yönetebilme",
        "fullOutcome": "TDE4.1. Duygu, düşünce ve isteklerini etkili bir şekilde ileteceği yazısını yönetebilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "YAZMA • e-posta yazabilme",
        "code": "TDE4.2",
        "text": "Günlük hayatta karşılaşılan durumlara ilişkin duygu ve düşüncelerini etkili kullanacağı yazısı için içerik oluşturabilme",
        "fullOutcome": "TDE4.2. Günlük hayatta karşılaşılan durumlara ilişkin duygu ve düşüncelerini etkili kullanacağı yazısı için içerik oluşturabilme",
        "counts": {}
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "YAZMA • e-posta yazabilme",
        "code": "TDE4.3",
        "text": "Günlük hayatta karşılaşılan durumlara ilişkin duygu ve düşüncelerini etkili kullanacağı yazısı için kural uygulayabilme",
        "fullOutcome": "TDE4.3. Günlük hayatta karşılaşılan durumlara ilişkin duygu ve düşüncelerini etkili kullanacağı yazısı için kural uygulayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "1. TEMA: BİR DİYECEĞİM VAR!",
        "topic": "YAZMA • e-posta yazabilme",
        "code": "TDE4.4",
        "text": "Günlük hayatta duygu, düşünce ve isteklerini ifade ettiği yazısında yazma sürecini değerlendirebilme",
        "fullOutcome": "TDE4.4. Günlük hayatta duygu, düşünce ve isteklerini ifade ettiği yazısında yazma sürecini değerlendirebilme",
        "counts": {}
      },
      {
        "theme": "2. TEMA: KÜLTÜR YOLCULUĞU",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye (Türk dünyası) • Ara Metin: Tema içeriğine uygun bir anı • Orhun Abideleri • Ara Metin: Dîvânu Lugâti’t-Türk",
        "code": "TDE2.1",
        "text": "“Kültür Yolculuğu” temasında ele alınan metinlerde okumayı yönetebilme",
        "fullOutcome": "TDE2.1. “Kültür Yolculuğu” temasında ele alınan metinlerde okumayı yönetebilme",
        "counts": {}
      },
      {
        "theme": "2. TEMA: KÜLTÜR YOLCULUĞU",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye (Türk dünyası) • Ara Metin: Tema içeriğine uygun bir anı • Orhun Abideleri • Ara Metin: Dîvânu Lugâti’t-Türk",
        "code": "TDE2.2",
        "text": "“Kültür Yolculuğu” temasında ele alınan metinlerde anlam oluşturabilme",
        "fullOutcome": "TDE2.2. “Kültür Yolculuğu” temasında ele alınan metinlerde anlam oluşturabilme",
        "counts": {
          "G": 2,
          "I": 1,
          "J": 2,
          "K": 2
        }
      },
      {
        "theme": "2. TEMA: KÜLTÜR YOLCULUĞU",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye (Türk dünyası) • Ara Metin: Tema içeriğine uygun bir anı • Orhun Abideleri • Ara Metin: Dîvânu Lugâti’t-Türk",
        "code": "TDE2.3",
        "text": "“Kültür Yolculuğu” temasında ele alınan metinleri çözümleyebilme",
        "fullOutcome": "TDE2.3. “Kültür Yolculuğu” temasında ele alınan metinleri çözümleyebilme",
        "counts": {
          "G": 1,
          "H": 2,
          "I": 2,
          "J": 2,
          "K": 2
        }
      },
      {
        "theme": "2. TEMA: KÜLTÜR YOLCULUĞU",
        "topic": "OKUMA • Tema içeriğine uygun bir hikâye (Türk dünyası) • Ara Metin: Tema içeriğine uygun bir anı • Orhun Abideleri • Ara Metin: Dîvânu Lugâti’t-Türk",
        "code": "TDE2.4",
        "text": "“Kültür Yolculuğu” temasında ele alınan metinlerde okuma sürecini değerlendirebilme",
        "fullOutcome": "TDE2.4. “Kültür Yolculuğu” temasında ele alınan metinlerde okuma sürecini değerlendirebilme",
        "counts": {
          "G": 1,
          "H": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "türkdiliveedebiyatı-12",
    "sourceFile": "/assets/aistudio/edebiyat2_1fc7acb4.xml",
    "subject": "Türk Dili ve Edebiyatı",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "1. ÜNİTE: GİRİŞ",
        "topic": "OKUMA: Edebiyat-felsefe/psikoloji ilişkisi, dilin tarihî değişimi ve Türkçenin önemli sözlükleri",
        "code": "TDE.12.1.1",
        "text": "Edebiyat ile düşünce akımları/felsefe ve psikoloji arasındaki ilişkiyi, dilin tarihî süreçteki değişimini ve Türkçenin sözlüklerini açıklar.",
        "fullOutcome": "TDE.12.1.1. Giriş ünitesi okuma ve dil bilgisi kazanımları",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "1. ÜNİTE: GİRİŞ",
        "topic": "YAZMA: Toplumsal değişim, teknoloji ve sosyal medyanın dili nasıl etkilediği hakkında yazı yazma",
        "code": "TDE.12.1.Y1",
        "text": "Toplumsal değişim, teknoloji ve sosyal medyanın dili nasıl etkilediği hakkında planlı bir yazı yazar.",
        "fullOutcome": "TDE.12.1.Y1. Toplumsal değişim, teknoloji ve sosyal medyanın dili nasıl etkilediği hakkında yazı yazma",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.1",
        "text": "Metinde geçen kelime ve kelime gruplarının anlamlarını tespit eder.",
        "fullOutcome": "A.2.1. Metinde geçen kelime ve kelime gruplarının anlamlarını tespit eder.",
        "counts": {
          "F": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.2",
        "text": "Metnin türünün ortaya çıkışı ve tarihsel dönem ile ilişkisini belirler.",
        "fullOutcome": "A.2.2. Metnin türünün ortaya çıkışı ve tarihsel dönem ile ilişkisini belirler.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.3",
        "text": "Metnin tema ve konusunu belirler.",
        "fullOutcome": "A.2.3. Metnin tema ve konusunu belirler.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.4",
        "text": "Metindeki çatışmaları belirler.",
        "fullOutcome": "A.2.4. Metindeki çatışmaları belirler.",
        "counts": {
          "D": 1,
          "M": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.5",
        "text": "Metnin olay örgüsünü belirler.",
        "fullOutcome": "A.2.5. Metnin olay örgüsünü belirler.",
        "counts": {}
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.6",
        "text": "Metindeki şahıs kadrosunun özelliklerini belirler.",
        "fullOutcome": "A.2.6. Metindeki şahıs kadrosunun özelliklerini belirler.",
        "counts": {}
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.7",
        "text": "Metindeki zaman ve mekânın özelliklerini belirler.",
        "fullOutcome": "A.2.7. Metindeki zaman ve mekânın özelliklerini belirler.",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.8",
        "text": "Metinde anlatıcı ve bakış açısının işlevini belirler.",
        "fullOutcome": "A.2.8. Metinde anlatıcı ve bakış açısının işlevini belirler.",
        "counts": {
          "F": 1,
          "L": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.9",
        "text": "Metindeki anlatım biçimleri ve tekniklerinin işlevlerini belirler.",
        "fullOutcome": "A.2.9. Metindeki anlatım biçimleri ve tekniklerinin işlevlerini belirler.",
        "counts": {
          "E": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.10",
        "text": "Metnin üslup özelliklerini belirler.",
        "fullOutcome": "A.2.10. Metnin üslup özelliklerini belirler.",
        "counts": {
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.11",
        "text": "Metinde millî, manevi ve evrensel değerler ile sosyal, siyasi, tarihî ve mitolojik ögeleri belirler.",
        "fullOutcome": "A.2.11. Metinde millî, manevi ve evrensel değerler ile sosyal, siyasi, tarihî ve mitolojik ögeleri belirler.",
        "counts": {
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.12",
        "text": "Metinde edebiyat, sanat ve fikir akımlarının/anlayışlarının yansımalarını değerlendirir.",
        "fullOutcome": "A.2.12. Metinde edebiyat, sanat ve fikir akımlarının/anlayışlarının yansımalarını değerlendirir.",
        "counts": {}
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.13",
        "text": "Metni yorumlar.",
        "fullOutcome": "A.2.13. Metni yorumlar.",
        "counts": {
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.14",
        "text": "Yazar ile metin arasındaki ilişkiyi değerlendir.",
        "fullOutcome": "A.2.14. Yazar ile metin arasındaki ilişkiyi değerlendir.",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.15",
        "text": "Türün ve dönemin/akımın diğer önemli yazarlarını ve eserlerini sıralar.",
        "fullOutcome": "A.2.15. Türün ve dönemin/akımın diğer önemli yazarlarını ve eserlerini sıralar.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "OKUMA 1. 1960 sonrası dönemden dört hikâye örneği 2. Küçürek (minimal) hikâye örnekleri Dil Bilgisi Konuları: - Metinler üzerinden imla ve noktalama çalışmaları yapılır. - Metinler üzerinde kelimede anlam ile ilgili çalışmalar yapılır.",
        "code": "A.2.16",
        "text": "Metinlerden hareketle dil bilgisi çalışmaları yapar.",
        "fullOutcome": "A.2.16. Metinlerden hareketle dil bilgisi çalışmaları yapar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "2. ÜNİTE: HİKÂYE",
        "topic": "YAZMA - Öğrencilerden inceledikleri hikâyelerde bulunan tekniklerden en az ikisini kullanarak bir hikâye yazmaları istenir. - Öğrencilerden küçürek hikâye yazmaları istenir.",
        "code": "B.1-B.12",
        "text": "İnceledikleri hikâyelerdeki anlatım tekniklerini kullanarak hikâye veya küçürek (minimal) hikâye yazar (EK 5 Yazma Kazanımları).",
        "fullOutcome": "B.1-B.12. İnceledikleri hikâyelerdeki anlatım tekniklerini kullanarak hikâye veya küçürek (minimal) hikâye yazar (EK 5 Yazma Kazanımları).",
        "counts": {
          "G": 1,
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.1",
        "text": "Metinde geçen kelime ve kelime gruplarının anlamlarını tespit eder.",
        "fullOutcome": "A.1.1. Metinde geçen kelime ve kelime gruplarının anlamlarını tespit eder.",
        "counts": {
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.2",
        "text": "Şiirin temasını belirler.",
        "fullOutcome": "A.1.2. Şiirin temasını belirler.",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.3",
        "text": "Şiirde ahengi sağlayan özellikleri/unsurları belirler.",
        "fullOutcome": "A.1.3. Şiirde ahengi sağlayan özellikleri/unsurları belirler.",
        "counts": {
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.4",
        "text": "Şiirin nazım biçimini ve nazım türünü tespit eder.",
        "fullOutcome": "A.1.4. Şiirin nazım biçimini ve nazım türünü tespit eder.",
        "counts": {
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.5",
        "text": "Şiirdeki mazmun, imge ve edebî sanatları belirleyerek bunların anlama katkısını değerlendirir.",
        "fullOutcome": "A.1.5. Şiirdeki mazmun, imge ve edebî sanatları belirleyerek bunların anlama katkısını değerlendirir.",
        "counts": {
          "I": 1,
          "M": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.6",
        "text": "Şiirde söyleyici ile hitap edilen kişi/varlık arasındaki ilişkiyi belirler.",
        "fullOutcome": "A.1.6. Şiirde söyleyici ile hitap edilen kişi/varlık arasındaki ilişkiyi belirler.",
        "counts": {}
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.7",
        "text": "Şiirde millî, manevi ve evrensel değerler ile sosyal, siyasi, tarihî ve mitolojik ögeleri belirler.",
        "fullOutcome": "A.1.7. Şiirde millî, manevi ve evrensel değerler ile sosyal, siyasi, tarihî ve mitolojik ögeleri belirler.",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.8",
        "text": "Şiirde edebiyat, sanat ve fikir akımlarının/anlayışlarının yansımalarını değerlendirir.",
        "fullOutcome": "A.1.8. Şiirde edebiyat, sanat ve fikir akımlarının/anlayışlarının yansımalarını değerlendirir.",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.9",
        "text": "Şiiri yorumlar.",
        "fullOutcome": "A.1.9. Şiiri yorumlar.",
        "counts": {
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.10",
        "text": "Şair ile şiir arasındaki ilişkiyi değerlendirir.",
        "fullOutcome": "A.1.10. Şair ile şiir arasındaki ilişkiyi değerlendirir.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.11",
        "text": "Türün/biçimin ve dönemin/akımın diğer önemli yazarlarını ve eserlerini sıralar.",
        "fullOutcome": "A.1.11. Türün/biçimin ve dönemin/akımın diğer önemli yazarlarını ve eserlerini sıralar.",
        "counts": {
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "3. ÜNİTE: ŞİİR",
        "topic": "OKUMA 1. Cumhuriyet Dönemi saf şiir anlayışından üç şiir örneği 2. Cumhuriyet Dönemi’nden (1923-1960) toplumcu eğilimleri yansıtan iki şiir örneği 3. Millî Edebiyat anlayışını yansıtan iki şiir örneği 4. Garip akımından iki şiir örneği 5. İkinci Yeni’den iki şiir örneği 6. Dinî değerleri, geleneğe duyarlığı ve metafizik anlayışı öne çıkaran modern şairlerden iki şiir örneği 7. 1960 sonrası toplumcu eğilimleri yansıtan bir şiir örneği 8. 1980 sonrası Türk şiirinden iki örnek",
        "code": "A.1.13",
        "text": "Metinler arası karşılaştırmalar yapar.",
        "fullOutcome": "A.1.13. Metinler arası karşılaştırmalar yapar.",
        "counts": {
          "I": 1,
          "J": 1
        }
      }
    ]
  },
  {
    "id": "sosyalbilgiler-5",
    "sourceFile": "/assets/aistudio/sosyal2_052e0cab.xml",
    "subject": "Sosyal Bilgiler",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Gruplar ve Roller",
        "topic": "",
        "code": "SB.5.1.1",
        "text": "Dâhil olduğu gruplar ve bu gruplardaki rolleri arasındaki ilişkileri çözümleyebilme",
        "fullOutcome": "SB.5.1.1. Dâhil olduğu gruplar ve bu gruplardaki rolleri arasındaki ilişkileri çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "O": 1
        }
      },
      {
        "theme": "Kültürel Özelliklere Saygı ve Birlikte Yaşama Kültürü",
        "topic": "",
        "code": "SB.5.1.2",
        "text": "Kültürel özelliklere saygı duymanın birlikte yaşamaya etkisini yorumlayabilme",
        "fullOutcome": "SB.5.1.2. Kültürel özelliklere saygı duymanın birlikte yaşamaya etkisini yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "K": 1
        }
      },
      {
        "theme": "Yardımlaşma ve Dayanışma Faaliyetlerinin Toplumsal Birliğe Etkisi",
        "topic": "",
        "code": "SB.5.1.3",
        "text": "Toplumsal birliği sürdürmeye yönelik yardımlaşma ve dayanışma faaliyetlerine katkı sağlayabilme",
        "fullOutcome": "SB.5.1.3. Toplumsal birliği sürdürmeye yönelik yardımlaşma ve dayanışma faaliyetlerine katkı sağlayabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 2,
          "G": 3,
          "H": 2,
          "J": 1,
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Yaşadığı İlin Göreceli Konumu",
        "topic": "",
        "code": "SB.5.2.1",
        "text": "Yaşadığı ilin göreceli konum özelliklerini algılayabilme",
        "fullOutcome": "SB.5.2.1. Yaşadığı ilin göreceli konum özelliklerini algılayabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1,
          "I": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "Yaşadığı İlde Doğal ve Beşerî Çevredeki Değişim",
        "topic": "",
        "code": "SB.5.2.2",
        "text": "Yaşadığı ilde doğal ve beşerî çevredeki değişimi neden ve sonuçlarıyla yorumlayabilme",
        "fullOutcome": "SB.5.2.2. Yaşadığı ilde doğal ve beşerî çevredeki değişimi neden ve sonuçlarıyla yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Yaşadığı İlde Meydana Gelebilecek Afetlerin Etkileri",
        "topic": "",
        "code": "SB.5.2.3.Yaşadığı",
        "text": "ilde meydana gelebilecek afetlerin etkilerini azaltmaya yönelik farkın dalık etkinliği fikrini eyleme dönüştürebilme",
        "fullOutcome": "SB.5.2.3.Yaşadığı ilde meydana gelebilecek afetlerin etkilerini azaltmaya yönelik farkın dalık etkinliği fikrini eyleme dönüştürebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Ülkemize Komşu Devletler",
        "topic": "",
        "code": "SB.5.2.4",
        "text": "Ülkemize kara sınırı olan komşu devletler hakkında bilgi toplayabilme",
        "fullOutcome": "SB.5.2.4. Ülkemize kara sınırı olan komşu devletler hakkında bilgi toplayabilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Ortak Miras Ögeleri",
        "topic": "",
        "code": "SB.5.3.1",
        "text": "Yaşadığı ildeki ortak miras ögelerine ilişkin oluşturduğu ürünü paylaşabilme",
        "fullOutcome": "SB.5.3.1. Yaşadığı ildeki ortak miras ögelerine ilişkin oluşturduğu ürünü paylaşabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "N": 1,
          "O": 1
        }
      }
    ]
  },
  {
    "id": "sosyalbilgiler-6",
    "sourceFile": "/assets/aistudio/sosyal2_052e0cab.xml",
    "subject": "Sosyal Bilgiler",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Zaman İçinde Değişen Gruplar ve Roller",
        "topic": "",
        "code": "SB.6.1.1",
        "text": "Dâhil olduğu grupların ve bu gruplardaki rollerinin zaman içerisinde değişebile ceğine ilişkin çıkarım yapabilme",
        "fullOutcome": "SB.6.1.1. Dâhil olduğu grupların ve bu gruplardaki rollerinin zaman içerisinde değişebile ceğine ilişkin çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "O": 1
        }
      },
      {
        "theme": "Kültürel Bağlarımızın ve Millî Değerlerimizin Toplumsal Birlikteliğe Etkisi",
        "topic": "",
        "code": "SB.6.1.2",
        "text": "Kültürel bağlarımızın ve millî değerlerimizin toplumsal birliğe etkisini yorumlayabilme",
        "fullOutcome": "SB.6.1.2. Kültürel bağlarımızın ve millî değerlerimizin toplumsal birliğe etkisini yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "K": 1
        }
      },
      {
        "theme": "Toplumsal Sorunlar ve Çözümler Önerileri",
        "topic": "",
        "code": "SB.6.1.3",
        "text": "Toplumsal hayatta karşılaşılan sorunlara yönelik çözüm önerilerini müzakere edebilme",
        "fullOutcome": "SB.6.1.3. Toplumsal hayatta karşılaşılan sorunlara yönelik çözüm önerilerini müzakere edebilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 1,
          "G": 2,
          "H": 3,
          "J": 1,
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Ülkemizin, Kıtaların ve Okyanusların Konum Özellikleri",
        "topic": "",
        "code": "SB.6.2.1",
        "text": "Ülkemizin, kıtaların ve okyanusların konum özelliklerini algılayabilme",
        "fullOutcome": "SB.6.2.1. Ülkemizin, kıtaların ve okyanusların konum özelliklerini algılayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "I": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "Doğal ve Beşerî Çevre Özellikleri Arasındaki İlişki",
        "topic": "",
        "code": "SB.6.2.2",
        "text": "Ülkemizin doğal ve beşerî çevre özellikleri arasındaki ilişkiyi çözümleyebilme",
        "fullOutcome": "SB.6.2.2. Ülkemizin doğal ve beşerî çevre özellikleri arasındaki ilişkiyi çözümleyebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Ülkemizin Türk Dünyasıyla Kültürel İş birlikleri",
        "topic": "",
        "code": "SB.6.2.3",
        "text": "Ülkemizin Türk dünyasıyla kültürel iş birliklerini yorumlayabilme",
        "fullOutcome": "SB.6.2.3. Ülkemizin Türk dünyasıyla kültürel iş birliklerini yorumlayabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Türkistan’da Kurulan İlk Türk Devletlerinin Medeniyetimize Katkıları",
        "topic": "",
        "code": "SB.6.3.1",
        "text": "Türkistan’da kurulan ilk Türk devletlerinin medeniyetimize katkılarını sorgulayabilme",
        "fullOutcome": "SB.6.3.1. Türkistan’da kurulan ilk Türk devletlerinin medeniyetimize katkılarını sorgulayabilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "VII-XIII. Yüzyıllar Arasında İslam Medeniyetinin İnsanlığın Ortak Mirasına Katkıları",
        "topic": "",
        "code": "SB.6.3.2",
        "text": "VII-XIII. yüzyıllar arasında İslam medeniyetinin eğitim, bilim, hukuk, kültür, sa nat ve mimari alanlarında insanlığın ortak mirasına katkılarına dair akıl yürütebilme",
        "fullOutcome": "SB.6.3.2. VII-XIII. yüzyıllar arasında İslam medeniyetinin eğitim, bilim, hukuk, kültür, sa nat ve mimari alanlarında insanlığın ortak mirasına katkılarına dair akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "N": 1,
          "O": 1
        }
      }
    ]
  },
  {
    "id": "sosyalbilgiler-7",
    "sourceFile": "/assets/aistudio/sosyal2_052e0cab.xml",
    "subject": "Sosyal Bilgiler",
    "level": "Ortaokul",
    "grade": "7. Sınıf",
    "gradeNum": 7,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Gruplarda ve Sosyal Hayatta İletişimin Önemi",
        "topic": "",
        "code": "SB.7.1.1",
        "text": "Dâhil olduğu gruplarda ve sosyal hayatta etkili iletişimin önemini sorgulayabilme",
        "fullOutcome": "SB 7.1.1. Dâhil olduğu gruplarda ve sosyal hayatta etkili iletişimin önemini sorgulayabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "O": 1
        }
      },
      {
        "theme": "Özel Gereksinimli Bireyler İçin Fırsat Eşitliği",
        "topic": "",
        "code": "SB.7.1.2",
        "text": "Özel gereksinimli bireyler için fırsat eşitliğini sürdürmeye yönelik fikir üretebilme",
        "fullOutcome": "SB.7.1.2. Özel gereksinimli bireyler için fırsat eşitliğini sürdürmeye yönelik fikir üretebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "Millî Meseleler Karşısında Türk Toplumunun Tutum ve Davranışları",
        "topic": "",
        "code": "SB.7.1.3",
        "text": "Türk toplumunun millî meseleler karşısında gösterdiği tutum ve davranışlara ilişkin çıkarım yapabilme",
        "fullOutcome": "SB.7.1.3. Türk toplumunun millî meseleler karşısında gösterdiği tutum ve davranışlara ilişkin çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 3,
          "G": 3,
          "H": 2,
          "J": 1,
          "K": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "Küreselleşmenin İnsan ve Toplum Hayatına Etkisi",
        "topic": "",
        "code": "SB.7.2.1",
        "text": "Küreselleşmenin insan ve toplum hayatında meydana getirdiği değişimi yorumlayabilme",
        "fullOutcome": "SB.7.2.1. Küreselleşmenin insan ve toplum hayatında meydana getirdiği değişimi yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "H": 1,
          "I": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Bölgesel ve Küresel Sorunların Çözümünde Ülkemizin Rolü",
        "topic": "",
        "code": "SB.7.2.2",
        "text": "Bölgesel ve küresel sorunların çözümünde ülkemizin rolünü özetleyebilme",
        "fullOutcome": "SB.7.2.2. Bölgesel ve küresel sorunların çözümünde ülkemizin rolünü özetleyebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Osmanlı Devleti’nin Cihan Devleti Hâline Gelmesini Sağlayan Politikalar",
        "topic": "",
        "code": "SB.7.3.1",
        "text": "Osmanlı Devleti’nin cihan devleti hâline gelmesini sağlayan politikaları sorgulayabilme",
        "fullOutcome": "SB.7.3.1. Osmanlı Devleti’nin cihan devleti hâline gelmesini sağlayan politikaları sorgulayabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Osmanlı Devleti’nin Uygulamaya Koyduğu Yenilikler",
        "topic": "",
        "code": "SB.7.3.2",
        "text": "Değişen dünya dengeleri karşısında Osmanlı Devleti’nin uyguladığı yenilikleri neden ve sonuçlarıyla yorumlayabilme",
        "fullOutcome": "SB.7.3.2. Değişen dünya dengeleri karşısında Osmanlı Devleti’nin uyguladığı yenilikleri neden ve sonuçlarıyla yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "N": 2,
          "O": 2
        }
      }
    ]
  },
  {
    "id": "tcinkılaptarihiveatatürkçülük-8",
    "sourceFile": "/assets/aistudio/sosyal2_052e0cab.xml",
    "subject": "T.C. İnkılap Tarihi ve Atatürkçülük",
    "level": "Ortaokul",
    "grade": "8. Sınıf",
    "gradeNum": 8,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "İTA.8.1.1. Avrupa’daki gelişmelerin yansımaları bağlamında Osmanlı Devleti’nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar.",
        "topic": "",
        "code": "İTA.8.1.1",
        "text": "Avrupa’daki gelişmelerin yansımaları bağlamında Osmanlı Devleti’nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar.",
        "fullOutcome": "İTA.8.1.1. Avrupa’daki gelişmelerin yansımaları bağlamında Osmanlı Devleti’nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "İTA.8.1.2. Mustafa Kemal’in çocukluk ve öğrenim hayatından hareketle onun kişilik özelliklerinin oluşumu hakkında çıkarımlarda bulunur.",
        "topic": "",
        "code": "İTA.8.1.2",
        "text": "Mustafa Kemal’in çocukluk ve öğrenim hayatından hareketle onun kişilik özelliklerinin oluşumu hakkında çıkarımlarda bulunur.",
        "fullOutcome": "İTA.8.1.2. Mustafa Kemal’in çocukluk ve öğrenim hayatından hareketle onun kişilik özelliklerinin oluşumu hakkında çıkarımlarda bulunur.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "İTA.8.1.3. Gençlik döneminde Mustafa Kemal’in fikir hayatını etkileyen önemli kişileri ve olayları kavrar.",
        "topic": "",
        "code": "İTA.8.1.3",
        "text": "Gençlik döneminde Mustafa Kemal’in fikir hayatını etkileyen önemli kişileri ve olayları kavrar.",
        "fullOutcome": "İTA.8.1.3. Gençlik döneminde Mustafa Kemal’in fikir hayatını etkileyen önemli kişileri ve olayları kavrar.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "İTA.8.1.4. Mustafa Kemal’in askerlik hayatı ile ilgili olayları ve olguları onun kişilik özellikleri ile ilişkilendirir.",
        "topic": "",
        "code": "İTA.8.1.4",
        "text": "Mustafa Kemal’in askerlik hayatı ile ilgili olayları ve olguları onun kişilik özellikleri ile ilişkilendirir.",
        "fullOutcome": "İTA.8.1.4. Mustafa Kemal’in askerlik hayatı ile ilgili olayları ve olguları onun kişilik özellikleri ile ilişkilendirir.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "İTA.8.2.1. Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar.",
        "topic": "",
        "code": "İTA.8.2.1",
        "text": "Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar.",
        "fullOutcome": "İTA.8.2.1. Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "İTA.8.2.2. Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında çıkarımlarda bulunur.",
        "topic": "",
        "code": "İTA.8.2.2",
        "text": "Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında çıkarımlarda bulunur.",
        "fullOutcome": "İTA.8.2.2. Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında çıkarımlarda bulunur.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "H": 2,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.2.3. Mondros Ateşkes Antlaşması’nın imzalanması ve uygulanması karşısında Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumunu analiz eder.",
        "topic": "",
        "code": "İTA.8.2.3",
        "text": "Mondros Ateşkes Antlaşması’nın imzalanması ve uygulanması karşısında Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumunu analiz eder.",
        "fullOutcome": "İTA.8.2.3. Mondros Ateşkes Antlaşması’nın imzalanması ve uygulanması karşısında Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumunu analiz eder.",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "K": 1,
          "N": 1,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.2.4. Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "topic": "",
        "code": "İTA.8.2.4",
        "text": "Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "fullOutcome": "İTA.8.2.4. Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.2.5. Millî Mücadele’nin hazırlık döneminde Mustafa Kemal’in yaptığı çalışmaları analiz eder.",
        "topic": "",
        "code": "İTA.8.2.5",
        "text": "Millî Mücadele’nin hazırlık döneminde Mustafa Kemal’in yaptığı çalışmaları analiz eder.",
        "fullOutcome": "İTA.8.2.5. Millî Mücadele’nin hazırlık döneminde Mustafa Kemal’in yaptığı çalışmaları analiz eder.",
        "counts": {
          "J": 2,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.2.6. Misakımilli’nin kabulünü ve Büyük Millet Meclisinin açılışını vatanın bütünlüğü esası ile “ulusal egemenlik” ve “tam bağımsızlık” ilkeleri ile ilişkilendirir.",
        "topic": "",
        "code": "İTA.8.2.6",
        "text": "Misakımilli’nin kabulünü ve Büyük Millet Meclisinin açılışını vatanın bütünlüğü esası ile “ulusal egemenlik” ve “tam bağımsızlık” ilkeleri ile ilişkilendirir.",
        "fullOutcome": "İTA.8.2.6. Misakımilli’nin kabulünü ve Büyük Millet Meclisinin açılışını vatanın bütünlüğü esası ile “ulusal egemenlik” ve “tam bağımsızlık” ilkeleri ile ilişkilendirir.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.2.7. Büyük Millet Meclisine karşı ayaklanmalar ile ayaklanmaların bastırılması için alınan tedbirleri analiz eder.",
        "topic": "",
        "code": "İTA.8.2.7",
        "text": "Büyük Millet Meclisine karşı ayaklanmalar ile ayaklanmaların bastırılması için alınan tedbirleri analiz eder.",
        "fullOutcome": "İTA.8.2.7. Büyük Millet Meclisine karşı ayaklanmalar ile ayaklanmaların bastırılması için alınan tedbirleri analiz eder.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "İTA.8.2.8. Mustafa Kemal’in ve Türk milletinin Sevr Antlaşması’na karşı tepkilerini değerlendirir.",
        "topic": "",
        "code": "İTA.8.2.8",
        "text": "Mustafa Kemal’in ve Türk milletinin Sevr Antlaşması’na karşı tepkilerini değerlendirir.",
        "fullOutcome": "İTA.8.2.8. Mustafa Kemal’in ve Türk milletinin Sevr Antlaşması’na karşı tepkilerini değerlendirir.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.3.1. Millî Mücadele Dönemi’nde Doğu Cephesi ve Güney Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "topic": "",
        "code": "İTA.8.3.1",
        "text": "Millî Mücadele Dönemi’nde Doğu Cephesi ve Güney Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "fullOutcome": "İTA.8.3.1. Millî Mücadele Dönemi’nde Doğu Cephesi ve Güney Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "counts": {
          "K": 1,
          "L": 2,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "İTA.8.3.2. Millî Mücadele Dönemi’nde Batı Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "topic": "",
        "code": "İTA.8.3.2",
        "text": "Millî Mücadele Dönemi’nde Batı Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "fullOutcome": "İTA.8.3.2. Millî Mücadele Dönemi’nde Batı Cephesi’nde meydana gelen gelişmeleri kavrar.",
        "counts": {
          "L": 1,
          "O": 1,
          "P": 1
        }
      }
    ]
  },
  {
    "id": "tarih-9",
    "sourceFile": "/assets/aistudio/tarih3_489bd7ff.xml",
    "subject": "Tarih",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "Tarih Öğrenmenin Faydaları",
        "topic": "",
        "code": "TAR.9.1.1",
        "text": "Tarih öğrenmenin bireye ve topluma faydalarını yorumlayabilme",
        "fullOutcome": "TAR.9.1.1. Tarih öğrenmenin bireye ve topluma faydalarını yorumlayabilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 3,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Tarihin Doğası",
        "topic": "",
        "code": "TAR.9.1.2",
        "text": "Tarihin doğasını farklı kaynaklar üzerinden inceleyebilme",
        "fullOutcome": "TAR.9.1.2. Tarihin doğasını farklı kaynaklar üzerinden inceleyebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 3,
          "H": 2,
          "I": 3,
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Tarihsel Bilginin Üretim Süreci",
        "topic": "",
        "code": "TAR.9.1.3",
        "text": "Tarihsel bilginin üretim sürecini çözümleyebilme",
        "fullOutcome": "TAR.9.1.3. Tarihsel bilginin üretim sürecini çözümleyebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 3,
          "G": 2,
          "H": 3,
          "K": 1,
          "L": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Tarih Araştırma ve Yazımında Dijitalleşme",
        "topic": "",
        "code": "TAR.9.1.4",
        "text": "Dijitalleşmenin tarih araştırma ve yazımının dönüşümüne etkisini değerlendirebilme",
        "fullOutcome": "TAR.9.1.4. Dijitalleşmenin tarih araştırma ve yazımının dönüşümüne etkisini değerlendirebilme",
        "counts": {
          "J": 2,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Tarım Devrimi’nin Eski Çağ Medeniyetlerindeki Yerleşmeye ve Ekonomiye Etkisi",
        "topic": "",
        "code": "TAR.9.2.1",
        "text": "Tarım Devrimi’nin Eski Çağ medeniyetlerindeki yerleşmeye ve ekonomik faaliyetlere etkisini değerlendirebilme",
        "fullOutcome": "TAR.9.2.1. Tarım Devrimi’nin Eski Çağ medeniyetlerindeki yerleşmeye ve ekonomik faaliyetlere etkisini değerlendirebilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Eski Çağ Medeniyetlerinde Yönetim ve Ordu",
        "topic": "",
        "code": "TAR.9.2.2",
        "text": "Eski Çağ’daki farklı medeniyetlerin yönetim ve ordu sistemlerini özetleyebilme",
        "fullOutcome": "TAR.9.2.2. Eski Çağ’daki farklı medeniyetlerin yönetim ve ordu sistemlerini özetleyebilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2
        }
      }
    ]
  },
  {
    "id": "tarih-10",
    "sourceFile": "/assets/aistudio/tarih3_489bd7ff.xml",
    "subject": "Tarih",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "Türkistan’dan Türkiye’ye Uzanan Süreçte Meydana Gelen Önemli Askerî Mücadeleler",
        "topic": "",
        "code": "TAR.10.1.1",
        "text": "Türkistan’dan Türkiye’ye uzanan süreçte 1040-1299 yılları arasında meydana gelen önemli askerî mücadelelerin Türk tarihinin seyrine etkilerini karşılaştırabilme",
        "fullOutcome": "TAR.10.1.1. Türkistan’dan Türkiye’ye uzanan süreçte 1040-1299 yılları arasında meydana gelen önemli askerî mücadelelerin Türk tarihinin seyrine etkilerini karşılaştırabilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 3,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Türkistan’dan Türkiye’ye Uzanan Süreçte Türk Devlet ve Ordu Teşkilatında Meydana Gelen Değişim",
        "topic": "",
        "code": "TAR.10.1.2",
        "text": "Türkistan’dan Türkiye’ye uzanan süreçte Türklerde devlet ve ordu teşkilatında meydana gelen değişim ve sürekliliği yorumlayabilme",
        "fullOutcome": "TAR.10.1.2. Türkistan’dan Türkiye’ye uzanan süreçte Türklerde devlet ve ordu teşkilatında meydana gelen değişim ve sürekliliği yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 3,
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Türkistan’dan Türkiye’ye Uzanan Süreçte Türklerin Sosyal Yaşamları ve Ekonomik Faaliyetleri",
        "topic": "",
        "code": "TAR.10.1.3",
        "text": "Türkistan’dan Türkiye’ye uzanan süreçte Türklerin sosyoekonomik faaliyetleri ile yerleşme ve şehirleşme anlayışları arasındaki ilişkiyi sorgulayabilme",
        "fullOutcome": "TAR.10.1.3. Türkistan’dan Türkiye’ye uzanan süreçte Türklerin sosyoekonomik faaliyetleri ile yerleşme ve şehirleşme anlayışları arasındaki ilişkiyi sorgulayabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 3,
          "G": 3,
          "H": 2,
          "K": 1,
          "L": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Türk-İslam Medeniyetinin Bilim, Kültür, Eğitim ve Sanat Alanlarında Ortaya Çıkardığı Etkiler",
        "topic": "",
        "code": "TAR.10.1.4",
        "text": "Türkistan’dan Türkiye’ye uzanan süreçte Türk-İslam medeniyetinde bilim, kültür, eğitim ve sanat alanlarında meydana gelen gelişmeleri Anadolu’nun Türkleşme ve İslamlaşma sürecine etkisi açısından değerlendirebilme",
        "fullOutcome": "TAR.10.1.4. Türkistan’dan Türkiye’ye uzanan süreçte Türk-İslam medeniyetinde bilim, kültür, eğitim ve sanat alanlarında meydana gelen gelişmeleri Anadolu’nun Türkleşme ve İslamlaşma sürecine etkisi açısından değerlendirebilme",
        "counts": {
          "J": 2,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Osmanlı Devleti’nin Kuruluşuna Dair Farklı Görüşler",
        "topic": "",
        "code": "TAR.10.2.1",
        "text": "Osmanlı Devleti’nin kuruluşuna dair farklı görüşleri tartışabilme",
        "fullOutcome": "TAR.10.2.1. Osmanlı Devleti’nin kuruluşuna dair farklı görüşleri tartışabilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Osmanlı Devleti’nin Anadolu ve Rumeli’deki Siyasi ve Askerî Mücadeleleri",
        "topic": "",
        "code": "TAR.10.2.2",
        "text": "1299-1453 yılları arasında Osmanlı Devleti’nin Anadolu ve Rumeli’de gerçekleştirdiği siyasi ve askerî mücadeleleri yorumlayabilme",
        "fullOutcome": "TAR.10.2.2. 1299-1453 yılları arasında Osmanlı Devleti’nin Anadolu ve Rumeli’de gerçekleştirdiği siyasi ve askerî mücadeleleri yorumlayabilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2
        }
      }
    ]
  },
  {
    "id": "tarih-11",
    "sourceFile": "/assets/aistudio/tarih3_489bd7ff.xml",
    "subject": "Tarih",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "Osmanlı Devleti’nin 1683-1789 Yılları Arasındaki Siyasi ve Askerî Mücadeleleri",
        "topic": "",
        "code": "TAR.11.1.1",
        "text": "Osmanlı Devleti’nin 1683-1789 yılları arasındaki siyasi ve askerî mücadelelerini sonuçları açısından değerlendirebilme",
        "fullOutcome": "TAR.11.1.1. Osmanlı Devleti’nin 1683-1789 yılları arasındaki siyasi ve askerî mücadelelerini sonuçları açısından değerlendirebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 3,
          "I": 3,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Lale Devri’nin Devlet ve Toplum Hayatına Etkileri",
        "topic": "",
        "code": "TAR.11.1.2",
        "text": "Lale Devri’nde Osmanlı devlet ve toplum hayatında meydana gelen değişimi tarihsel bağlamı içerisinde yorumlayabilme",
        "fullOutcome": "TAR.11.1.2. Lale Devri’nde Osmanlı devlet ve toplum hayatında meydana gelen değişimi tarihsel bağlamı içerisinde yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 3,
          "K": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "1755 Lizbon ve 1766 İstanbul Depremlerinin Etkileri",
        "topic": "",
        "code": "TAR.11.1.3",
        "text": "1755 Lizbon ve 1766 İstanbul depremlerini ortaya çıkardığı etkiler bakımından karşılaştırabilme",
        "fullOutcome": "TAR.11.1.3. 1755 Lizbon ve 1766 İstanbul depremlerini ortaya çıkardığı etkiler bakımından karşılaştırabilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 3,
          "G": 2,
          "H": 2,
          "K": 1,
          "L": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Sanayi Devrimi’nin Meydana Getirdiği Siyasi, Sosyal ve Ekonomik Değişim",
        "topic": "",
        "code": "TAR.11.1.4",
        "text": "Sanayi Devrimi’nin meydana getirdiği siyasi, sosyal ve ekonomik değişimi neden ve sonuçlarıyla birlikte yorumlayabilme",
        "fullOutcome": "TAR.11.1.4. Sanayi Devrimi’nin meydana getirdiği siyasi, sosyal ve ekonomik değişimi neden ve sonuçlarıyla birlikte yorumlayabilme",
        "counts": {
          "J": 2,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "Fransız İhtilali’nin Devlet ve Toplum Hayatında Meydana Getirdiği Değişim",
        "topic": "",
        "code": "TAR.11.2.1",
        "text": "Fransız İhtilali’nin devlet ve toplum hayatında meydana getirdiği değişimi neden ve sonuçlarıyla yorumlayabilme",
        "fullOutcome": "TAR.11.2.1. Fransız İhtilali’nin devlet ve toplum hayatında meydana getirdiği değişimi neden ve sonuçlarıyla yorumlayabilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1,
          "N": 1,
          "O": 2
        }
      },
      {
        "theme": "1789-1908 Yılları Arasında Osmanlı Devleti’nde Meydana Gelen Siyasi, Askerî ve İdari Gelişmeler",
        "topic": "",
        "code": "TAR.11.2.2",
        "text": "1789-1908 yılları arasında meydana gelen siyasi, askerî ve idari gelişmelerin Osmanlı Devleti’nin yönetim ve toplum yapısına etkilerini sorgulayabilme",
        "fullOutcome": "TAR.11.2.2. 1789-1908 yılları arasında meydana gelen siyasi, askerî ve idari gelişmelerin Osmanlı Devleti’nin yönetim ve toplum yapısına etkilerini sorgulayabilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2
        }
      }
    ]
  },
  {
    "id": "tcinkılaptarihiveatatürkçülük-12",
    "sourceFile": "/assets/aistudio/tarih3_489bd7ff.xml",
    "subject": "T.C. İnkılap Tarihi ve Atatürkçülük",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "1.1. Mustafa Kemal’in Birinci Dünya Savaşı’na kadarki eğitim ve askerlik hayatını içinde bulunduğu toplumun siyasi, sosyal ve kültürel yapısı ile ilişkilendirir.",
        "topic": "",
        "code": "1.1",
        "text": "Mustafa Kemal’in Birinci Dünya Savaşı’na kadarki eğitim ve askerlik hayatını içinde bulunduğu toplumun siyasi, sosyal ve kültürel yapısı ile ilişkilendirir.",
        "fullOutcome": "1.1. Mustafa Kemal’in Birinci Dünya Savaşı’na kadarki eğitim ve askerlik hayatını içinde bulunduğu toplumun siyasi, sosyal ve kültürel yapısı ile ilişkilendirir.",
        "counts": {
          "C": 2,
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 1,
          "M": 1
        }
      },
      {
        "theme": "1.2. 20. yüzyıl başlarında Osmanlı Devleti’nin siyasi, sosyal ve ekonomik durumunu analiz eder.",
        "topic": "",
        "code": "1.2",
        "text": "20. yüzyıl başlarında Osmanlı Devleti’nin siyasi, sosyal ve ekonomik durumunu analiz eder.",
        "fullOutcome": "1.2. 20. yüzyıl başlarında Osmanlı Devleti’nin siyasi, sosyal ve ekonomik durumunu analiz eder.",
        "counts": {
          "C": 2,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 2,
          "J": 1,
          "N": 1
        }
      },
      {
        "theme": "1.3. I. Dünya Savaşı sürecinde Osmanlı Devleti’nin durumunu siyasi, askerî ve sosyal açılardan analiz eder.",
        "topic": "",
        "code": "1.3",
        "text": "I. Dünya Savaşı sürecinde Osmanlı Devleti’nin durumunu siyasi, askerî ve sosyal açılardan analiz eder.",
        "fullOutcome": "1.3. I. Dünya Savaşı sürecinde Osmanlı Devleti’nin durumunu siyasi, askerî ve sosyal açılardan analiz eder.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 2,
          "K": 1
        }
      },
      {
        "theme": "1.4. I. Dünya Savaşı’nın sonuçlarını Osmanlı Devleti ve Batılı devletler açısından değerlendirir.",
        "topic": "",
        "code": "1.4",
        "text": "I. Dünya Savaşı’nın sonuçlarını Osmanlı Devleti ve Batılı devletler açısından değerlendirir.",
        "fullOutcome": "1.4. I. Dünya Savaşı’nın sonuçlarını Osmanlı Devleti ve Batılı devletler açısından değerlendirir.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "2.1. Kuvay-ı Millîye hareketinin oluşumundan Büyük Millet Meclisinin açılışına kadar olan süreçte meydana gelen gelişmeleri açıklar.",
        "topic": "",
        "code": "2.1",
        "text": "Kuvay-ı Millîye hareketinin oluşumundan Büyük Millet Meclisinin açılışına kadar olan süreçte meydana gelen gelişmeleri açıklar.",
        "fullOutcome": "2.1. Kuvay-ı Millîye hareketinin oluşumundan Büyük Millet Meclisinin açılışına kadar olan süreçte meydana gelen gelişmeleri açıklar.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "2.2. Büyük Millet Meclisinin açılış sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "topic": "",
        "code": "2.2",
        "text": "Büyük Millet Meclisinin açılış sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "fullOutcome": "2.2. Büyük Millet Meclisinin açılış sürecini ve sonrasında meydana gelen gelişmeleri kavrar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "2.3. Sevr Antlaşması’nın Millî Mücadele sürecine etkilerini analiz eder.",
        "topic": "",
        "code": "2.3",
        "text": "Sevr Antlaşması’nın Millî Mücadele sürecine etkilerini analiz eder.",
        "fullOutcome": "2.3. Sevr Antlaşması’nın Millî Mücadele sürecine etkilerini analiz eder.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "2.4. Doğu ve Güney Cephelerinde verilen mücadelelerin ülkemizin bağımsızlık sürecine katkılarını kavrar.",
        "topic": "",
        "code": "2.4",
        "text": "Doğu ve Güney Cephelerinde verilen mücadelelerin ülkemizin bağımsızlık sürecine katkılarını kavrar.",
        "fullOutcome": "2.4. Doğu ve Güney Cephelerinde verilen mücadelelerin ülkemizin bağımsızlık sürecine katkılarını kavrar.",
        "counts": {
          "I": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "2.5. Düzenli ordunun kurulmasından Mudanya Ateşkes Antlaşması’na kadar meydana gelen gelişmeleri Türkiye’nin bağımsızlık sürecine katkıları açısından analiz eder.",
        "topic": "",
        "code": "2.5",
        "text": "Düzenli ordunun kurulmasından Mudanya Ateşkes Antlaşması’na kadar meydana gelen gelişmeleri Türkiye’nin bağımsızlık sürecine katkıları açısından analiz eder.",
        "fullOutcome": "2.5. Düzenli ordunun kurulmasından Mudanya Ateşkes Antlaşması’na kadar meydana gelen gelişmeleri Türkiye’nin bağımsızlık sürecine katkıları açısından analiz eder.",
        "counts": {
          "I": 1,
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "2.6. Millî Mücadele sonucunda kazanılan diplomatik başarıları ülkemizin bağımsızlığı açısından değerlendirir.",
        "topic": "",
        "code": "2.6",
        "text": "Millî Mücadele sonucunda kazanılan diplomatik başarıları ülkemizin bağımsızlığı açısından değerlendirir.",
        "fullOutcome": "2.6. Millî Mücadele sonucunda kazanılan diplomatik başarıları ülkemizin bağımsızlığı açısından değerlendirir.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "2.7. Millî Mücadele sürecine katkıda bulunmuş önemli şahsiyetlerin kişilik özellikleri ile faaliyetlerini ilişkilendirir.",
        "topic": "",
        "code": "2.7",
        "text": "Millî Mücadele sürecine katkıda bulunmuş önemli şahsiyetlerin kişilik özellikleri ile faaliyetlerini ilişkilendirir.",
        "fullOutcome": "2.7. Millî Mücadele sürecine katkıda bulunmuş önemli şahsiyetlerin kişilik özellikleri ile faaliyetlerini ilişkilendirir.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "coğrafya-9",
    "sourceFile": "/assets/aistudio/cografya4_c438ea25.xml",
    "subject": "Coğrafya",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 5
      }
    ],
    "outcomes": [
      {
        "theme": "Coğrafya Biliminin Konusu ve Bölümleri",
        "topic": "",
        "code": "COĞ.9.1.1",
        "text": "Coğrafya biliminin konusu ve bölümlerini çözümleyebilme",
        "fullOutcome": "COĞ.9.1.1. Coğrafya biliminin konusu ve bölümlerini çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "I": 1
        }
      },
      {
        "theme": "Niçin Coğrafya Öğrenmeliyiz?",
        "topic": "",
        "code": "COĞ.9.1.2",
        "text": "Örnek olay, olgu veya konu üzerinden mekânsal düşünme ile coğrafya öğrenmenin önemini çözümleyebilme",
        "fullOutcome": "COĞ.9.1.2. Örnek olay, olgu veya konu üzerinden mekânsal düşünme ile coğrafya öğrenmenin önemini çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Coğrafya Biliminin Gelişimi",
        "topic": "",
        "code": "COĞ.9.1.3",
        "text": "Coğrafya biliminin gelişimi hakkında bilgi toplayabilme",
        "fullOutcome": "COĞ.9.1.3. Coğrafya biliminin gelişimi hakkında bilgi toplayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Mekânın Aynası Haritalar",
        "topic": "",
        "code": "COĞ.9.2.1",
        "text": "Harita uygulamaları yapabilme",
        "fullOutcome": "COĞ.9.2.1. Harita uygulamaları yapabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "Türkiye’nin Coğrafi Konumu",
        "topic": "",
        "code": "COĞ.9.2.2",
        "text": "Türkiye’nin konum özelliklerini algılayabilme",
        "fullOutcome": "COĞ.9.2.2. Türkiye’nin konum özelliklerini algılayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1,
          "L": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "Mekânsal Bilgi Teknolojilerinin Bileşenleri",
        "topic": "",
        "code": "COĞ.9.2.3",
        "text": "Mekânsal bilgi teknolojilerini oluşturan bileşenleri çözümleyebilme",
        "fullOutcome": "COĞ.9.2.3. Mekânsal bilgi teknolojilerini oluşturan bileşenleri çözümleyebilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "Hava Olayları ve Günlük Hayata Etkileri",
        "topic": "",
        "code": "COĞ.9.3.1",
        "text": "Hava olaylarının günlük hayata etkisini gözleme dayalı tahmin edebilme",
        "fullOutcome": "COĞ.9.3.1. Hava olaylarının günlük hayata etkisini gözleme dayalı tahmin edebilme",
        "counts": {
          "D": 1,
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "İklim Sisteminin Bileşen ve Değişkenleri",
        "topic": "",
        "code": "COĞ.9.3.2",
        "text": "İklim sisteminin bileşen ve değişkenlerini çözümleyebilme",
        "fullOutcome": "COĞ.9.3.2. İklim sisteminin bileşen ve değişkenlerini çözümleyebilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 2,
          "P": 2
        }
      },
      {
        "theme": "İklim Türleri",
        "topic": "",
        "code": "COĞ.9.3.3",
        "text": "Türkiye ve dünyadaki farklı iklim türlerine sahip yerlerin iklim verilerini kullanarak tablo, grafik, şekil ve/veya diyagram hazırlayabilme",
        "fullOutcome": "COĞ.9.3.3. Türkiye ve dünyadaki farklı iklim türlerine sahip yerlerin iklim verilerini kullanarak tablo, grafik, şekil ve/veya diyagram hazırlayabilme",
        "counts": {
          "J": 1,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 1
        }
      },
      {
        "theme": "İklim Sisteminde Yaşanan Değişiklikler",
        "topic": "",
        "code": "COĞ.9.3.4",
        "text": "İklim sistemi ve sürecinde meydana gelen değişiklikleri algılayabilme",
        "fullOutcome": "COĞ.9.3.4. İklim sistemi ve sürecinde meydana gelen değişiklikleri algılayabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 2
        }
      }
    ]
  },
  {
    "id": "coğrafya-10",
    "sourceFile": "/assets/aistudio/cografya4_c438ea25.xml",
    "subject": "Coğrafya",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Coğrafi Bakış",
        "topic": "",
        "code": "COĞ.10.1.1",
        "text": "Örnek olay, olgu ve/veya mekânı coğrafyanın temel kavramları ile ilişkilendirebilme",
        "fullOutcome": "COĞ.10.1.1. Örnek olay, olgu ve/veya mekânı coğrafyanın temel kavramları ile ilişkilendirebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "CBS ve Uzaktan Algılamanın Uygulama Alanları",
        "topic": "",
        "code": "COĞ.10.2.1",
        "text": "Örnek uygulamalar üzerinden CBS ve uzaktan algılamanın kullanım alanlarını özetleyebilme",
        "fullOutcome": "COĞ.10.2.1. Örnek uygulamalar üzerinden CBS ve uzaktan algılamanın kullanım alanlarını özetleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Mekânsal Verilerin Haritalara Aktarılması",
        "topic": "",
        "code": "COĞ.10.2.2",
        "text": "Mekânsal bilgi teknolojilerini kullanarak altlık haritalar üzerinde mekânsal veriler oluşturabilme",
        "fullOutcome": "COĞ.10.2.2. Mekânsal bilgi teknolojilerini kullanarak altlık haritalar üzerinde mekânsal veriler oluşturabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Tektonik Süreçler",
        "topic": "",
        "code": "COĞ.10.3.1",
        "text": "Yerkürenin tektonik yapısını çözümleyebilme",
        "fullOutcome": "COĞ.10.3.1. Yerkürenin tektonik yapısını çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 2
        }
      },
      {
        "theme": "İklim ve Kayaç Yapısının Aşınma ve Çözünme Süreçlerine Etkisi",
        "topic": "",
        "code": "COĞ.10.3.2",
        "text": "Yeryüzü şekillerinin oluşumunda etkili olan aşınma ve çözünme süreçleri ile iklim ve kayaç özellikleri arasındaki ilişkileri yapılandırabilme",
        "fullOutcome": "COĞ.10.3.2. Yeryüzü şekillerinin oluşumunda etkili olan aşınma ve çözünme süreçleri ile iklim ve kayaç özellikleri arasındaki ilişkileri yapılandırabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 2,
          "I": 2,
          "K": 1,
          "L": 2,
          "M": 2,
          "O": 1
        }
      },
      {
        "theme": "Aşınım ve Birikim Süreçlerinin Yeryüzü Şekillerinin Oluşumuna Etkisi",
        "topic": "",
        "code": "COĞ.10.3.3",
        "text": "Yeryüzü şekillerinin oluşumunu aşınım ve birikim süreçleri açısından çözümleyebilme",
        "fullOutcome": "COĞ.10.3.3. Yeryüzü şekillerinin oluşumunu aşınım ve birikim süreçleri açısından çözümleyebilme",
        "counts": {
          "D": 1,
          "F": 1,
          "I": 1,
          "J": 1,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Yeryüzü Şekilleri ile İlgili Gözlem ve Saha Çalışması",
        "topic": "",
        "code": "COĞ.10.3.4",
        "text": "Yeryüzü şekillerinin oluşumunda doğal süreçlerin etkilerini saha/sanal saha çalışmalarıyla araştırabilme",
        "fullOutcome": "COĞ.10.3.4. Yeryüzü şekillerinin oluşumunda doğal süreçlerin etkilerini saha/sanal saha çalışmalarıyla araştırabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Yeryüzü Şekilleri ile Beşerî Faaliyetler Arasındaki Etkileşim",
        "topic": "",
        "code": "COĞ.10.3.5",
        "text": "Yakın çevresindeki yeryüzü şekilleri ile beşerî faaliyetler arasındaki etkileşimi sorgulayabilme",
        "fullOutcome": "COĞ.10.3.5. Yakın çevresindeki yeryüzü şekilleri ile beşerî faaliyetler arasındaki etkileşimi sorgulayabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Yerleşmelerin Kuruluşu ve Gelişimi",
        "topic": "",
        "code": "COĞ.10.4.1",
        "text": "Yerleşme yeri seçiminde ve yerleşmelerin gelişiminde etkili olan coğrafi faktörleri sorgulayabilme",
        "fullOutcome": "COĞ.10.4.1. Yerleşme yeri seçiminde ve yerleşmelerin gelişiminde etkili olan coğrafi faktörleri sorgulayabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Yerleşmelerin Fonksiyonları",
        "topic": "",
        "code": "COĞ.10.4.2",
        "text": "Türkiye ve dünyadaki yerleşmeleri fonksiyonlarına göre sınıflandırabilme",
        "fullOutcome": "COĞ.10.4.2. Türkiye ve dünyadaki yerleşmeleri fonksiyonlarına göre sınıflandırabilme",
        "counts": {
          "J": 1,
          "N": 1,
          "O": 1
        }
      }
    ]
  },
  {
    "id": "coğrafya-11",
    "sourceFile": "/assets/aistudio/cografya4_c438ea25.xml",
    "subject": "Coğrafya",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 5
      }
    ],
    "outcomes": [
      {
        "theme": "Mekânsal Sorunlar Karşısında Coğrafya Bilimi",
        "topic": "",
        "code": "COĞ.11.1.1",
        "text": "Mekânsal sorunların çözümünde coğrafya biliminin katkılarını yapılandırabilme",
        "fullOutcome": "COĞ.11.1.1. Mekânsal sorunların çözümünde coğrafya biliminin katkılarını yapılandırabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "I": 1
        }
      },
      {
        "theme": "Web Tabanlı CBS Uygulamaları",
        "topic": "",
        "code": "COĞ.11.2.1",
        "text": "Web tabanlı CBS aracılığı ile harita uygulamaları yapabilme",
        "fullOutcome": "COĞ.11.2.1. Web tabanlı CBS aracılığı ile harita uygulamaları yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Su Kaynakları",
        "topic": "",
        "code": "COĞ.11.3.1",
        "text": "Yeryüzündeki su kaynaklarını sınıflandırabilme",
        "fullOutcome": "COĞ.11.3.1. Yeryüzündeki su kaynaklarını sınıflandırabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 2
        }
      },
      {
        "theme": "Türkiye’deki Su Kaynaklarının Etkileri",
        "topic": "",
        "code": "COĞ.11.3.2",
        "text": "Türkiye’deki su kaynaklarının çevresel, ekonomik, politik ve sosyokültürel etkilerini sorgulayabilme",
        "fullOutcome": "COĞ.11.3.2. Türkiye’deki su kaynaklarının çevresel, ekonomik, politik ve sosyokültürel etkilerini sorgulayabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 2
        }
      },
      {
        "theme": "Yerleşmelerin Mekânsal Organizasyonları",
        "topic": "",
        "code": "COĞ.11.4.1",
        "text": "Türkiye ve dünyadaki yerleşmelerin mekânsal organizasyonunu çözümleyebilme",
        "fullOutcome": "COĞ.11.4.1. Türkiye ve dünyadaki yerleşmelerin mekânsal organizasyonunu çözümleyebilme",
        "counts": {
          "D": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Yerleşmelerin Etki Alanları",
        "topic": "",
        "code": "COĞ.11.4.2",
        "text": "Türkiye ve dünyadaki yerleşmelerin etki alanını sorgulayabilme",
        "fullOutcome": "COĞ.11.4.2. Türkiye ve dünyadaki yerleşmelerin etki alanını sorgulayabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Tarımsal Faaliyetler ve Gıda Güvencesi",
        "topic": "",
        "code": "COĞ.11.5.1",
        "text": "Tarımsal faaliyetleri gıda güvencesi açısından sorgulayabilme",
        "fullOutcome": "COĞ.11.5.1. Tarımsal faaliyetleri gıda güvencesi açısından sorgulayabilme",
        "counts": {
          "J": 1,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Tarım Uygulamalarında Sürdürülebilirlik",
        "topic": "",
        "code": "COĞ.11.5.2",
        "text": "Dünya ve Türkiye’deki tarım uygulamalarını sürdürülebilirlik ölçütlerine göre değerlendirebilme",
        "fullOutcome": "COĞ.11.5.2. Dünya ve Türkiye’deki tarım uygulamalarını sürdürülebilirlik ölçütlerine göre değerlendirebilme",
        "counts": {
          "J": 1,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Stratejik ve Kritik Madenler",
        "topic": "",
        "code": "COĞ.11.5.3",
        "text": "Dünya ve Türkiye’de bulunan stratejik-kritik madenlerin ülke ekonomileri veülkeler arası ilişkilerdeki yerine yönelik çıkarım yapabilme",
        "fullOutcome": "COĞ.11.5.3. Dünya ve Türkiye’de bulunan stratejik-kritik madenlerin ülke ekonomileri veülkeler arası ilişkilerdeki yerine yönelik çıkarım yapabilme",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 2,
          "N": 1
        }
      }
    ]
  },
  {
    "id": "coğrafya-12",
    "sourceFile": "/assets/aistudio/cografya4_c438ea25.xml",
    "subject": "Coğrafya",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "EKSTREM DOĞA OLAYLARI VE ETKİLERİ",
        "topic": "",
        "code": "12.1.1",
        "text": "Doğa olaylarının ekstrem durumlarını ve etkilerini açıklar.",
        "fullOutcome": "12.1.1. Doğa olaylarının ekstrem durumlarını ve etkilerini açıklar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "DOĞA OLAYLARININ GELECEĞİ",
        "topic": "",
        "code": "12.1.2",
        "text": "Doğal sistemlerdeki değişimlerle ilgili geleceğe yönelik çıkarımlarda bulunur.",
        "fullOutcome": "12.1.2. Doğal sistemlerdeki değişimlerle ilgili geleceğe yönelik çıkarımlarda bulunur.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "EKONOMİK FAALİYETLERİN SOSYAL VE KÜLTÜREL ETKİLERİ",
        "topic": "",
        "code": "12.2.1.Bir",
        "text": "bölgedeki baskın ekonomik faaliyet türünü sosyal ve kültürel hayata etkileri açısından analiz eder.",
        "fullOutcome": "12.2.1.Bir bölgedeki baskın ekonomik faaliyet türünü sosyal ve kültürel hayata etkileri açısından analiz eder.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "ŞEHİRLEŞME, SANAYİ VE GÖÇ İLİŞKİSİNİN TOPLUMSAL ETKİLERİ",
        "topic": "",
        "code": "12.2.2",
        "text": "Şehirleşme, göç ve sanayileşme ilişkisini toplumsal etkileri açısından yorumlar.",
        "fullOutcome": "12.2.2. Şehirleşme, göç ve sanayileşme ilişkisini toplumsal etkileri açısından yorumlar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "GELECEKTE ŞEHİR VE EKONOMİ",
        "topic": "",
        "code": "12.2.3",
        "text": "Nüfus, yerleşme ve ekonomik faaliyetlerde gelecekte olabilecek değişimlerle ilgili çıkarımlarda bulunur.",
        "fullOutcome": "12.2.3. Nüfus, yerleşme ve ekonomik faaliyetlerde gelecekte olabilecek değişimlerle ilgili çıkarımlarda bulunur.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "TÜRKİYE’NİN İŞLEVSEL BÖLGELERİ",
        "topic": "",
        "code": "12.2.4",
        "text": "Ülkemizdeki işlevsel bölgeleri özelliklerine göre analiz eder.",
        "fullOutcome": "12.2.4. Ülkemizdeki işlevsel bölgeleri özelliklerine göre analiz eder.",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "TÜRKİYE’NİN BÖLGESEL KALKINMA PROJELERİ",
        "topic": "",
        "code": "12.2.5",
        "text": "Türkiye’deki bölgesel kalkınma projelerini ekonomik, sosyal ve kültürel etkileri açısından değerlendirir.",
        "fullOutcome": "12.2.5. Türkiye’deki bölgesel kalkınma projelerini ekonomik, sosyal ve kültürel etkileri açısından değerlendirir.",
        "counts": {
          "D": 1,
          "H": 2,
          "J": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "TÜRKİYE EKONOMİSİNDE HİZMET SEKTÖRÜ",
        "topic": "",
        "code": "12.2.6",
        "text": "Hizmet sektörünün Türkiye’nin ekonomik kalkınmasıyla olan ilişkisini açıklar.",
        "fullOutcome": "12.2.6. Hizmet sektörünün Türkiye’nin ekonomik kalkınmasıyla olan ilişkisini açıklar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "ULAŞIMI ETKİLEYEN FAKTÖRLER",
        "topic": "",
        "code": "12.2.7",
        "text": "Ulaşım sisteminin gelişiminde etkili olan faktörleri açıklar.",
        "fullOutcome": "12.2.7. Ulaşım sisteminin gelişiminde etkili olan faktörleri açıklar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "ULAŞIM SİSTEMLERİNİN YERLEŞMELERE VE EKONOMİK FAALİYETLERE ETKİLERİ",
        "topic": "",
        "code": "12.2.8",
        "text": "Ulaşım ağları ile yerleşme ve ekonomik faaliyetler arasında ilişki kurar.",
        "fullOutcome": "12.2.8. Ulaşım ağları ile yerleşme ve ekonomik faaliyetler arasında ilişki kurar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "TÜRKİYE’DE ULAŞIM SİSTEMLERİNİN GELİŞİMİ",
        "topic": "",
        "code": "12.2.9",
        "text": "Türkiye’deki ulaşım sisteminin gelişim sürecini açıklar.",
        "fullOutcome": "12.2.9. Türkiye’deki ulaşım sisteminin gelişim sürecini açıklar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "DÜNYADA TİCARET",
        "topic": "",
        "code": "12.2.10",
        "text": "Dünya ticaret merkezleri ve ağlarını küresel ekonomideki yerleri açısından analiz eder.",
        "fullOutcome": "12.2.10. Dünya ticaret merkezleri ve ağlarını küresel ekonomideki yerleri açısından analiz eder.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "TÜRKİYE’DE TİCARET",
        "topic": "",
        "code": "12.2.11",
        "text": "Türkiye’deki ticaret merkezlerinin ticarete konu olan ürünlere ve akış yönlerine etkilerini açıklar.",
        "fullOutcome": "12.2.11. Türkiye’deki ticaret merkezlerinin ticarete konu olan ürünlere ve akış yönlerine etkilerini açıklar.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "TARİHÎ TİCARET YOLLARI VE TÜRKİYE",
        "topic": "",
        "code": "12.2.12",
        "text": "Tarihî ticaret yollarını Türkiye'nin konumu açısından değerlendirir.",
        "fullOutcome": "12.2.12. Tarihî ticaret yollarını Türkiye'nin konumu açısından değerlendirir.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "TÜRKİYE’DE DIŞ TİCARET",
        "topic": "",
        "code": "12.2.13",
        "text": "Türkiye’nin dış ticaretini ve dünya pazarlarındaki yerini ticarete konu olan ürünler açısından analiz eder.",
        "fullOutcome": "12.2.13. Türkiye’nin dış ticaretini ve dünya pazarlarındaki yerini ticarete konu olan ürünler açısından analiz eder.",
        "counts": {
          "J": 1
        }
      }
    ]
  },
  {
    "id": "felsefe-10",
    "sourceFile": "/assets/aistudio/felsefe3_6bd91084.xml",
    "subject": "Felsefe",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Felsefenin Anlamı Felsefi Düşüncenin Özellikleri Felsefi Düşüncenin Gelişimi Felsefi Sorunun Temel Özellikleri Felsefenin Diğer Alanlarla İlişkisi Felsefenin Bireysel ve Toplumsal İşlevi",
        "topic": "",
        "code": "FEL.10.1.1",
        "text": "Felsefenin anlamını, gelişim sürecini ve işlevini sorgulayabilme",
        "fullOutcome": "FEL.10.1.1. Felsefenin anlamını, gelişim sürecini ve işlevini sorgulayabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 3,
          "G": 3,
          "H": 3,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Düşünme ve Dil İlişkisi",
        "topic": "",
        "code": "FEL.10.2.1",
        "text": "Düşünme ve dil ilişkisini yapılandırabilme",
        "fullOutcome": "FEL.10.2.1. Düşünme ve dil ilişkisini yapılandırabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "Mantık ve Argümantasyonun Temel Kavramları Argümantasyonun Yapısı",
        "topic": "",
        "code": "FEL.10.2.2",
        "text": "Mantığın temel kavramlarını ve argümantasyon sürecini yorumlayabilme",
        "fullOutcome": "FEL.10.2.2. Mantığın temel kavramlarını ve argümantasyon sürecini yorumlayabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2,
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Varlık Felsefesinin Konusu ve Temel Kavramları Varlık Felsefesinin Temel Problemleri (Varlığın Var Olup Olmadığı, Varlığın Ne Olduğu)",
        "topic": "",
        "code": "FEL.10.3.1",
        "text": "Varlık felsefesinin konusunu, kavramlarını ve problemlerini muhakeme edebilme",
        "fullOutcome": "FEL.10.3.1. Varlık felsefesinin konusunu, kavramlarını ve problemlerini muhakeme edebilme",
        "counts": {
          "I": 3,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 3
        }
      },
      {
        "theme": "Bilgi Felsefesinin Konusu ve Temel Kavramları Bilgi Felsefesinin Temel Problemleri (Bilginin İmkânı, Kaynağı ve Doğruluk Ölçütleri)",
        "topic": "",
        "code": "FEL.10.4.1",
        "text": "Bilgi felsefesinin konusunu, kavramlarını ve problemlerini muhakeme edebilme",
        "fullOutcome": "FEL.10.4.1. Bilgi felsefesinin konusunu, kavramlarını ve problemlerini muhakeme edebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 2
        }
      }
    ]
  },
  {
    "id": "felsefe-11",
    "sourceFile": "/assets/aistudio/felsefe3_6bd91084.xml",
    "subject": "Felsefe",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Çevre ve İnsan İlişkisi Çevre Etiği (İnsan Merkezci Etik, Canlı Merkezci Etik, Çevre Merkezci Etik)",
        "topic": "",
        "code": "FEL.11.1.1",
        "text": "Çevre ile ilgili felsefi soru ve problemleri anlayabilme",
        "fullOutcome": "FEL.11.1.1. Çevre ile ilgili felsefi soru ve problemleri anlayabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 3,
          "G": 3,
          "H": 3,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Çevre ve İnsan İlişkisi Çevre Etiği (İnsan Merkezci Etik, Canlı Merkezci Etik, Çevre Merkezci Etik)",
        "topic": "",
        "code": "FEL.11.1.2",
        "text": "Çevre sorunlarıyla ilgili felsefi düşünce ortaya koyabilme",
        "fullOutcome": "FEL.11.1.2. Çevre sorunlarıyla ilgili felsefi düşünce ortaya koyabilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 3,
          "G": 2,
          "H": 3,
          "I": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Teknoloji ve İnsan Hayatı Teknoloji Bağlamında Ontolojik Problemler (Ontolojik Anlam Kaybı, Yabancılaşma) Teknoloji Bağlamında Aksiyolojik Problemler (Güvenlik Sorunları, Değerlerin Tahribatı, Ahlaki Eylemin İmkânı)",
        "topic": "",
        "code": "FEL.11.2.1",
        "text": "Teknoloji ile ilgili felsefi soru ve problemleri anlayabilme",
        "fullOutcome": "FEL.11.2.1. Teknoloji ile ilgili felsefi soru ve problemleri anlayabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "G": 1,
          "H": 2,
          "I": 1,
          "J": 1,
          "K": 2,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "Teknoloji ve İnsan Hayatı Teknoloji Bağlamında Ontolojik Problemler (Ontolojik Anlam Kaybı, Yabancılaşma) Teknoloji Bağlamında Aksiyolojik Problemler (Güvenlik Sorunları, Değerlerin Tahribatı, Ahlaki Eylemin İmkânı)",
        "topic": "",
        "code": "FEL.11.2.2",
        "text": "Teknoloji ve hayat ilişkisiyle ilgili felsefi düşünce ortaya koyabilme",
        "fullOutcome": "FEL.11.2.2. Teknoloji ve hayat ilişkisiyle ilgili felsefi düşünce ortaya koyabilme",
        "counts": {
          "I": 2,
          "J": 1,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 3
        }
      },
      {
        "theme": "Akıl-İnanç İlişkisine Yönelik Felsefi Sorular ve Problemler Akıl-İnanç İlişkisine Yönelik Felsefi Görüş ve Argümanlar",
        "topic": "",
        "code": "FEL.11.3.1",
        "text": "Akıl-inanç ilişkisiyle ilgili felsefi soru ve problemleri anlayabilme",
        "fullOutcome": "FEL.11.3.1. Akıl-inanç ilişkisiyle ilgili felsefi soru ve problemleri anlayabilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 2,
          "N": 3
        }
      },
      {
        "theme": "Akıl-İnanç İlişkisine Yönelik Felsefi Sorular ve Problemler Akıl-İnanç İlişkisine Yönelik Felsefi Görüş ve Argümanlar",
        "topic": "",
        "code": "FEL.11.3.2",
        "text": "Akıl-inanç ilişkisiyle ilgili felsefi düşünce ortaya koyabilme",
        "fullOutcome": "FEL.11.3.2. Akıl-inanç ilişkisiyle ilgili felsefi düşünce ortaya koyabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-5",
    "sourceFile": "/assets/aistudio/dkab_orta3_3eae9d36.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "ALLAH İNANCI",
        "topic": "Evrendeki Mükemmel Düzen",
        "code": "DKAB.5.1.1",
        "text": "Evrendeki mükemmel düzene ilişkin akıl yürütebilme",
        "fullOutcome": "DKAB.5.1.1. Evrendeki mükemmel düzene ilişkin akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ALLAH İNANCI",
        "topic": "Allah’ın Varlığı ve Birliği",
        "code": "DKAB.5.1.2",
        "text": "Evrendeki mükemmel düzenden hareketle Allah’ın (cc) varlığı ve birliğini müşahede edebilme",
        "fullOutcome": "DKAB.5.1.2. Evrendeki mükemmel düzenden hareketle Allah’ın (cc) varlığı ve birliğini müşahede edebilme",
        "counts": {
          "D": 3,
          "E": 3,
          "F": 3,
          "G": 2,
          "H": 1,
          "I": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ALLAH İNANCI",
        "topic": "Allah’ın Güzel İsimleri",
        "code": "DKAB.5.1.3",
        "text": "Allah’ın (cc) güzel isimlerini bağlamına uygun kullanabilme",
        "fullOutcome": "DKAB.5.1.3. Allah’ın (cc) güzel isimlerini bağlamına uygun kullanabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "ALLAH İNANCI",
        "topic": "Bir Sure Öğreniyorum: İhlas Suresi",
        "code": "DKAB.5.1.4",
        "text": "İhlas suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.5.1.4. İhlas suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "NAMAZ",
        "topic": "Allah’ın Huzurunda Olmak: Namaz",
        "code": "DKAB.5.2.1",
        "text": "Namaz ibadetini özetleyebilme",
        "fullOutcome": "DKAB.5.2.1. Namaz ibadetini özetleyebilme",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "NAMAZ",
        "topic": "Namazın Kılınışı",
        "code": "DKAB.5.2.2",
        "text": "Namazın kılınışını gözlemleyebilme",
        "fullOutcome": "DKAB.5.2.2. Namazın kılınışını gözlemleyebilme",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 1
        }
      },
      {
        "theme": "NAMAZ",
        "topic": "Namazın İnsana Kazandırdıkları",
        "code": "DKAB.5.2.3",
        "text": "Namazın insana kazandırdıkları konusunda analitik düşünebilme",
        "fullOutcome": "DKAB.5.2.3. Namazın insana kazandırdıkları konusunda analitik düşünebilme",
        "counts": {
          "H": 2,
          "I": 2,
          "J": 1,
          "K": 2,
          "L": 2
        }
      },
      {
        "theme": "NAMAZ",
        "topic": "Bir Dua Öğreniyorum: Tahiyyat Duası",
        "code": "DKAB.5.2.4",
        "text": "Tahiyyat duasını ve bu duanın anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.5.2.4. Tahiyyat duasını ve bu duanın anlamını okuyarak yorumlayabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "KUR'AN-I KERİM",
        "topic": "Kur’an-ı Kerim’in İç Düzeni",
        "code": "DKAB.5.3.1",
        "text": "Kur’an-ı Kerim’in iç düzenini çözümleyebilme",
        "fullOutcome": "DKAB.5.3.1. Kur’an-ı Kerim’in iç düzenini çözümleyebilme",
        "counts": {
          "H": 1,
          "J": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-6",
    "sourceFile": "/assets/aistudio/dkab_orta3_3eae9d36.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "PEYGAMBER VE İLAHİ KİTAP İNANCI",
        "topic": "İnsanlara Rehber: Peygamber",
        "code": "DKAB.6.1.1",
        "text": "Peygamberlerin insanlara rehber olarak gönderilmesi hakkında bilgi toplayabilme",
        "fullOutcome": "DKAB.6.1.1. Peygamberlerin insanlara rehber olarak gönderilmesi hakkında bilgi toplayabilme",
        "counts": {}
      },
      {
        "theme": "PEYGAMBER VE İLAHİ KİTAP İNANCI",
        "topic": "Peygamberlerin İlettiği Mesaj: Vahiy",
        "code": "DKAB.6.1.2",
        "text": "Vahyin gönderiliş amacını idrak edebilme",
        "fullOutcome": "DKAB.6.1.2. Vahyin gönderiliş amacını idrak edebilme",
        "counts": {
          "D": 3,
          "E": 3,
          "F": 2,
          "G": 3,
          "H": 3,
          "I": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "PEYGAMBER VE İLAHİ KİTAP İNANCI",
        "topic": "İlahi Kitaplar",
        "code": "DKAB.6.1.3",
        "text": "İlahi kitaplarla ilgili bilgileri çözümleyebilme",
        "fullOutcome": "DKAB.6.1.3. İlahi kitaplarla ilgili bilgileri çözümleyebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 3,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "PEYGAMBER VE İLAHİ KİTAP İNANCI",
        "topic": "Bir Sure Öğreniyorum: Felak Suresi",
        "code": "DKAB.6.1.4",
        "text": "Felak suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.6.1.4. Felak suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "I": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "RAMAZAN VE ORUÇ",
        "topic": "Oruç ve Kur’an Ayı Ramazan",
        "code": "DKAB.6.2.1",
        "text": "Ramazan ayının oruç ve Kur’an ayı olduğunu çözümleyebilme",
        "fullOutcome": "DKAB.6.2.1. Ramazan ayının oruç ve Kur’an ayı olduğunu çözümleyebilme",
        "counts": {
          "D": 1,
          "G": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "RAMAZAN VE ORUÇ",
        "topic": "Oruç İbadeti",
        "code": "DKAB.6.2.2",
        "text": "Oruç ibadeti hakkında bilgi toplayabilme",
        "fullOutcome": "DKAB.6.2.2. Oruç ibadeti hakkında bilgi toplayabilme",
        "counts": {}
      },
      {
        "theme": "RAMAZAN VE ORUÇ",
        "topic": "Orucun İnsana Kazandırdıkları",
        "code": "DKAB.6.2.3",
        "text": "Orucun insana kazandırdıkları konusunda analitik düşünebilme",
        "fullOutcome": "DKAB.6.2.3. Orucun insana kazandırdıkları konusunda analitik düşünebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2
        }
      },
      {
        "theme": "RAMAZAN VE ORUÇ",
        "topic": "Bir Dua Öğreniyorum: İftar Duası",
        "code": "DKAB.6.2.4",
        "text": "İftar duasını ve bu duanın anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.6.2.4. İftar duasını ve bu duanın anlamını okuyarak yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "AHLAKİ DAVRANIŞLAR",
        "topic": "Doğru Sözlü Olmak",
        "code": "DKAB.6.3.1",
        "text": "Doğru sözlü olmayı kendi hayatına yansıtabilme",
        "fullOutcome": "DKAB.6.3.1. Doğru sözlü olmayı kendi hayatına yansıtabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 2
        }
      },
      {
        "theme": "AHLAKİ DAVRANIŞLAR",
        "topic": "Merhametli Olmak",
        "code": "DKAB.6.3.2",
        "text": "Merhamet kavramını ayırt edebilme",
        "fullOutcome": "DKAB.6.3.2. Merhamet kavramını ayırt edebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-7",
    "sourceFile": "/assets/aistudio/dkab_orta3_3eae9d36.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Ortaokul",
    "grade": "7. Sınıf",
    "gradeNum": 7,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "MELEK VE AHİRET İNANCI",
        "topic": "Varlıklar Âlemi",
        "code": "DKAB.7.1.1",
        "text": "Melekleri sınıflandırabilme",
        "fullOutcome": "DKAB.7.1.1. Melekleri sınıflandırabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "MELEK VE AHİRET İNANCI",
        "topic": "Dünya ve Ahiret Hayatı",
        "code": "DKAB.7.1.2",
        "text": "Ahiret hayatının aşamalarını çözümleyebilme",
        "fullOutcome": "DKAB.7.1.2. Ahiret hayatının aşamalarını çözümleyebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "MELEK VE AHİRET İNANCI",
        "topic": "Melek ve Ahiret İnancının İnsana Kazandırdıkları",
        "code": "DKAB.7.1.3",
        "text": "Melek ve ahiret inancının insana kazandırdıkları konusunda analitik düşünebilme",
        "fullOutcome": "DKAB.7.1.3. Melek ve ahiret inancının insana kazandırdıkları konusunda analitik düşünebilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 2,
          "G": 3,
          "H": 3,
          "I": 1,
          "J": 1,
          "M": 2
        }
      },
      {
        "theme": "MELEK VE AHİRET İNANCI",
        "topic": "Bir Sure Öğreniyorum: Nâs Suresi",
        "code": "DKAB.7.1.4",
        "text": "Nâs suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.7.1.4. Nâs suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "HAC, UMRE VE KURBAN",
        "topic": "Hac ve Umre İbadeti",
        "code": "DKAB.7.2.1",
        "text": "Hac ve umre ibadetlerini çözümleyebilme",
        "fullOutcome": "DKAB.7.2.1. Hac ve umre ibadetlerini çözümleyebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "J": 1,
          "K": 2,
          "L": 2,
          "M": 1
        }
      },
      {
        "theme": "HAC, UMRE VE KURBAN",
        "topic": "Kurban İbadeti",
        "code": "DKAB.7.2.2",
        "text": "Kurban ibadetini yapılandırabilme",
        "fullOutcome": "DKAB.7.2.2. Kurban ibadetini yapılandırabilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "HAC, UMRE VE KURBAN",
        "topic": "Hac ve Kurban İbadetinin Kültürümüze Yansımaları",
        "code": "DKAB.7.2.3",
        "text": "Hac ve kurban ibadetinin kültürümüze yansımalarını müşahede edebilme",
        "fullOutcome": "DKAB.7.2.3. Hac ve kurban ibadetinin kültürümüze yansımalarını müşahede edebilme",
        "counts": {
          "I": 2,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "HAC, UMRE VE KURBAN",
        "topic": "Bir Sure Öğreniyorum: Kâfirun Suresi",
        "code": "DKAB.7.2.4",
        "text": "Kâfirun suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "fullOutcome": "DKAB.7.2.4. Kâfirun suresini ve bu surenin anlamını okuyarak yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "İSLAM DÜŞÜNCESİNDE YORUMLAR",
        "topic": "Din Anlayışındaki Yorum Farklılıkları",
        "code": "DKAB.7.3.1",
        "text": "Din anlayışındaki yorum farklılıklarının sebeplerini anlayabilme",
        "fullOutcome": "DKAB.7.3.1. Din anlayışındaki yorum farklılıklarının sebeplerini anlayabilme",
        "counts": {
          "I": 1,
          "J": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-8",
    "sourceFile": "/assets/aistudio/dkab_orta3_3eae9d36.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Ortaokul",
    "grade": "8. Sınıf",
    "gradeNum": 8,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "KADER İNANCI",
        "topic": "Kader ve Kaza İnancı",
        "code": "DKAB.8.1.1",
        "text": "Kader ve kaza inancını ayet ve hadislerle açıklar.",
        "fullOutcome": "DKAB 8.1.1. Kader ve kaza inancını ayet ve hadislerle açıklar.",
        "counts": {
          "D": 1,
          "G": 1,
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "KADER İNANCI",
        "topic": "İnsanın İradesi ve Kader",
        "code": "DKAB.8.1.2",
        "text": "İnsanın ilmi, iradesi, sorumluluğu ile kader arasında ilişki kurar.",
        "fullOutcome": "DKAB 8.1.2. İnsanın ilmi, iradesi, sorumluluğu ile kader arasında ilişki kurar.",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "KADER İNANCI",
        "topic": "Kaderle İlgili Kavramlar",
        "code": "DKAB.8.1.3",
        "text": "Kaza ve kader ile ilgili kavramları analiz eder.",
        "fullOutcome": "DKAB 8.1.3. Kaza ve kader ile ilgili kavramları analiz eder.",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 3,
          "H": 2,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "KADER İNANCI",
        "topic": "Kaderle İlgili Kavramlar",
        "code": "DKAB.8.1.4",
        "text": "Toplumda kader ve kaza ile ilgili yaygın olan yanlış anlayışları sorgular",
        "fullOutcome": "DKAB 8.1.4. Toplumda kader ve kaza ile ilgili yaygın olan yanlış anlayışları sorgular",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "KADER İNANCI",
        "topic": "Bir Peygamber Tanıyorum: Hz. Musa (a.s.)",
        "code": "DKAB.8.1.5",
        "text": "Hz. Musa’nın (a.s.) hayatını ana hatlarıyla tanır.",
        "fullOutcome": "DKAB 8.1.5. Hz. Musa’nın (a.s.) hayatını ana hatlarıyla tanır.",
        "counts": {
          "D": 1,
          "E": 1,
          "I": 1
        }
      },
      {
        "theme": "KADER İNANCI",
        "topic": "Bir Ayet Tanıyorum: Ayetelkürsi ve Anlamı",
        "code": "DKAB.8.1.6",
        "text": "Ayet el-Kürsi’yi okur, anlamını söyler.",
        "fullOutcome": "DKAB 8.1.6. Ayet el-Kürsi’yi okur, anlamını söyler.",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "ZEKÂT VE SADAKA",
        "topic": "İslam’ın Paylaşma ve Yardımlaşmaya Verdiği Önem",
        "code": "DKAB.8.2.1",
        "text": "İslam’ın paylaşma ve yardımlaşmaya verdiği önemi ayet ve hadisler ışığında yorumlar.",
        "fullOutcome": "DKAB 8.2.1. İslam’ın paylaşma ve yardımlaşmaya verdiği önemi ayet ve hadisler ışığında yorumlar.",
        "counts": {
          "D": 1,
          "E": 1,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ZEKÂT VE SADAKA",
        "topic": "Zekât ve Sadaka İbadeti",
        "code": "DKAB.8.2.2",
        "text": "Zekât ve sadaka ibadetini ayet ve hadislerle açıklar.",
        "fullOutcome": "DKAB 8.2.2. Zekât ve sadaka ibadetini ayet ve hadislerle açıklar.",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "ZEKÂT VE SADAKA",
        "topic": "Zekât ve Sadakanın Bireysel ve Toplumsal Faydaları",
        "code": "DKAB.8.2.3",
        "text": "Zekât, infak ve sadakanın bireysel ve toplumsal önemini fark eder.",
        "fullOutcome": "DKAB 8.2.3. Zekât, infak ve sadakanın bireysel ve toplumsal önemini fark eder.",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2
        }
      },
      {
        "theme": "ZEKÂT VE SADAKA",
        "topic": "Bir Peygamber Tanıyorum: Hz. Şuayb (as)",
        "code": "DKAB.8.2.4",
        "text": "Hz. Şuayb’in (a.s.) hayatını ana hatlarıyla tanır.",
        "fullOutcome": "DKAB 8.2.4. Hz. Şuayb’in (a.s.) hayatını ana hatlarıyla tanır.",
        "counts": {
          "J": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "ZEKÂT VE SADAKA",
        "topic": "Bir Sure Tanıyorum: Maun Suresi ve Anlamı",
        "code": "DKAB.8.2.5",
        "text": "Maûn suresini okur, anlamını söyler.",
        "fullOutcome": "DKAB 8.2.5. Maûn suresini okur, anlamını söyler.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "DİN VE HAYAT",
        "topic": "Din, Birey ve Toplum",
        "code": "DKAB.8.3.1",
        "text": "Din, birey ve toplum arasındaki ilişkiyi yorumlar.",
        "fullOutcome": "DKAB 8.3.1. Din, birey ve toplum arasındaki ilişkiyi yorumlar.",
        "counts": {
          "I": 1,
          "J": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-9",
    "sourceFile": "/assets/aistudio/dkab_lise2_ac5d37b2.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "ALLAH-İNSAN İLİŞKİSİ",
        "topic": "İnsan ve İnsanın Yaratılışı",
        "code": "DKAB.9.1.1",
        "text": "İnsanın yaratılışını ve özelliklerini ayetlerden hareketle müşahede edebilme",
        "fullOutcome": "DKAB.9.1.1. İnsanın yaratılışını ve özelliklerini ayetlerden hareketle müşahede edebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2
        }
      },
      {
        "theme": "ALLAH-İNSAN İLİŞKİSİ",
        "topic": "Doğruyu Arayan Bir Varlık Olarak İnsan",
        "code": "DKAB.9.1.2",
        "text": "İnsanın doğruyu arayan bir varlık olarak bilgiye ulaşma yolları hakkında eleştirel düşünebilme",
        "fullOutcome": "DKAB.9.1.2. İnsanın doğruyu arayan bir varlık olarak bilgiye ulaşma yolları hakkında eleştirel düşünebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "ALLAH-İNSAN İLİŞKİSİ",
        "topic": "İbadet ve Dua Eden Bir Varlık Olarak İnsan",
        "code": "DKAB.9.1.3",
        "text": "Allah (cc) ile iletişimin ibadet ve dua ile sağlandığını yansıtabilme",
        "fullOutcome": "DKAB.9.1.3. Allah (cc) ile iletişimin ibadet ve dua ile sağlandığını yansıtabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "ALLAH-İNSAN İLİŞKİSİ",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.9.1.4",
        "text": "Rum suresinin 17-27. ayetlerinin mesajlarını anlamada temel kaynakları kullanabilme",
        "fullOutcome": "DKAB.9.1.4. Rum suresinin 17-27. ayetlerinin mesajlarını anlamada temel kaynakları kullanabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "İSLAM’DA İNANÇ ESASLARI",
        "topic": "İman ve İmanın Mahiyeti",
        "code": "DKAB.9.2.1",
        "text": "İmanın mahiyetini müşahede edebilme",
        "fullOutcome": "DKAB.9.2.1. İmanın mahiyetini müşahede edebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 1,
          "N": 2
        }
      },
      {
        "theme": "İSLAM’DA İNANÇ ESASLARI",
        "topic": "İslam’da İman Esasları",
        "code": "DKAB.9.2.2",
        "text": "İslam’ın iman esaslarını ayet ve hadisler bağlamında özetleyebilme",
        "fullOutcome": "DKAB.9.2.2. İslam’ın iman esaslarını ayet ve hadisler bağlamında özetleyebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2
        }
      },
      {
        "theme": "İSLAM’DA İNANÇ ESASLARI",
        "topic": "İmanın Bireye ve Topluma Kazandırdıkları",
        "code": "DKAB.9.2.3",
        "text": "İmanın bireye ve topluma kazandırdıklarını idrak edebilme",
        "fullOutcome": "DKAB.9.2.3. İmanın bireye ve topluma kazandırdıklarını idrak edebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2
        }
      },
      {
        "theme": "İSLAM’DA İNANÇ ESASLARI",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.9.2.4",
        "text": "Bakara suresinin 177. ayetindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "fullOutcome": "DKAB.9.2.4. Bakara suresinin 177. ayetindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "İSLAM’DA İBADETLER",
        "topic": "İslam’da İbadetin Kapsamı",
        "code": "DKAB.9.3.1",
        "text": "İslam’da ibadet ve ibadetin temel ilkeleri hakkında bilgi toplayabilme",
        "fullOutcome": "DKAB.9.3.1. İslam’da ibadet ve ibadetin temel ilkeleri hakkında bilgi toplayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-10",
    "sourceFile": "/assets/aistudio/dkab_lise2_ac5d37b2.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "İSLAM’DA VARLIK VE BİLGİ",
        "topic": "İslam’da Bilgi ve Bilginin Kaynakları",
        "code": "DKAB.10.1.1",
        "text": "İslam’da bilginin yerini ve kaynaklarını çözümleyebilme",
        "fullOutcome": "DKAB.10.1.1. İslam’da bilginin yerini ve kaynaklarını çözümleyebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "İSLAM’DA VARLIK VE BİLGİ",
        "topic": "Allah-Âlem İlişkisi",
        "code": "DKAB.10.1.2",
        "text": "Allah-âlem ilişkisini müşahede edebilme",
        "fullOutcome": "DKAB.10.1.2. Allah-âlem ilişkisini müşahede edebilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 3,
          "G": 3,
          "H": 1,
          "I": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "İSLAM’DA VARLIK VE BİLGİ",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.10.1.3",
        "text": "İsra suresinin 36 ve Mülk suresinin 23. ayetlerinin mesajlarını anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "fullOutcome": "DKAB.10.1.3. İsra suresinin 36 ve Mülk suresinin 23. ayetlerinin mesajlarını anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "ALLAH’I TANIMAK",
        "topic": "Allah’ın Varlığının Delilleri",
        "code": "DKAB.10.2.1",
        "text": "Allah’ın (cc) varlığının delillerini müşahede edebilme",
        "fullOutcome": "DKAB.10.2.1. Allah’ın (cc) varlığının delillerini müşahede edebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "ALLAH’I TANIMAK",
        "topic": "Allah’ı İsim ve Sıfatlarıyla Tanımak",
        "code": "DKAB.10.2.2",
        "text": "Allah’ı (cc) gereği gibi tanıyabilmek için O’nun isim ve sıfatlarını bağlamına uygun kullanabilme",
        "fullOutcome": "DKAB.10.2.2. Allah’ı (cc) gereği gibi tanıyabilmek için O’nun isim ve sıfatlarını bağlamına uygun kullanabilme",
        "counts": {
          "H": 2,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "ALLAH’I TANIMAK",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.10.2.3",
        "text": "Haşr suresinin 22-24. ayetlerindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "fullOutcome": "DKAB.10.2.3. Haşr suresinin 22-24. ayetlerindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "İSLAM’IN EVRENSEL MESAJLARI",
        "topic": "İslam’ın Tevhit İlkesi",
        "code": "DKAB.10.3.1",
        "text": "İslam’ın evrensel mesajlarından biri olan tevhit ilkesi hakkında bilgi toplayabilme",
        "fullOutcome": "DKAB.10.3.1. İslam’ın evrensel mesajlarından biri olan tevhit ilkesi hakkında bilgi toplayabilme",
        "counts": {
          "H": 1,
          "K": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-11",
    "sourceFile": "/assets/aistudio/dkab_lise2_ac5d37b2.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "KADER, İRADE VE SORUMLULUK",
        "topic": "İnsan ve Kader",
        "code": "DKAB.11.1.1",
        "text": "Kader ve kaderle ilgili kavramları yapılandırabilme",
        "fullOutcome": "DKAB.11.1.1. Kader ve kaderle ilgili kavramları yapılandırabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "KADER, İRADE VE SORUMLULUK",
        "topic": "Akıl, İrade ve Sorumluluk Sahibi Bir Varlık Olarak İnsan",
        "code": "DKAB.11.1.2",
        "text": "İnsan, akıl, irade ve sorumluluk kavramları arasındaki ilişki hakkında eleştirel düşünebilme",
        "fullOutcome": "DKAB.11.1.2. İnsan, akıl, irade ve sorumluluk kavramları arasındaki ilişki hakkında eleştirel düşünebilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 3,
          "G": 3,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "KADER, İRADE VE SORUMLULUK",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.11.1.3",
        "text": "Bakara suresinin 286. ayetinin mesajlarını anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "fullOutcome": "DKAB.11.1.3. Bakara suresinin 286. ayetinin mesajlarını anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "DİN, FELSEFE, BİLİM VE SANAT",
        "topic": "Din",
        "code": "DKAB.11.2.1",
        "text": "Din tanımlarını ve farklı disiplinlerin dine yaklaşımları arasında mukayese yapabilme",
        "fullOutcome": "DKAB.11.2.1. Din tanımlarını ve farklı disiplinlerin dine yaklaşımları arasında mukayese yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 1,
          "M": 2
        }
      },
      {
        "theme": "DİN, FELSEFE, BİLİM VE SANAT",
        "topic": "Din, Felsefe ve Bilim",
        "code": "DKAB.11.2.2",
        "text": "Dinin felsefe ve bilimle ilişkisini sorgulayabilme",
        "fullOutcome": "DKAB.11.2.2. Dinin felsefe ve bilimle ilişkisini sorgulayabilme",
        "counts": {
          "H": 2,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "DİN, FELSEFE, BİLİM VE SANAT",
        "topic": "Din ve Sanat",
        "code": "DKAB.11.2.3",
        "text": "Din ve sanat arasındaki ilişkiyi çözümleyebilme",
        "fullOutcome": "DKAB.11.2.3. Din ve sanat arasındaki ilişkiyi çözümleyebilme",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "DİN, FELSEFE, BİLİM VE SANAT",
        "topic": "Kur’an’dan Mesajlar",
        "code": "DKAB.11.2.4",
        "text": "Al-i İmran suresinin 190-191. ayetlerindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "fullOutcome": "DKAB.11.2.4. Al-i İmran suresinin 190-191. ayetlerindeki mesajları anlamak için Kur’an-ı Kerim meallerine başvurabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "İSLAM MEDENİYETİ VE GÖNÜL COĞRAFYAMIZ",
        "topic": "Medeniyetin Oluşumu",
        "code": "DKAB.11.3.1",
        "text": "Medeniyetin oluşumuna etki eden unsurları çözümleyebilme",
        "fullOutcome": "DKAB.11.3.1. Medeniyetin oluşumuna etki eden unsurları çözümleyebilme",
        "counts": {
          "H": 1,
          "K": 1,
          "M": 1
        }
      },
      {
        "theme": "İSLAM MEDENİYETİ VE GÖNÜL COĞRAFYAMIZ",
        "topic": "İslam Medeniyetinin İzleri",
        "code": "DKAB.11.3.2",
        "text": "İslam medeniyetinin izlerini özetleyebilme",
        "fullOutcome": "DKAB.11.3.2. İslam medeniyetinin izlerini özetleyebilme",
        "counts": {
          "H": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "dinkültürüveahlakbilgisi-12",
    "sourceFile": "/assets/aistudio/dkab_lise2_ac5d37b2.xml",
    "subject": "Din Kültürü ve Ahlak Bilgisi",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "İSLAM VE BİLİM",
        "topic": "Din-Bilim İlişkisi",
        "code": "12.1.1",
        "text": "Din-bilim ilişkisini tartışır.",
        "fullOutcome": "12.1.1 Din-bilim ilişkisini tartışır.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 2
        }
      },
      {
        "theme": "İSLAM VE BİLİM",
        "topic": "İslam Medeniyetinde Bilim ve Düşüncenin Gelişimi",
        "code": "12.1.2",
        "text": "İslam medeniyetinde bilim ve düşüncenin gelişim sürecini değerlendirir.",
        "fullOutcome": "12.1.2 İslam medeniyetinde bilim ve düşüncenin gelişim sürecini değerlendirir.",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "İSLAM VE BİLİM",
        "topic": "İslam Medeniyetinde Öne Çıkan Eğitim Kurumları",
        "code": "12.1.3",
        "text": "İslam medeniyetinde öne çıkan eğitim ve bilim kurumlarını tanır.",
        "fullOutcome": "12.1.3 İslam medeniyetinde öne çıkan eğitim ve bilim kurumlarını tanır.",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 2,
          "J": 1,
          "L": 1,
          "M": 1,
          "N": 1
        }
      },
      {
        "theme": "İSLAM VE BİLİM",
        "topic": "Müslümanların Bilim Alanında Yaptığı Öncü ve Özgün Çalışmalar",
        "code": "12.1.4",
        "text": "Müslümanların bilim alanında yaptığı özgün çalışmaları sınıflandırır.",
        "fullOutcome": "12.1.4 Müslümanların bilim alanında yaptığı özgün çalışmaları sınıflandırır.",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 2,
          "K": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "İSLAM VE BİLİM",
        "topic": "Kur’an’dan Mesajlar: Fatır Suresi 27-28. Ayetler",
        "code": "12.1.5",
        "text": "Fatır suresi 27-28. ayette verilen mesajları değerlendirir.",
        "fullOutcome": "12.1.5 Fatır suresi 27-28. ayette verilen mesajları değerlendirir.",
        "counts": {
          "E": 1,
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "ANADOLU'DA İSLAM",
        "topic": "Türklerin Müslüman Olmaları",
        "code": "12.2.1",
        "text": "Türklerin Müslüman olma sürecini açıklar",
        "fullOutcome": "12.2.1 Türklerin Müslüman olma sürecini açıklar",
        "counts": {
          "F": 1,
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "ANADOLU'DA İSLAM",
        "topic": "Milletimizin İslam Anlayışının Oluşmasında Etkili Olan Bazı Şahsiyetler",
        "code": "12.2.2",
        "text": "Dinî anlayış ve kültürümüzün oluşmasında etkili olan bazı şahsiyetleri tanır.",
        "fullOutcome": "12.2.2 Dinî anlayış ve kültürümüzün oluşmasında etkili olan bazı şahsiyetleri tanır.",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 2,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "ANADOLU'DA İSLAM",
        "topic": "Kur’an’dan Mesajlar: Nisa Suresi 136. Ayet",
        "code": "12.2.3",
        "text": "Nisa suresi 136. ayette verilen mesajları değerlendirir.",
        "fullOutcome": "12.2.3 Nisa suresi 136. ayette verilen mesajları değerlendirir.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 2,
          "M": 2,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "İSLAM DÜŞÜNCESİNDE TASAVVUFİ YORUMLAR",
        "topic": "Tasavvufi Düşüncenin Oluşumu",
        "code": "12.3.1",
        "text": "İslam düşüncesinde tasavvufi düşüncenin oluşum sürecini değerlendirir.",
        "fullOutcome": "12.3.1 İslam düşüncesinde tasavvufi düşüncenin oluşum sürecini değerlendirir.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "N": 1
        }
      },
      {
        "theme": "İSLAM DÜŞÜNCESİNDE TASAVVUFİ YORUMLAR",
        "topic": "Tasavvufi Düşüncenin Ahlaki Boyutu",
        "code": "12.3.2",
        "text": "Tasavvufi düşüncede ahlaki boyutun önemini fark eder.",
        "fullOutcome": "12.3.2 Tasavvufi düşüncede ahlaki boyutun önemini fark eder.",
        "counts": {
          "J": 1,
          "L": 1
        }
      }
    ]
  },
  {
    "id": "fizik-9",
    "sourceFile": "/assets/aistudio/fizik2_0c0306cc.xml",
    "subject": "Fizik",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Fizik Bilimi",
        "topic": "",
        "code": "FİZ.9.1.1",
        "text": "Fizik biliminin tanımına yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.9.1.1. Fizik biliminin tanımına yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "Fizik Biliminin Alt Dalları",
        "topic": "",
        "code": "FİZ.9.1.2",
        "text": "Fizik biliminin alt dallarını sınıflandırabilme",
        "fullOutcome": "FİZ.9.1.2. Fizik biliminin alt dallarını sınıflandırabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "Fizik Bilimine Yön Verenler",
        "topic": "",
        "code": "FİZ.9.1.3",
        "text": "Fizik bilimine katkıda bulunmuş bilim insanlarının deneyimlerini yansıtabilme",
        "fullOutcome": "FİZ.9.1.3. Fizik bilimine katkıda bulunmuş bilim insanlarının deneyimlerini yansıtabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Fizik Bilimi İle İlgili Kariyer Keşfi",
        "topic": "",
        "code": "FİZ.9.1.4",
        "text": "Bilim ve teknoloji alanında faaliyet gösteren kurum veya kuruluşlarda fizik bilimi ile ilişkili kariyer olanaklarını sorgulayabilme",
        "fullOutcome": "FİZ.9.1.4. Bilim ve teknoloji alanında faaliyet gösteren kurum veya kuruluşlarda fizik bilimi ile ilişkili kariyer olanaklarını sorgulayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Temel ve Türetilmiş Nicelikler",
        "topic": "",
        "code": "FİZ.9.2.1",
        "text": "Birimleri SI birim sisteminde verilen temel ve türetilmiş nicelikleri sınıflandırabilme",
        "fullOutcome": "FİZ.9.2.1. Birimleri SI birim sisteminde verilen temel ve türetilmiş nicelikleri sınıflandırabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Skaler ve Vektörel Nicelikler",
        "topic": "",
        "code": "FİZ.9.2.2",
        "text": "Skaler ve vektörel nicelikleri karşılaştırabilme",
        "fullOutcome": "FİZ.9.2.2. Skaler ve vektörel nicelikleri karşılaştırabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Vektörler",
        "topic": "",
        "code": "FİZ.9.2.3",
        "text": "Aynı doğrultu üzerinde yer alan farklı vektörlerin yön ve büyüklüklerine yönelik bilimsel çıkarım yapabilme",
        "fullOutcome": "FİZ.9.2.3. Aynı doğrultu üzerinde yer alan farklı vektörlerin yön ve büyüklüklerine yönelik bilimsel çıkarım yapabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Vektörler",
        "topic": "",
        "code": "FİZ.9.2.4",
        "text": "Vektörlerin toplanmasında kullanılan uç uca ekleme ve paralelkenar yöntemi ile bileşenlerine ayırma işlemine ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.9.2.4. Vektörlerin toplanmasında kullanılan uç uca ekleme ve paralelkenar yöntemi ile bileşenlerine ayırma işlemine ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Doğadaki Temel Kuvvetler",
        "topic": "",
        "code": "FİZ.9.2.5",
        "text": "Doğadaki temel kuvvetleri karşılaştırabilme",
        "fullOutcome": "FİZ.9.2.5. Doğadaki temel kuvvetleri karşılaştırabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Hareket ve Hareket Türleri",
        "topic": "",
        "code": "FİZ.9.2.6",
        "text": "Hareketin temel kavramlarının tanımlarına yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.9.2.6. Hareketin temel kavramlarının tanımlarına yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Hareket ve Hareket Türleri",
        "topic": "",
        "code": "FİZ.9.2.7",
        "text": "Hareket türlerini sınıflandırabilme",
        "fullOutcome": "FİZ.9.2.7. Hareket türlerini sınıflandırabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "M": 1
        }
      }
    ]
  },
  {
    "id": "fizik-10",
    "sourceFile": "/assets/aistudio/fizik2_0c0306cc.xml",
    "subject": "Fizik",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Sabit Hızlı Hareket",
        "topic": "",
        "code": "FİZ.10.1.1",
        "text": "Yatay doğrultuda sabit hızlı hareket ile ilgili tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.10.1.1. Yatay doğrultuda sabit hızlı hareket ile ilgili tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 3,
          "E": 3,
          "F": 2,
          "G": 2,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "Bir Boyutta Sabit İvmeli Hareket",
        "topic": "",
        "code": "FİZ.10.1.2",
        "text": "İvme ve hız değişimi arasındaki ilişkiye yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.10.1.2. İvme ve hız değişimi arasındaki ilişkiye yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 3,
          "F": 3,
          "G": 3,
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "Bir Boyutta Sabit İvmeli Hareket",
        "topic": "",
        "code": "FİZ.10.1.3",
        "text": "Yatay doğrultuda sabit ivmeyle hareket eden cisimlerin hareket grafiklerinden elde edilen matematiksel modelleri yorumlayabilme",
        "fullOutcome": "FİZ.10.1.3. Yatay doğrultuda sabit ivmeyle hareket eden cisimlerin hareket grafiklerinden elde edilen matematiksel modelleri yorumlayabilme",
        "counts": {
          "D": 2,
          "F": 1,
          "G": 2,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "İş, Enerji ve Güç",
        "topic": "",
        "code": "FİZ.10.2.1",
        "text": "Kuvvet-yer değiştirme grafiği kullanılarak iş ile ilgili tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.10.2.1. Kuvvet-yer değiştirme grafiği kullanılarak iş ile ilgili tümevarımsal akıl yürütebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 2
        }
      },
      {
        "theme": "İş, Enerji ve Güç",
        "topic": "",
        "code": "FİZ.10.2.2",
        "text": "İş, enerji ve güç kavramlarına ilişkin çıkarım yapabilme",
        "fullOutcome": "FİZ.10.2.2. İş, enerji ve güç kavramlarına ilişkin çıkarım yapabilme",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 2
        }
      },
      {
        "theme": "Enerji Biçimleri",
        "topic": "",
        "code": "FİZ.10.2.3",
        "text": "Enerji biçimlerini karşılaştırabilme",
        "fullOutcome": "FİZ.10.2.3. Enerji biçimlerini karşılaştırabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Mekanik Enerji",
        "topic": "",
        "code": "FİZ.10.2.4",
        "text": "Mekanik enerjiyi çözümleyebilme",
        "fullOutcome": "FİZ.10.2.4. Mekanik enerjiyi çözümleyebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Enerji Kaynakları",
        "topic": "",
        "code": "FİZ.10.2.5",
        "text": "Yenilenebilen ve yenilenemeyen enerji kaynaklarını karşılaştırabilme",
        "fullOutcome": "FİZ.10.2.5. Yenilenebilen ve yenilenemeyen enerji kaynaklarını karşılaştırabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "fizik-11",
    "sourceFile": "/assets/aistudio/fizik2_0c0306cc.xml",
    "subject": "Fizik",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "Serbest Düşme",
        "topic": "",
        "code": "FİZ.11.1.1",
        "text": "Serbest düşme hareketi yapan cisimlerin ivmesine yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.1. Serbest düşme hareketi yapan cisimlerin ivmesine yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "Serbest Düşme",
        "topic": "",
        "code": "FİZ.11.1.2",
        "text": "Serbest düşme hareketi ile ilgili kanıt kullanabilme",
        "fullOutcome": "FİZ.11.1.2. Serbest düşme hareketi ile ilgili kanıt kullanabilme",
        "counts": {
          "E": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "İki Boyutta Sabit İvmeli Hareket",
        "topic": "",
        "code": "FİZ.11.1.3",
        "text": "İki boyutta sabit ivmeli hareket ile ilgili tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.3. İki boyutta sabit ivmeli hareket ile ilgili tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "Newton'ın Hareket Yasaları",
        "topic": "",
        "code": "FİZ.11.1.4",
        "text": "Newton'ın Hareket Yasaları ile ilgili tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.4. Newton'ın Hareket Yasaları ile ilgili tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "L": 1
        }
      },
      {
        "theme": "Newton'ın Hareket Yasaları",
        "topic": "",
        "code": "FİZ.11.1.5",
        "text": "Newton'ın Hareket Yasalarını serbest cisim diyagramını kullanarak yorumlayabilme",
        "fullOutcome": "FİZ.11.1.5. Newton'ın Hareket Yasalarını serbest cisim diyagramını kullanarak yorumlayabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Newton'ın Hareket Yasaları",
        "topic": "",
        "code": "FİZ.11.1.6",
        "text": "Statik ve kinetik sürtünme kuvvetlerini karşılaştırabilme",
        "fullOutcome": "FİZ.11.1.6. Statik ve kinetik sürtünme kuvvetlerini karşılaştırabilme",
        "counts": {
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Sürtünme Kuvveti",
        "topic": "",
        "code": "FİZ.11.1.7",
        "text": "Sürtünme kuvvetinin matematiksel modeline ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.7. Sürtünme kuvvetinin matematiksel modeline ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Limit Hız",
        "topic": "",
        "code": "FİZ.11.1.8",
        "text": "Limit hızı etkileyen değişkenler ile ilgili bilimsel çıkarım yapabilme",
        "fullOutcome": "FİZ.11.1.8. Limit hızı etkileyen değişkenler ile ilgili bilimsel çıkarım yapabilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Düzgün Çembersel Hareket",
        "topic": "",
        "code": "FİZ.11.1.9",
        "text": "Düzgün çembersel hareket yapan cisimlerin yörüngeleri ve hız vektörleri hakkında anolojik akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.9. Düzgün çembersel hareket yapan cisimlerin yörüngeleri ve hız vektörleri hakkında anolojik akıl yürütebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "Düzgün Çembersel Hareket",
        "topic": "",
        "code": "FİZ.11.1.10",
        "text": "Düzgün çembersel hareketin değişkenler arasındaki ilişkilerin matematiksel olarak modellemesine ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.1.10. Düzgün çembersel hareketin değişkenler arasındaki ilişkilerin matematiksel olarak modellemesine ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 2
        }
      },
      {
        "theme": "Elektriksel Kuvvet ve Elektriksel Alan",
        "topic": "",
        "code": "FİZ.11.2.1",
        "text": "Elektrik yükleri arasındaki elektriksel kuvvetin matematiksel modeline yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.2.1. Elektrik yükleri arasındaki elektriksel kuvvetin matematiksel modeline yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "Elektriksel Kuvvet ve Elektriksel Alan",
        "topic": "",
        "code": "FİZ.11.2.2",
        "text": "Elektriksel alanın matematiksel modeline yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "FİZ.11.2.2. Elektriksel alanın matematiksel modeline yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "H": 1,
          "I": 1
        }
      }
    ]
  },
  {
    "id": "fizik-12",
    "sourceFile": "/assets/aistudio/fizik2_0c0306cc.xml",
    "subject": "Fizik",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÜZGÜN ÇEMBERSEL HAREKET",
        "code": "12.1.1.1",
        "text": "Düzgün çembersel hareketi açıklar.",
        "fullOutcome": "12.1.1.1. Düzgün çembersel hareketi açıklar.",
        "counts": {
          "D": 1,
          "E": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÜZGÜN ÇEMBERSEL HAREKET",
        "code": "12.1.1.2",
        "text": "Düzgün çembersel harekette merkezcil kuvvetin bağlı olduğu değişkenleri analiz eder.",
        "fullOutcome": "12.1.1.2. Düzgün çembersel harekette merkezcil kuvvetin bağlı olduğu değişkenleri analiz eder.",
        "counts": {
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÜZGÜN ÇEMBERSEL HAREKET",
        "code": "12.1.1.3",
        "text": "Düzgün çembersel hareket yapan cisimlerin hareketini analiz eder.",
        "fullOutcome": "12.1.1.3. Düzgün çembersel hareket yapan cisimlerin hareketini analiz eder.",
        "counts": {
          "D": 1,
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÜZGÜN ÇEMBERSEL HAREKET",
        "code": "12.1.1.4",
        "text": "Yatay, düşey, eğimli zeminlerde araçların emniyetli dönüş şartları ile ilgili hesaplamalar yapar.",
        "fullOutcome": "12.1.1.4. Yatay, düşey, eğimli zeminlerde araçların emniyetli dönüş şartları ile ilgili hesaplamalar yapar.",
        "counts": {
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÖNEREK ÖTELEME HAREKETİ",
        "code": "12.1.2.1",
        "text": "Öteleme ve dönme hareketini karşılaştırır.",
        "fullOutcome": "12.1.2.1. Öteleme ve dönme hareketini karşılaştırır.",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÖNEREK ÖTELEME HAREKETİ",
        "code": "12.1.2.2",
        "text": "Eylemsizlik momenti kavramını açıklar.",
        "fullOutcome": "12.1.2.2. Eylemsizlik momenti kavramını açıklar.",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "DÖNEREK ÖTELEME HAREKETİ",
        "code": "12.1.2.3",
        "text": "Dönme ve dönerek öteleme hareketi yapan cismin kinetik enerjisinin bağlı olduğu değişkenleri açıklar.",
        "fullOutcome": "12.1.2.3. Dönme ve dönerek öteleme hareketi yapan cismin kinetik enerjisinin bağlı olduğu değişkenleri açıklar.",
        "counts": {
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "AÇISAL MOMENTUM",
        "code": "12.1.3.1",
        "text": "Açısal momentumun fiziksel bir nicelik olduğunu açıklar.",
        "fullOutcome": "12.1.3.1. Açısal momentumun fiziksel bir nicelik olduğunu açıklar.",
        "counts": {
          "E": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "AÇISAL MOMENTUM",
        "code": "12.1.3.2",
        "text": "Açısal momentumu çizgisel momentum ile ilişkilendirerek açıklar.",
        "fullOutcome": "12.1.3.2. Açısal momentumu çizgisel momentum ile ilişkilendirerek açıklar.",
        "counts": {
          "D": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "AÇISAL MOMENTUM",
        "code": "12.1.3.3",
        "text": "Açısal momentumu torkla ilişkilendirir.",
        "fullOutcome": "12.1.3.3. Açısal momentumu torkla ilişkilendirir.",
        "counts": {
          "F": 1,
          "I": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "AÇISAL MOMENTUM",
        "code": "12.1.3.4",
        "text": "Açısal momentumun korunumunu günlük hayattan örneklerle açıklar.",
        "fullOutcome": "12.1.3.4. Açısal momentumun korunumunu günlük hayattan örneklerle açıklar.",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "KÜTLE ÇEKİM KUVVETİ",
        "code": "12.1.4.1",
        "text": "Kütle çekim kuvvetini açıklar.",
        "fullOutcome": "12.1.4.1. Kütle çekim kuvvetini açıklar.",
        "counts": {
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "KÜTLE ÇEKİM KUVVETİ",
        "code": "12.1.4.2",
        "text": "Newton’ın Hareket Kanunları’nı kullanarak kütle çekim ivmesinin bağlı olduğu değişkenleri belirler.",
        "fullOutcome": "12.1.4.2. Newton’ın Hareket Kanunları’nı kullanarak kütle çekim ivmesinin bağlı olduğu değişkenleri belirler.",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "KÜTLE ÇEKİM KUVVETİ",
        "code": "12.1.4.3",
        "text": "Kütle çekim potansiyel enerjisini açıklar.",
        "fullOutcome": "12.1.4.3. Kütle çekim potansiyel enerjisini açıklar.",
        "counts": {
          "F": 1,
          "J": 1
        }
      },
      {
        "theme": "ÇEMBERSEL HAREKET",
        "topic": "KEPLER KANUNLARI",
        "code": "12.1.5.1",
        "text": "Kepler Kanun'larını açıklar.",
        "fullOutcome": "12.1.5.1. Kepler Kanun'larını açıklar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "BASİT HARMONİK HAREKET",
        "topic": "BASİT HARMONİK HAREKET",
        "code": "12.2.1.1",
        "text": "Basit harmonik hareketi düzgün çembersel hareketi kullanarak açıklar.",
        "fullOutcome": "12.2.1.1. Basit harmonik hareketi düzgün çembersel hareketi kullanarak açıklar.",
        "counts": {
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "BASİT HARMONİK HAREKET",
        "topic": "BASİT HARMONİK HAREKET",
        "code": "12.2.1.2",
        "text": "Basit harmonik harekette konumun zamana göre değişimini analiz eder.",
        "fullOutcome": "12.2.1.2. Basit harmonik harekette konumun zamana göre değişimini analiz eder.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "BASİT HARMONİK HAREKET",
        "topic": "BASİT HARMONİK HAREKET",
        "code": "12.2.1.3",
        "text": "Basit harmonik harekette kuvvet,hız ve ivmenin konuma göre değişimi ile ilgili hesaplamalar yapar.",
        "fullOutcome": "12.2.1.3. Basit harmonik harekette kuvvet,hız ve ivmenin konuma göre değişimi ile ilgili hesaplamalar yapar.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "BASİT HARMONİK HAREKET",
        "topic": "BASİT HARMONİK HAREKET",
        "code": "12.2.1.4",
        "text": "Yay sarkacı ve basit sarkaçta periyodun bağlı olduğu değişkenleri belirler.",
        "fullOutcome": "12.2.1.4. Yay sarkacı ve basit sarkaçta periyodun bağlı olduğu değişkenleri belirler.",
        "counts": {}
      },
      {
        "theme": "BASİT HARMONİK HAREKET",
        "topic": "BASİT HARMONİK HAREKET",
        "code": "12.2.1.5",
        "text": "Yay sarkacı ve basit sarkacın periyodu ile ilgili hesaplamalar yapar.",
        "fullOutcome": "12.2.1.5. Yay sarkacı ve basit sarkacın periyodu ile ilgili hesaplamalar yapar.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "DALGA MEKANİĞİ",
        "topic": "DALGALARDA KIRINIM, GİRİŞİM VE DOPPLEROLAYI",
        "code": "12.3.1.1",
        "text": "Su dalgalarında kırınım olayının dalga boyu ve yarık genişliği ile ilişkisini belirler.",
        "fullOutcome": "12.3.1.1. Su dalgalarında kırınım olayının dalga boyu ve yarık genişliği ile ilişkisini belirler.",
        "counts": {
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "DALGA MEKANİĞİ",
        "topic": "DALGALARDA KIRINIM, GİRİŞİM VE DOPPLEROLAYI",
        "code": "12.3.1.2",
        "text": "Su dalgalarında girişim olayını açıklar.",
        "fullOutcome": "12.3.1.2. Su dalgalarında girişim olayını açıklar.",
        "counts": {
          "H": 1,
          "J": 1
        }
      }
    ]
  },
  {
    "id": "kimya-9",
    "sourceFile": "/assets/aistudio/kimya4_9d645b2e.xml",
    "subject": "Kimya",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 8",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "Q",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 9",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "Kimya Hayattır",
        "topic": "",
        "code": "KİM.9.1.1",
        "text": "Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
        "fullOutcome": "KİM.9.1.1. Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Kimya Hayattır",
        "topic": "",
        "code": "KİM.9.1.2",
        "text": "Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan problemleri çözebilme",
        "fullOutcome": "KİM.9.1.2. Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan problemleri çözebilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.3",
        "text": "Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin bilimsel çıkarım yapabilme",
        "fullOutcome": "KİM.9.1.3. Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin bilimsel çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 2,
          "I": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.4",
        "text": "Atom orbitallerinin bağıl enerjilerine ilişkin bilimsel veriye dayalı tahminde bulunabilme",
        "fullOutcome": "KİM.9.1.4. Atom orbitallerinin bağıl enerjilerine ilişkin bilimsel veriye dayalı tahminde bulunabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "J": 1,
          "L": 1,
          "Q": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.5",
        "text": "Elektronların atom orbitallerine yerleşimine ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.9.1.5. Elektronların atom orbitallerine yerleşimine ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "H": 1,
          "I": 1,
          "L": 1,
          "N": 1,
          "O": 1,
          "P": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.6",
        "text": "Elementlerin periyodik tablodaki yerlerine ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.9.1.6. Elementlerin periyodik tablodaki yerlerine ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.7",
        "text": "İyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.9.1.7. İyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "Atomdan Periyodik Tabloya",
        "topic": "",
        "code": "KİM.9.1.8",
        "text": "Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
        "fullOutcome": "KİM.9.1.8. Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 2,
          "N": 2,
          "O": 1,
          "P": 2,
          "Q": 2
        }
      },
      {
        "theme": "Etkileşimler",
        "topic": "",
        "code": "KİM.9.2.1",
        "text": "Metalik bağın oluşumuna yönelik tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.9.2.1. Metalik bağın oluşumuna yönelik tümevarımsal akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "Etkileşimler",
        "topic": "",
        "code": "KİM.9.2.2",
        "text": "İyonik bağın oluşumunu bilimsel gözleme dayalı tahmin edebilme",
        "fullOutcome": "KİM.9.2.2. İyonik bağın oluşumunu bilimsel gözleme dayalı tahmin edebilme",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2,
          "P": 2,
          "Q": 2
        }
      },
      {
        "theme": "Etkileşimler",
        "topic": "",
        "code": "KİM.9.2.3",
        "text": "Kovalent bağ oluşumunu bilimsel gözleme dayalı tahmin edebilme",
        "fullOutcome": "KİM.9.2.3. Kovalent bağ oluşumunu bilimsel gözleme dayalı tahmin edebilme",
        "counts": {
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      }
    ]
  },
  {
    "id": "kimya-10",
    "sourceFile": "/assets/aistudio/kimya4_9d645b2e.xml",
    "subject": "Kimya",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "Q",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 8",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.1",
        "text": "Kimyasal değişimlere ilişkin kanıtları belirlemeye yönelik bilimsel gözlem yapabilme",
        "fullOutcome": "KİM.10.1.1. Kimyasal değişimlere ilişkin kanıtları belirlemeye yönelik bilimsel gözlem yapabilme",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.2",
        "text": "Kimyasal tepkimelerin oluşumunu açıklamak için bilimsel model oluşturabilme",
        "fullOutcome": "KİM.10.1.2. Kimyasal tepkimelerin oluşumunu açıklamak için bilimsel model oluşturabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.3",
        "text": "Kimyasal tepkime türlerinin oluşum sürecine ilişkin bilimsel gözlem yapabilme",
        "fullOutcome": "KİM.10.1.3. Kimyasal tepkime türlerinin oluşum sürecine ilişkin bilimsel gözlem yapabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "I": 2,
          "K": 1,
          "N": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.4",
        "text": "Mol kavramına ilişkin operasyonel tanımlama yapabilme",
        "fullOutcome": "KİM.10.1.4. Mol kavramına ilişkin operasyonel tanımlama yapabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 2,
          "J": 1,
          "M": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.5",
        "text": "Saf maddelerin ölçülebilir özellikleri arasındaki ilişkileri belirlemeye yönelik tümdengelimsel akıl yürütebilme",
        "fullOutcome": "KİM.10.1.5. Saf maddelerin ölçülebilir özellikleri arasındaki ilişkileri belirlemeye yönelik tümdengelimsel akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "O": 1,
          "Q": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.6",
        "text": "Kimyasal tepkime denklemlerinde tanecik sayılarının tutarsızlıklarına ilişkin çelişkiyi giderebilme",
        "fullOutcome": "KİM.10.1.6. Kimyasal tepkime denklemlerinde tanecik sayılarının tutarsızlıklarına ilişkin çelişkiyi giderebilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimeler",
        "topic": "",
        "code": "KİM.10.1.7",
        "text": "Kimyasal tepkimelerde stokiyometrik ilişkilere yönelik tümdengelimsel akıl yürütebilme",
        "fullOutcome": "KİM.10.1.7. Kimyasal tepkimelerde stokiyometrik ilişkilere yönelik tümdengelimsel akıl yürütebilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 2,
          "M": 1,
          "N": 2,
          "O": 1,
          "P": 2,
          "Q": 2
        }
      },
      {
        "theme": "Gazlar",
        "topic": "",
        "code": "KİM.10.1.8",
        "text": "Gazların özelliklerine ilişkin bilimsel gözlem yapabilme",
        "fullOutcome": "KİM.10.1.8. Gazların özelliklerine ilişkin bilimsel gözlem yapabilme",
        "counts": {
          "J": 2,
          "K": 2,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 2,
          "P": 2,
          "Q": 2
        }
      },
      {
        "theme": "Gazlar",
        "topic": "",
        "code": "KİM.10.1.9",
        "text": "Gazların özellikleri arasındaki ilişkileri bilimsel sorgulayabilme",
        "fullOutcome": "KİM.10.1.9. Gazların özellikleri arasındaki ilişkileri bilimsel sorgulayabilme",
        "counts": {
          "K": 1,
          "L": 2,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 2,
          "Q": 2
        }
      },
      {
        "theme": "Gazlar",
        "topic": "",
        "code": "KİM.10.1.10",
        "text": "İdeal gaz denklemini tümevarımsal akıl yürütme yoluyla oluşturabilme",
        "fullOutcome": "KİM.10.1.10. İdeal gaz denklemini tümevarımsal akıl yürütme yoluyla oluşturabilme",
        "counts": {
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1
        }
      }
    ]
  },
  {
    "id": "kimya-11",
    "sourceFile": "/assets/aistudio/kimya4_9d645b2e.xml",
    "subject": "Kimya",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "Enerji",
        "topic": "",
        "code": "KİM.11.1.1",
        "text": "Fiziksel ve kimyasal olaylardaki enerji değişimine ilişkin deney yapabilme",
        "fullOutcome": "KİM.11.1.1. Fiziksel ve kimyasal olaylardaki enerji değişimine ilişkin deney yapabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Enerji",
        "topic": "",
        "code": "KİM.11.1.2",
        "text": "Maddelerin enerji kaynağı olma potansiyeline ilişkin hipotezler oluşturabilme",
        "fullOutcome": "KİM.11.1.2. Maddelerin enerji kaynağı olma potansiyeline ilişkin hipotezler oluşturabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "O": 1
        }
      },
      {
        "theme": "Enerji",
        "topic": "",
        "code": "KİM.11.1.3",
        "text": "Bağ enerjileri temelinde tepkimelerin entalpi değişimine ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.11.1.3. Bağ enerjileri temelinde tepkimelerin entalpi değişimine ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "Enerji",
        "topic": "",
        "code": "KİM.11.1.4",
        "text": "Kimyasal tepkimelerin standart tepkime entalpilerini standart oluşum entalpi verilerini kullanarak tahmin edebilme",
        "fullOutcome": "KİM.11.1.4. Kimyasal tepkimelerin standart tepkime entalpilerini standart oluşum entalpi verilerini kullanarak tahmin edebilme",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 3,
          "G": 1,
          "H": 3,
          "I": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimelerde Hız",
        "topic": "",
        "code": "KİM.11.1.5",
        "text": "Kimyasal tepkimelerin gerçekleşme şartlarını açıklamak için kanıt kullanabilme",
        "fullOutcome": "KİM.11.1.5. Kimyasal tepkimelerin gerçekleşme şartlarını açıklamak için kanıt kullanabilme",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimelerde Hız",
        "topic": "",
        "code": "KİM.11.1.6",
        "text": "Tepkime hızının zamanla değişimini bilimsel veriye dayalı tahmin edebilme",
        "fullOutcome": "KİM.11.1.6. Tepkime hızının zamanla değişimini bilimsel veriye dayalı tahmin edebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Kimyasal Tepkimelerde Hız",
        "topic": "",
        "code": "KİM.11.1.7",
        "text": "Tepkime hızına etki eden faktörleri bilimsel sorgulayabilme",
        "fullOutcome": "KİM.11.1.7. Tepkime hızına etki eden faktörleri bilimsel sorgulayabilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 1,
          "N": 2,
          "O": 2
        }
      },
      {
        "theme": "Kimyasal Tepkimelerde Hız",
        "topic": "",
        "code": "KİM.11.1.8",
        "text": "Kimyasal tepkimelerin hız denklemini bilimsel veriye dayalı tahmin edebilme",
        "fullOutcome": "KİM.11.1.8. Kimyasal tepkimelerin hız denklemini bilimsel veriye dayalı tahmin edebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Denge",
        "topic": "",
        "code": "KİM.11.2.1",
        "text": "Tepkimelerin tersinir olabileceğine ilişkin bilimsel gözlem yapabilme",
        "fullOutcome": "KİM.11.2.1. Tepkimelerin tersinir olabileceğine ilişkin bilimsel gözlem yapabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1
        }
      },
      {
        "theme": "Denge",
        "topic": "",
        "code": "KİM.11.2.2",
        "text": "Tepkimelerdeki denge sürecine ilişkin bilimsel gözleme dayalı tahminde bulunabilme",
        "fullOutcome": "KİM.11.2.2. Tepkimelerdeki denge sürecine ilişkin bilimsel gözleme dayalı tahminde bulunabilme",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "O": 1
        }
      },
      {
        "theme": "Denge",
        "topic": "",
        "code": "KİM.11.2.3",
        "text": "Denge sabiti ifadesinin oluşturulmasına ilişkin tümevarımsal akıl yürütebilme",
        "fullOutcome": "KİM.11.2.3. Denge sabiti ifadesinin oluşturulmasına ilişkin tümevarımsal akıl yürütebilme",
        "counts": {
          "K": 1,
          "L": 1,
          "M": 1
        }
      }
    ]
  },
  {
    "id": "kimya-12",
    "sourceFile": "/assets/aistudio/kimya4_9d645b2e.xml",
    "subject": "Kimya",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "N",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 6",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "O",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 7",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "P",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 8",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "Q",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 9",
        "isNationalExam": false,
        "totalQuestions": 9
      },
      {
        "col": "R",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 10",
        "isNationalExam": false,
        "totalQuestions": 9
      }
    ],
    "outcomes": [
      {
        "theme": "12.1.1. İndirgenme-Yükseltgenme Tepkimelerinde Elektrik Akımı",
        "topic": "",
        "code": "12.1.1.1",
        "text": "Redoks tepkimelerini tanır.",
        "fullOutcome": "12.1.1.1. Redoks tepkimelerini tanır.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "12.1.1. İndirgenme-Yükseltgenme Tepkimelerinde Elektrik Akımı",
        "topic": "",
        "code": "12.1.1.2",
        "text": "Redoks tepkimeleriyle elektrik enerjisi arasındaki ilişkiyi açıklar.",
        "fullOutcome": "12.1.1.2. Redoks tepkimeleriyle elektrik enerjisi arasındaki ilişkiyi açıklar.",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "12.1.2. Elektrotlar ve Elektrokimyasal Hücreler",
        "topic": "",
        "code": "12.1.2.1",
        "text": "Elektrot ve elektrokimyasal hücre kavramlarını açıklar.",
        "fullOutcome": "12.1.2.1. Elektrot ve elektrokimyasal hücre kavramlarını açıklar.",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 1,
          "H": 3,
          "L": 1
        }
      },
      {
        "theme": "12.1.3. Elektrot Potansiyelleri",
        "topic": "",
        "code": "12.1.3.1",
        "text": "Redoks tepkimelerinin istemliliğini standart elektrot potansiyellerini kullanarak açıklar.",
        "fullOutcome": "12.1.3.1. Redoks tepkimelerinin istemliliğini standart elektrot potansiyellerini kullanarak açıklar.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 2,
          "M": 1,
          "P": 1,
          "Q": 1
        }
      },
      {
        "theme": "12.1.4. Kimyasallardan Elektrik Üretimi",
        "topic": "",
        "code": "12.1.4.1",
        "text": "Standart koşullarda galvanik pillerin voltajını ve kullanım ömrünü örnekler vererek açıklar.",
        "fullOutcome": "12.1.4.1. Standart koşullarda galvanik pillerin voltajını ve kullanım ömrünü örnekler vererek açıklar.",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "J": 1,
          "N": 1,
          "P": 1,
          "R": 1
        }
      },
      {
        "theme": "12.1.4. Kimyasallardan Elektrik Üretimi",
        "topic": "",
        "code": "12.1.4.2",
        "text": "Lityum iyon pillerinin önemini kullanım alanlarıyla ilişkilendirerek açıklar.",
        "fullOutcome": "12.1.4.2. Lityum iyon pillerinin önemini kullanım alanlarıyla ilişkilendirerek açıklar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.1.5. Elektroliz",
        "topic": "",
        "code": "12.1.5.1",
        "text": "Elektroliz olayını elektrik akımı, zaman ve değişime uğrayan madde kütlesi açısından açıklar.",
        "fullOutcome": "12.1.5.1. Elektroliz olayını elektrik akımı, zaman ve değişime uğrayan madde kütlesi açısından açıklar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.1.5. Elektroliz",
        "topic": "",
        "code": "12.1.5.2",
        "text": "Kimyasal maddelerin elektroliz yöntemiyle elde ediliş sürecini açıklar.",
        "fullOutcome": "12.1.5.2. Kimyasal maddelerin elektroliz yöntemiyle elde ediliş sürecini açıklar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.1.6. Korozyon",
        "topic": "",
        "code": "12.1.6.1",
        "text": "Korozyon önleme yöntemlerinin elektrokimyasal temellerini açıklar.",
        "fullOutcome": "12.1.6.1. Korozyon önleme yöntemlerinin elektrokimyasal temellerini açıklar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.2.1. Anorganik ve Organik Bileşikler",
        "topic": "",
        "code": "12.2.1.1",
        "text": "Anorganik ve organik bileşikleri ayırt eder.",
        "fullOutcome": "12.2.1.1. Anorganik ve organik bileşikleri ayırt eder.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.2.2. Basit Formül ve Molekül Formülü",
        "topic": "",
        "code": "12.2.2.1",
        "text": "Organik bileşiklerin basit ve molekül formüllerinin bulunması ile ilgili hesaplamalar yapar.",
        "fullOutcome": "12.2.2.1. Organik bileşiklerin basit ve molekül formüllerinin bulunması ile ilgili hesaplamalar yapar.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1,
          "N": 1,
          "O": 1,
          "P": 1,
          "Q": 1,
          "R": 1
        }
      },
      {
        "theme": "12.2.3. Doğada Karbon",
        "topic": "",
        "code": "12.2.3.1",
        "text": "Karbon allotroplarının özelliklerini yapılarıyla ilişkilendirir.",
        "fullOutcome": "12.2.3.1. Karbon allotroplarının özelliklerini yapılarıyla ilişkilendirir.",
        "counts": {
          "K": 1,
          "M": 1,
          "N": 1,
          "O": 2,
          "Q": 2,
          "R": 2
        }
      }
    ]
  },
  {
    "id": "biyoloji-9",
    "sourceFile": "/assets/aistudio/biyoloji3_4_90dd09a7.xml",
    "subject": "Biyoloji",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "Biyolojinin Önemi, Biyoloji Biliminin Gelişimindeki Dönüm Noktaları",
        "topic": "",
        "code": "BİY.9.1.1",
        "text": "Biyolojideki dönüm noktalarının insan hayatına katkılarını sorgulayabilme",
        "fullOutcome": "BİY.9.1.1. Biyolojideki dönüm noktalarının insan hayatına katkılarını sorgulayabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 3,
          "H": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Bilimin Doğası, Bilimsel Araştırma Süreçleri",
        "topic": "",
        "code": "BİY.9.1.2",
        "text": "Bilimsel araştırma süreçlerinde bilimin doğasını yorumlayabilme",
        "fullOutcome": "BİY.9.1.2. Bilimsel araştırma süreçlerinde bilimin doğasını yorumlayabilme",
        "counts": {
          "D": 3,
          "E": 3,
          "F": 2,
          "G": 3,
          "H": 1,
          "I": 2,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Bilim Etiği",
        "topic": "",
        "code": "BİY.9.1.3",
        "text": "Bilimsel araştırmaların bilim etiğine uygunluğu ile ilgili bilgi toplayabilme",
        "fullOutcome": "BİY.9.1.3. Bilimsel araştırmaların bilim etiğine uygunluğu ile ilgili bilgi toplayabilme",
        "counts": {}
      },
      {
        "theme": "Hücresel Yapı, Organizasyon, Beslenme, Enerji Üretimi ve Tüketimi, Boşaltım, Büyüme ve Gelişme, Metabolizma, Uyarılara Tepki, Homeostazi, Üreme, Varyasyon ve Adaptasyon",
        "topic": "",
        "code": "BİY.9.1.4",
        "text": "Çevresindeki canlıların özelliklerini bilimsel olarak gözlemleyebilme",
        "fullOutcome": "BİY.9.1.4. Çevresindeki canlıların özelliklerini bilimsel olarak gözlemleyebilme",
        "counts": {
          "E": 2,
          "F": 2,
          "H": 1,
          "I": 3,
          "J": 2,
          "K": 3
        }
      },
      {
        "theme": "İnorganik Moleküller (Su, Mineraller)",
        "topic": "",
        "code": "BİY.9.1.5",
        "text": "İnorganik moleküllerin önemi hakkında bilimsel çıkarım yapabilme",
        "fullOutcome": "BİY.9.1.5. İnorganik moleküllerin önemi hakkında bilimsel çıkarım yapabilme",
        "counts": {
          "H": 3,
          "I": 2,
          "J": 3,
          "K": 2
        }
      },
      {
        "theme": "Organik Moleküller (Karbohidratlar [Monosakkaritler (Riboz, Deoksiriboz, Fruktoz, Glikoz, Galaktoz)], Disakkaritler (Sükroz, Maltoz, Laktoz), Polisakkaritler (Glikojen, Nişasta, Selüloz, Kitin), Lipitler (Yağ Asitleri, Trigliseritler, Fosfolipitler, Steroitler), Proteinler (Amino Asitlerin Yapısı, Enzimler (Basit ve Bileşik Enzimler, Aktivasyon Enerjisi, Enzim-Substrat İlişkisi, Enzimatik Reaksiyonlara Etki Eden Faktörler), Nükleik Asitler (DNA ve RNA’nın Yapısı), Vitaminler (Yağda Çözünen Vitaminler, Suda Çözünen Vitaminler)",
        "topic": "",
        "code": "BİY.9.1.6",
        "text": "Organik moleküllerin yapısı ve çeşitleriyle ilgili bilgi toplayabilme",
        "fullOutcome": "BİY.9.1.6. Organik moleküllerin yapısı ve çeşitleriyle ilgili bilgi toplayabilme",
        "counts": {}
      }
    ]
  },
  {
    "id": "biyoloji-10",
    "sourceFile": "/assets/aistudio/biyoloji3_4_90dd09a7.xml",
    "subject": "Biyoloji",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "Canlılık İçin Enerjinin Önemi (ATP’nin Yapısı ve Enerji Aktarımında ATP’nin Rolü)",
        "topic": "",
        "code": "BİY.10.1.1",
        "text": "Canlıların yaşamına devam edebilmesi için enerjinin gerekliliğini sorgulayabilme",
        "fullOutcome": "BİY.10.1.1. Canlıların yaşamına devam edebilmesi için enerjinin gerekliliğini sorgulayabilme",
        "counts": {
          "E": 2,
          "F": 3,
          "G": 2,
          "H": 3,
          "J": 1
        }
      },
      {
        "theme": "Işık Enerjisi Kullanılarak Besin Sentezi: Fotosentez (Işığın Kullanıldığı Tepkimeler, Işığın Kullanılmadığı Tepkimeler, Fotosentez Hızına Etki Eden Çevresel Faktörler)",
        "topic": "",
        "code": "BİY.10.1.2",
        "text": "Fotosentez reaksiyonlarıyla ilgili bilimsel model oluşturabilme",
        "fullOutcome": "BİY.10.1.2. Fotosentez reaksiyonlarıyla ilgili bilimsel model oluşturabilme",
        "counts": {}
      },
      {
        "theme": "Işık Enerjisi Kullanılarak Besin Sentezi: Fotosentez (Işığın Kullanıldığı Tepkimeler, Işığın Kullanılmadığı Tepkimeler, Fotosentez Hızına Etki Eden Çevresel Faktörler)",
        "topic": "",
        "code": "BİY.10.1.3",
        "text": "Fotosentezde kullanılan ve üretilen maddelerle ilgili deney yapabilme",
        "fullOutcome": "BİY.10.1.3. Fotosentezde kullanılan ve üretilen maddelerle ilgili deney yapabilme",
        "counts": {
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 2,
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "Işık Enerjisi Kullanılmadan Besin Sentezi: Kemosentez",
        "topic": "",
        "code": "BİY.10.1.4",
        "text": "Kemosentez hakkında bilgi toplayabilme",
        "fullOutcome": "BİY.10.1.4. Kemosentez hakkında bilgi toplayabilme",
        "counts": {}
      },
      {
        "theme": "Sindirim (Hücre İçi Sindirim ve Hücre Dışı Sindirim), Canlılarda Sindirim Yapıları",
        "topic": "",
        "code": "BİY.10.1.5",
        "text": "Canlılarda sindirim çeşitlerini ve yapılarını sınıflandırabilme",
        "fullOutcome": "BİY.10.1.5. Canlılarda sindirim çeşitlerini ve yapılarını sınıflandırabilme",
        "counts": {
          "E": 2,
          "F": 2,
          "G": 3,
          "I": 1,
          "J": 2,
          "K": 2
        }
      },
      {
        "theme": "İnsanda Sindirim, Emilim ve Taşınma",
        "topic": "",
        "code": "BİY.10.1.6",
        "text": "İnsanda enerji eldesi için sindirim, emilim ve taşıma süreçlerinin gerekliliği ile ilgili bilimsel çıkarım yapabilme",
        "fullOutcome": "BİY.10.1.6. İnsanda enerji eldesi için sindirim, emilim ve taşıma süreçlerinin gerekliliği ile ilgili bilimsel çıkarım yapabilme",
        "counts": {
          "I": 2,
          "J": 1,
          "K": 2
        }
      },
      {
        "theme": "Hücresel Solunum (Glikoliz, Sitrik Asit Döngüsü, Elektron Taşıma Sistemi)",
        "topic": "",
        "code": "BİY.10.1.7",
        "text": "Hücresel solunum reaksiyonlarıyla ilgili bilimsel model oluşturabilme",
        "fullOutcome": "BİY.10.1.7. Hücresel solunum reaksiyonlarıyla ilgili bilimsel model oluşturabilme",
        "counts": {}
      },
      {
        "theme": "Besinlerin Solunuma Katılma Yolları",
        "topic": "",
        "code": "BİY.10.1.8",
        "text": "Farklı besin gruplarından enerji eldesi süreçlerini karşılaştırabilme",
        "fullOutcome": "BİY.10.1.8. Farklı besin gruplarından enerji eldesi süreçlerini karşılaştırabilme",
        "counts": {
          "I": 2,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "Fermantasyon (Laktik Asit Fermantasyonu, Etil Alkol Fermantasyonu)",
        "topic": "",
        "code": "BİY.10.1.9",
        "text": "Fermantasyon ile ilgili deney yapabilme",
        "fullOutcome": "BİY.10.1.9. Fermantasyon ile ilgili deney yapabilme",
        "counts": {
          "J": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "biyoloji-11",
    "sourceFile": "/assets/aistudio/biyoloji3_4_90dd09a7.xml",
    "subject": "Biyoloji",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "M",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "Farklı Canlıların Uyaranlara Karşı Oluşturduğu Tepkiler",
        "topic": "",
        "code": "BİY.11.1.1",
        "text": "Farklı canlıların uyaranlara karşı oluşturduğu tepki mekanizmaları ile ilgili tümevarımsal akıl yürütebilme",
        "fullOutcome": "BİY.11.1.1. Farklı canlıların uyaranlara karşı oluşturduğu tepki mekanizmaları ile ilgili tümevarımsal akıl yürütebilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1
        }
      },
      {
        "theme": "Bitkisel Hormonlar Bitkilerde Tepki Mekanizmaları (Tropizma, Nasti)",
        "topic": "",
        "code": "BİY.11.1.2",
        "text": "Bitkisel hormonların etkileri hakkında akıl yürütebilme",
        "fullOutcome": "BİY.11.1.2. Bitkisel hormonların etkileri hakkında akıl yürütebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 1,
          "H": 2,
          "M": 1
        }
      },
      {
        "theme": "Bitkisel Hormonlar Bitkilerde Tepki Mekanizmaları (Tropizma, Nasti)",
        "topic": "",
        "code": "BİY.11.1.3",
        "text": "Bitkilerdeki tepki mekanizmalarını sınıflandırabilme",
        "fullOutcome": "BİY.11.1.3. Bitkilerdeki tepki mekanizmalarını sınıflandırabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "Bitkisel Hormonlar Bitkilerde Tepki Mekanizmaları (Tropizma, Nasti)",
        "topic": "",
        "code": "BİY.11.1.4",
        "text": "Bitkilerde yönelme hareketlerini gözlemleyebileceği deney yapabilme",
        "fullOutcome": "BİY.11.1.4. Bitkilerde yönelme hareketlerini gözlemleyebileceği deney yapabilme",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "Uyartıların Alınması (Reseptörler, Uyaran Çeşitleri), Nöronların Yapısı, Nöronlarda Sinyal İletimi ve Sinaps, Duyu Organları",
        "topic": "",
        "code": "BİY.11.1.5",
        "text": "Duyu reseptörlerini ve duyu reseptörlerinin bulunduğu duyu organlarını sınıflandırabilme",
        "fullOutcome": "BİY.11.1.5. Duyu reseptörlerini ve duyu reseptörlerinin bulunduğu duyu organlarını sınıflandırabilme",
        "counts": {
          "F": 1,
          "G": 2,
          "H": 2,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Uyartıların Alınması (Reseptörler, Uyaran Çeşitleri), Nöronların Yapısı, Nöronlarda Sinyal İletimi ve Sinaps, Duyu Organları",
        "topic": "",
        "code": "BİY.11.1.6",
        "text": "Hayvanlardaki sinir sistemi farklılıkları ile ilgili analojik akıl yürütebilme",
        "fullOutcome": "BİY.11.1.6. Hayvanlardaki sinir sistemi farklılıkları ile ilgili analojik akıl yürütebilme",
        "counts": {
          "I": 1,
          "J": 2,
          "K": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "İnsan Sinir Sisteminin Yapısı",
        "topic": "",
        "code": "BİY.11.1.7",
        "text": "İnsanda sinir sistemi yapısını çözümleyebilme",
        "fullOutcome": "BİY.11.1.7. İnsanda sinir sistemi yapısını çözümleyebilme",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 2,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Refleksler",
        "topic": "",
        "code": "BİY.11.1.8",
        "text": "Refleks olayını yorumlayabilme",
        "fullOutcome": "BİY.11.1.8. Refleks olayını yorumlayabilme",
        "counts": {
          "I": 1,
          "J": 1,
          "L": 1,
          "M": 1
        }
      },
      {
        "theme": "Kemik, Eklem ve Kasların Hareketteki Rolü, Kemik ve Kasların Birlikte Çalışma İlişkisi",
        "topic": "",
        "code": "BİY.11.1.9",
        "text": "Harekete dayalı tepkinin oluşmasında iskelet, kas ve eklemlerin eş güdümlü çalışmasıyla ilgili eleştirel düşünebilme",
        "fullOutcome": "BİY.11.1.9. Harekete dayalı tepkinin oluşmasında iskelet, kas ve eklemlerin eş güdümlü çalışmasıyla ilgili eleştirel düşünebilme",
        "counts": {
          "I": 2,
          "J": 2,
          "K": 1,
          "L": 2,
          "M": 2
        }
      },
      {
        "theme": "Kaslarda Kasılmanın Kontrolü, Kasların Kasılma Mekanizması",
        "topic": "",
        "code": "BİY.11.1.10",
        "text": "İskelet kaslarının kasılma ve gevşeme mekanizması ile ilgili bilimsel model oluşturabilme",
        "fullOutcome": "BİY.11.1.10. İskelet kaslarının kasılma ve gevşeme mekanizması ile ilgili bilimsel model oluşturabilme",
        "counts": {}
      }
    ]
  },
  {
    "id": "biyoloji-12",
    "sourceFile": "/assets/aistudio/biyoloji3_4_90dd09a7.xml",
    "subject": "Biyoloji",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Nükleik Asitlerin Keşfi ve Önemi",
        "code": "12.1.1.1",
        "text": "Nükleik asitlerin keşif sürecini özetler.",
        "fullOutcome": "12.1.1.1. Nükleik asitlerin keşif sürecini özetler.",
        "counts": {
          "D": 1,
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Nükleik Asitlerin Keşfi ve Önemi",
        "code": "12.1.1.2",
        "text": "Nükleik asitlerin çeşitlerini ve görevlerini açıklar.",
        "fullOutcome": "12.1.1.2. Nükleik asitlerin çeşitlerini ve görevlerini açıklar.",
        "counts": {
          "D": 3,
          "E": 2,
          "F": 3,
          "G": 3,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Nükleik Asitlerin Keşfi ve Önemi",
        "code": "12.1.1.3",
        "text": "Hücredeki genetik materyalin organizasyonunda parça bütün ilişkisi kurar.",
        "fullOutcome": "12.1.1.3. Hücredeki genetik materyalin organizasyonunda parça bütün ilişkisi kurar.",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Nükleik Asitlerin Keşfi ve Önemi",
        "code": "12.1.1.4",
        "text": "DNA' nın kendini eşlemesini açıklar.",
        "fullOutcome": "12.1.1.4. DNA' nın kendini eşlemesini açıklar.",
        "counts": {
          "E": 2,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Genetik şifre ve Protein sentezi",
        "code": "12.1.2.1",
        "text": "Protein sentezinin mekanizmasını açıklar.",
        "fullOutcome": "12.1.2.1. Protein sentezinin mekanizmasını açıklar.",
        "counts": {
          "H": 2,
          "I": 1,
          "J": 2,
          "K": 2,
          "L": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Genetik şifre ve Protein sentezi",
        "code": "12.1.2.2",
        "text": "Genetik mühendisliği ve biyoteknoloji kavramlarını açıklar.",
        "fullOutcome": "12.1.2.2. Genetik mühendisliği ve biyoteknoloji kavramlarını açıklar.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Genetik şifre ve Protein sentezi",
        "code": "12.1.2.3",
        "text": "Genetik mühendisliği ve biyoteknoloji uygulamalarını açıklar.",
        "fullOutcome": "12.1.2.3. Genetik mühendisliği ve biyoteknoloji uygulamalarını açıklar.",
        "counts": {
          "H": 3,
          "I": 3,
          "J": 2,
          "K": 2,
          "L": 2
        }
      },
      {
        "theme": "GENDEN PROTEİNE",
        "topic": "Genetik şifre ve Protein sentezi",
        "code": "12.1.2.4",
        "text": "Genetik mühendisliği ve biyoteknoloji uygulamalarının insan hayatına etkisini değerlendirir.",
        "fullOutcome": "12.1.2.4. Genetik mühendisliği ve biyoteknoloji uygulamalarının insan hayatına etkisini değerlendirir.",
        "counts": {
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "CANLILARDA ENERJİ DÖNÜŞÜMLERi",
        "topic": "Canlılık ve Enerji",
        "code": "12.2.1.1",
        "text": "Canlılığın devamı için enerjinin gerekliliğini açıklar.",
        "fullOutcome": "12.2.1.1. Canlılığın devamı için enerjinin gerekliliğini açıklar.",
        "counts": {
          "I": 1,
          "L": 2
        }
      }
    ]
  },
  {
    "id": "ingilizce-5",
    "sourceFile": "/assets/aistudio/ingilizce_orta2_03673bef.xml",
    "subject": "İngilizce",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "ENG.5.1.R2. Students can bring information about the current content on “school life with people, places and rules at school; school clubs; countries; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.5.1.R2",
        "text": "Students can bring information about the current content on “school life with people, places and rules at school; school clubs; countries; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.5.1.R2. Students can bring information about the current content on “school life with people, places and rules at school; school clubs; countries; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.1.R3. Students can make meaning of / derive meaning from the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” by reading it carefully.",
        "topic": "",
        "code": "ENG.5.1.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” by reading it carefully.",
        "fullOutcome": "ENG.5.1.R3. Students can make meaning of / derive meaning from the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” by reading it carefully.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.5.1.V1. Students can select and use the target vocabulary of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.1.V1",
        "text": "Students can select and use the target vocabulary of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.1.V1. Students can select and use the target vocabulary of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.1.G1. Students can select and use the target grammatical elements of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.1.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.1.G1. Students can select and use the target grammatical elements of the current content about “school life with people, places and rules at school; school clubs; countries; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "ENG.5.1.W3. Students can organise a content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations” based on the model/example provided.",
        "topic": "",
        "code": "ENG.5.1.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations” based on the model/example provided.",
        "fullOutcome": "ENG.5.1.W3. Students can organise a content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations” based on the model/example provided.",
        "counts": {
          "C": 1,
          "E": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.5.1.W4. Students can individually construct/form content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations”.",
        "topic": "",
        "code": "ENG.5.1.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations”.",
        "fullOutcome": "ENG.5.1.W4. Students can individually construct/form content for the assigned writing task on the current content “school life with people, places and rules at school; school clubs; countries; national days and celebrations”.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "ENG.5.2.R2. Students can bring information about the current content on “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.5.2.R2",
        "text": "Students can bring information about the current content on “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.5.2.R2. Students can bring information about the current content on “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.2.R3. Students can make meaning of / derive meaning from the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” by reading it carefully.",
        "topic": "",
        "code": "ENG.5.2.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” by reading it carefully.",
        "fullOutcome": "ENG.5.2.R3. Students can make meaning of / derive meaning from the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” by reading it carefully.",
        "counts": {
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.2.V1. Students can select and use the target vocabulary of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.2.V1",
        "text": "Students can select and use the target vocabulary of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.2.V1. Students can select and use the target vocabulary of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.2.G1. Students can select and use the target grammatical elements of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.2.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.2.G1. Students can select and use the target grammatical elements of the current content about “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.5.2.W3. Students can organise a content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” based on the model/example provided.",
        "topic": "",
        "code": "ENG.5.2.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” based on the model/example provided.",
        "fullOutcome": "ENG.5.2.W3. Students can organise a content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time” based on the model/example provided.",
        "counts": {
          "I": 1
        }
      },
      {
        "theme": "ENG.5.2.W4. Students can individually construct/form content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time”.",
        "topic": "",
        "code": "ENG.5.2.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time”.",
        "fullOutcome": "ENG.5.2.W4. Students can individually construct/form content for the assigned writing task on the current content “classroom life with classroom rules and language; school subjects; timetables; classroom objects; days of the week; time”.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "ENG.5.3.R2. Students can bring information about the current content on “personal life with basic body parts and physical features; clothes; daily routines and activities” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.5.3.R2",
        "text": "Students can bring information about the current content on “personal life with basic body parts and physical features; clothes; daily routines and activities” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.5.3.R2. Students can bring information about the current content on “personal life with basic body parts and physical features; clothes; daily routines and activities” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.3.R3. Students can make meaning of / derive meaning from the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” by reading it carefully.",
        "topic": "",
        "code": "ENG.5.3.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” by reading it carefully.",
        "fullOutcome": "ENG.5.3.R3. Students can make meaning of / derive meaning from the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” by reading it carefully.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.5.3.V1. Students can select and use the target vocabulary of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.3.V1",
        "text": "Students can select and use the target vocabulary of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.3.V1. Students can select and use the target vocabulary of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.5.3.G1. Students can select and use the target grammatical elements of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.5.3.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.5.3.G1. Students can select and use the target grammatical elements of the current content about “personal life with basic body parts and physical features; clothes; daily routines and activities” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.5.3.W3. Students can organise a content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities” based on the model/example provided.",
        "topic": "",
        "code": "ENG.5.3.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities” based on the model/example provided.",
        "fullOutcome": "ENG.5.3.W3. Students can organise a content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities” based on the model/example provided.",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "ENG.5.3.W4. Students can individually construct/form content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities”.",
        "topic": "",
        "code": "ENG.5.3.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities”.",
        "fullOutcome": "ENG.5.3.W4. Students can individually construct/form content for the assigned writing task on the current content “personal life with basic body parts and physical features; clothes; daily routines and activities”.",
        "counts": {}
      }
    ]
  },
  {
    "id": "ingilizce-6",
    "sourceFile": "/assets/aistudio/ingilizce_orta2_03673bef.xml",
    "subject": "İngilizce",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "ENG.6.1.R2. Students can bring information about the current content on “school life with roles, and responsibilities at school; school routines; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.6.1.R2",
        "text": "Students can bring information about the current content on “school life with roles, and responsibilities at school; school routines; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.6.1.R2. Students can bring information about the current content on “school life with roles, and responsibilities at school; school routines; national days and celebrations” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.1.R3. Students can make meaning of / derive meaning from the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” by reading it carefully.",
        "topic": "",
        "code": "ENG.6.1.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” by reading it carefully.",
        "fullOutcome": "ENG.6.1.R3. Students can make meaning of / derive meaning from the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” by reading it carefully.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.6.1.V1. Students can select and use the target vocabulary of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.1.V1",
        "text": "Students can select and use the target vocabulary of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.1.V1. Students can select and use the target vocabulary of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.1.G1. Students can select and use the target grammatical elements of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.1.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.1.G1. Students can select and use the target grammatical elements of the current content about “school life with roles, and responsibilities at school; school routines; national days and celebrations” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "ENG.6.1.W3. Students can organise a content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations” based on the model/example provided.",
        "topic": "",
        "code": "ENG.6.1.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations” based on the model/example provided.",
        "fullOutcome": "ENG.6.1.W3. Students can organise a content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations” based on the model/example provided.",
        "counts": {
          "C": 1,
          "E": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.6.1.W4. Students can individually construct/form content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations”.",
        "topic": "",
        "code": "ENG.6.1.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations”.",
        "fullOutcome": "ENG.6.1.W4. Students can individually construct/form content for the assigned writing task on the current content “school life with roles, and responsibilities at school; school routines; national days and celebrations”.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "ENG.6.2.R2. Students can bring information about the current content on “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.6.2.R2",
        "text": "Students can bring information about the current content on “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.6.2.R2. Students can bring information about the current content on “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.2.R3. Students can make meaning of / derive meaning from the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” by reading it carefully.",
        "topic": "",
        "code": "ENG.6.2.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” by reading it carefully.",
        "fullOutcome": "ENG.6.2.R3. Students can make meaning of / derive meaning from the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” by reading it carefully.",
        "counts": {
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.2.V1. Students can select and use the target vocabulary of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.2.V1",
        "text": "Students can select and use the target vocabulary of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.2.V1. Students can select and use the target vocabulary of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100- 500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.2.G1. Students can select and use the target grammatical elements of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.2.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.2.G1. Students can select and use the target grammatical elements of the current content about “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.6.2.W3. Students can organise a content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” based on the model/example provided.",
        "topic": "",
        "code": "ENG.6.2.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” based on the model/example provided.",
        "fullOutcome": "ENG.6.2.W3. Students can organise a content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50” based on the model/example provided.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "ENG.6.2.W4. Students can individually construct/form content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50”.",
        "topic": "",
        "code": "ENG.6.2.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50”.",
        "fullOutcome": "ENG.6.2.W4. Students can individually construct/form content for the assigned writing task on the current content “classroom life with daily and study routines; learning activities in the classroom; cardinal numbers 100-500; ordinal numbers 1-50”.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "ENG.6.3.R2. Students can bring information about the current content on “personal life with body parts, physical appearance and clothes; personality and character” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "topic": "",
        "code": "ENG.6.3.R2",
        "text": "Students can bring information about the current content on “personal life with body parts, physical appearance and clothes; personality and character” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "fullOutcome": "ENG.6.3.R2. Students can bring information about the current content on “personal life with body parts, physical appearance and clothes; personality and character” through skimming (looking quickly at) the audio-visual elements and reading the content very quickly.",
        "counts": {
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.3.R3. Students can make meaning of / derive meaning from the current content about “personal life with body parts, physical appearance and clothes; personality and character” by reading it carefully.",
        "topic": "",
        "code": "ENG.6.3.R3",
        "text": "Students can make meaning of / derive meaning from the current content about “personal life with body parts, physical appearance and clothes; personality and character” by reading it carefully.",
        "fullOutcome": "ENG.6.3.R3. Students can make meaning of / derive meaning from the current content about “personal life with body parts, physical appearance and clothes; personality and character” by reading it carefully.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.6.3.V1. Students can select and use the target vocabulary of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.3.V1",
        "text": "Students can select and use the target vocabulary of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.3.V1. Students can select and use the target vocabulary of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.6.3.G1. Students can select and use the target grammatical elements of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "topic": "",
        "code": "ENG.6.3.G1",
        "text": "Students can select and use the target grammatical elements of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "fullOutcome": "ENG.6.3.G1. Students can select and use the target grammatical elements of the current content about “personal life with body parts, physical appearance and clothes; personality and character” accurately, authentically, spontaneously, and naturally and use it appropriately and effectively when communicating with others.",
        "counts": {
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.6.3.W3. Students can organise a content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” based on the model/example provided.",
        "topic": "",
        "code": "ENG.6.3.W3",
        "text": "Students can organise a content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” based on the model/example provided.",
        "fullOutcome": "ENG.6.3.W3. Students can organise a content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” based on the model/example provided.",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "ENG.6.3.W4. Students can individually construct/form content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” .",
        "topic": "",
        "code": "ENG.6.3.W4",
        "text": "Students can individually construct/form content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” .",
        "fullOutcome": "ENG.6.3.W4. Students can individually construct/form content for the assigned writing task on the current content “personal life with body parts, physical appearance and clothes; personality and character” .",
        "counts": {
          "I": 1
        }
      }
    ]
  },
  {
    "id": "ingilizce-7",
    "sourceFile": "/assets/aistudio/ingilizce_orta2_03673bef.xml",
    "subject": "İngilizce",
    "level": "Ortaokul",
    "grade": "7. Sınıf",
    "gradeNum": 7,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "E7.1.R1. Students will be able to understand a simple text about appearances, ersonalities, and comparisons including explanations and reasons.",
        "topic": "",
        "code": "E7.1.R1",
        "text": "Students will be able to understand a simple text about appearances, ersonalities, and comparisons including explanations and reasons.",
        "fullOutcome": "E7.1.R1. Students will be able to understand a simple text about appearances, ersonalities, and comparisons including explanations and reasons.",
        "counts": {
          "C": 1,
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 2,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.1.W1. Students will be able to write simple pieces to compare people.",
        "topic": "",
        "code": "E7.1.W1",
        "text": "Students will be able to write simple pieces to compare people.",
        "fullOutcome": "E7.1.W1. Students will be able to write simple pieces to compare people.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "J": 1
        }
      },
      {
        "theme": "E7.2.R1. Students will be able to understand short and simple texts on sports.",
        "topic": "",
        "code": "E7.2.R1",
        "text": "Students will be able to understand short and simple texts on sports.",
        "fullOutcome": "E7.2.R1. Students will be able to understand short and simple texts on sports.",
        "counts": {
          "C": 1,
          "D": 2,
          "E": 2,
          "F": 2,
          "G": 3,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "E7.2.W1. Students will be able to write pieces about routines/daily activities by using frequency adverbs.",
        "topic": "",
        "code": "E7.2.W1",
        "text": "Students will be able to write pieces about routines/daily activities by using frequency adverbs.",
        "fullOutcome": "E7.2.W1. Students will be able to write pieces about routines/daily activities by using frequency adverbs.",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.3.R1. Students will be able to spot specific information about names and dates in past events in written texts.",
        "topic": "",
        "code": "E7.3.R1",
        "text": "Students will be able to spot specific information about names and dates in past events in written texts.",
        "fullOutcome": "E7.3.R1. Students will be able to spot specific information about names and dates in past events in written texts.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.3.W1. Students will be able to write a short and simple report about past events.",
        "topic": "",
        "code": "E7.3.W1",
        "text": "Students will be able to write a short and simple report about past events.",
        "fullOutcome": "E7.3.W1. Students will be able to write a short and simple report about past events.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.4.R1. Students will be able to understand past and present events in simple texts including explanations and reasons.",
        "topic": "",
        "code": "E7.4.R1",
        "text": "Students will be able to understand past and present events in simple texts including explanations and reasons.",
        "fullOutcome": "E7.4.R1. Students will be able to understand past and present events in simple texts including explanations and reasons.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.4.R2. Students will be able to spot the names of wild animals in simple texts.",
        "topic": "",
        "code": "E7.4.R2",
        "text": "Students will be able to spot the names of wild animals in simple texts.",
        "fullOutcome": "E7.4.R2. Students will be able to spot the names of wild animals in simple texts.",
        "counts": {
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.4.W1. Students will be able to write pieces describing wildlife.",
        "topic": "",
        "code": "E7.4.W1",
        "text": "Students will be able to write pieces describing wildlife.",
        "fullOutcome": "E7.4.W1. Students will be able to write pieces describing wildlife.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E7.5.R1. Students will be able to understand simple texts about daily routines and preferences.",
        "topic": "",
        "code": "E7.5.R1",
        "text": "Students will be able to understand simple texts about daily routines and preferences.",
        "fullOutcome": "E7.5.R1. Students will be able to understand simple texts about daily routines and preferences.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "E7.5.R2. Students will be able to understand simple texts about past events.",
        "topic": "",
        "code": "E7.5.R2",
        "text": "Students will be able to understand simple texts about past events.",
        "fullOutcome": "E7.5.R2. Students will be able to understand simple texts about past events.",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "E7.5.W1. Students will be able to write pieces about daily routines and preferences.",
        "topic": "",
        "code": "E7.5.W1",
        "text": "Students will be able to write pieces about daily routines and preferences.",
        "fullOutcome": "E7.5.W1. Students will be able to write pieces about daily routines and preferences.",
        "counts": {}
      }
    ]
  },
  {
    "id": "ingilizce-8",
    "sourceFile": "/assets/aistudio/ingilizce_orta2_03673bef.xml",
    "subject": "İngilizce",
    "level": "Ortaokul",
    "grade": "8. Sınıf",
    "gradeNum": 8,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "E8.1.R1. Students will be able to understand short and simple texts about friendship.",
        "topic": "",
        "code": "E8.1.R1",
        "text": "Students will be able to understand short and simple texts about friendship.",
        "fullOutcome": "E8.1.R1. Students will be able to understand short and simple texts about friendship.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 2,
          "J": 1
        }
      },
      {
        "theme": "E8.1.R2. Students will be able to understand short and simple invitation letters, cards and e-mails.",
        "topic": "",
        "code": "E8.1.R2",
        "text": "Students will be able to understand short and simple invitation letters, cards and e-mails.",
        "fullOutcome": "E8.1.R2. Students will be able to understand short and simple invitation letters, cards and e-mails.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 1,
          "L": 1
        }
      },
      {
        "theme": "E8.1.W1. Students will be able to write a short and simple letter apologizing and giving reasons for not attending a party in response to an invitation.",
        "topic": "",
        "code": "E8.1.W1",
        "text": "Students will be able to write a short and simple letter apologizing and giving reasons for not attending a party in response to an invitation.",
        "fullOutcome": "E8.1.W1. Students will be able to write a short and simple letter apologizing and giving reasons for not attending a party in response to an invitation.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "E8.2.R1. Students will be able to understand short and simple texts about regular activities of teenagers.",
        "topic": "",
        "code": "E8.2.R1",
        "text": "Students will be able to understand short and simple texts about regular activities of teenagers.",
        "fullOutcome": "E8.2.R1. Students will be able to understand short and simple texts about regular activities of teenagers.",
        "counts": {
          "C": 2,
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "E8.2.W1. Students will be able to write a short and simple paragraph about regular activities of teenagers.",
        "topic": "",
        "code": "E8.2.W1",
        "text": "Students will be able to write a short and simple paragraph about regular activities of teenagers.",
        "fullOutcome": "E8.2.W1. Students will be able to write a short and simple paragraph about regular activities of teenagers.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "E8.3.R1. Students will be able to understand the overall meaning of short texts about a process.",
        "topic": "",
        "code": "E8.3.R1",
        "text": "Students will be able to understand the overall meaning of short texts about a process.",
        "fullOutcome": "E8.3.R1. Students will be able to understand the overall meaning of short texts about a process.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E8.3.R2. Students will be able to guess the meaning of unknown words from the text.",
        "topic": "",
        "code": "E8.3.R2",
        "text": "Students will be able to guess the meaning of unknown words from the text.",
        "fullOutcome": "E8.3.R2. Students will be able to guess the meaning of unknown words from the text.",
        "counts": {
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 2
        }
      },
      {
        "theme": "E8.3.W1. Students will be able to write a series of simple phrases and sentences by using linkers to describe a process.",
        "topic": "",
        "code": "E8.3.W1",
        "text": "Students will be able to write a series of simple phrases and sentences by using linkers to describe a process.",
        "fullOutcome": "E8.3.W1. Students will be able to write a series of simple phrases and sentences by using linkers to describe a process.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E8.4.R1. Students will be able to understand short and simple texts with related vocabulary.",
        "topic": "",
        "code": "E8.4.R1",
        "text": "Students will be able to understand short and simple texts with related vocabulary.",
        "fullOutcome": "E8.4.R1. Students will be able to understand short and simple texts with related vocabulary.",
        "counts": {
          "H": 1,
          "I": 2,
          "J": 1,
          "K": 2,
          "L": 1
        }
      },
      {
        "theme": "E8.4.W1. Students will be able to write short and simple conversations.",
        "topic": "",
        "code": "E8.4.W1",
        "text": "Students will be able to write short and simple conversations.",
        "fullOutcome": "E8.4.W1. Students will be able to write short and simple conversations.",
        "counts": {
          "I": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "E8.5.R1. Students will be able to identify main ideas in short and simple texts about internet habits.",
        "topic": "",
        "code": "E8.5.R1",
        "text": "Students will be able to identify main ideas in short and simple texts about internet habits.",
        "fullOutcome": "E8.5.R1. Students will be able to identify main ideas in short and simple texts about internet habits.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "E8.5.R2. Students will be able to find specific information about the Internet in various texts.",
        "topic": "",
        "code": "E8.5.R2",
        "text": "Students will be able to find specific information about the Internet in various texts.",
        "fullOutcome": "E8.5.R2. Students will be able to find specific information about the Internet in various texts.",
        "counts": {
          "L": 1
        }
      },
      {
        "theme": "E8.5.W1. Students will be able to write a basic paragraph to describe their internet habits.",
        "topic": "",
        "code": "E8.5.W1",
        "text": "Students will be able to write a basic paragraph to describe their internet habits.",
        "fullOutcome": "E8.5.W1. Students will be able to write a basic paragraph to describe their internet habits.",
        "counts": {}
      }
    ]
  },
  {
    "id": "ingilizce-9",
    "sourceFile": "/assets/aistudio/ingilizce_lise2_84e340f5.xml",
    "subject": "İngilizce",
    "level": "Lise",
    "grade": "9. Sınıf",
    "gradeNum": 9,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "ENG.8.1.R3.Students can make sense of and derive meaning from the current content on “school lifeand education with school events and celebrations (sports, music, drama); developing theenvironment; national days and celebrations”.",
        "topic": "",
        "code": "ENG.8.1.R3.Students",
        "text": "can make sense of and derive meaning from the current content on “school lifeand education with school events and celebrations (sports, music, drama); developing theenvironment; national days and celebrations”.",
        "fullOutcome": "ENG.8.1.R3.Students can make sense of and derive meaning from the current content on “school lifeand education with school events and celebrations (sports, music, drama); developing theenvironment; national days and celebrations”.",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "H": 1
        }
      },
      {
        "theme": "ENG.8.2.V1.Students can select and use target vocabulary efficiently, effectively, and accurately, based onthe current content about “classroom life and learning with preferences for different learningactivities; preferences for different learning technologies” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.8.2.V1.Students",
        "text": "can select and use target vocabulary efficiently, effectively, and accurately, based onthe current content about “classroom life and learning with preferences for different learningactivities; preferences for different learning technologies” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.8.2.V1.Students can select and use target vocabulary efficiently, effectively, and accurately, based onthe current content about “classroom life and learning with preferences for different learningactivities; preferences for different learning technologies” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "C": 1,
          "E": 1,
          "G": 1
        }
      },
      {
        "theme": "ENG.8.3.G1.Students can select and use target grammatical language items efficiently, effectively, andaccurately, based on the current content about “personal life and well-being with mobile phonesand their impact on health and social life; personal preferences for films and visual arts”, afterrecognising them in context and developing their conscious and inductive grammaring skillsthrough consciousness-raising and discovery.",
        "topic": "",
        "code": "ENG.8.3.G1.Students",
        "text": "can select and use target grammatical language items efficiently, effectively, andaccurately, based on the current content about “personal life and well-being with mobile phonesand their impact on health and social life; personal preferences for films and visual arts”, afterrecognising them in context and developing their conscious and inductive grammaring skillsthrough consciousness-raising and discovery.",
        "fullOutcome": "ENG.8.3.G1.Students can select and use target grammatical language items efficiently, effectively, andaccurately, based on the current content about “personal life and well-being with mobile phonesand their impact on health and social life; personal preferences for films and visual arts”, afterrecognising them in context and developing their conscious and inductive grammaring skillsthrough consciousness-raising and discovery.",
        "counts": {
          "C": 1,
          "F": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.8.4.R3.Students can make sense of and derive meaning from the current content on “family life andhome with relationships, problems and solutions in the family; different houses and livingstyles”.",
        "topic": "",
        "code": "ENG.8.4.R3.Students",
        "text": "can make sense of and derive meaning from the current content on “family life andhome with relationships, problems and solutions in the family; different houses and livingstyles”.",
        "fullOutcome": "ENG.8.4.R3.Students can make sense of and derive meaning from the current content on “family life andhome with relationships, problems and solutions in the family; different houses and livingstyles”.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "G": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.8.6.V1.Students can select and use target vocabulary efficiently, effectively, and accurately, basedon the current content about “life in the world and culture with different cooking styles andpreferences in the world; different food cultures in the world” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.8.6.V1.Students",
        "text": "can select and use target vocabulary efficiently, effectively, and accurately, basedon the current content about “life in the world and culture with different cooking styles andpreferences in the world; different food cultures in the world” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.8.6.V1.Students can select and use target vocabulary efficiently, effectively, and accurately, basedon the current content about “life in the world and culture with different cooking styles andpreferences in the world; different food cultures in the world” after recognising them in contextand developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.8.8.R3.Students can make sense of and derive meaning from the current content on “life in theuniverse and future with transport in the future; self-driving cars; ﬂying vehicles in the future”.",
        "topic": "",
        "code": "ENG.8.8.R3.Students",
        "text": "can make sense of and derive meaning from the current content on “life in theuniverse and future with transport in the future; self-driving cars; ﬂying vehicles in the future”.",
        "fullOutcome": "ENG.8.8.R3.Students can make sense of and derive meaning from the current content on “life in theuniverse and future with transport in the future; self-driving cars; ﬂying vehicles in the future”.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "I": 1
        }
      },
      {
        "theme": "ENG.9.1.R2. Students can bring information together about the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.9.1.R2",
        "text": "Students can bring information together about the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.9.1.R2. Students can bring information together about the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' through skimming, scanning and detailed reading.",
        "counts": {
          "C": 1,
          "G": 1,
          "H": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.9.1.R3. Students can make sense of and derive meaning from the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "topic": "",
        "code": "ENG.9.1.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "fullOutcome": "ENG.9.1.R3. Students can make sense of and derive meaning from the current content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "counts": {
          "E": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.9.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.9.1.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.9.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "D": 1,
          "F": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.1.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals oftheir countries, and touristattractions; activities in their capitals and countries; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "topic": "",
        "code": "ENG.9.1.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals oftheir countries, and touristattractions; activities in their capitals and countries; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "fullOutcome": "ENG.9.1.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life with students of different countries, nationalities, and languages; capitals oftheir countries, and touristattractions; activities in their capitals and countries; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1
        }
      },
      {
        "theme": "ENG.9.1.W3. Students can construct new written content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.9.1.W3",
        "text": "Students can construct new written content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.9.1.W3. Students can construct new written content on ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations'' based on their understanding of the model(s) provided.",
        "counts": {
          "C": 1,
          "E": 1
        }
      },
      {
        "theme": "ENG.9.1.W4. Students can practise producing written content based on the current theme ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "topic": "",
        "code": "ENG.9.1.W4",
        "text": "Students can practise producing written content based on the current theme ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "fullOutcome": "ENG.9.1.W4. Students can practise producing written content based on the current theme ''school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations''.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "ENG.9.2.R2. Students can bring information together about the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.9.2.R2",
        "text": "Students can bring information together about the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.9.2.R2. Students can bring information together about the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' through skimming, scanning and detailed reading.",
        "counts": {
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.9.2.R3. Students can make sense of and derive meaning from the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities''.",
        "topic": "",
        "code": "ENG.9.2.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities''.",
        "fullOutcome": "ENG.9.2.R3. Students can make sense of and derive meaning from the current content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities''.",
        "counts": {
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.2.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.9.2.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.9.2.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "H": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.9.2.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "topic": "",
        "code": "ENG.9.2.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "fullOutcome": "ENG.9.2.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life with classmates, friendships, daily and study routines, habits, and activities'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.9.2.W3. Students can construct new written content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.9.2.W3",
        "text": "Students can construct new written content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.9.2.W3. Students can construct new written content on ''classroom life with classmates, friendships, daily and study routines, habits, and activities'' based on their understanding of the model(s) provided.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "ENG.9.2.W4. Students can practise producing written content based on the current theme ''classroom life with classmates, friendships, daily and study routines, habits, and activities''",
        "topic": "",
        "code": "ENG.9.2.W4",
        "text": "Students can practise producing written content based on the current theme ''classroom life with classmates, friendships, daily and study routines, habits, and activities''",
        "fullOutcome": "ENG.9.2.W4. Students can practise producing written content based on the current theme ''classroom life with classmates, friendships, daily and study routines, habits, and activities''",
        "counts": {
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.9.3.R2. Students can bring information together about the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.9.3.R2",
        "text": "Students can bring information together about the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.9.3.R2. Students can bring information together about the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' through skimming, scanning and detailed reading.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "ENG.9.3.R3. Students can make sense of and derive meaning from the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "topic": "",
        "code": "ENG.9.3.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "fullOutcome": "ENG.9.3.R3. Students can make sense of and derive meaning from the current content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "ENG.9.3.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.9.3.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.9.3.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "H": 1,
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.3.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "topic": "",
        "code": "ENG.9.3.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "fullOutcome": "ENG.9.3.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "counts": {
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.3.W3. Students can construct new written content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.9.3.W3",
        "text": "Students can construct new written content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.9.3.W3. Students can construct new written content on ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character'' based on their understanding of the model(s) provided.",
        "counts": {
          "H": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.3.W4. Students can practise producing written content based on the current theme ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "topic": "",
        "code": "ENG.9.3.W4",
        "text": "Students can practise producing written content based on the current theme ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "fullOutcome": "ENG.9.3.W4. Students can practise producing written content based on the current theme ''personal life with physical appearance in terms of physical features and personality in terms of personal traits and character''.",
        "counts": {
          "J": 1
        }
      }
    ]
  },
  {
    "id": "ingilizce-10",
    "sourceFile": "/assets/aistudio/ingilizce_lise2_84e340f5.xml",
    "subject": "İngilizce",
    "level": "Lise",
    "grade": "10. Sınıf",
    "gradeNum": 10,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 8
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "ENG.9.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about “school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations” after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.9.1.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about “school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations” after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.9.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about “school life with students of different countries, nationalities, and languages; capitals of their countries, and tourist attractions; activities in their capitals and countries; national days and celebrations” after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "C": 1,
          "E": 1,
          "H": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.9.4.R3. Students can make sense of and derive meaning from the current content on “family life with family members’ jobs, work routines, work activities, and workplaces”.",
        "topic": "",
        "code": "ENG.9.4.R3",
        "text": "Students can make sense of and derive meaning from the current content on “family life with family members’ jobs, work routines, work activities, and workplaces”.",
        "fullOutcome": "ENG.9.4.R3. Students can make sense of and derive meaning from the current content on “family life with family members’ jobs, work routines, work activities, and workplaces”.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.9.5.R2. Students can bring information together about the current content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.9.5.R2",
        "text": "Students can bring information together about the current content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.9.5.R2. Students can bring information together about the current content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' through skimming, scanning and detailed reading.",
        "counts": {
          "C": 1,
          "G": 1,
          "H": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.9.5.W3. Students can construct new written content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.9.5.W3",
        "text": "Students can construct new written content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.9.5.W3. Students can construct new written content on ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house'' based on their understanding of the model(s) provided.",
        "counts": {
          "E": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.9.5.W4. Students can practise producing written content based on the current theme ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house''.",
        "topic": "",
        "code": "ENG.9.5.W4",
        "text": "Students can practise producing written content based on the current theme ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house''.",
        "fullOutcome": "ENG.9.5.W4. Students can practise producing written content based on the current theme ''life in the house and neighbourhood with types of houses, rooms, furniture and activities in the house''.",
        "counts": {
          "F": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.9.8.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''life in the universe and future with films, film genres, futuristic films with",
        "topic": "",
        "code": "ENG.9.8.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''life in the universe and future with films, film genres, futuristic films with",
        "fullOutcome": "ENG.9.8.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''life in the universe and future with films, film genres, futuristic films with",
        "counts": {
          "D": 1,
          "F": 1,
          "I": 1
        }
      },
      {
        "theme": "ENG.10.1.R2. Students can bring information together about the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.10.1.R2",
        "text": "Students can bring information together about the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.10.1.R2. Students can bring information together about the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' through skimming, scanning and detailed reading.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.10.1.R3. Students can make sense of and derive meaning from the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "topic": "",
        "code": "ENG.10.1.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "fullOutcome": "ENG.10.1.R3. Students can make sense of and derive meaning from the current content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "H": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.10.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.10.1.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.10.1.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "C": 1,
          "D": 1,
          "F": 1,
          "G": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.10.1.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "topic": "",
        "code": "ENG.10.1.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "fullOutcome": "ENG.10.1.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "ENG.10.1.W3. Students can construct new written content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.10.1.W3",
        "text": "Students can construct new written content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.10.1.W3. Students can construct new written content on ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations'' based on their understanding of the model(s) provided.",
        "counts": {
          "C": 1
        }
      },
      {
        "theme": "ENG.10.1.W4. Students can practise producing written content based on the current theme ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "topic": "",
        "code": "ENG.10.1.W4",
        "text": "Students can practise producing written content based on the current theme ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "fullOutcome": "ENG.10.1.W4. Students can practise producing written content based on the current theme ''school life and education with different types of schools in the world; regular and extracurricular activities at different types of schools; school anxiety and stress; national days and celebrations''.",
        "counts": {
          "D": 1,
          "G": 1
        }
      },
      {
        "theme": "ENG.10.2.R2. Students can bring information together about the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.10.2.R2",
        "text": "Students can bring information together about the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.10.2.R2. Students can bring information together about the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' through skimming, scanning and detailed reading.",
        "counts": {
          "I": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.10.2.R3. Students can make sense of and derive meaning from the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "topic": "",
        "code": "ENG.10.2.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "fullOutcome": "ENG.10.2.R3. Students can make sense of and derive meaning from the current content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "counts": {
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.10.2.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.10.2.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.10.2.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "ENG.10.2.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "topic": "",
        "code": "ENG.10.2.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "fullOutcome": "ENG.10.2.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness- raising and discovery.",
        "counts": {
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "ENG.10.2.W3. Students can construct new written content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.10.2.W3",
        "text": "Students can construct new written content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.10.2.W3. Students can construct new written content on ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom'' based on their understanding of the model(s) provided.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.10.2.W4. Students can practise producing written content based on the current theme ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "topic": "",
        "code": "ENG.10.2.W4",
        "text": "Students can practise producing written content based on the current theme ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "fullOutcome": "ENG.10.2.W4. Students can practise producing written content based on the current theme ''classroom life and learning with learning activities in the classroom; personal learning styles; learning with technology in the classroom''.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "ENG.10.3.R2. Students can bring information together about the current content on ''personal life and well- being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' through skimming, scanning and detailed reading.",
        "topic": "",
        "code": "ENG.10.3.R2",
        "text": "Students can bring information together about the current content on ''personal life and well- being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' through skimming, scanning and detailed reading.",
        "fullOutcome": "ENG.10.3.R2. Students can bring information together about the current content on ''personal life and well- being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' through skimming, scanning and detailed reading.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "ENG.10.3.R3. Students can make sense of and derive meaning from the current content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences''.",
        "topic": "",
        "code": "ENG.10.3.R3",
        "text": "Students can make sense of and derive meaning from the current content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences''.",
        "fullOutcome": "ENG.10.3.R3. Students can make sense of and derive meaning from the current content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences''.",
        "counts": {
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.10.3.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "topic": "",
        "code": "ENG.10.3.V1",
        "text": "Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "fullOutcome": "ENG.10.3.V1. Students can select and use target vocabulary efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' after recognising them in context and developing their conscious and inductive vocabulary learning skills.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "ENG.10.3.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "topic": "",
        "code": "ENG.10.3.G1",
        "text": "Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "fullOutcome": "ENG.10.3.G1. Students can select and use target grammatical language items efficiently, effectively, and accurately, based on the current content about ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'', after recognising them in context and developing their conscious and inductive grammaring skills through consciousness-raising and discovery.",
        "counts": {
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.10.3.W3. Students can construct new written content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' based on their understanding of the model(s) provided.",
        "topic": "",
        "code": "ENG.10.3.W3",
        "text": "Students can construct new written content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' based on their understanding of the model(s) provided.",
        "fullOutcome": "ENG.10.3.W3. Students can construct new written content on ''personal life and well-being with body parts, human illnesses and diseases; human nature and human well-being today and in the future; fashion and personal fashion preferences'' based on their understanding of the model(s) provided.",
        "counts": {
          "H": 1,
          "L": 1
        }
      },
      {
        "theme": "ENG.10.3.W4. Students can practise producing written content based on the current theme ''personal life and well-being with body parts, human illnesses and diseases; human nature and",
        "topic": "",
        "code": "ENG.10.3.W4",
        "text": "Students can practise producing written content based on the current theme ''personal life and well-being with body parts, human illnesses and diseases; human nature and",
        "fullOutcome": "ENG.10.3.W4. Students can practise producing written content based on the current theme ''personal life and well-being with body parts, human illnesses and diseases; human nature and",
        "counts": {
          "I": 1
        }
      }
    ]
  },
  {
    "id": "ingilizce-11",
    "sourceFile": "/assets/aistudio/ingilizce_lise2_84e340f5.xml",
    "subject": "İngilizce",
    "level": "Lise",
    "grade": "11. Sınıf",
    "gradeNum": 11,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      }
    ],
    "outcomes": [
      {
        "theme": "E11.1.R1.Students will be able to analyze different job ads from newspapers/websites to match them with CVs.",
        "topic": "",
        "code": "E11.1.R1.Students",
        "text": "will be able to analyze different job ads from newspapers/websites to match them with CVs.",
        "fullOutcome": "E11.1.R1.Students will be able to analyze different job ads from newspapers/websites to match them with CVs.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1,
          "G": 1,
          "K": 1
        }
      },
      {
        "theme": "E11.1.R2. Students will be able to find the main idea of a text on successful entrepreneurs of the 21st century.",
        "topic": "",
        "code": "E11.1.R2",
        "text": "Students will be able to find the main idea of a text on successful entrepreneurs of the 21st century.",
        "fullOutcome": "E11.1.R2. Students will be able to find the main idea of a text on successful entrepreneurs of the 21st century.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 2,
          "G": 2,
          "H": 1
        }
      },
      {
        "theme": "E11.1.W1. Students will be able to write CVs/Letters of intent for different job applications.",
        "topic": "",
        "code": "E11.1.W1",
        "text": "Students will be able to write CVs/Letters of intent for different job applications.",
        "fullOutcome": "E11.1.W1. Students will be able to write CVs/Letters of intent for different job applications.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 1
        }
      },
      {
        "theme": "E11.2.R1. Students will be able to identify lexis and expressions related to past abilities in a text",
        "topic": "",
        "code": "E11.2.R1",
        "text": "Students will be able to identify lexis and expressions related to past abilities in a text",
        "fullOutcome": "E11.2.R1. Students will be able to identify lexis and expressions related to past abilities in a text",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1,
          "I": 1,
          "J": 1
        }
      },
      {
        "theme": "E11.2.R2. Students will be able to paraphrase information in a text about people’s choices.",
        "topic": "",
        "code": "E11.2.R2",
        "text": "Students will be able to paraphrase information in a text about people’s choices.",
        "fullOutcome": "E11.2.R2. Students will be able to paraphrase information in a text about people’s choices.",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 2,
          "G": 2,
          "L": 1
        }
      },
      {
        "theme": "E11.2.W1. Students will be able to write a paragraph about their interests and abilities.",
        "topic": "",
        "code": "E11.2.W1",
        "text": "Students will be able to write a paragraph about their interests and abilities.",
        "fullOutcome": "E11.2.W1. Students will be able to write a paragraph about their interests and abilities.",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "E11.3.R1. Students will be able to answer the questions about a text on people’s habits and experiences in the past.",
        "topic": "",
        "code": "E11.3.R1",
        "text": "Students will be able to answer the questions about a text on people’s habits and experiences in the past.",
        "fullOutcome": "E11.3.R1. Students will be able to answer the questions about a text on people’s habits and experiences in the past.",
        "counts": {
          "H": 1,
          "I": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E11.3.R2. Students will be able to analyze a short story (plot, setting, climax, characters etc.) to summarize it.",
        "topic": "",
        "code": "E11.3.R2",
        "text": "Students will be able to analyze a short story (plot, setting, climax, characters etc.) to summarize it.",
        "fullOutcome": "E11.3.R2. Students will be able to analyze a short story (plot, setting, climax, characters etc.) to summarize it.",
        "counts": {
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "E11.3.R3. Students will be able to identify thesis statement, topic sentences, supporting points and examples in a given sample essay about a challenge.",
        "topic": "",
        "code": "E11.3.R3",
        "text": "Students will be able to identify thesis statement, topic sentences, supporting points and examples in a given sample essay about a challenge.",
        "fullOutcome": "E11.3.R3. Students will be able to identify thesis statement, topic sentences, supporting points and examples in a given sample essay about a challenge.",
        "counts": {
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "E11.3.W1. Students will be able to complete the missing parts of a short story with their own words.",
        "topic": "",
        "code": "E11.3.W1",
        "text": "Students will be able to complete the missing parts of a short story with their own words.",
        "fullOutcome": "E11.3.W1. Students will be able to complete the missing parts of a short story with their own words.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E11.4.R1. Students will be able to order the events in the biography of a famous person/ inventor/ scientist/ celebrity.",
        "topic": "",
        "code": "E11.4.R1",
        "text": "Students will be able to order the events in the biography of a famous person/ inventor/ scientist/ celebrity.",
        "fullOutcome": "E11.4.R1. Students will be able to order the events in the biography of a famous person/ inventor/ scientist/ celebrity.",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E11.4.W1. Students will be able to write an essay about a well-known figure from Turkish history.",
        "topic": "",
        "code": "E11.4.W1",
        "text": "Students will be able to write an essay about a well-known figure from Turkish history.",
        "fullOutcome": "E11.4.W1. Students will be able to write an essay about a well-known figure from Turkish history.",
        "counts": {
          "H": 1,
          "I": 1
        }
      },
      {
        "theme": "E11.5.R1. Students will be able to analyze a text to distinguish the expressions used to express wishes, regrets and unreal past.",
        "topic": "",
        "code": "E11.5.R1",
        "text": "Students will be able to analyze a text to distinguish the expressions used to express wishes, regrets and unreal past.",
        "fullOutcome": "E11.5.R1. Students will be able to analyze a text to distinguish the expressions used to express wishes, regrets and unreal past.",
        "counts": {
          "H": 1,
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "E11.5.W1. Students will be able to write their opinions and regrets according to #Iwish.",
        "topic": "",
        "code": "E11.5.W1",
        "text": "Students will be able to write their opinions and regrets according to #Iwish.",
        "fullOutcome": "E11.5.W1. Students will be able to write their opinions and regrets according to #Iwish.",
        "counts": {
          "J": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "ingilizce-12",
    "sourceFile": "/assets/aistudio/ingilizce_lise2_84e340f5.xml",
    "subject": "İngilizce",
    "level": "Lise",
    "grade": "12. Sınıf",
    "gradeNum": 12,
    "scenarios": [
      {
        "col": "C",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 3
      },
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "H",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 4
      },
      {
        "col": "I",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 5
      },
      {
        "col": "J",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 3",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "K",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 4",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "L",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 5",
        "isNationalExam": false,
        "totalQuestions": 7
      }
    ],
    "outcomes": [
      {
        "theme": "E12.1.R1. Students will be able to infer people’s music preferences from their ideas about music in a reading text.",
        "topic": "",
        "code": "E12.1.R1",
        "text": "Students will be able to infer people’s music preferences from their ideas about music in a reading text.",
        "fullOutcome": "E12.1.R1. Students will be able to infer people’s music preferences from their ideas about music in a reading text.",
        "counts": {
          "C": 1,
          "E": 1,
          "F": 1,
          "G": 2,
          "I": 1
        }
      },
      {
        "theme": "E12.1.R2. Students will be able to analyze surveys/interviews to answer related questions.",
        "topic": "",
        "code": "E12.1.R2",
        "text": "Students will be able to analyze surveys/interviews to answer related questions.",
        "fullOutcome": "E12.1.R2. Students will be able to analyze surveys/interviews to answer related questions.",
        "counts": {
          "D": 1,
          "F": 1,
          "G": 1,
          "J": 1
        }
      },
      {
        "theme": "E12.1.W1. Students will be able to write a survey report on their friends’/teachers’ music preferences.",
        "topic": "",
        "code": "E12.1.W1",
        "text": "Students will be able to write a survey report on their friends’/teachers’ music preferences.",
        "fullOutcome": "E12.1.W1. Students will be able to write a survey report on their friends’/teachers’ music preferences.",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "E12.2.R1. Students will be able to find irrelevant content about the descriptions of the people in a text.",
        "topic": "",
        "code": "E12.2.R1",
        "text": "Students will be able to find irrelevant content about the descriptions of the people in a text.",
        "fullOutcome": "E12.2.R1. Students will be able to find irrelevant content about the descriptions of the people in a text.",
        "counts": {
          "C": 1,
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E12.2.R2. Students will be able to identify the main conclusions in argumentative texts.",
        "topic": "",
        "code": "E12.2.R2",
        "text": "Students will be able to identify the main conclusions in argumentative texts.",
        "fullOutcome": "E12.2.R2. Students will be able to identify the main conclusions in argumentative texts.",
        "counts": {
          "E": 1,
          "F": 1,
          "H": 1
        }
      },
      {
        "theme": "E12.2.W1. Students will be able to write an opinion essay about qualities of a good friend by stating reasons.",
        "topic": "",
        "code": "E12.2.W1",
        "text": "Students will be able to write an opinion essay about qualities of a good friend by stating reasons.",
        "fullOutcome": "E12.2.W1. Students will be able to write an opinion essay about qualities of a good friend by stating reasons.",
        "counts": {
          "C": 1,
          "D": 1
        }
      },
      {
        "theme": "E12.3.R1. Students will be able to find the supporting ideas in a text about good practices on human rights around the world.",
        "topic": "",
        "code": "E12.3.R1",
        "text": "Students will be able to find the supporting ideas in a text about good practices on human rights around the world.",
        "fullOutcome": "E12.3.R1. Students will be able to find the supporting ideas in a text about good practices on human rights around the world.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1
        }
      },
      {
        "theme": "E12.3.R2. Students will be able to match the paragraphs with the correct phrases/visuals (children rights/gender equality/animal rights/the rights of disadvantaged people, etc.).",
        "topic": "",
        "code": "E12.3.R2",
        "text": "Students will be able to match the paragraphs with the correct phrases/visuals (children rights/gender equality/animal rights/the rights of disadvantaged people, etc.).",
        "fullOutcome": "E12.3.R2. Students will be able to match the paragraphs with the correct phrases/visuals (children rights/gender equality/animal rights/the rights of disadvantaged people, etc.).",
        "counts": {
          "J": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E12.3.W1. Students will be able to write mottos/slogans about human rights.",
        "topic": "",
        "code": "E12.3.W1",
        "text": "Students will be able to write mottos/slogans about human rights.",
        "fullOutcome": "E12.3.W1. Students will be able to write mottos/slogans about human rights.",
        "counts": {
          "I": 1,
          "J": 1,
          "K": 1,
          "L": 2
        }
      },
      {
        "theme": "E12.3.W2. Students will be able to write an argumentative essay including solutions for disadvantaged people’s problems.",
        "topic": "",
        "code": "E12.3.W2",
        "text": "Students will be able to write an argumentative essay including solutions for disadvantaged people’s problems.",
        "fullOutcome": "E12.3.W2. Students will be able to write an argumentative essay including solutions for disadvantaged people’s problems.",
        "counts": {
          "H": 1
        }
      },
      {
        "theme": "E12.4.R1. Students will be able to read (aloud) a text about cybercrimes and rights to distinguish the lexis and jargon.",
        "topic": "",
        "code": "E12.4.R1",
        "text": "Students will be able to read (aloud) a text about cybercrimes and rights to distinguish the lexis and jargon.",
        "fullOutcome": "E12.4.R1. Students will be able to read (aloud) a text about cybercrimes and rights to distinguish the lexis and jargon.",
        "counts": {
          "K": 1
        }
      },
      {
        "theme": "E12.4.R2. Students will be able to reorder the scrambled steps of a cyber game in a text.",
        "topic": "",
        "code": "E12.4.R2",
        "text": "Students will be able to reorder the scrambled steps of a cyber game in a text.",
        "fullOutcome": "E12.4.R2. Students will be able to reorder the scrambled steps of a cyber game in a text.",
        "counts": {
          "H": 1,
          "K": 1,
          "L": 1
        }
      },
      {
        "theme": "E12.4.W1. Students will be able to write detailed descriptions of an imaginary future.",
        "topic": "",
        "code": "E12.4.W1",
        "text": "Students will be able to write detailed descriptions of an imaginary future.",
        "fullOutcome": "E12.4.W1. Students will be able to write detailed descriptions of an imaginary future.",
        "counts": {
          "I": 1,
          "L": 1
        }
      },
      {
        "theme": "E12.4.W2. Students will be able to compose a cyber game scenerio.",
        "topic": "",
        "code": "E12.4.W2",
        "text": "Students will be able to compose a cyber game scenerio.",
        "fullOutcome": "E12.4.W2. Students will be able to compose a cyber game scenerio.",
        "counts": {
          "J": 1
        }
      },
      {
        "theme": "E12.5.R2. Students will be able to identify specific information in a real-life text.",
        "topic": "",
        "code": "E12.5.R2",
        "text": "Students will be able to identify specific information in a real-life text.",
        "fullOutcome": "E12.5.R2. Students will be able to identify specific information in a real-life text.",
        "counts": {
          "H": 1,
          "J": 1,
          "L": 1
        }
      },
      {
        "theme": "E12.5.W1. Students will be able to describe their current mood / mood reflected in a song/ painting/photograph through creative writing.",
        "topic": "",
        "code": "E12.5.W1",
        "text": "Students will be able to describe their current mood / mood reflected in a song/ painting/photograph through creative writing.",
        "fullOutcome": "E12.5.W1. Students will be able to describe their current mood / mood reflected in a song/ painting/photograph through creative writing.",
        "counts": {
          "I": 1,
          "K": 1
        }
      }
    ]
  },
  {
    "id": "fenbilimleri-5",
    "sourceFile": "meb-odsgm-2026-fen-5",
    "subject": "Fen Bilimleri",
    "level": "Ortaokul",
    "grade": "5. Sınıf",
    "gradeNum": 5,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ",
        "topic": "Gökyüzündeki Komşumuz: Güneş",
        "code": "FB.5.1.1.1",
        "text": "Güneş'in yapısı ve dönme hareketi ile ilgili bilgileri toplayabilme",
        "fullOutcome": "FB.5.1.1.1. Güneş'in yapısı ve dönme hareketi ile ilgili bilgileri toplayabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ",
        "topic": "Gökyüzündeki Komşumuz: Ay",
        "code": "FB.5.1.2.1",
        "text": "Ay'ın özellikleri, dönme ve dolanma hareketleri ile ilgili bilimsel çıkarım yapabilme",
        "fullOutcome": "FB.5.1.2.1. Ay'ın özellikleri, dönme ve dolanma hareketleri ile ilgili bilimsel çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 1,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ",
        "topic": "Dünya, Güneş ve Ay",
        "code": "FB.5.1.3.1",
        "text": "Güneş, Dünya ve Ay'ın birbirlerine göre hareketlerini ve hacimsel büyüklüklerini temsil eden özgün model oluşturabilme",
        "fullOutcome": "FB.5.1.3.1. Güneş, Dünya ve Ay'ın birbirlerine göre hareketlerini ve hacimsel büyüklüklerini temsil eden özgün model oluşturabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "KUVVETİ TANIYALIM",
        "topic": "Kuvvet ve Kuvvetin Ölçülmesi",
        "code": "FB.5.2.1.1",
        "text": "Kuvveti büyüklüğü ile tanımlayabilme ve dinamometre ile ölçebilme",
        "fullOutcome": "FB.5.2.1.1. Kuvveti büyüklüğü ile tanımlayabilme ve dinamometre ile ölçebilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 2
        }
      },
      {
        "theme": "KUVVETİ TANIYALIM",
        "topic": "Sürtünme Kuvveti",
        "code": "FB.5.2.2.1",
        "text": "Sürtünme kuvvetinin çeşitli ortamlarda harekete etkisini tümevarımsal akıl yürütme ile çözümleyebilme",
        "fullOutcome": "FB.5.2.2.1. Sürtünme kuvvetinin çeşitli ortamlarda harekete etkisini tümevarımsal akıl yürütme ile çözümleyebilme",
        "counts": {
          "F": 2,
          "G": 2
        }
      },
      {
        "theme": "CANLILARIN YAPISINA YOLCULUK",
        "topic": "Hücre ve Organeller",
        "code": "FB.5.3.1.1",
        "text": "Bitki ve hayvan hücrelerini temel kısımları ve özellikleri açısından karşılaştırabilme",
        "fullOutcome": "FB.5.3.1.1. Bitki ve hayvan hücrelerini temel kısımları ve özellikleri açısından karşılaştırabilme",
        "counts": {
          "F": 1,
          "G": 1
        }
      }
    ]
  },
  {
    "id": "fenbilimleri-6",
    "sourceFile": "meb-odsgm-2026-fen-6",
    "subject": "Fen Bilimleri",
    "level": "Ortaokul",
    "grade": "6. Sınıf",
    "gradeNum": 6,
    "scenarios": [
      {
        "col": "D",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 6
      },
      {
        "col": "E",
        "examTerm": "1. Dönem 1. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "F",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 1",
        "isNationalExam": false,
        "totalQuestions": 7
      },
      {
        "col": "G",
        "examTerm": "1. Dönem 2. Ortak Yazılı Sınav",
        "scenarioName": "Senaryo 2",
        "isNationalExam": false,
        "totalQuestions": 8
      }
    ],
    "outcomes": [
      {
        "theme": "GÜNEŞ SİSTEMİ VE TUTULMALAR",
        "topic": "Güneş Sistemi",
        "code": "FB.6.1.1.1",
        "text": "Güneş sistemindeki gezegenleri niteliklerine göre sınıflandırabilme",
        "fullOutcome": "FB.6.1.1.1. Güneş sistemindeki gezegenleri niteliklerine göre sınıflandırabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "GÜNEŞ SİSTEMİ VE TUTULMALAR",
        "topic": "Güneş ve Ay Tutulmaları",
        "code": "FB.6.1.2.1",
        "text": "Güneş ve Ay tutulmalarını tahmin etmeye yönelik bilimsel çıkarım yapabilme",
        "fullOutcome": "FB.6.1.2.1. Güneş ve Ay tutulmalarını tahmin etmeye yönelik bilimsel çıkarım yapabilme",
        "counts": {
          "D": 2,
          "E": 2,
          "F": 1,
          "G": 1
        }
      },
      {
        "theme": "KUVVETİN ETKİSİNDE HAREKET",
        "topic": "Bileşke Kuvvet",
        "code": "FB.6.2.1.1",
        "text": "Bir cisme etki eden aynı doğrultudaki kuvvetler arasındaki ilişkileri açıklayabilme",
        "fullOutcome": "FB.6.2.1.1. Bir cisme etki eden aynı doğrultudaki kuvvetler arasındaki ilişkileri açıklayabilme",
        "counts": {
          "D": 1,
          "E": 2,
          "F": 2,
          "G": 2
        }
      },
      {
        "theme": "KUVVETİN ETKİSİNDE HAREKET",
        "topic": "Sabit Süratli Hareket",
        "code": "FB.6.2.2.1",
        "text": "Sabit süratli hareket ile ilgili yol, zaman ve sürat grafiklerini yorumlayabilme",
        "fullOutcome": "FB.6.2.2.1. Sabit süratli hareket ile ilgili yol, zaman ve sürat grafiklerini yorumlayabilme",
        "counts": {
          "D": 1,
          "E": 1,
          "F": 1,
          "G": 2
        }
      },
      {
        "theme": "CANLILARDA SİSTEMLER",
        "topic": "Destek ve Hareket Sistemi",
        "code": "FB.6.3.1.1",
        "text": "Destek ve hareket sistemine ait yapıları sınıflandırabilme ve görevlerini açıklayabilme",
        "fullOutcome": "FB.6.3.1.1. Destek ve hareket sistemine ait yapıları sınıflandırabilme ve görevlerini açıklayabilme",
        "counts": {
          "F": 2,
          "G": 2
        }
      }
    ]
  }
];
