import type { Question } from '../types';

// Helper function to transform questions with "pilihan" format
function transformQuestion(q: any): Question {
  if ('pilihan' in q) {
    return {
      id: q.id,
      question: q.pertanyaan,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: q.penjelasan
    };
  }
  if ('soal' in q) {
    return {
      id: q.id,
      question: q.soal,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: ''
    };
  }
  return q;
}

// All questions combined and transformed
export const questions: Question[] = [
  {
    "id": 1,
    "question": "Sampai dengan tahun 2002, UUD 1945 telah mengalami amandemen sebanyak",
    "options": ["Satu kali", "Dua kali", "Tiga kali", "Empat kali", "Lima kali"],
    "correctAnswer": 3,
    "explanation": "Sampai dengan tahun 2002, UUD 1945 telah mengalami amandemen sebanyak empat kali."
  },
  {
    "id": 2,
    "question": "Piagam Jakarta ditandatangani pada",
    "options": ["22 Juni 1954", "22 Juni 1945", "12 Juli 1945", "17 Agustus 1945", "18 Agustus 1945"],
    "correctAnswer": 1,
    "explanation": "Piagam Jakarta ditandatangani pada 22 Juni 1945."
  },
  {
    "id": 3,
    "question": "Perbedaan isi Piagam Jakarta dengan Pembukaan UUD 1945 adalah",
    "options": [
      "Perbedaan pandangan mengenai sistem sosial Indonesia",
      "Perbedaan pandangan mengenai sistem politik Indonesia",
      "Pada Piagam Jakarta disebutkan adanya kewajiban menjalankan syariat Islam bagi pemeluknya sedangkan pada UUD 1945 tidak",
      "Pada Pembukaan UUD 1945 disebutkan lima sila",
      "Perbedaan pandangan mengenai penghapusan penjajahan"
    ],
    "correctAnswer": 2,
    "explanation": "Perbedaan utama antara Piagam Jakarta dan Pembukaan UUD 1945 adalah adanya frasa 'dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya' di Piagam Jakarta yang kemudian dihilangkan dari Pembukaan UUD 1945."
  },
  {
    "id": 4,
    "question": "Pasal 1 ayat 1 UUD 1945 berbunyi :",
    "options": [
      "Negara Indonesia adalah negara kesatuan",
      "Negara Indonesia adalah negara republik",
      "Negara Indonesia adalah negara kesatuan sekaligus republik",
      "Negara Indonesia adalah negara kesatuan yang berbentuk republik",
      "Negara Indonesia adalah negara kesatuan dan republik"
    ],
    "correctAnswer": 3,
    "explanation": "Pasal 1 ayat 1 UUD 1945 berbunyi: 'Negara Indonesia adalah negara kesatuan yang berbentuk Republik.'"
  },
  {
    "id": 5,
    "question": "Berdasarkan UUD 1945 pasal 1 ayat 2, maka dapat ditegaskan bahwa dalam sistem perpolitikan Indonesia, kedaulatan adalah di tangan :",
    "options": ["Presiden", "DPR", "MPR", "Rakyat", "MPR dilaksanakan oleh Presiden"],
    "correctAnswer": 3,
    "explanation": "Berdasarkan UUD 1945 pasal 1 ayat 2, kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar."
  },
  {
    "id": 6,
    "question": "Berdasarkan UUD 1945 amandemen ketiga 9 November 2001, pasal 1 bertambah satu ayat. Ayat tambahan ini menyatakan bahwa Indonesia adalah negara",
    "options": [
      "Negara demokrasi",
      "Negara persatuan",
      "Negara hukum",
      "Negara kepulauan",
      "Negara taat peraturan internasional"
    ],
    "correctAnswer": 2,
    "explanation": "Berdasarkan UUD 1945 amandemen ketiga, Pasal 1 Ayat (3) menyatakan bahwa 'Negara Indonesia adalah negara hukum'."
  },
  {
    "id": 7,
    "question": "Berdasarkan UUD 1945 amandemen keempat, 10 Agustus 2002, anggota MPR terdiri dari",
    "options": ["DPR + DPD", "DPR + Utusan Golongan", "DPR + Fraksi tambahan", "DPR + Utusan Propinsi", "DPR + DPA"],
    "correctAnswer": 0,
    "explanation": "Berdasarkan UUD 1945 amandemen keempat, Pasal 2 Ayat (1) menyatakan bahwa 'Majelis Permusyawaratan Rakyat terdiri atas anggota Dewan Perwakilan Rakyat dan anggota Dewan Perwakilan Daerah yang dipilih melalui pemilihan umum dan diatur lebih lanjut dengan undang-undang'."
  },
  {
    "id": 8,
    "question": "Payung hukum yang dipakai untuk melakukan amandemen atau perubahan UUD 1945 adalah",
    "options": ["Pasal 3 dan pasal 37", "Pasal 3", "Pasal 37", "Pasal 27", "Pasal 27 dan pasal 37"],
    "correctAnswer": 0,
    "explanation": "Payung hukum untuk melakukan amandemen UUD 1945 adalah Pasal 3 dan Pasal 37 UUD 1945."
  },
  {
    "id": 9,
    "question": "Sebelum diamandemen, pasal 5 ayat 1 menyatakan bahwa Presiden memegang kekuasaan membentuk Undang-undang dengan persetujuan DPR. Setelah diamandemen yang pertama, 19 Oktober 1999, pasal 5 ayat 1 berbunyi",
    "options": [
      "Presiden berhak mengajukan rancangan Undang-undang kepada DPR",
      "Presiden menetapkan Undang-undang tanpa harus melalui persetujuan DPR",
      "Presiden bersama-sama DPR menetapkan Undang- undang dengan persetujuan MPR",
      "DPR membuat Undang-undang dengan persetujuan Presiden",
      "DPR memegang kekuasaan menetapkan Undang- undang"
    ],
    "correctAnswer": 0,
    "explanation": "Setelah amandemen pertama, Pasal 5 ayat 1 UUD 1945 berbunyi: 'Presiden berhak mengajukan rancangan undang-undang kepada Dewan Perwakilan Rakyat.'"
  },
  {
    "id": 10,
    "question": "Pemilihan Presiden dan Wakil Presiden dalam satu pasangan dan dipilih secara langsung oleh rakyat, adalah berdasarkan pada",
    "options": ["UUD 1945 pasal 6A", "UUD 1945 pasal 6B", "UUD 1945 pasal 7C", "UUD 1945 pasal 8", "UUD 1945 pasal 10"],
    "correctAnswer": 0,
    "explanation": "Pemilihan Presiden dan Wakil Presiden secara langsung oleh rakyat diatur dalam UUD 1945 Pasal 6A."
  },
  {
    "id": 11,
    "question": "Dasar hukum bagi MPR untuk memberhentikan Presiden karena penghianatan negara, korupsi, penyuapan, tindak pidana berat, perbuatan tercela, atau terbukti tidak lagi memenuhi syarat sebagai Presiden, adalah",
    "options": ["Pasal 17", "Pasal 8 B", "Pasal 7A", "Pasal 6", "Pasal 1"],
    "correctAnswer": 2,
    "explanation": "Dasar hukum bagi MPR untuk memberhentikan Presiden karena alasan tersebut diatur dalam UUD 1945 Pasal 7A."
  },
  {
    "id": 12,
    "question": "Berdasarkan UUD 1945 pasal 7C, maka pernyataan manakah yang benar ?",
    "options": [
      "Presiden berhak membekukan DPR jika terjadi suatu kegentingan negara",
      "Presiden dengan persetujuan MPR dapat membubarkan DPR demi kepentingan negara",
      "Presiden tak dapat membekukan ataupun membubarkan DPR",
      "Presiden tak dapat membubarkan DPR, namun hanya membekukan",
      "Presiden tak dapat membekukan DPR, namun justeru berhak membubarkannya dengan alasan yang diterima rakyat"
    ],
    "correctAnswer": 2,
    "explanation": "Berdasarkan UUD 1945 Pasal 7C, 'Presiden tidak dapat membekukan dan/atau membubarkan Dewan Perwakilan Rakyat.'"
  },
  {
    "id": 13,
    "question": "Pasal 8 ayat 2 UUD 1945 menyatakan bahwa jika terjadi kekosongan wakil presiden, maka Presiden mengusulkan dua calon kepada MPR, yang akan ditetapkan dalam sidang MPR. Waktu penetapan calon presiden ini adalah maksimal",
    "options": ["40 hari", "50 hari", "60 hari", "75 hari", "100 hari"],
    "correctAnswer": 2,
    "explanation": "Pasal 8 ayat 2 UUD 1945 menyatakan bahwa pengisian kekosongan wakil presiden harus dilakukan dalam waktu selambat-lambatnya 60 hari."
  },
  {
    "id": 14,
    "question": "Jika terjadi kekosongan Presiden dan Wapres, maka tugas kepresidenan akan diisi sementara oleh :",
    "options": [
      "Menteri dalam negeri",
      "Menteri luar negeri",
      "Menteri pertahanan",
      "Menteri dalam negeri, Menteri luar negeri dan Menteri pertahanan",
      "Menteri dalam negeri dan Menteri pertahanan"
    ],
    "correctAnswer": 3,
    "explanation": "Jika Presiden dan Wakil Presiden mangkat, berhenti, diberhentikan, atau tidak dapat melakukan kewajibannya dalam masa jabatannya secara bersamaan, pelaksana tugas kepresidenan adalah Menteri Luar Negeri, Menteri Dalam Negeri, dan Menteri Pertahanan secara bersama-sama. Ini diatur dalam UUD 1945 Pasal 8 ayat 3."
  },
  {
    "id": 15,
    "question": "Pasal 11 ayat 2 menyatakan bahwa jika Presiden membuat perjanjian internasional yang memberikan dampak luas bagi rakyat dengan terkait keuangan negara, maka harus melalui persetujuan",
    "options": ["Bank Indonesia", "BPK", "MPR", "DPR", "Menko Ekuin dan DPR"],
    "correctAnswer": 3,
    "explanation": "Pasal 11 ayat 2 UUD 1945 menyatakan bahwa 'Presiden dalam membuat perjanjian internasional lainnya yang menimbulkan akibat yang luas dan mendasar bagi kehidupan rakyat yang terkait dengan beban keuangan negara, dan/atau mengharuskan perubahan atau pembentukan undang-undang harus dengan persetujuan Dewan Perwakilan Rakyat.'"
  },
  {
    "id": 16,
    "question": "Presiden berhak membentuk Wantimpres (Dewan Pertimbangan Presiden) yang bertugas memberikan nasihat dan pertimbangan kepada Presiden, karena dijamin oleh UUD 1945 pasal",
    "options": ["Pasal 16", "Pasal 17", "Pasal 18", "Pasal 19", "Pasal 20"],
    "correctAnswer": 0,
    "explanation": "Pembentukan Dewan Pertimbangan Presiden diatur dalam UUD 1945 Pasal 16."
  },
  {
    "id": 17,
    "question": "Penghapusan Dewan Pertimbangan Agung (DPA) adalah berdasarkan amandemen UUD 1945 yang ke….",
    "options": [
      "Amandemen pertama",
      "Amandemen kedua",
      "Amandemen ketiga",
      "Amandemen keempat",
      "Amandemen kelima"
    ],
    "correctAnswer": 3,
    "explanation": "Penghapusan Dewan Pertimbangan Agung (DPA) dilakukan berdasarkan Amandemen Keempat UUD 1945."
  },
  {
    "id": 18,
    "question": "Berdasarkan pasal 17 ayat 4 UUD 1945 berbunyi : 'Pembentukan, pengubahan dan pembubaran kementrian negara….. '",
    "options": [
      "Adalah wewenang penuh Presiden",
      "Adalah atas usul Presiden yang disetujui oleh DPR",
      "Diatur dalam Undang-undang",
      "Ditetapkan dalam Sidang Umum MPR",
      "Ditetapkan oleh Presiden dengan memperhatikan usul DPR"
    ],
    "correctAnswer": 2,
    "explanation": "Berdasarkan Pasal 17 ayat 4 UUD 1945, 'Pembentukan, pengubahan, dan pembubaran kementerian negara diatur dalam undang-undang.'"
  },
  {
    "id": 19,
    "question": "Berdasarkan UUD 1945 pasal 14 ayat 1, Presiden memberikan grasi dan rehabilitasi dengan memperhatikan pertimbangan",
    "options": ["Mahkamah Agung", "Mahkamah Konstitusi", "Mahkamah Militer", "DPR", "MPR"],
    "correctAnswer": 0,
    "explanation": "Berdasarkan UUD 1945 Pasal 14 ayat 1, Presiden memberikan grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung."
  },
  {
    "id": 20,
    "question": "Berdasarkan UUD 1945 pasal 14 ayat 2, Presiden memberikan amnesty dan abolisi dengan memperhatikan pertimbangan",
    "options": ["DPA", "DPR", "MPR", "Mahkamah Agung", "Jaksa Agung"],
    "correctAnswer": 1,
    "explanation": "Berdasarkan UUD 1945 Pasal 14 ayat 2, Presiden memberikan amnesti dan abolisi dengan memperhatikan pertimbangan Dewan Perwakilan Rakyat (DPR)."
  },
  {
    "id": 21,
    "question": "Pemberian gelar, tanda jasa dan kehormatan oleh Presiden, diatur dengan Undang-undang. Hal ini dinyatakan dalam UUD 1945 pasal",
    "options": ["Pasal 12", "Pasal 13", "Pasal 14", "Pasal 15", "Pasal 16"],
    "correctAnswer": 3,
    "explanation": "Pemberian gelar, tanda jasa, dan lain-lain kehormatan oleh Presiden diatur dalam UUD 1945 Pasal 15."
  },
  {
    "id": 22,
    "question": "Hubungan antara Pemerintah pusat dengan pemerintah daerah adalah memperhatikan kekhususan dan keragaman daerah tersebut. Hal ini didasarkan pada UUD 1945",
    "options": ["Pasal 18A ayat 1", "Pasal 18A ayat 2", "Pasal 18", "Pasal 19 ayat 1", "Pasal 19 ayat 2"],
    "correctAnswer": 0,
    "explanation": "Hubungan wewenang antara pemerintah pusat dan pemerintah daerah provinsi, kabupaten, dan kota, diatur dengan undang-undang dengan memperhatikan kekhususan dan keragaman daerah, ini diatur dalam UUD 1945 Pasal 18A ayat 1."
  },
  {
    "id": 23,
    "question": "Ketika masa Orde Baru pengelolaan keuangan Pusat-Daerah sangat timpang. Hampir semuanya dikuasai oleh pusat. Namun setelah era Reformasi ini, setelah UUD 1945 diamandemen, maka pengelolaan keuangan harus selaras dan adil. Hal ini tercantum dalam UUD 1945",
    "options": ["Pasal 18 A ayat 1", "Pasal 18", "Pasal 19", "Pasal 33", "Pasal 18 A ayat 2"],
    "correctAnswer": 4,
    "explanation": "Pengelolaan keuangan Pusat-Daerah yang selaras dan adil setelah amandemen UUD 1945 tercantum dalam UUD 1945 Pasal 18A ayat 2."
  },
  {
    "id": 24,
    "question": "Kesatuan masyarakat hukum yang ada di Indonesia ini sebenarnya dihormati oleh negara. Hal ini sesuai dengan UUD 1945",
    "options": ["Pasal 8", "Pasal 9", "Pasal 18 B ayat 2", "Pasal 18 B ayat 1", "Pasal 22"],
    "correctAnswer": 2,
    "explanation": "Kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya dihormati oleh negara, ini diatur dalam UUD 1945 Pasal 18B ayat 2."
  },
  {
    "id": 25,
    "question": "Berdasarkan UUD 1945 pasal 20, Presiden bersama DPR membahas Rancangan Undang-undang (RUU) lalu haruslah mendapatkan persetujuan bersama. Setelah RUU tersebut disepakati, lalu RUU tersebut akan disahkan oleh…",
    "options": ["Mahkamah Konstitusi", "Disahkan berdua, Presiden bersama DPR", "Hakim Agung", "Presiden", "DPR"],
    "correctAnswer": 3,
    "explanation": "Berdasarkan UUD 1945 Pasal 20, setiap rancangan undang-undang yang telah disetujui bersama oleh Dewan Perwakilan Rakyat dan Presiden untuk disahkan menjadi undang-undang."
  },
  {
    "id": 26,
    "question": "Jika kita mengacu pada UUD 1945 pasal 19 ayat 3, maka dalam satu tahun, DPR minimal akan bersidang sebanyak",
    "options": ["Satu kali", "Dua kali", "Tiga kali", "Empat kali", "Lima kali"],
    "correctAnswer": 0,
    "explanation": "UUD 1945 Pasal 19 ayat 3 menyatakan bahwa 'Dewan Perwakilan Rakyat bersidang sedikitnya satu kali dalam 1 (satu) tahun.'"
  },
  {
    "id": 27,
    "question": "UUD 1945 pasal berapakah yang menyebutkan hak-hak DPR seperti hak interpelasi, hak menyatakan pendapat, dan hak angket. ?",
    "options": ["Pasal 20 A ayat 1", "Pasal 20 A ayat 2", "Pasal 20 A ayat 3", "Pasal 20 A ayat 4", "Pasal 20 A ayat 5"],
    "correctAnswer": 1,
    "explanation": "Hak-hak DPR seperti hak interpelasi, hak angket, dan hak menyatakan pendapat diatur dalam UUD 1945 Pasal 20A ayat 2."
  },
  {
    "id": 28,
    "question": "Berdasarkan UUD 1945 pasal 20 A ayat 1, fungsi DPR adalah",
    "options": [
      "Fungsi legislasi dan fungsi angket, serta fungsi pengawasan",
      "Fungsi anggaran dan fungsi interpelasi",
      "Fungsi legislasi, fungsi anggaran dan fungsi pengawasan",
      "Fungsi legislasi dan fungsi pengawan",
      "Fungsi interpelasi, fungsi angket, fungsi pernyataan pendapat"
    ],
    "correctAnswer": 2,
    "explanation": "Berdasarkan UUD 1945 Pasal 20A ayat 1, DPR memiliki fungsi legislasi, fungsi anggaran, dan fungsi pengawasan."
  },
  {
    "id": 29,
    "question": "Pemilu di Indonesia harus dilaksanakan dengan LUBER JURDIL (Langsung, Umum, Bebas, Rahasia, Jujur, Adil). Hal ini sesuai dengan pernyataan pada UUD 1945",
    "options": ["Pasal 22 E ayat 1", "Pasal 22 E ayat 2", "Pasal 22 E ayat 3", "Pasal 22 E ayat 4", "Pasal 22 E ayat 5"],
    "correctAnswer": 0,
    "explanation": "Pelaksanaan Pemilu yang LUBER JURDIL diatur dalam UUD 1945 Pasal 22E ayat 1."
  },
  {
    "id": 30,
    "question": "Hal Keuangan diatur dalam UUD 1945 pada BAB VIII yaitu, pasal",
    "options": ["Pasal 28", "Pasal 22", "Pasal 23", "Pasal 24", "Pasal 31"],
    "correctAnswer": 2,
    "explanation": "Hal keuangan diatur dalam UUD 1945 pada BAB VIII, Pasal 23."
  },
  {
    "id": 31,
    "question": "Pasal 24 UUD 1945 berbicara mengenai",
    "options": [
      "Kedaulatan Ekonomi",
      "Kedaulatan wilayah negara",
      "Kekuasaan kehakiman",
      "Kekuasaan politik",
      "Administrasi negara"
    ],
    "correctAnswer": 2,
    "explanation": "Pasal 24 UUD 1945 berbicara mengenai kekuasaan kehakiman."
  },
  {
    "id": 32,
    "question": "Yang berhak mengangkat hakim agung serta menegakkan kehormatan perilaku hakim menurut pasal 24B adalah",
    "options": ["Komisi Yudisial", "Mahkamah agung", "Jaksa agung", "DPR", "Presiden"],
    "correctAnswer": 0,
    "explanation": "Komisi Yudisial berwenang mengusulkan pengangkatan hakim agung dan mempunyai wewenang lain dalam rangka menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim. Hal ini diatur dalam UUD 1945 Pasal 24B."
  },
  {
    "id": 33,
    "question": "Tugas Mahkamah konstitusi (MK) berdasarkan pasal 24C adalah berikut ini, kecuali",
    "options": [
      "Menguji Undang-undang terhadap UUD",
      "Memutus sengketa kewenangan lembaga negara",
      "Memutus pembubaran partai politik",
      "Memutus perselisihan tentang hasil pemilu",
      "Memutus pemberhentian atau pembekuan lembaga negara"
    ],
    "correctAnswer": 4,
    "explanation": "Tugas Mahkamah Konstitusi tidak termasuk memutus pemberhentian atau pembekuan lembaga negara. Tugas MK meliputi menguji undang-undang terhadap UUD, memutus sengketa kewenangan lembaga negara, memutus pembubaran partai politik, dan memutus perselisihan tentang hasil pemilu. Ini diatur dalam UUD 1945 Pasal 24C."
  },
  {
    "id": 34,
    "question": "Yang menjadi warga negara Indonesia menurut pasal 26 UUD 1945 adalah",
    "options": [
      "Hanya orang bangsa Indonesia asli",
      "Orang Indonesia asli dan orang bangsa lain yang disahkan dengan Undang-undang sebagai warga negara",
      "Pribumi saja",
      "Pribumi dan Inlander",
      "Orang bangsa Indonesia dan keturunannya saja"
    ],
    "correctAnswer": 1,
    "explanation": "Menurut Pasal 26 UUD 1945, yang menjadi warga negara ialah orang-orang bangsa Indonesia asli dan orang-orang bangsa lain yang disahkan dengan undang-undang sebagai warga negara."
  },
  {
    "id": 35,
    "question": "Jika pemerintah yang terpilih tidak berusaha membuka lapangan pekerjaan bagi rakyatnya yang membutuhkan penghidupan, maka Pemerintah telah melanggar",
    "options": ["Pasal 25", "Pasal 27", "Pasal 29", "Pasal 31", "Pasal 35"],
    "correctAnswer": 1,
    "explanation": "Pemerintah wajib mengusahakan dan menyelenggarakan sistem jaminan sosial bagi seluruh rakyat dan memberdayakan masyarakat yang lemah dan tidak mampu sesuai dengan martabat kemanusiaan. Hal ini terkait dengan Pasal 27 ayat 2 UUD 1945 yang menyebutkan 'Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.'"
  },
  {
    "id": 36,
    "question": "Jika seorang hakim menghukum tegas kepada rakyat kecil yang melanggar hukum namun justeru membebaskan seorang pejabat tinggi negara yang melanggar hukum ini berarti hakim tersebut telah melanggar kepastian hukum yang adil, serta tidak memberikan perlakuan sama di depan hukum. Ini bertentangan dengan",
    "options": ["Pasal 28 D ayat 1", "Pasal 28 D ayat 2", "Pasal 28 D ayat 3", "Pasal 28 D ayat 4", "Pasal 28 D ayat 7"],
    "correctAnswer": 0,
    "explanation": "Perlakuan sama di depan hukum dan kepastian hukum yang adil dijamin dalam UUD 1945 Pasal 28D ayat 1: 'Setiap orang berhak atas pengakuan, jaminan, perlindungan, dan kepastian hukum yang adil serta perlakuan yang sama di hadapan hukum.'"
  },
  {
    "id": 37,
    "question": "Berikut adalah macam-macam Hak Asasi Manusia (HAM) yang diakui oleh pasal 28 I ayat 1. Kecuali",
    "options": [
      "Hak kemerdekaan pikiran dan hati nurani",
      "Hak untuk hidup",
      "Hak untuk tidak disiksa",
      "Hak mendapatkan pekerjaan tetap",
      "Hak untuk tidak diperbudak"
    ],
    "correctAnswer": 3,
    "explanation": "Hak mendapatkan pekerjaan tetap tidak secara eksplisit disebut dalam Pasal 28I ayat 1 UUD 1945 sebagai hak yang tidak dapat dikurangi dalam keadaan apapun (non-derogable rights). Pasal 28I ayat 1 menyebutkan hak untuk hidup, hak untuk tidak disiksa, hak kemerdekaan pikiran dan hati nurani, hak beragama, hak untuk tidak diperbudak, hak untuk diakui sebagai pribadi di hadapan hukum, dan hak untuk tidak dituntut atas dasar hukum yang berlaku surut."
  },
  {
    "id": 38,
    "question": "Berikut adalah macam-macam tugas kepolisian negara Republik Indonesia sesuai dengan pasal 30 ayat 4, kecuali :",
    "options": [
      "Alat negara yang menjaga keamanan",
      "Menjaga ketertiban",
      "Melindungi masyarakat",
      "Mengayomi masyarakat",
      "Mengamankan perbatasan negara"
    ],
    "correctAnswer": 4,
    "explanation": "Tugas kepolisian negara Republik Indonesia sesuai Pasal 30 ayat 4 UUD 1945 adalah melindungi, mengayomi, melayani masyarakat, serta menegakkan hukum. Mengamankan perbatasan negara lebih merupakan tugas Tentara Nasional Indonesia (TNI)."
  },
  {
    "id": 39,
    "question": "Sesuai dengan yang ditetapkan oleh UUD 1945 pasal 31 ayat 2, maka pemerintah wajib membiayai rakyat Indonesia untuk mendapatkan",
    "options": [
      "Pendidikan dasar",
      "Pendidikan menengah",
      "Pendidikan dasar dan menengah",
      "Pendidikan luar sekolah",
      "Pendidikan tinggi"
    ],
    "correctAnswer": 2,
    "explanation": "Sesuai dengan UUD 1945 Pasal 31 ayat 2, 'Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya.'"
  },
  {
    "id": 40,
    "question": "Negara menghormati dan memelihara bahasa daerah sebagai kekayaan budaya nasional. Hal ini disebutkan oleh UUD 1945",
    "options": ["Pasal 32", "Pasal 33", "Pasal 34", "Pasal 35", "Pasal 36"],
    "correctAnswer": 0,
    "explanation": "Negara menghormati dan memelihara bahasa daerah sebagai kekayaan budaya nasional diatur dalam UUD 1945 Pasal 32."
  },
  {
    "id": 41,
    "question": "Menurut pasal 34 UUD 1945, fasilitas pelayanan kesehatan dan fasilitas pelayanan umum yang layak harus disediakan oleh",
    "options": [
      "Pemerintah",
      "Menteri kesehatan",
      "Negara",
      "Departemen kesehatan",
      "Ikatan dokter indonesia"
    ],
    "correctAnswer": 2,
    "explanation": "Menurut Pasal 34 UUD 1945, 'Negara bertanggung jawab atas penyediaan fasilitas pelayanan kesehatan dan fasilitas pelayanan umum yang layak.'"
  },
  {
    "id": 42,
    "question": "Perubahan UUD diatur dalam pasal",
    "options": ["Pasal 35", "Pasal 36", "Pasal 37", "Pasal 38", "Pasal 39"],
    "correctAnswer": 2,
    "explanation": "Perubahan Undang-Undang Dasar diatur dalam UUD 1945 Pasal 37."
  },
  {
    "id": 43,
    "question": "Syarat mengubah UUD, sidang MPR harus dihadiri oleh setidaknya",
    "options": [
      "2/3 dari jumlah anggota MPR",
      "1/3 dari jumlah anggota MPR",
      "2/5 dari jumlah anggota MPR",
      "1/4 dari jumlah anggota MPR",
      "2/4 dari jumlah anggota MPR"
    ],
    "correctAnswer": 0,
    "explanation": "Untuk mengubah UUD, sidang MPR harus dihadiri oleh sekurang-kurangnya 2/3 dari jumlah anggota MPR, ini diatur dalam UUD 1945 Pasal 37 ayat 1."
  },
  {
    "id": 44,
    "question": "Syarat pengubahan pasal-pasal UUD haruslah disetujui oleh MPR minimal sejumlah",
    "options": ["51 persen", "50 persen", "Kurang lebih 50 persen", "50 persen plus 1", "51 persen plus 1"],
    "correctAnswer": 3,
    "explanation": "Syarat pengubahan pasal-pasal UUD haruslah disetujui oleh MPR minimal sejumlah 50 persen ditambah 1 (satu) dari seluruh anggota. Ini diatur dalam UUD 1945 Pasal 37 ayat 3."
  },
  {
    "id": 45,
    "question": "Bangsa Indonesia bertekad untuk menentang setiap bentuk penjajahan. Hal ini tertuang dalam Pembukaan UUD 1945",
    "options": ["Alinea 1", "Alinea 2", "Alinea 3", "Alinea 4", "Alinea 5"],
    "correctAnswer": 0,
    "explanation": "Tekad bangsa Indonesia untuk menentang penjajahan tertuang dalam Pembukaan UUD 1945 Alinea 1."
  },
  {
    "id": 46,
    "question": "Pembukaan UUD 1945 alinea keempat memuat tujuan bangsa Indonesia seperti berikut ini, kecuali :",
    "options": [
      "Melindungi bangsa dan tanah air",
      "Memajukan kesejahteraan umum",
      "Mencerdaskan kehidupan bangsa",
      "Ikut melaksanakan ketertiban dunia",
      "Turut melindungi stabilitas kawasan"
    ],
    "correctAnswer": 4,
    "explanation": "Tujuan bangsa Indonesia yang termuat dalam Pembukaan UUD 1945 Alinea keempat adalah melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial. 'Turut melindungi stabilitas kawasan' tidak termasuk."
  },
  {
    "id": 47,
    "question": "Aturan peralihan UUD 1945 pasal III amandemen keempat tahun 2002, menyatakan bahwa Mahkamah Konstitusi harus dibentuk selambat-lambatnya tanggal 17 Agustus 2003 dan sebelum itu, tugas Mahkamah Konstitusi sementara diemban oleh",
    "options": ["Komisi Yudisial", "Hakim Agung", "Jaksa Agung", "Mahkamah Agung", "DPR"],
    "correctAnswer": 3,
    "explanation": "Sebelum terbentuknya Mahkamah Konstitusi, tugasnya sementara diemban oleh Mahkamah Agung. Hal ini diatur dalam Aturan Peralihan Pasal III UUD 1945 Amandemen Keempat."
  },
  {
    "id": 48,
    "question": "Kedudukan UUD 1945 adalah sebagaimana yang dijelaskan di bawah ini, kecuali :",
    "options": [
      "Hukum dasar yang tertulis yang berlaku di Indonesia",
      "Sumber hukum tertulis tertinggi yang berlaku di Indonesia",
      "Konstitusi yang berlaku di Indonesia sejak 5 Juli 1959",
      "Satu-satunya hukum dasar yang berlaku di Indonesia",
      "Sebagian hukum dasar yang berlaku di Indonesia"
    ],
    "correctAnswer": 3,
    "explanation": "UUD 1945 bukan satu-satunya hukum dasar yang berlaku di Indonesia, karena masih ada hukum dasar tidak tertulis (konvensi). UUD 1945 adalah hukum dasar tertulis tertinggi, dan konstitusi yang berlaku sejak Dekrit Presiden 5 Juli 1959 (kembali ke UUD 1945)."
  },
  {
    "id": 49,
    "question": "Dalam kurun waktu 1945-1949 UUD 1945 belum dapat dilaksanakan dengan baik karena bangsa Indonesia masih sibuk dengan peperangan. Maka tugas legislatif diserahkan kepada KNIP melalui",
    "options": [
      "Maklumat Wakil Presiden no. I",
      "Maklumat Wakil Presiden no. II",
      "Maklumat Wakil Presiden no. III",
      "Maklumat Wakil Presiden no. IX",
      "Maklumat Wakil Presiden no. X"
    ],
    "correctAnswer": 4,
    "explanation": "Dalam kurun waktu 1945-1949, tugas legislatif diserahkan kepada KNIP melalui Maklumat Wakil Presiden No. X."
  },
  {
    "id": 50,
    "question": "Manipol USDEK Presiden Soekarno adalah kepanjangan dari",
    "options": [
      "UUD 45, Sosialisme Terpimpin, Demokrasi Terpimpin, Ekonomi Terpimpin, Kepribadian Indonesia",
      "UUD 45, Sosialisme Indonesia, Demokrasi Terpimpin, Ekonomi Terpimpin, Kepribadian Indonesia",
      "UUD 45, Sosialisme Terpimpin, Demokrasi Terpimpin, Ekonomi Terpimpin, Kebangsaan Indonesia",
      "UUD 45, Sosialisme, Demokrasi Terpimpin, Ekonomi, Kepribadian Indonesia",
      "UUD 45, Sosialisme, Demokrasi, Ekonomi, Kepribadian Indonesia"
    ],
    "correctAnswer": 0,
    "explanation": "Manipol USDEK adalah singkatan dari Manifestasi Politik Undang-Undang Dasar 1945, Sosialisme Indonesia, Demokrasi Terpimpin, Ekonomi Terpimpin, dan Kepribadian Indonesia."
  },
  {
    "id": 51,
    "question": "Isi UUD 45 telah diamandemen beberapa kali. Namun demikian, Pembukaan UUD 45 tidak boleh diamandemen. Kenapa ?",
    "options": [
      "Karena tidak sesuai dengan Kesepakatan para pendiri bangsa",
      "Karena Pembukaan UUD 45 berisi dasar Negara, dan merupakan kelangsungan hidup dan sejarah bangsa",
      "Karena teramat penting untuk diubah",
      "Karena belum ada Perpu mengenai hal itu",
      "Pilihan diatas salah semua, karena pembukaan UUD boleh diubah."
    ],
    "correctAnswer": 1,
    "explanation": "Pembukaan UUD 1945 tidak boleh diamandemen karena berisi dasar negara (Pancasila), cita-cita proklamasi, dan merupakan kelangsungan hidup serta sejarah bangsa Indonesia."
  },
  {
    "id": 52,
    "question": "Apa yang dimaksud dengan pengertian Pancasila secara etimologis ?",
    "options": [
      "Artinya dasar yang memiliki lima sendi",
      "Artinya lima pengertian pokok",
      "Artinya lima yang utama",
      "Artinya lima tata laku",
      "Artinya lima keutamaan"
    ],
    "correctAnswer": 0,
    "explanation": "Secara etimologis, 'Pancasila' berasal dari bahasa Sanskerta yang berarti 'lima dasar' atau 'lima sendi'."
  },
  {
    "id": 53,
    "question": "Berasal dari bahasa apakah istilah \"Pancasila\" ?",
    "options": ["Hierogliph", "Sansekerta", "Prapanca", "Kertajaya", "Negarakertagama"],
    "correctAnswer": 1,
    "explanation": "Istilah 'Pancasila' berasal dari bahasa Sanskerta."
  },
  {
    "id": 54,
    "question": "Istilah \"Pancasila\" ditemukan pada jaman kerajaan Majapahit, yaitu berada dalam kitab",
    "options": ["Baratayudha", "Prapanca", "Centhini", "Sutasoma", "Negarakertagama"],
    "correctAnswer": 3,
    "explanation": "Istilah 'Pancasila' ditemukan dalam Kitab Sutasoma karangan Empu Tantular pada zaman Kerajaan Majapahit."
  },
  {
    "id": 55,
    "question": "Kitab Negarakertagama yang memuat istilah Pancasila ditulis pada tahun 1365 oleh",
    "options": [
      "Empu Sendok",
      "Empu Gandring",
      "Empu Prapanca",
      "Empu Sakapalwaguna",
      "Empu Ranggawarsita"
    ],
    "correctAnswer": 2,
    "explanation": "Kitab Negarakertagama ditulis pada tahun 1365 oleh Empu Prapanca."
  },
  {
    "id": 56,
    "question": "Istilah \"Bhinneka Tunggal Ika\" terdapat dalam kitab",
    "options": ["Sutasoma", "Bratasena", "Bramastya", "Negarakertagama", "Ramayana"],
    "correctAnswer": 0,
    "explanation": "Istilah 'Bhinneka Tunggal Ika' terdapat dalam Kitab Sutasoma."
  },
  {
    "id": 57,
    "question": "Kitab Sutasoma ditulis oleh",
    "options": ["Empu Tantular", "Empu Charaka", "Empu Prapanca", "Empu Sudarma", "Empu Laksmana"],
    "correctAnswer": 0,
    "explanation": "Kitab Sutasoma ditulis oleh Empu Tantular."
  },
  {
    "id": 58,
    "question": "Dalam konstitusi RIS (Republik Indonesia Serikat), yang berlaku tanggal 29 Desember 1949 sampai dengan 17 Agustus 1950 tercantum rumusan Pancasila. Sebutkan isi rumusan Pancasila dalam konstitusi RIS tersebut",
    "options": [
      "Ketuhanan, Kemanusiaan, Kebangsaan, Kerakyatan, Keadilan Sosial",
      "Ketuhanan, Peri Kemanusiaan, Kebangsaan, Kerakyatan, Keadilan Sosial",
      "Ketuhanan, Kemanusiaan, Persatuan Indonesia, Kerakyatan, Keadilan Sosial",
      "Ketuhanan, Kemanusiaan, Kebangsaan, Kerakyatan, Keadilan",
      "Ketuhanan Yang Maha Esa, Peri Kemanusiaan, Kebangsaan, Kerakyatan, Keadilan Sosial"
    ],
    "correctAnswer": 0,
    "explanation": "Rumusan Pancasila dalam Konstitusi RIS (29 Desember 1949 - 17 Agustus 1950) adalah: Ketuhanan, Kemanusiaan, Kebangsaan, Kerakyatan, Keadilan Sosial."
  },
  {
    "id": 59,
    "question": "Rumusan Pancasila yang terdapat dalam konstitusi RIS juga tercantum sama persis dalam",
    "options": [
      "UUDS 1950. Berlaku tanggal 17 Agustus 1950 – 5 Juli 1959",
      "UUD 1950. Berlaku tanggal 17 Agustus 1950 – 5 Juli 1959",
      "UUD 1945. Berlaku tanggal 17 Agustus 1950 – 5 Juli 1959",
      "UUDS 1950. Berlaku tanggal 18 Agustus 1950 – 5 Juli 1959",
      "UUDS 1950. Berlaku tanggal 20 Agustus 1950 – 5 Juli 1959"
    ],
    "correctAnswer": 0,
    "explanation": "Rumusan Pancasila dalam Konstitusi RIS sama persis dengan yang tercantum dalam UUDS 1950 (Undang-Undang Dasar Sementara 1950), yang berlaku dari 17 Agustus 1950 hingga 5 Juli 1959."
  },
  {
    "id": 60,
    "question": "Rumusan Pancasila yang sah dan benar (baik pengucapan maupun penulisan) terdapat dalam",
    "options": [
      "Pembukaan UUD 1945",
      "Inpres No.12 tanggal 13 April 1968",
      "TAP MRPS no. XX/MPRS/1966",
      "Kesepakatan seluruh bangsa Indonesia dalam Sumpah Pemuda 28 Oktober 1928",
      "UUDS 1950"
    ],
    "correctAnswer": 0,
    "explanation": "Rumusan Pancasila yang sah dan benar (baik pengucapan maupun penulisan) terdapat dalam Pembukaan UUD 1945."
  },
  {
    "id": 61,
    "question": "Berikut ini yang tidak termasuk dalam isi Dekrit Presiden 5 Juli 1959 adalah",
    "options": [
      "Membubarkan konstituante",
      "Menetapkan berlakunya kembali UUD 1945",
      "Tidak berlakunya lagi UUDS 1950",
      "Dibentuknya MPRS dan DPAS dalam waktu sesingkat- singkatnya",
      "Pembentukan Dewan Penasihat Presiden"
    ],
    "correctAnswer": 4,
    "explanation": "Pembentukan Dewan Penasihat Presiden tidak termasuk dalam isi Dekrit Presiden 5 Juli 1959. Isi dekrit tersebut adalah: pembubaran Konstituante, diberlakukannya kembali UUD 1945 dan tidak berlakunya UUDS 1950, serta pembentukan MPRS dan DPAS dalam waktu sesingkat-singkatnya."
  },
  {
    "id": 62,
    "question": "Mengapa Pancasila disebut suatu kesatuan yang majemuk tunggal. Apa maksudnya ?",
    "options": [
      "Artinya seluruh lima sila yang ada adalah satu kesatuan yang utuh",
      "Pancasila itu satu tapi banyak",
      "Pancasila itu banyak",
      "Pancasila itu tetap tunggal dan Satu",
      "Pancasila itu kaya akan arti"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila disebut kesatuan yang majemuk tunggal karena seluruh lima sila yang ada adalah satu kesatuan yang utuh, tidak dapat dipisahkan satu sama lain."
  },
  {
    "id": 63,
    "question": "Apa konsekuensi dari Pancasila sebagai kesatuan majemuk tunggal ?",
    "options": [
      "Semua sila tak dapat berdiri sendiri tapi dapat berselisih",
      "Semua sila dapat berdiri sendiri tapi tak dapat berselisih",
      "Semua sila tak dapat berdiri sendiri dan tak dapat berselisih",
      "Setiap sila haruslah mampu mandiri dan berdiri sendiri",
      "Setiap sila harus berdiri sendiri maupun bersama-sama"
    ],
    "correctAnswer": 2,
    "explanation": "Konsekuensi dari Pancasila sebagai kesatuan majemuk tunggal adalah semua sila tidak dapat berdiri sendiri dan tidak dapat berselisih, melainkan saling terkait dan membentuk satu kesatuan yang utuh."
  },
  {
    "id": 64,
    "question": "Pernyataan yang benar mengenai rumusan Pancasila sebagai hierarki Piramidal adalah",
    "options": [
      "Sila V meliputi sila IV, III, II dan I",
      "Sila IV meliputi sila V dan I",
      "Sila II meliputi sila I dan III",
      "Sila I meliputi sila II, III, IV, dan V",
      "Sila IV meliputi sila III"
    ],
    "correctAnswer": 3,
    "explanation": "Dalam hierarki piramidal Pancasila, Sila I (Ketuhanan Yang Maha Esa) mendasari, menjiwai, dan meliputi sila-sila berikutnya, yaitu sila II, III, IV, dan V. Dan seterusnya, sila-sila di bawahnya dijiwai oleh sila di atasnya."
  },
  {
    "id": 65,
    "question": "Masing-masing sila Pancasila bersifat saling mengisi dan mengkualifikasi, apa artinya ?",
    "options": [
      "Dalam setiap sila terkandung empat sila lainnya",
      "Dalam setiap sila ada sila lain yang mengkoreksi",
      "Setiap sila harus selalu diseimbangkan dengan sila lain",
      "Sila satu terhadap sila lainnya haruslah bersatu",
      "Sila satu harus mampu meningkatkan nilai tambah sila lainnya"
    ],
    "correctAnswer": 0,
    "explanation": "Sifat saling mengisi dan mengkualifikasi dalam Pancasila berarti dalam setiap sila terkandung empat sila lainnya."
  },
  {
    "id": 66,
    "question": "Apa yang dimaksud dengan Pancasila sebagai satu kesatuan formal logis ?",
    "options": [
      "Kesatuan sila-sila Pancasila bersifat hierarkis piramidal yang menggambarkan hubungan luas",
      "Pancasila memiliki sila-sila yang masuk akal isinya",
      "Pancasila memiliki sila-sila yang tidak bertentangan",
      "Pancasila bersifat formal resmi",
      "Pancasila membentuk kesatuan yang masuk akal"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila sebagai satu kesatuan formal logis berarti kesatuan sila-sila Pancasila bersifat hierarkis piramidal yang menggambarkan hubungan luas dan konsisten secara logis."
  },
  {
    "id": 67,
    "question": "Apa yang menjadi dasar ontologis atau dasar antropologis dari Pancasila ?",
    "options": [
      "Yaitu manusia yang bersifat makhluk sosial",
      "Yaitu manusia yang bersifat makhluk egois",
      "Yaitu manusia yang bersifat makhluk monopluralis",
      "Yaitu manusia yang bersifat makhluk mandiri",
      "Yaitu manusia yang bersifat makhluk komunal"
    ],
    "correctAnswer": 2,
    "explanation": "Dasar ontologis atau dasar antropologis dari Pancasila adalah manusia yang bersifat monopluralis, yaitu makhluk individu dan sekaligus makhluk sosial."
  },
  {
    "id": 68,
    "question": "Sebagai suatu ideologi, Pancasila memiliki tiga unsur pokok. Yaitu",
    "options": [
      "Logos, Etika, Knowing",
      "Panthos, Ethos, Logos",
      "Ethic, Logika, Pengetahuan",
      "Moral, Pengetahuan, Interaksi sosial",
      "Moral, Logika, Emosi"
    ],
    "correctAnswer": 1,
    "explanation": "Sebagai suatu ideologi, Pancasila memiliki tiga unsur pokok, yaitu Panthos (penghayatan), Ethos (etika/moral), dan Logos (rasionalitas/wawasan)."
  },
  {
    "id": 69,
    "question": "Apakah makna dari \"Panthos\" ?",
    "options": ["Kesusilaan", "Kepantasan", "Etika", "Penghayatan", "Keberanian"],
    "correctAnswer": 3,
    "explanation": "Makna dari 'Panthos' adalah **penghayatan**."
  },
  {
    "id": 70,
    "question": "Apakah makna dari \"Ethos\" ?",
    "options": ["Kesusilaan", "Kepantasan", "Norma", "Penghayatan", "Kebersahajaan"],
    "correctAnswer": 0,
    "explanation": "Makna dari 'Ethos' adalah **kesusilaan** atau etika/moral."
  },
  {
    "id": 71,
    "question": "Apakah makna dari \"Logos\" ?",
    "options": ["Wawasan", "Rasionalitas", "Keberanian", "Filsafat", "Ideologi"],
    "correctAnswer": 1,
    "explanation": "Makna dari 'Logos' adalah **rasionalitas** atau wawasan/pengetahuan."
  },
  {
    "id": 72,
    "question": "Bangsa Indonesia adalah causa materialis Pancasila. Apa makna dari istilah tersebut ?",
    "options": [
      "Sumber pengetahuan Pancasila adalah nilai-nilai dari bangsa lain",
      "Sumber pengetahuan Pancasila adalah nilai-nilai dari bangsa Indonesia sendiri",
      "Sumber pengetahuan Pancasila adalah dari nilai-nilai bangsa lain dan bangsa Indonesia sendiri",
      "Sumber pengetahuan Pancasila adalah nilai-nilai dari seluruh bangsa yang ada di dunia",
      "Sumber pengetahuan Pancasila adalah nilai-nilai dari beberapa bangsa yang memilki akar sejarah yang sama dengan bangsa Indonesia"
    ],
    "correctAnswer": 1,
    "explanation": "Causa materialis Pancasila berarti sumber pengetahuan Pancasila adalah nilai-nilai yang sudah ada dan hidup dalam bangsa Indonesia sendiri."
  },
  {
    "id": 73,
    "question": "Susunan isi arti Pancasila meliputi tiga hal. Umum universal, Umum kolektif dan Khusus konkret. Apa maksud dari isi Pancasila bersifat umum universal ?",
    "options": [
      "Dilaksanakan dalam berbagai bidang, baik bidang kenegaraan, bidang hukum maupun bidang-bidang kehidupan yang nyata",
      "Dilaksanakan seluruh negara di dunia",
      "Harus disebarkan ke seluruh penjuru dunia",
      "Merupakan gabungan nilai-nilai luhur seluruh bangsa di dunia",
      "Merupakan milik bersama"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila bersifat umum universal artinya nilai-nilai Pancasila dapat dilaksanakan dalam berbagai bidang kehidupan, baik kenegaraan, hukum, maupun kehidupan nyata."
  },
  {
    "id": 74,
    "question": "Apa maksud dari isi Pancasila bersifat khusus konkret ?",
    "options": [
      "Isi arti Pancasila dalam realisasi praktis di berbagai bidang kehidupan bersifat khusus, konkret dan dinamis",
      "Akar pengetahuan Pancasila adalah khusus dan nyata",
      "Hanya khusus diberlakukan di Indonesia saja",
      "Merupakan gabungan nilai-nilai luhur beberapa bangsa pilihan di dunia",
      "Merupakan keunikan yang nyata"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila bersifat khusus konkret artinya isi arti Pancasila dalam realisasi praktis di berbagai bidang kehidupan bersifat khusus, konkret, dan dinamis."
  },
  {
    "id": 75,
    "question": "Menurut Notonagoro, tingkatan nilai ada tiga macam. Nilai material, nilai vital dan nilai rohani. Apa maksud dari nilai material ?",
    "options": [
      "Yaitu segala sesuatu yang berguna bagi jasmani",
      "Yaitu kekayaan materi",
      "Yaitu kekayaan harta sebagai modal berbuat baik",
      "Uang",
      "Harga sesuatu dibandingkan dengan sesuatu yang lain"
    ],
    "correctAnswer": 0,
    "explanation": "Menurut Notonagoro, nilai material adalah segala sesuatu yang berguna bagi jasmani manusia."
  },
  {
    "id": 76,
    "question": "Sila-sila Pancasila itu bersifat hierarkis piramidal, Apa maksudnya ?",
    "options": [
      "Sila-sila Pancasila itu saling mendukung",
      "Sila-sila Pancasila itu tidak boleh saling bergesekan satu sama lainnya",
      "Sila-sila Pancasila itu berjenjang (bertingkat). Sila pertama mendasari sila berikutnya, dan seterusnya",
      "Sila-sila Pancasila itu semakin mengerucut pada akhirnya",
      "Sila-sila Pancasila itu saling memfokuskan diri"
    ],
    "correctAnswer": 2,
    "explanation": "Sila-sila Pancasila bersifat hierarkis piramidal, yang berarti sila-sila tersebut berjenjang atau bertingkat, di mana sila pertama mendasari sila berikutnya, dan seterusnya."
  },
  {
    "id": 77,
    "question": "Salah satu identitas bangsa Indonesia sesuai dengan Pancasila adalah",
    "options": ["Musyawarah", "Pemilihan umum", "Menghapus segala bentuk penjajahan", "Hidup berdampingan", "Hidup sejahtera"],
    "correctAnswer": 0,
    "explanation": "Salah satu identitas bangsa Indonesia sesuai dengan Pancasila, khususnya sila keempat, adalah **musyawarah** untuk mencapai mufakat."
  },
  {
    "id": 78,
    "question": "Nasionalisme Indonesia terdiri dari kesatuan hal-hal berikut ini, kecuali",
    "options": [
      "Kesatuan sejarah",
      "Kesatuan nasib",
      "Kesatuan wilayah",
      "Kesatuan kebudayaan",
      "Kesatuan peradaban"
    ],
    "correctAnswer": 4,
    "explanation": "Nasionalisme Indonesia meliputi kesatuan sejarah, kesatuan nasib, kesatuan wilayah, dan kesatuan kebudayaan. Kesatuan peradaban bukanlah komponen utama yang secara spesifik disebutkan dalam konteks ini."
  },
  {
    "id": 79,
    "question": "Apa yang dimaksud dengan kesatuan sejarah",
    "options": [
      "Bangsa Indonesia tumbuh dan berkembang dari suatu proses sejarah. Dimulai dari jaman prasejarah, kerajaan lalu Proklamasi 17 Agustus 1945",
      "Bangsa Indonesia memiliki sejarah yang satu. Satu kerajaan dan satu republik",
      "Bangsa Indonesia tidak boleh melupakan sejarah seperti kacang lupa kulitnya",
      "Bangsa Indonesia adalah bangsa besar dengan sejarah beragam",
      "Bangsa Indonesia memiliki kesaan pandangan terhadap sejarah"
    ],
    "correctAnswer": 0,
    "explanation": "Kesatuan sejarah berarti bangsa Indonesia tumbuh dan berkembang dari suatu proses sejarah yang sama, dimulai dari zaman prasejarah, kerajaan, hingga Proklamasi 17 Agustus 1945."
  },
  {
    "id": 80,
    "question": "Apa yang dimaksud dengan kesatuan nasib ?",
    "options": [
      "Bangsa Indonesia pernah mengalami nasib serupa, yakni mengalami jaman kediktatoran kerajaan",
      "Bangsa Indonesia pernah mengalami nasib sama, yakni era penjajahan.",
      "Bangsa Indonesia mengalami nasib sama, yakni sebagai Negara berkembang yang masih miskin",
      "Bangsa Indonesia bernasib Satu",
      "Nasib bangsa Indonesia haruslah sama, yaitu sama- sama sejahtera"
    ],
    "correctAnswer": 1,
    "explanation": "Kesatuan nasib berarti bangsa Indonesia pernah mengalami nasib yang sama, terutama pada era penjajahan, yang kemudian mendorong persatuan untuk meraih kemerdekaan."
  },
  {
    "id": 81,
    "question": "Apa yang dimaksud dengan kesatuan kebudayaan ?",
    "options": [
      "Kesatuan budaya yang tak mungkin dipecah-pecah lagi",
      "Budaya Indonesia meskipun beragam, namun tetap satu, yaitu budaya nasional Indonesia",
      "Budaya daerah adalah Satu",
      "Budaya daerah dan budaya nasional adalah Satu",
      "Bersatu dalam mengembangkan kebudayaan"
    ],
    "correctAnswer": 1,
    "explanation": "Kesatuan kebudayaan berarti meskipun budaya Indonesia beragam, namun tetap satu, yaitu budaya nasional Indonesia yang merupakan puncak-puncak kebudayaan daerah."
  },
  {
    "id": 82,
    "question": "Berdasarkan sila pertama Pancasila, Indonesia adalah Negara berketuhanan. Artinya Indonesia bukan merupakan negara yang sekuler. Apa artinya ?",
    "options": [
      "Indonesia tidak memisahkan urusan agama dengan urusan Negara.",
      "Indonesia tidak mempedulikan urusan agama.",
      "Urusan agama bukanlah urusan Negara",
      "Urusan Negara dan agama harus dipisahkan",
      "Urusan agama adalah urusan pribadi"
    ],
    "correctAnswer": 0,
    "explanation": "Indonesia sebagai negara berketuhanan berarti Indonesia tidak memisahkan urusan agama dengan urusan negara, melainkan mengakui pentingnya nilai-nilai agama dalam kehidupan bernegara."
  },
  {
    "id": 83,
    "question": "Pelaksanaan syariat Islam bagi para pemeluk agama Islam tersebut memiliki dasar hukum yang kuat. Yaitu",
    "options": [
      "Pancasila sila kedua",
      "Pancasila sila pertama dan UUD 45 pasal 29",
      "Pembukaan UUD 45",
      "Pancasila sila kelima",
      "UUD 45 pasa 19"
    ],
    "correctAnswer": 1,
    "explanation": "Pelaksanaan syariat Islam memiliki dasar hukum yang kuat, yaitu Pancasila sila pertama (Ketuhanan Yang Maha Esa) dan UUD 1945 Pasal 29 ayat 1 dan 2, yang menjamin kebebasan beragama dan beribadah menurut agama dan kepercayaannya itu."
  },
  {
    "id": 84,
    "question": "Mengapa ideologi sangat menentukan eksistensi negara ?",
    "options": [
      "Karena ideologi adalah dasar sebuah Negara",
      "Karena setiap Negara harus punya ideologi yang khas",
      "Karena ideologi adalah arahan praktis bagi Negara mencapai tujuannya melalui berbagai realisasi pembangunan",
      "Karena ideologi itu sedapat mungkin tidak diganti",
      "Karena ideologi disusun oleh bapak pendiri bangsa"
    ],
    "correctAnswer": 2,
    "explanation": "Ideologi sangat menentukan eksistensi negara karena ideologi adalah arahan praktis bagi negara untuk mencapai tujuannya melalui berbagai realisasi pembangunan."
  },
  {
    "id": 85,
    "question": "Pancasila merupakan ideologi yang terbuka dan tidak bersifat utopis. Apa maksud Pancasila tidak bersifat utopis ?",
    "options": [
      "Artinya Pancasila itu bisa diterapkan dalam kehidupan sehari-hari secara nyata, bukan ide-ide yang jauh dari realita",
      "Artinya Pancasila itu memang sulit untuk diterapkan dalam kehidupan riil",
      "Artinya Pancasila itu harus diterapkan dalam kehidupan sehari-hari",
      "Artinya Pancasila adalah ideologi yang jauh dari realita",
      "Artinya Pancasila adalah ideologi yang filosofis"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila tidak bersifat utopis artinya Pancasila bisa diterapkan dalam kehidupan sehari-hari secara nyata, bukan ide-ide yang jauh dari realita."
  },
  {
    "id": 86,
    "question": "Sila kelima Pancasila adalah tentang keadilan. Adapun dalam kehidupan bermasyarakat, keadilan sosial harus meliputi tiga hal. Yaitu keadilan distributif, keadilan legal dan keadilan komutatif. Apa maksud dari keadilan distributif ?",
    "options": [
      "Keadilan membagi. Yaitu keadilan Negara terhadap warganya",
      "Keadilan saling berbagi",
      "Keadilan mendapatkan bagian paling baik",
      "Keadilan sesama warga",
      "Keadilan mutlak"
    ],
    "correctAnswer": 0,
    "explanation": "Keadilan distributif adalah keadilan dalam hal pembagian, yaitu keadilan Negara terhadap warganya dalam pembagian hak dan kewajiban."
  },
  {
    "id": 87,
    "question": "Apa yang dimaksud dengan keadilan legal ?",
    "options": [
      "Keadilan yang sah",
      "Keadilan tanpa harus melanggar hukum",
      "Keadilan bertaat. Keadilaan warga untuk patuh pada peraturan dan perundang-undangan Negara",
      "Keadilan mendapatkan bagian paling baik",
      "Keadilan mutlak"
    ],
    "correctAnswer": 2,
    "explanation": "Keadilan legal adalah keadilan bertaat, yaitu keadilan warga untuk patuh pada peraturan dan perundang-undangan Negara."
  },
  {
    "id": 88,
    "question": "Apa yang dimaksud dengan keadilan komutatif ?",
    "options": [
      "Keadilan yang mementingkan diri sendiri",
      "Keadilan antara sesama warga Negara.",
      "Keadilan antara warga dengan Negara",
      "Keadilan yang tak dapat diganggu gugat",
      "Keadilan yang seadil-adilnya"
    ],
    "correctAnswer": 1,
    "explanation": "Keadilan komutatif adalah keadilan antara sesama warga negara."
  },
  {
    "id": 89,
    "question": "Indonesia adalah Negara hukum. Dan sebagai Negara hukum, Indonesia haruslah memiliki syarat-syarat sebagai Negara hukum seperti berikut ini, kecuali :",
    "options": [
      "Pengakuan atas Hak Asasi Manusia",
      "Perlindungan atas Hak Asasi Manusia",
      "Peradilan yang bebas",
      "Legalitas hukum dalam segala bentuknya",
      "Sistem hukum yang fleksibel"
    ],
    "correctAnswer": 4,
    "explanation": "Sistem hukum yang fleksibel bukanlah syarat utama negara hukum. Syarat negara hukum antara lain pengakuan dan perlindungan HAM, peradilan yang bebas, dan legalitas hukum dalam segala bentuknya."
  },
  {
    "id": 90,
    "question": "Tertib hukum di Indonesia memiliki empat syarat berikut ini, kecuali :",
    "options": [
      "Adanya kesatuan subyek",
      "Adanya kesatuan asas kerohanian",
      "Adanya kesatuan daerah",
      "Adanya kesatuan waktu",
      "Adanya kesatuan filosofi hidup"
    ],
    "correctAnswer": 4,
    "explanation": "Empat syarat tertib hukum di Indonesia adalah kesatuan subyek (pihak yang berwenang), kesatuan asas kerohanian (Pancasila), kesatuan daerah (wilayah NKRI), dan kesatuan waktu (berlakunya hukum). Adanya kesatuan filosofi hidup bukanlah syarat khusus tertib hukum, meskipun Pancasila sebagai filosofi hidup mendasari hukum."
  },
  {
    "id": 91,
    "question": "Apa yang dimaksud dengan kesatuan subyek",
    "options": [
      "Adalah penguasa yang mengadakan peraturan hukum",
      "Harus ada berbagai pihak yang mengatur masalah hukum",
      "Haruslah adil dalam menetapkan putusan hukum",
      "Rakyat adalah Satu",
      "Wilayah hukum haruslah Satu"
    ],
    "correctAnswer": 0,
    "explanation": "Kesatuan subyek dalam tertib hukum adalah adanya penguasa yang berwenang untuk membuat dan menegakkan peraturan hukum."
  },
  {
    "id": 92,
    "question": "Apa yang dimaksud dengan kesatuan daerah",
    "options": [
      "Adalah penguasa yang mengadakan peraturan hukum",
      "Harus ada berbagai pihak yang mengatur masalah hukum",
      "Haruslah adil dalam menetapkan putusan hukum",
      "Rakyat adalah Satu",
      "Adanya suatu wilayah dimana hukum berlaku"
    ],
    "correctAnswer": 4,
    "explanation": "Kesatuan daerah dalam tertib hukum adalah adanya suatu wilayah di mana hukum berlaku secara seragam."
  },
  {
    "id": 93,
    "question": "Hal-hal berikut ini yang tidak melanggar Pancasila sila pertama dan pasal 29 UUD 45, adalah",
    "options": [
      "Menghalangi umat kristiani melakukan ibadah di gereja",
      "Menghalangi umat hindhu melakukan perintah agamanya sendiri",
      "Menghalangi umat Islam melaksanakan syariah Islam",
      "Membiarkan umat budha yang ingin menjalankan aturan agamanya sendiri",
      "Menghalangi umat konghucu melakukan ajaran agamanya sendiri"
    ],
    "correctAnswer": 3,
    "explanation": "Membiarkan umat Buddha yang ingin menjalankan aturan agamanya sendiri adalah tindakan yang sesuai dengan Pancasila sila pertama (Ketuhanan Yang Maha Esa) dan Pasal 29 UUD 1945, yang menjamin kebebasan beragama."
  },
  {
    "id": 94,
    "question": "Pancasila mengandung nilai instrumental. Apa maksud nilai instrumental ?",
    "options": [
      "Penjabaran, arahan dan lembaga pelaksanaan nilai-nilai dasar Pancasila",
      "Alat mempersatukan bangsa Indonesia",
      "Nilai praktis kehidupan sehari-hari",
      "Nilai-nilai yang berkaitan dengan alat pendirian Negara",
      "Alat penting mendirikan Negara"
    ],
    "correctAnswer": 0,
    "explanation": "Nilai instrumental Pancasila adalah penjabaran, arahan, dan lembaga pelaksanaan nilai-nilai dasar Pancasila dalam bentuk peraturan perundang-undangan dan kebijakan."
  },
  {
    "id": 95,
    "question": "Keunggulan demokrasi Pancasila bila dibandingkan dengan demokrasi lainnya, adalah",
    "options": [
      "Keputusan diambil melalui musyawarah mufakat",
      "Keputusan diambil dengan voting",
      "Keputusan diambil dengan suara terbanyak",
      "Keputusan diambil dengan melandaskan pada rasa kemanusiaan",
      "Hasil keputusan bisa dipertanggungjawabkan"
    ],
    "correctAnswer": 0,
    "explanation": "Keunggulan demokrasi Pancasila dibandingkan demokrasi lainnya adalah penekanan pada pengambilan keputusan melalui **musyawarah mufakat**, bukan hanya voting atau suara terbanyak."
  },
  {
    "id": 96,
    "question": "Hubungan sosial yang selaras, seimbang antara individu dalam masyarakat, adalah dijiwai oleh Pancasila sila ke",
    "options": ["Sila ketiga", "Sila kedua", "Sila pertama", "Sila keempat", "Sila kelima"],
    "correctAnswer": 1,
    "explanation": "Hubungan sosial yang selaras, seimbang antara individu dalam masyarakat dijiwai oleh Pancasila sila **kedua** (Kemanusiaan yang Adil dan Beradab)."
  },
  {
    "id": 97,
    "question": "Salah satu tokoh yang ikut merumuskan Pancasila adalah",
    "options": ["Budi Utomo", "Muh. Yamin", "Adam Malik", "Sarwo Edhi Wibowo", "Soeharto"],
    "correctAnswer": 1,
    "explanation": "Salah satu tokoh yang ikut merumuskan Pancasila adalah **Mohammad Yamin**, bersama dengan Soepomo dan Soekarno."
  },
  {
    "id": 98,
    "question": "Sikap berikut adalah sesuai dengan pengamalan Pancasila sila keempat. Yaitu",
    "options": [
      "Saling menghormati antar umat beragama",
      "Hidup dengan selaras, seimbang damai antar berbagai elemen masyarakat",
      "Mendahulukan kepentingan umum daripada kepentingan pribadi",
      "Menumbuhkan sikap saling tolong menolong",
      "Menolak ide-ide separatisme"
    ],
    "correctAnswer": 2,
    "explanation": "Sikap yang sesuai dengan pengamalan Pancasila sila keempat (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan) adalah **mendahulukan kepentingan umum daripada kepentingan pribadi**, karena sila ini menekankan pada musyawarah untuk kepentingan bersama."
  },
  {
    "id": 99,
    "question": "Bergaya hidup mewah di negara berkembang seperti Indonesia, yang di kanan kiri masih banyak rakyat miskin, adalah bertolak belakang dengan pengamalan Pancasila",
    "options": ["Sila pertama", "Sila kedua", "Sila ketiga", "Sila keempat", "Sila kelima"],
    "correctAnswer": 4,
    "explanation": "Bergaya hidup mewah di tengah kemiskinan bertolak belakang dengan pengamalan Pancasila sila **kelima** (Keadilan Sosial bagi Seluruh Rakyat Indonesia), yang mengedepankan pemerataan dan keadilan sosial."
  },
  {
    "id": 100,
    "question": "Pernyataan yang selaras dengan sila kedua Pancasila adalah",
    "options": [
      "Martabat dan derajat manusia adalah sama",
      "Seorang pejabat Negara memiliki derajat lebih tinggi daripada petani biasa",
      "Artis ibukota memiliki martabat lebih tinggi dibandingkan dengan  yang bukan artis",
      "Derajat dan martabat seseorang tergantung keturunannya",
      "Anggota Dewan Perwakilan Rakyat (DPR) adalah orang pilihan rakyat yang memiliki derajat lebih unggul dibandingkan dengan rakyat biasa"
    ],
    "correctAnswer": 0,
    "explanation": "Pernyataan yang selaras dengan sila kedua Pancasila (Kemanusiaan yang Adil dan Beradab) adalah **martabat dan derajat manusia adalah sama**, menjunjung tinggi persamaan hak dan kewajiban tanpa memandang status sosial."
  }
].map(transformQuestion);
