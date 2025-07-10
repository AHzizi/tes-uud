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
    "question": "Pancasila memenuhi syarat sebagai staats fundamental norm karena tercantum dalam pembukaan UUD 1945. Yang dimaksud Pancasila sebagai staats fundamental norm adalah..",
    "options": [
      "Pancasila berfungsi untuk memberikan pandangan bagi bangsa lain",
      "Pancasila sebagai sumber hukum tertinggi dan kedudukannya tidak dapat dirubah",
      "Pancasila sebagai peraturan untuk mengatur hidup orang banyak",
      "Pancasila sebagai dasar hukum",
      "Norma yang berlaku di Indonesia disesuaikan dengan norma norma yg berlaku di dunia"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila sebagai staats fundamental norm berarti Pancasila adalah sumber hukum tertinggi dan kedudukannya tidak dapat dirubah."
  },
  {
    "id": 2,
    "question": "Masyarakat Indonesia mempunyai cita-cita bersama yang harus diwujudkan untuk kesejahteraan seluruh rakyat. Berbagai cara dilakukan agar cita-cita tersebut dapat terwujud. Hal ini karena Pancasila berperan sebagai...",
    "options": [
      "falsafah bangsa",
      "dasar negara",
      "ideologi negara",
      "cita-cita bangsa",
      "instrumen bangsa"
    ],
    "correctAnswer": 2,
    "explanation": "Pancasila berperan sebagai ideologi negara yang memuat cita-cita bangsa dan menjadi pedoman dalam mewujudkannya."
  },
  {
    "id": 3,
    "question": "Peraturan yang ada di negara ini, baik itu yang tertulis maupun tidak tertulis semuanya harus bersumber pada Pancasila, karena Pancasila sebagai...",
    "options": [
      "ideologi bangsa",
      "falsafah bangsa",
      "instrumen bangsa",
      "dasar Negara",
      "tujuan Negara"
    ],
    "correctAnswer": 3,
    "explanation": "Pancasila adalah dasar negara, sehingga semua peraturan harus bersumber padanya."
  },
  {
    "id": 4,
    "question": "Pancasila sebagai dasar negara Indonesia melewati proses yang panjang hingga akhirnya sampai pada perumusan final, yaitu pengesahan konstitusional. Pengesahan Pancasila sebagai dasar negara terjadi pada tanggal...",
    "options": [
      "1 Juni 1945",
      "22 Juni 1945",
      "17 Agustus 1945",
      "18 Agustus 1945",
      "19 Agustus 1945"
    ],
    "correctAnswer": 3,
    "explanation": "Pancasila disahkan sebagai dasar negara pada tanggal 18 Agustus 1945 oleh PPKI."
  },
  {
    "id": 5,
    "question": "Pancasila menjadi petunjuk untuk membuat aturan hukum serta pedoman untuk kehidupan bernegara. Hal ini karena Pancasila merupakan...",
    "options": [
      "Dasar dan ideologi Negara",
      "Kemauan Negara",
      "Keputusan bersama seluruh rakyat",
      "Pemikiran negara baru",
      "Perangkat yang digunakan untuk menjalankan roda pemerintahan"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila adalah dasar dan ideologi negara yang menjadi petunjuk dalam pembentukan aturan hukum dan pedoman bernegara."
  },
  {
    "id": 6,
    "question": "Sikap menjunjung tinggi keadilan, menjaga kelestarian lingkungan sekitar, serta menghormati pemeluk agama lain merupakan salah satu contoh pengamalan nilai Pancasila dalam kehidupan sehari-hari. Nilai Pancasila yang dimaksud adalah...",
    "options": [
      "Nilai kerohanian",
      "Nilai filosofis",
      "Nilai filsafat",
      "Nilai abstrak",
      "Nilai umum"
    ],
    "correctAnswer": 1,
    "explanation": "Nilai-nilai keadilan, kelestarian lingkungan, dan toleransi beragama adalah contoh pengamalan nilai-nilai filosofis Pancasila."
  },
  {
    "id": 7,
    "question": "Piagam Jakarta berisi perlawanan terhadap imperialisme, kapitalisme, fasisme, serta memulai dasar pembentukan Republik Indonesia. Sebelum akhirnya dijadikan sebagai Pembukaan UUD 1945, naskah Piagam Jakarta disusun untuk dijadikan teks Proklamasi kemerdekaan Indonesia oleh panitia yang merumuskannya. Yang merumuskan Piagam Jakarta adalah.....",
    "options": [
      "BPUPKI",
      "PPKI",
      "Muh. Yamin",
      "Panitia kecil",
      "Panitia Sembilan"
    ],
    "correctAnswer": 4,
    "explanation": "Piagam Jakarta dirumuskan oleh Panitia Sembilan."
  },
  {
    "id": 8,
    "question": "Pembukaan UUD 1945 merupakan penyebab Batang Tubuh UUD 1945. hal tersebut merupakan maksud hubungan Pembukaan UUD 1945 dengan Batang Tubuh UUD 1945 yang bersifat...",
    "options": [
      "Fundamental",
      "Formal",
      "Kausal",
      "Ketetapan",
      "Permanen"
    ],
    "correctAnswer": 2,
    "explanation": "Hubungan antara Pembukaan UUD 1945 dan Batang Tubuh UUD 1945 bersifat kausal, artinya Pembukaan adalah sebab dari adanya Batang Tubuh."
  },
  {
    "id": 9,
    "question": "Alasan Yuridis pembukaan UUD 1945 tidak dapat diubah adalah....",
    "options": [
      "Pembukaan UUD 1945 tetap melekat erat dengan terbentuknya Negara",
      "Pembukaan adalah pokok kaidah negara yang fundamental",
      "Proklamasi merupakan kehendak Tuhan",
      "Berhubungan dengan nasib warga negara",
      "Jika diubah akan mengubah nilai dasar yang ada di dalamnya"
    ],
    "correctAnswer": 1,
    "explanation": "Pembukaan UUD 1945 tidak dapat diubah karena merupakan pokok kaidah negara yang fundamental (Staatsfundamentalnorm)."
  },
  {
    "id": 10,
    "question": "Didalam UUD 1945 terdapat bab yang mengatur tentang perubahan Undang-Undang. Hal khusus yang tidak dapat dilakukan perubahan adalah...",
    "options": [
      "Pasal UUD",
      "Bentuk negara",
      "Agenda sidang MPR",
      "Pelaksanaan pemerintahan",
      "Peraturan presiden"
    ],
    "correctAnswer": 1,
    "explanation": "Bentuk Negara Kesatuan Republik Indonesia (NKRI) tidak dapat diubah berdasarkan UUD 1945."
  },
  {
    "id": 11,
    "question": "Apabila RUU yang telah disetujui bersama tidak disahkan presiden dalam jangka waktu 30 hari semenjak RUU tersebut disetujui maka...",
    "options": [
      "RUU tersebut tidak dapat digunakan",
      "Sah menjadi UU dan harus diundangkan",
      "RUU tersebut batal demi hukum",
      "DPR meminta presiden untuk segera mengesahkan RUU tersebut",
      "Harus diajukan kembali pada sidang masa berikutnya"
    ],
    "correctAnswer": 1,
    "explanation": "Menurut Pasal 20 ayat (5) UUD 1945, jika RUU yang telah disetujui DPR dan Presiden tidak disahkan Presiden dalam waktu 30 hari, maka RUU tersebut sah menjadi undang-undang dan wajib diundangkan."
  },
  {
    "id": 12,
    "question": "Pihak atau lembaga yang mempunyai wewenang untuk memberikan gelar, tanda jasa, dan tanda kehormatan lainnya adalah.....",
    "options": [
      "Presiden",
      "MPR",
      "DPR",
      "Mahkamah Agung",
      "Komisi Yudisial"
    ],
    "correctAnswer": 0,
    "explanation": "Berdasarkan UUD 1945 Pasal 15, Presiden memberi gelar, tanda jasa, dan lain-lain tanda kehormatan."
  },
  {
    "id": 13,
    "question": "Kedudukan Pancasila sebagai dasar negara Indonesia tercantum dalam...",
    "options": [
      "Pembukaan UUD 1945 alinea kedua",
      "Pembukaan UUD 1945 alinea ketiga",
      "Pembukaan UUD 1945 alinea keempat",
      "Batang tubuh UUD 1945",
      "TAP MPR"
    ],
    "correctAnswer": 2,
    "explanation": "Kedudukan Pancasila sebagai dasar negara Indonesia tercantum dalam Pembukaan UUD 1945 alinea keempat."
  },
  {
    "id": 14,
    "question": "Berdasarkan UU No. 12 Tahun 2011 yang menjadi urutan tertinggi perundangan Republik Indonesia adalah...",
    "options": [
      "Pancasila",
      "UUD 1945",
      "Undang-Undang",
      "Ketetapan MPR",
      "Peraturan Presiden"
    ],
    "correctAnswer": 1,
    "explanation": "Menurut UU No. 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan, hierarki peraturan perundang-undangan tertinggi adalah UUD 1945."
  },
  {
    "id": 15,
    "question": "Pengaturan mengenai Hak Asasi Manusia pada UUD 1945 terletak pada bab...",
    "options": [
      "XV",
      "XVI",
      "XA",
      "XII",
      "V"
    ],
    "correctAnswer": 2,
    "explanation": "Pengaturan mengenai Hak Asasi Manusia pada UUD 1945 terletak pada Bab XA (Pasal 28A sampai 28J)."
  },
  {
    "id": 16,
    "question": "Peraturan daerah berada di urutan terakhir pada hierarki perundangan. Peraturan daerah dibuat oleh.....",
    "options": [
      "DPR",
      "DPRD",
      "Gubernur",
      "DPRD dan Gubernur",
      "DPR dan DPRD"
    ],
    "correctAnswer": 3,
    "explanation": "Peraturan daerah dibuat oleh Dewan Perwakilan Rakyat Daerah (DPRD) bersama dengan Gubernur/Bupati/Wali Kota."
  },
  {
    "id": 17,
    "question": "Dalam kehidupan yang berdasarkan Pancasila, kehidupan masyarakat tidak dapat dipisahkan satu dengan yang lainnya, begitu pula dalam perekonomian yang harus mengedepankan kepentingan bersama. Hal ini sesuai dengan prinsip Pancasila yaitu sila...",
    "options": [
      "Ketuhanan yang maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang dipimpin oleh hikmat dalam permusyawaratan/perwakilan",
      "Keadilan sosial bagi seluruh rakyat Indonesia"
    ],
    "correctAnswer": 4,
    "explanation": "Prinsip mengedepankan kepentingan bersama dalam perekonomian dan tidak dapat dipisahkan satu dengan lainnya sesuai dengan sila kelima Pancasila: Keadilan sosial bagi seluruh rakyat Indonesia."
  },
  {
    "id": 18,
    "question": "Kemerdekaan merupakan jalan untuk mewujudkan cita-cita bangsa merupakan makna yang terkandung dari pembukaan UUD 1945 alinea...",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Makna kemerdekaan sebagai jalan untuk mewujudkan cita-cita bangsa terkandung dalam Pembukaan UUD 1945 alinea kedua."
  },
  {
    "id": 19,
    "question": "Kekuasaan kehakiman merupakan lembaga yang kedua tanpa campur tangan pihak lain untuk dapat menegakkan hukum yang penuh dengan keadilan. Lembaga yang memegang kekuasaan kehakiman di Indonesia adalah.....",
    "options": [
      "Komisi Yudisial",
      "Kejaksaan Agung",
      "Komisi Pemberantasan Korupsi",
      "DPR",
      "Mahkamah Agung"
    ],
    "correctAnswer": 4,
    "explanation": "Mahkamah Agung adalah salah satu lembaga yang memegang kekuasaan kehakiman di Indonesia, bersama dengan Mahkamah Konstitusi."
  },
  {
    "id": 20,
    "question": "UUD 1945 sudah mengalami amandemen sebanyak 4 kali. Amandemen UUD 1945 yang kedua dilangsungkan pada tanggal...",
    "options": [
      "12-21 Oktober 1998",
      "14-21 Oktober 1999",
      "7-18 Agustus 2000",
      "1-9 November 2001",
      "19-26 Agustus 2001"
    ],
    "correctAnswer": 2,
    "explanation": "Amandemen UUD 1945 yang kedua dilangsungkan pada 7-18 Agustus 2000."
  },
  {
    "id": 21,
    "question": "Negara mempunyai hak untuk memperoleh kemerdekaan. Hal ini tercantum pada....",
    "options": [
      "Batang tubuh pasal 1 ayat 1",
      "Batang tubuh pasal 2 ayat 1",
      "Pembukan alinea 1",
      "Pembukaan alinea 4",
      "Batang tubuh pasal 1 ayat 3"
    ],
    "correctAnswer": 2,
    "explanation": "Hak bangsa untuk merdeka tercantum dalam Pembukaan UUD 1945 alinea pertama."
  },
  {
    "id": 22,
    "question": "UUD 1945 telah mengalami 4 kali amandemen. Aturan peralihan pada UUD 1945 setelah amandemen memiliki...",
    "options": [
      "1 Pasal",
      "2 Pasal",
      "3 Pasal",
      "4 Pasal",
      "5 Pasal"
    ],
    "correctAnswer": 2,
    "explanation": "Aturan peralihan pada UUD 1945 setelah amandemen memiliki 3 pasal."
  },
  {
    "id": 23,
    "question": "Hak dan kewajiban warga negara untuk ikut serta dalam usaha pertahanan dan keamanan negara diatur melalui UUD 1945 Pasal...",
    "options": [
      "26 Ayat 1",
      "27 Ayat 1",
      "27 Ayat 2",
      "30 Ayat 1",
      "30 Ayat 2"
    ],
    "correctAnswer": 3,
    "explanation": "Hak dan kewajiban warga negara dalam usaha pertahanan dan keamanan negara diatur dalam UUD 1945 Pasal 30 ayat (1)."
  },
  {
    "id": 24,
    "question": "Lembaga yang wajib memberikan putusan atas pendapat DPR mengenai pelanggaran yang dilakukan presiden dan/atau wakil presiden adalah.....",
    "options": [
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "MPR",
      "Komisi Yudisial",
      "DPR"
    ],
    "correctAnswer": 1,
    "explanation": "Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji undang-undang terhadap Undang-Undang Dasar, memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh Undang-Undang Dasar, memutus pembubaran partai politik, dan memutus perselisihan tentang hasil pemilihan umum, serta memutus pendapat Dewan Perwakilan Rakyat mengenai dugaan pelanggaran oleh Presiden dan/atau Wakil Presiden menurut Undang-Undang Dasar."
  },
  {
    "id": 25,
    "question": "Setiap warga negara berhak mendapatkan fasilitas kesehatan yang layak. Hal ini diatur dalam UUD 1945 yang merupakan hasil amandemen ke..",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "Hak warga negara untuk mendapatkan fasilitas kesehatan yang layak diatur dalam Pasal 28H ayat (1) UUD 1945, yang merupakan hasil amandemen ketiga."
  },
  {
    "id": 26,
    "question": "Perjuangan Indonesia menentang ketidak adilan termuat pada pembukaan UUD 1945 alinea...",
    "options": [
      "1 dan 3",
      "4",
      "2 dan 4",
      "3 dan 2",
      "1 dan 4"
    ],
    "correctAnswer": 0,
    "explanation": "Perjuangan Indonesia menentang ketidakadilan termuat pada Pembukaan UUD 1945 alinea pertama ('bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan di atas dunia harus dihapuskan karena tidak sesuai dengan perikemanusiaan dan perikeadilan') dan alinea ketiga ('Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya.')."
  },
  {
    "id": 27,
    "question": "RUU APBN diajukan oleh presiden untuk dibahas bersama DPR harus memperhatikan pertimbangan.....",
    "options": [
      "MPR",
      "DPD",
      "BPK",
      "BPKP",
      "Menteri Keuangan"
    ],
    "correctAnswer": 1,
    "explanation": "RUU APBN yang diajukan oleh presiden dan dibahas bersama DPR harus memperhatikan pertimbangan Dewan Perwakilan Daerah (DPD)."
  },
  {
    "id": 28,
    "question": "Negara yang melindungi segenap bangsa dan seluruh tumpah darah Indonesia merupakan penjabaran sila ke...",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "Melindungi segenap bangsa dan seluruh tumpah darah Indonesia adalah penjabaran dari sila ketiga Pancasila: Persatuan Indonesia."
  },
  {
    "id": 29,
    "question": "Proses pembuatan Pancasila menjadi dasar negara melalui proses yang panjang. Yang memperkenalkan istilah Pancasila pertama kali adalah...",
    "options": [
      "Drs. Moh. Hatta",
      "Muh. Yamin",
      "Ir. Soekarno",
      "Soepomo",
      "DR Radjiman"
    ],
    "correctAnswer": 2,
    "explanation": "Istilah Pancasila pertama kali diperkenalkan oleh Ir. Soekarno dalam pidatonya pada tanggal 1 Juni 1945."
  },
  {
    "id": 30,
    "question": "Yang dimaksud dengan nasionalisme religius adalah...",
    "options": [
      "Menjunjung tinggi Negara di kancah internasional",
      "Perasaan bangga terhadap Negara yang berlebihan dan merasa paling benar",
      "Semangat berbangsa dan bernegara beragama",
      "Semangat kebangsaan yang dilandasi moral dan nilai ketuhanan",
      "Negara berdasarkan hukum agama"
    ],
    "correctAnswer": 3,
    "explanation": "Nasionalisme religius adalah semangat kebangsaan yang dilandasi moral dan nilai ketuhanan."
  },
  {
    "id": 31,
    "question": "'Atas berkat rahmat Allah Yang Maha Kuasa...' adalah cuplikan pembukaan UUD 1945 alinea ketiga yang memiliki makna...",
    "options": [
      "Momentum pernyataan kemerdekaan",
      "Kemerdekaan harus diisi oleh program pembangunan",
      "Kehidupan seimbang antara kebutuhan spiritual dan materiel",
      "Motivasi luhur dan spiritual terhadap kemerdekaan",
      "Kemerdekaan adalah tujuan akhir negara Indonesia"
    ],
    "correctAnswer": 3,
    "explanation": "Frasa 'Atas berkat rahmat Allah Yang Maha Kuasa...' pada Pembukaan UUD 1945 alinea ketiga menunjukkan motivasi luhur dan spiritual terhadap kemerdekaan."
  },
  {
    "id": 32,
    "question": "Saling menghormati dan tidak membeda-bedakan manusia berdasarkan suku atau golongan merupakan salah satu contoh yang terkandung dalam sila...",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Sikap saling menghormati dan tidak membeda-bedakan manusia berdasarkan suku atau golongan merupakan contoh pengamalan sila kedua Pancasila: Kemanusiaan yang adil dan beradab."
  },
  {
    "id": 33,
    "question": "Negara Indonesia merupakan negara demokrasi. Hal tersebut merupakan penjabaran sila...",
    "options": [
      "Ketuhanan yang maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang dipimpin oleh hikmat dalam permusyawaratan/perwakilan",
      "Keadilan sosial bagi seluruh rakyat Indonesia"
    ],
    "correctAnswer": 3,
    "explanation": "Indonesia sebagai negara demokrasi adalah penjabaran dari sila keempat Pancasila: Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan."
  },
  {
    "id": 34,
    "question": "Keterkaitan antara hubungan pokok pikiran pertama pembukaan UUD 1945 terhadap pembangunan nasional adalah...",
    "options": [
      "Pembangunan nasional didasarkan pada kekuatan spiritual yang luhur",
      "Pembangunan nasional harus dilakukan oleh segenap rakyat Indonesia",
      "Keberhasilan pembangunan harus didasarkan pada keadilan sosial",
      "Mengedepankan musyawarah mufakat dalam perumusan rencana pembangunan nasional",
      "Adanya kesadaran bahwa keberhasilan pembangunan nasional dilakukan oleh seluruh warga negara"
    ],
    "correctAnswer": 0,
    "explanation": "Pokok pikiran pertama Pembukaan UUD 1945 (Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan dengan mewujudkan keadilan sosial bagi seluruh rakyat Indonesia) memiliki keterkaitan bahwa pembangunan nasional didasarkan pada kekuatan spiritual yang luhur."
  },
  {
    "id": 35,
    "question": "Kesepakatan dasar dalam perubahan UUD 1945 dengan cara adendum, maksudnya....",
    "options": [
      "Naskah baru menggantikan naskah asli sebelumnya",
      "Naskah asli UUD 1945 digantikan dengan naskah perubahan",
      "Penggabungan antara naskah asli dengan naskah pembaruan",
      "Naskah asli UUD 1945 dipertahankan dan naskah pembaruan dilekatkan pada naskah asli",
      "Naskah asli digabungkan dengan naskah pembaruan UUD 1945 ditambah dengan aturan-aturan peralihan"
    ],
    "correctAnswer": 3,
    "explanation": "Perubahan UUD 1945 dengan cara adendum berarti naskah asli UUD 1945 dipertahankan dan naskah pembaruan (hasil amandemen) dilekatkan pada naskah asli."
  },
  {
    "id": 36,
    "question": "Menjalankan pemerintahan yang bersih tanpa adanya kecurangan seperti korupsi merupakan pengamalan sila...",
    "options": [
      "Ketuhanan yang maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang dipimpin oleh hikmat dalam permusyawaratan/perwakilan",
      "Keadilan sosial bagi seluruh rakyat Indonesia"
    ],
    "correctAnswer": 4,
    "explanation": "Menjalankan pemerintahan yang bersih dan bebas korupsi adalah pengamalan sila Keadilan sosial bagi seluruh rakyat Indonesia."
  },
  {
    "id": 37,
    "question": "Memberi kesempatan rakyat untuk mengajukan saran dan kritik dalam hal pelaksanaan pembangunan yang dilakukan pemerintah merupakan contoh pengamalan sila...",
    "options": [
      "Ketuhanan yang maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang dipimpin oleh hikmat dalam permusyawaratan/perwakilan",
      "Keadilan sosial bagi seluruh rakyat Indonesia"
    ],
    "correctAnswer": 3,
    "explanation": "Memberi kesempatan rakyat untuk mengajukan saran dan kritik dalam pembangunan adalah contoh pengamalan sila Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan."
  },
  {
    "id": 38,
    "question": "Sebagai ideologi yang digunakan Indonesia, Pancasila dikenal sebagai Ideologi terbuka, maksudnya adalah...",
    "options": [
      "Pancasila menerima pengaruh ideologi lain dan mengubah kepribadian bangsa",
      "Pancasila harus membuka diri terhadap perkembangan zaman",
      "Pancasila adalah ideologi yang berasal dari negara lain",
      "Adanya pancasila karena melihat keadaan negara lain",
      "Pancasila memberikan keleluasaan negara lain untuk mengikutinya"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila sebagai ideologi terbuka berarti Pancasila harus membuka diri terhadap perkembangan zaman tanpa kehilangan nilai-nilai dasarnya."
  },
  {
    "id": 39,
    "question": "Undang-Undang yang mengatur tentang Pertahanan Negara adalah Undang-Undang Nomor...",
    "options": [
      "7 Tahun 2000",
      "2 Tahun 2001",
      "3 Tahun 2002",
      "3 Tahun 2004",
      "7 Tahun 2012"
    ],
    "correctAnswer": 2,
    "explanation": "Undang-Undang yang mengatur tentang Pertahanan Negara adalah Undang-Undang Nomor 3 Tahun 2002."
  },
  {
    "id": 40,
    "question": "Pemberian grasi, amnesti, abolisi, dan rehabilitasi oleh presiden diatur secara lengkap dalam Undang-Undang Dasar 1945 Pasal.....",
    "options": [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "Pemberian grasi, amnesti, abolisi, dan rehabilitasi oleh presiden diatur dalam Undang-Undang Dasar 1945 Pasal 14."
  },
  {
    "id": 41,
    "question": "Prinsip dimana adanya pengakuan bahwa kekuasaan tertinggi ada di tangan rakyat adalah...",
    "options": [
      "Kebijaksanaan",
      "Permusyawaratan",
      "Perwakilan",
      "Kerakyatan",
      "Keadilan"
    ],
    "correctAnswer": 3,
    "explanation": "Pengakuan bahwa kekuasaan tertinggi ada di tangan rakyat adalah prinsip kerakyatan."
  },
  {
    "id": 42,
    "question": "Dimensi fleksibilitas merupakan salah satu aspek terkait dengan pancasila sebagai ideologi terbuka, maksudnya adalah…..",
    "options": [
      "Mengandung cita-cita yang ingin dicapai",
      "Yang terkandung di dalamnya harus berdasarkan nilai yang ada di kehidupan masyarakat",
      "Mencerminkan kemampuan sebuah ideologi untuk menyesuaikan diri dengan perkembangan yang ada di masyarakat",
      "Mudah dipengaruhi tanpa adanya pemilahan",
      "Pancasila dapat diubah kapan pun oleh rakyatnya"
    ],
    "correctAnswer": 2,
    "explanation": "Dimensi fleksibilitas pada Pancasila sebagai ideologi terbuka mencerminkan kemampuan sebuah ideologi untuk menyesuaikan diri dengan perkembangan yang ada di masyarakat."
  },
  {
    "id": 43,
    "question": "Setelah Indonesia merdeka, sekutu datang lagi ke Indonesia bersama dengan orang-orang Belanda yang datang kembali untuk menguasai Hindia Belanda atau disebut...",
    "options": [
      "AFNEI",
      "SEAC",
      "PETA",
      "Tonarigumi",
      "NICA"
    ],
    "correctAnswer": 4,
    "explanation": "Sekutu datang kembali ke Indonesia setelah kemerdekaan bersama dengan orang-orang Belanda yang tergabung dalam NICA (Netherlands Indies Civil Administration)."
  },
  {
    "id": 44,
    "question": "Secara konstitusional negara Indonesia dalam UUD 1945 Pasal 1 ayat 3 menyatakan tentang...",
    "options": [
      "Negara Indonesia adalah negara kesatuan berbentuk republik",
      "Kedaulatan berada di tangan rakyat dan dijalankan berdasarkan UU",
      "Negara Indonesia adalah negara hukum",
      "Presiden memiliki kekuasaan eksekutif",
      "Bentuk susunan negara Indonesia adalah republik"
    ],
    "correctAnswer": 2,
    "explanation": "UUD 1945 Pasal 1 ayat 3 menyatakan bahwa 'Negara Indonesia adalah negara hukum'."
  },
  {
    "id": 45,
    "question": "Sistem pemerintahan sesuai dengan teori John Locke diterapkan di Indonesia dengan pembagian kekuasaan menjadi...",
    "options": [
      "Kekuasaan legislatif, eksekutif, yudikatif",
      "Kekuasaan legislatif, federatif, dan yudikatif",
      "Kekuasaan eksekutif, federatif dan legislatif",
      "Kekuasaan eksaminatif, eksekutif, dan federatif",
      "Kekuasaan eksaminatif, federatif, dan eksekutif"
    ],
    "correctAnswer": 1,
    "explanation": "John Locke mengemukakan adanya pemisahan kekuasaan menjadi kekuasaan legislatif (membuat undang-undang), eksekutif (melaksanakan undang-undang), dan federatif (hubungan luar negeri). Namun, dalam konteks Indonesia yang mengadopsi teori John Locke, seringkali disederhanakan menjadi legislatif, eksekutif, dan yudikatif."
  },
  {
    "id": 46,
    "question": "Sistematika UUD 1945 setelah perubahan adalah...",
    "options": [
      "Pembukaan, batang tubuh, pasal-pasal",
      "Pembukaan, GBHN, batang tubuh, dan pasal-pasal",
      "Pembukaan dan pasal-pasal",
      "Pembukaan, pasal-pasal aturan peralihan",
      "Pembukaan, bab-bab, dan ayat-ayat"
    ],
    "correctAnswer": 4,
    "explanation": "Sistematika UUD 1945 setelah perubahan (amandemen) adalah Pembukaan, Bab-bab, Pasal-pasal, dan Aturan Peralihan serta Aturan Tambahan."
  },
  {
    "id": 47,
    "question": "Berikut yang bukan landasan yuridis untuk diadakan perubahan tentang UUD 1945 adalah...",
    "options": [
      "Pasal 3 UUD 1945",
      "Pasal 37 UUD 1945",
      "Tap MPR No. IX MPR/1999",
      "Tap MPR No. IX MPR/2000",
      "Tap MPR No. IX MPR/2001"
    ],
    "correctAnswer": 2,
    "explanation": "Pasal 3 dan 37 UUD 1945 mengatur tentang perubahan UUD. TAP MPR yang mengatur perubahan UUD 1945 adalah TAP MPR No. IX/MPR/2000 tentang Peninjauan Kembali Materi dan Status Hukum Ketetapan Majelis Permusyawaratan Rakyat Sementara dan Ketetapan Majelis Permusyawaratan Rakyat Republik Indonesia Tahun 1960 sampai dengan Tahun 2002. TAP MPR No. IX MPR/1999 dan No. IX MPR/2001 tidak spesifik terkait landasan yuridis perubahan UUD 1945 secara langsung, melainkan lebih pada penetapan GBHN atau peninjauan TAP MPR lainnya."
  },
  {
    "id": 48,
    "question": "Sebelum Indonesia mendapatkan kemerdekaan, banyak dibentuk organisasi maupun badan-badan yang bertugas untuk mempersiapkan Indonesia merdeka. Badan yang bertugas untuk menyelidiki serta menyampaikan pendapat untuk disampaikan kepada pemerintah Jepang sebagai bahan pertimbangan Indonesia merdeka adalah...",
    "options": [
      "PPKI",
      "Budi Utomo",
      "Panitia Sembilan",
      "BPUPKI",
      "Heiho"
    ],
    "correctAnswer": 3,
    "explanation": "Badan yang bertugas menyelidiki dan menyampaikan pendapat untuk persiapan kemerdekaan Indonesia adalah BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia)."
  },
  {
    "id": 49,
    "question": "BPUPKI merupakan badan yang dibentuk oleh pemerintah Jepang pada tanggal 29 April 1945. BPUPKI diketuai oleh...",
    "options": [
      "Ir. Soekarno",
      "Raden Pandji Soeroso",
      "Moh. Yamin",
      "K.H. Wahid Hasyim",
      "Dr. Radjiman Wedyoningrat"
    ],
    "correctAnswer": 4,
    "explanation": "BPUPKI diketuai oleh Dr. Radjiman Wedyoningrat."
  },
  {
    "id": 50,
    "question": "Setelah Indonesia merdeka, PPKI mengadakan beberapa kali sidang salah satunya memutuskan memilih dan mengangkat presiden dan wakil presiden. Pemilihan presiden dan wakil presiden merupakan hasil sidang PPKI tanggal...",
    "options": [
      "9 Agustus 1945",
      "10 Agustus 1945",
      "18 Agustus 1945",
      "19 Agustus 1945",
      "20 Agustus 1945"
    ],
    "correctAnswer": 2,
    "explanation": "Pemilihan presiden dan wakil presiden (Ir. Soekarno dan Drs. Moh. Hatta) dilakukan pada sidang PPKI tanggal 18 Agustus 1945."
  },
  {
    "id": 51,
    "question": "Pada saat proklamasi kemerdekaan, yang mengibarkan bendera sang saka merah putih adalah...",
    "options": [
      "Sayuti Melik dan Wikana",
      "Ahmad Subarjo dan Sayuti Melik",
      "Latif dan Suhud",
      "Chaerul Saleh dan Moh Yamin",
      "Sukarni dan Fatmawati"
    ],
    "correctAnswer": 2,
    "explanation": "Bendera Sang Saka Merah Putih dikibarkan oleh Latif Hendraningrat dan Suhud saat Proklamasi Kemerdekaan."
  },
  {
    "id": 52,
    "question": "Perundingan antara Belanda dan Jepang yang mengawali penjajahan Jepang di Indonesia adalah perundingan...",
    "options": [
      "Linggarjati",
      "Renvile",
      "Roem Royen",
      "Bongaya",
      "Kalijati"
    ],
    "correctAnswer": 4,
    "explanation": "Perundingan Kalijati adalah perundingan antara Belanda dan Jepang yang menandai dimulainya pendudukan Jepang di Indonesia."
  },
  {
    "id": 53,
    "question": "Perhatikan pernyataan berikut. (1) Perubahan dilaksanakan dengan adendum (2) Mempertegas sistem presidensial (3) Tidak mengubah pembukaan UUD 1945 (4) Perubahan terhadap bentuk negara dapat dilakukan (5) Harus sesuai persetujuan DPR sebanyak 1/3 dari jumlah anggota Pernyataan diatas yang termasuk sebagai aturan pokok dalam kaidah perubahan terhadap UUD 1945 adalah...",
    "options": [
      "1, 2, dan 4",
      "1, 2, 3, dan 4",
      "1, 2, dan 3",
      "2, 3, dan 4",
      "3, 4, dan 5"
    ],
    "correctAnswer": 2,
    "explanation": "Aturan pokok dalam kaidah perubahan UUD 1945 meliputi: perubahan dilaksanakan dengan adendum, mempertegas sistem presidensial, dan tidak mengubah Pembukaan UUD 1945. Bentuk negara tidak dapat diubah, dan persetujuan DPR bukan 1/3."
  },
  {
    "id": 54,
    "question": "Dalam sistem demokrasi Pancasila di Indonesia, lembaga negara yang berhak melakukan impeachment adalah...",
    "options": [
      "DPR",
      "DPRD",
      "Presiden",
      "MK",
      "MPR"
    ],
    "correctAnswer": 4,
    "explanation": "Dalam sistem demokrasi Pancasila, proses impeachment (pemberhentian Presiden dan/atau Wakil Presiden) dilakukan oleh MPR setelah menerima usulan dari DPR dan putusan dari Mahkamah Konstitusi."
  },
  {
    "id": 55,
    "question": "Pengertian terhadap konstitusi dapat diartikan secara luas dan sempit. Pengertian konstitusi Indonesia yang dimaksud adalah...",
    "options": [
      "Keseluruhan hukum",
      "UUD 1945",
      "Peraturan perundang-undangan",
      "Lembaga MPR",
      "Pancasila"
    ],
    "correctAnswer": 1,
    "explanation": "Dalam pengertian sempit, konstitusi Indonesia merujuk pada Undang-Undang Dasar 1945."
  },
  {
    "id": 56,
    "question": "Pemberhentian sebuah perkara yang terbukti melanggar aturan hukum dan sudah diproses peradilan dinamakan...",
    "options": [
      "Amnesti",
      "Rehabilitasi",
      "Abolisi",
      "Grasi",
      "Remisi"
    ],
    "correctAnswer": 2,
    "explanation": "Abolisi adalah penghapusan proses hukum seseorang yang sedang berjalan."
  },
  {
    "id": 57,
    "question": "Esensi pilar kebangsaan dalam memahami keberagaman sesuai amanan UUD 1945 Pasal 18B ayat 2 adalah...",
    "options": [
      "Menghormati keberadaan suku budaya sebagai kesatuan",
      "Negara mengakui kesatuan hukum adat yang berlaku di seluruh wilayah Indonesia",
      "Keberadaan masyarakat adat harus diatur dan diperhatikan dalam sistem pemerintahan",
      "Kebijakan untuk melestarikan budaya menjadi kewajiban seluruh rakyat Indonesia",
      "Keberadaan adat istiadat di wilayah NKRI harus dilindungi oleh negara"
    ],
    "correctAnswer": 1,
    "explanation": "UUD 1945 Pasal 18B ayat (2) menyatakan bahwa negara mengakui dan menghormati kesatuan-kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya sepanjang masih hidup dan sesuai dengan perkembangan masyarakat dan prinsip Negara Kesatuan Republik Indonesia, yang diatur dalam undang-undang."
  },
  {
    "id": 58,
    "question": "Manusia sebagai ciptaan Tuhan Yang Maha Esa didudukan sesuai dengan harkat, martabat, dan kodratnya merupakan esensi nilai Pancasila...",
    "options": [
      "Religius",
      "Humanitas",
      "Sosialitas",
      "Nasionalisme",
      "Sovereinitas"
    ],
    "correctAnswer": 1,
    "explanation": "Memperlakukan manusia sesuai harkat dan martabatnya merupakan esensi nilai humanitas (kemanusiaan) dalam Pancasila."
  },
  {
    "id": 59,
    "question": "Saat Jepang menduduki Indonesia ada beberapa kebijakan yang diterapkan, salah satunya di bidang politik, yaitu membentuk Putera. Gerakan ini dipimpin oleh empat serangkai, yaitu...",
    "options": [
      "Ir. Soekarno, Drs. Moh. Hata, Ki Hajar Dewantara, dan K.H Mas Mansyur",
      "Ir. Soekarno, Drs. Moh Hatta, Dr. Radjiman Wedyoningrat, Soetomo",
      "Suwardi Suryaningrat, Douwes Dekker, Dr. Cipto Mangunkusumo, K.H. Mas Mansyur",
      "Ir. Soekarno, Drs. Moh Hatta, Dr. Cipto Mangunkusumo, Dr, Radjiman Widyoningrat",
      "Dr. Radjiman Wedyoningrat, Soetomo, Dr. Cipto Mangunkusumo, Douwes Dekker"
    ],
    "correctAnswer": 0,
    "explanation": "Empat Serangkai pemimpin Putera (Pusat Tenaga Rakyat) adalah Ir. Soekarno, Drs. Moh. Hatta, Ki Hajar Dewantara, dan K.H. Mas Mansyur."
  },
  {
    "id": 60,
    "question": "Perang dunia II juga membawa pengaruh terhadap Indonesia, khususnya untuk mencapai kemerdekaan. Pengaruh yang didapatkan Indonesia adalah...",
    "options": [
      "Munculnya fasisme Jepang di negaranya",
      "Jepang kalah dari sekutu sehingga memberikan janji kemerdekaan kepada Indonesia",
      "Penyerangan sekutu ke Indonesia",
      "Penyerangan indonesia ke sekutu",
      "Belanda mengajak Indonesia bergabung pada saat perang dunia II"
    ],
    "correctAnswer": 1,
    "explanation": "Kekalahan Jepang terhadap Sekutu dalam Perang Dunia II menjadi salah satu faktor pendorong utama kemerdekaan Indonesia karena Jepang memberikan janji kemerdekaan."
  },
  {
    "id": 61,
    "question": "Pada saat perang Dunia II terjadi, negara-negara yang terlibat dibagi menjadi dua blok. Yang termasuk blok sekutu adalah...",
    "options": [
      "Jerman dan Finlandia",
      "Austria dan Rumania",
      "Prancis dan RRC",
      "Italia dan Polandia",
      "Jepang dan Jerman"
    ],
    "correctAnswer": 2,
    "explanation": "Blok Sekutu pada Perang Dunia II antara lain terdiri dari Amerika Serikat, Inggris, Uni Soviet, dan Prancis."
  },
  {
    "id": 62,
    "question": "Saat melawan sekutu, Jepang lama kelamaan mengalami kekalahan hingga akhirnya menyatakan menyerah kepada sekutu pada tanggal...",
    "options": [
      "6 Agustus 1945",
      "9 Agustus 1945",
      "11 Agustus 1945",
      "14 Agustus 1945",
      "16 Agustus 1945"
    ],
    "correctAnswer": 3,
    "explanation": "Jepang menyerah tanpa syarat kepada Sekutu pada tanggal 14 Agustus 1945 setelah pengeboman Hiroshima dan Nagasaki."
  },
  {
    "id": 63,
    "question": "Pola pikir dan cara pandang bangsa Indonesia terhadap jati diri dan lingkungannya yang didasarkan pada Pancasila dan UUD 1945 merupakan bentuk pengukuhan dan apresiasi terhadap negara yang berdaulat demi sikap nasionalisme yang mengalir dalam setiap perilaku dalam bernegara dan berbangsa. Kemampuan ini dikenal sebagai...",
    "options": [
      "Nasional",
      "Wawasan",
      "Wawasan nasional",
      "Wawasan nusantara",
      "Ketahanan nasional"
    ],
    "correctAnswer": 3,
    "explanation": "Pola pikir dan cara pandang bangsa Indonesia terhadap jati diri dan lingkungannya yang didasarkan pada Pancasila dan UUD 1945 dikenal sebagai Wawasan Nusantara."
  },
  {
    "id": 64,
    "question": "Memupuk rasa nasionalisme kebangsaan bagi masyarakat Indonesia berdasarkan keberagaman suku, agama, ras, dan antargolongan agar...",
    "options": [
      "Bangsa Indonesia mandiri",
      "Moralitas bangsa terjaga",
      "Tercipta kedaulatan bangsa",
      "Identitas nasional terjaga",
      "Tidak kehilangan kepribadian bangsa"
    ],
    "correctAnswer": 4,
    "explanation": "Memupuk rasa nasionalisme berdasarkan keberagaman bertujuan agar bangsa Indonesia tidak kehilangan kepribadian bangsanya."
  },
  {
    "id": 65,
    "question": "Nasionalisme yang lahir di Indonesia bukanlah nasionalisme Barat, melainkan nasionalisme of humanity yang dikemukakan oleh Ir. Soekarno yang berarti bahwa...",
    "options": [
      "Kemanusiaan adalah satu",
      "Kemanusiaan merupakan perbedaan yang harus dipertahankan",
      "Karakter bangsa lahir dari kemanusiaan",
      "Jiwa dan jati diri bangsa dipersatukan",
      "Kemanusiaan adalah sebuah karakter"
    ],
    "correctAnswer": 0,
    "explanation": "Nasionalisme of humanity yang dikemukakan Ir. Soekarno berarti bahwa kemanusiaan adalah satu, menekankan persaudaraan antarmanusia tanpa memandang ras atau bangsa."
  },
  {
    "id": 66,
    "question": "Berikut ini yang termasuk dalam faktor pendorong nasionalisme dari luar Indonesia pada awal pergerakan nasional, kecuali...",
    "options": [
      "Kemenangan Jepang atas Rusia",
      "Kebangkitan nasionalisme Asia-Afrika",
      "Adanya kelompok masyarakat berpendidikan tinggi",
      "Timbulnya paham baru nasionalisme",
      "Lahirnya ideologi baru"
    ],
    "correctAnswer": 2,
    "explanation": "Adanya kelompok masyarakat berpendidikan tinggi merupakan faktor internal pendorong nasionalisme di Indonesia, bukan dari luar."
  },
  {
    "id": 67,
    "question": "Semangat nasionalisme baru dalam usaha pergerakan kemerdekaan diawali dengan munculnya organisasi...",
    "options": [
      "Serikat dagang Islam",
      "Budi Utomo",
      "Indische Partij",
      "Perhimpunan Indonesia",
      "PNI"
    ],
    "correctAnswer": 1,
    "explanation": "Semangat nasionalisme baru dalam usaha pergerakan kemerdekaan diawali dengan munculnya Budi Utomo pada tahun 1908."
  },
  {
    "id": 68,
    "question": "Pengertian nasionalisme dalam arti sempit adalah...",
    "options": [
      "Rasa cinta terhadap negeri",
      "Perilaku yang tidak menghargai sesama",
      "Perasaan keberagaman yang sama",
      "Perasaan kebangsaan yang sangat tinggi",
      "Perilaku menjaga harga diri bangsa"
    ],
    "correctAnswer": 3,
    "explanation": "Nasionalisme dalam arti sempit (chauvinisme) adalah perasaan kebangsaan yang sangat tinggi dan menganggap bangsa sendiri lebih unggul dari bangsa lain."
  },
  {
    "id": 69,
    "question": "Berikut yang bukan termasuk dalam aspek pembentuk rasa nasionalisme adalah...",
    "options": [
      "Persatuan nasib",
      "Kesatuan tempat tinggal",
      "Cita-cita bersama",
      "Perbedaan yang mempersatukan",
      "Tujuan bersama"
    ],
    "correctAnswer": 3,
    "explanation": "Aspek pembentuk rasa nasionalisme umumnya meliputi persatuan nasib, kesatuan tempat tinggal, cita-cita bersama, dan tujuan bersama. 'Perbedaan yang mempersatukan' lebih ke semboyan Bhinneka Tunggal Ika."
  },
  {
    "id": 70,
    "question": "Kasus yang menimpa seseorang ketika memiliki status kewarganegaraan ganda (bipatride) terjadi ketika...",
    "options": [
      "Berasal dari negara yang menganut ius soli dan melahirkan di negara yang menganut ius sanguinis",
      "Berasal dari negara yang menganut ius sanguinis dan melahirkan di negara yang menganut ius soli",
      "Lahir di negara yang menganut ius soli dan bertempat tinggal dan melahirkan di negara yang menganut ius soli",
      "Memiliki status tidak memiliki kewarganegaraan dan melahirkan serta bertempat tinggal di negara yang menganut ius soli",
      "Memiliki status tidak memiliki kewarganegaraan tinggal di negara yang menganut ius soli"
    ],
    "correctAnswer": 1,
    "explanation": "Status bipatride (kewarganegaraan ganda) dapat terjadi jika seseorang berasal dari negara yang menganut asas ius sanguinis (kewarganegaraan berdasarkan keturunan) dan lahir di negara yang menganut asas ius soli (kewarganegaraan berdasarkan tempat lahir)."
  },
  {
    "id": 71,
    "question": "Nasionalisme berasal dari bahasa latin yaitu nation yang berarti dilahirkan atau sering disebut sebuah bangsa yang dipersatukan akibat kelahiran. Nasionalisme dalam ruang dan waktu dapat memiliki perubahan hakikat karena...",
    "options": [
      "Dipengaruhi oleh sejarah bangsa",
      "Disesuaikan dengan penafsiran ideologi",
      "Disesuaikan dengan hukum nasional yang berlaku",
      "Adanya gejala sosio politik yang berkembang",
      "Mengacu pada gagasan, ide, dan identitas suatu Negara"
    ],
    "correctAnswer": 3,
    "explanation": "Nasionalisme dapat memiliki perubahan hakikat karena adanya gejala sosio-politik yang berkembang dalam masyarakat."
  },
  {
    "id": 72,
    "question": "Wujud hubungan baik Indonesia dengan negara tetangga, yaitu dengan mendirikan ASEAN. ASEAN merupakan salah satu perwujudan kerjasama diantara negara-negara di kawasan Asia Tenggara yang dibentuk pada tanggal....",
    "options": [
      "8 Agustus 1967",
      "10 September 1967",
      "5 Agustus 1956",
      "22 Oktober 1957",
      "7 Januari 1984"
    ],
    "correctAnswer": 0,
    "explanation": "ASEAN dibentuk pada tanggal 8 Agustus 1967 di Bangkok, Thailand."
  },
  {
    "id": 73,
    "question": "Pada saat ASEAN dibentuk, masing-masing negara diwakili oleh menteri luar negerinya. Indonesia diwakili oleh.....",
    "options": [
      "Tun Abdul Razak",
      "Thanat Khoman",
      "Sir Rajaratnam",
      "Narsisco Ramos",
      "Adam Malik"
    ],
    "correctAnswer": 4,
    "explanation": "Indonesia diwakili oleh Adam Malik saat pembentukan ASEAN."
  },
  {
    "id": 74,
    "question": "Salah satu bentuk kerja sama negara ASEAN adalah mendirikan proyek industri bersama, Proyek industri yang berada di Indonesia adalah.....",
    "options": [
      "Pabrik mesin diesel",
      "Pabrik abu soda",
      "Pabrik urea",
      "Pabrik urea dan amoniak",
      "Pabrik super fosfat"
    ],
    "correctAnswer": 3,
    "explanation": "Proyek industri bersama ASEAN yang berada di Indonesia adalah Pabrik Pupuk Urea ASEAN di Aceh (PT ASEAN Aceh Fertilizer, sekarang PT Pupuk Iskandar Muda)."
  },
  {
    "id": 75,
    "question": "Penyelenggara pemerintahan di dalam negara harus seimbang antara hak dan kewajiban. Hal ini merupakan salah satu asas pemerintahan yang baik, yaitu...",
    "options": [
      "kepentingan umum",
      "akunntabilitas",
      "keterbukaan",
      "proporsional",
      "profesional"
    ],
    "correctAnswer": 3,
    "explanation": "Asas proporsionalitas dalam pemerintahan yang baik menekankan keseimbangan antara hak dan kewajiban."
  },
  {
    "id": 76,
    "question": "Negara kita adalah negara yang dapat mengakui dan menghormati akan adanya perbedaan. Salah satu bentuknya adalah penghormatan terhadap adanya perbedaan agama. Hal ini dijelaskan pada...",
    "options": [
      "Pasal 31 ayat 3 UUD 1945",
      "Pasal 30 ayat 1 UUD 1945",
      "Pasal 29 ayat 2 UUD 1945",
      "Pasal 28 UUD 1945",
      "Pasal 26 ayat 1 UUD 1945"
    ],
    "correctAnswer": 2,
    "explanation": "Penghormatan terhadap adanya perbedaan agama dijelaskan pada UUD 1945 Pasal 29 ayat (2) yang menyatakan 'Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan untuk beribadat menurut agamanya dan kepercayaannya itu'."
  },
  {
    "id": 77,
    "question": "Sebuah kitab bernapa Sutasoma yang merupakan karangan dari..",
    "options": [
      "Mpu Tantular",
      "Mpu Prapanca",
      "Mpu Gandring",
      "Mpu Sendok",
      "Mpu Supo"
    ],
    "correctAnswer": 0,
    "explanation": "Kitab Sutasoma adalah karangan Mpu Tantular."
  },
  {
    "id": 78,
    "question": "Penyelenggara pemerintahan Indonesia dibagi menjadi daerah provinsi, daerah kabupaten dan kota mencerminkan Indonesia menerapkan prinsip....",
    "options": [
      "sentralisasi",
      "desentralisasi",
      "dekonsentrasi",
      "asas perbantuan",
      "asas pemusatan"
    ],
    "correctAnswer": 1,
    "explanation": "Pembagian penyelenggara pemerintahan menjadi provinsi, kabupaten, dan kota mencerminkan prinsip desentralisasi, yaitu penyerahan wewenang pemerintahan oleh pemerintah pusat kepada daerah otonom untuk mengatur dan mengurus urusan pemerintahan dalam sistem Negara Kesatuan Republik Indonesia."
  },
  {
    "id": 79,
    "question": "Negara Indonesia sebagai negara yang warga negaranya bersatu erat serta kepentingan individu diakui secara seimbang. Hal ini karena Indonesia merupakan negara.....",
    "options": [
      "Kemakmuran",
      "Persamaan",
      "Otonomi",
      "Kesukuan",
      "Persatuan"
    ],
    "correctAnswer": 4,
    "explanation": "Negara Indonesia adalah negara persatuan, yang menekankan keutuhan dan kesatuan warga negaranya, namun tetap mengakui kepentingan individu secara seimbang."
  },
  {
    "id": 80,
    "question": "Hadirnya kehidupan masyarakat saat ini dipelopori oleh sejarah pergerakan nasional Indonesia yang dilakukan oleh...",
    "options": [
      "Para kiai",
      "Kaum terpelajar",
      "Masyarakat pribumi",
      "Pedagang",
      "Kaum ulama dan tumenggung"
    ],
    "correctAnswer": 1,
    "explanation": "Pergerakan nasional Indonesia modern dipelopori oleh kaum terpelajar yang menyadari pentingnya organisasi dan pendidikan."
  },
  {
    "id": 81,
    "question": "Lagu kebangsaan Indonesia Raya yang dikenalkan oleh Wage Soepratman pertama kali diperdengarkan untuk membangkitkan rasa nasionalisme pada saat...",
    "options": [
      "Rapat organisasi Budi Utomo",
      "Proklamasi kemerdekaan",
      "Sumpah pemuda",
      "Sidang BPUPKI",
      "Peristiwa Rengasdengklok"
    ],
    "correctAnswer": 2,
    "explanation": "Lagu Indonesia Raya pertama kali diperdengarkan pada Kongres Pemuda II tanggal 28 Oktober 1928, yang kemudian dikenal sebagai peristiwa Sumpah Pemuda."
  },
  {
    "id": 82,
    "question": "Secara astronomi ASEAN terletak pada 28°LU-11°LS dan 92°BT-141°BT, sedangkan secara geografis terletak antara Samudera Pasifik dan Samudera Hindia serta Benua Asia dan Benua Australia. Indonesia sebagai salah satu anggota ASEAN secara astronomi terletak pada...",
    "options": [
      "11°LU-6°LS dan 95°BT-114°BT",
      "6°LU-11°LS dan 95°BT-141°BB",
      "6°LU-11°LS dan 95°BB-141°BT",
      "6°LU-11°LS dan 95°BT-141°BT",
      "11°LU-11°LS dan 95°BB-114°BT"
    ],
    "correctAnswer": 3,
    "explanation": "Secara astronomi, Indonesia terletak antara 6°LU-11°LS dan 95°BT-141°BT."
  },
  {
    "id": 83,
    "question": "Hakikat sebuah negara yang menekankan pada unsur pemerintahan adalah...",
    "options": [
      "Negara merupakan alat untuk mengatur dan mengendalikan masyarakat secara",
      "Negara merupakan organisasi masyarakat yang diciptakan oleh sebagian kelompok (founding father)",
      "Negara merupakan kekuasaan kewilayahan yang diperbolehkan untuk mengatur kehidupan masyarakat dengan cara kekerasan",
      "Negara merupakan organisasi kekuasaan untuk mengatur kehidupan berdasrkan kekuasaan",
      "Negara merupakan asosiasi terhadap masyarakat untuk diatur dan dilindungi dalam suatu wilayah tertentu"
    ],
    "correctAnswer": 3,
    "explanation": "Hakikat negara yang menekankan pada unsur pemerintahan adalah bahwa negara merupakan organisasi kekuasaan untuk mengatur kehidupan berdasarkan kekuasaan (yang sah)."
  },
  {
    "id": 84,
    "question": "Sebuah manuskrip kuno yang menceritakan kejayaan Majapahit dalam menyatukan nusantara menjadi cikal bakal lahirnya nasionalisme yang dikembangkan para founding father di Indonesia, manuskrip itu berjudul...",
    "options": [
      "Sutasoma",
      "Babad Tanah Jawa",
      "Negarakertagama",
      "Purwaka Caruban Nagari",
      "Pararaton"
    ],
    "correctAnswer": 2,
    "explanation": "Manuskrip kuno yang menceritakan kejayaan Majapahit dalam menyatukan nusantara dan menjadi cikal bakal nasionalisme adalah Negarakertagama, karangan Mpu Prapanca."
  },
  {
    "id": 85,
    "question": "Kecakapan seseorang sebagai WNI yang mendapatkan hak serta kewajiban dalam usaha-usaha bernegara ditetapkan pada saat...",
    "options": [
      "Dilahirkan",
      "Masuk sekolah dasar",
      "Usia 17 tahun",
      "Usia 19 tahun",
      "Usia 21 tahun"
    ],
    "correctAnswer": 2,
    "explanation": "Seseorang dianggap cakap dan memiliki hak serta kewajiban sebagai WNI (termasuk hak pilih) pada usia 17 tahun atau sudah menikah."
  },
  {
    "id": 86,
    "question": "Kasus yang menimpa seseorang ketika tidak memiliki kewarganegaraan (apatride) terjadi ketika...",
    "options": [
      "Berasal dari negara yang menganut asas ius soli dan melahirkan di negara yang menganut asas ius sanguinis",
      "Berasal dari negara yang menganut ius sanguinis dan melahirkan di negara yang menganut ius soli",
      "Lahir di negara yang menganut ius sanguinis bertempat tinggal dan melahirkan di negara yang menganut ius sanguinis",
      "Lahir di negara yang menganut ius soli bertempat tinggal dan melahirkan di negara yang menganut ius soli",
      "Memiliki status tidak memiliki kewarganegaraan dan melahirkan serta bertempat tinggal di negara yang menganut ius soli"
    ],
    "correctAnswer": 2,
    "explanation": "Status apatride (tanpa kewarganegaraan) dapat terjadi jika seseorang lahir di negara yang menganut asas ius sanguinis (kewarganegaraan berdasarkan keturunan) dari orang tua yang juga menganut asas ius sanguinis, tetapi negara tersebut tidak mengakui kewarganegaraan orang tuanya."
  },
  {
    "id": 87,
    "question": "Fenomena generasi muda yang mengalami kepudaran terhadap jiwa nasionalisme disebabkan karena...",
    "options": [
      "Orientasi nasionalisme adalah sikap dan perbuatan",
      "Labeling nasionalisme menjadi stigma bagi generasi muda",
      "Ukuran nasionalisme dipahami hanya sebatas perjuangan secara fisik",
      "Kurangnya daya juang terhadap tantangan perubahan zaman",
      "Kurangnya sosok heroisme bagi kaum muda"
    ],
    "correctAnswer": 2,
    "explanation": "Kepudaran jiwa nasionalisme pada generasi muda seringkali disebabkan oleh pemahaman nasionalisme yang hanya sebatas perjuangan fisik, bukan dalam konteks pembangunan dan kontribusi di era modern."
  },
  {
    "id": 88,
    "question": "Negara mempunyai kekuasaan untuk memaksa warga negaranya, baik secara fisik maupun tidak. Hal ini karena negara mempunyai sifat...",
    "options": [
      "Memaksa",
      "Monopoli",
      "Mencakup semua",
      "Mengayomi",
      "Mengikat"
    ],
    "correctAnswer": 0,
    "explanation": "Sifat negara untuk memaksa berarti negara memiliki kekuasaan untuk menggunakan paksaan agar peraturan ditaati."
  },
  {
    "id": 89,
    "question": "Terbentuknya suatu negara harus memenuhi beberapa unsur yang terbagi menjadi dua klasifikasi, yaitu deklaratif dan konstitutif. Yang menjadi unsur deklaratif berdirinya suatu negara adalah...",
    "options": [
      "Pemerintah yang berdaulat",
      "Adanya wilayah tertentu",
      "Adanya rakyat yang dipimpin",
      "Adanya kedaulatan",
      "Pengakuan dari negara lain"
    ],
    "correctAnswer": 4,
    "explanation": "Unsur deklaratif berdirinya suatu negara adalah pengakuan dari negara lain (secara de facto maupun de jure). Unsur konstitutif meliputi wilayah, rakyat, dan pemerintah yang berdaulat."
  },
  {
    "id": 90,
    "question": "Ada beberapa teori yang menjelaskan mengenai terbentuknya suatu negara. Menurut kejadiannya, asal mula terbentuknya negara Indonesia disebabkan oleh...",
    "options": [
      "Fusi",
      "Perjuangan",
      "Occupatie",
      "Penyerahan",
      "Pendudukan"
    ],
    "correctAnswer": 1,
    "explanation": "Asal mula terbentuknya negara Indonesia disebabkan oleh perjuangan panjang rakyat Indonesia melawan penjajahan."
  },
  {
    "id": 91,
    "question": "Memasyarakatkan Pancasila dan pendidikan Pancasila di lingkungan sekolah merupakan upaya untuk...",
    "options": [
      "Membangun sikap kompetitif bagi kaum terpelajar",
      "Mewujudkan masyarakat sadar hukum",
      "Mengembangkan sikap demokratis yang beradab",
      "Menjadikan warga negara yang cerdas dan berkarakter dalam menjunjung tinggi nilai kemanusiaan",
      "Menumbuhkembangkan jiwa dan semangat nasionalisme serta rasa cinta tanah air"
    ],
    "correctAnswer": 4,
    "explanation": "Memasyarakatkan Pancasila dan pendidikan Pancasila di sekolah bertujuan untuk menumbuhkembangkan jiwa dan semangat nasionalisme serta rasa cinta tanah air."
  },
  {
    "id": 92,
    "question": "Sumpah setia terhadap NKRI dan Pancasila merupakan kewajiban yang harus dilakukan oleh pejabat negara. Dasar sumpah tersebut bagi seorang ASN adalah...",
    "options": [
      "Pancasila sebagai wawasan hidup bangsa",
      "Pejabat negara harus setia terhadap NKRI",
      "Pancasila merupakan landasan hukum bangsa",
      "NKRI dan Pancasila adalah warisan budaya bangsa",
      "Pancasila penting dalam membentuk perilaku ASN"
    ],
    "correctAnswer": 0,
    "explanation": "Dasar sumpah setia ASN terhadap NKRI dan Pancasila adalah Pancasila sebagai wawasan hidup bangsa (pandangan hidup)."
  },
  {
    "id": 93,
    "question": "Keutamaan seorang ASN sebagai pejabat publik berintegritas tinggi pada nilai...",
    "options": [
      "Kejujuran",
      "Kedisiplinan",
      "Tanggung jawab",
      "Kepedulian",
      "Pelayanan public"
    ],
    "correctAnswer": 0,
    "explanation": "Integritas tinggi seorang ASN sebagai pejabat publik sangat erat kaitannya dengan nilai kejujuran."
  },
  {
    "id": 94,
    "question": "Penegakan hukum khusus tindakan korupsi menganut asas...",
    "options": [
      "Lex specialis derogat legi generali",
      "Lex superior derogat legi emperor",
      "Equility before the law",
      "Lex posterior derogat legi priori",
      "Lex imperfecta"
    ],
    "correctAnswer": 0,
    "explanation": "Penegakan hukum khusus tindakan korupsi menganut asas lex specialis derogat legi generali, yaitu hukum yang bersifat khusus mengesampingkan hukum yang bersifat umum."
  },
  {
    "id": 95,
    "question": "KPK sebagai lembaga khusus tindak pidana korupsi memiliki andil dalam perkara korupsi terutama dalam bidang...",
    "options": [
      "Penuntutan",
      "Penyidikan",
      "Penuntutan sekaligus penyidikan",
      "Pemutusan perkara",
      "Penyidikan sekaligus pemutusan perkara"
    ],
    "correctAnswer": 2,
    "explanation": "KPK memiliki kewenangan untuk melakukan penyidikan dan penuntutan dalam perkara tindak pidana korupsi."
  },
  {
    "id": 96,
    "question": "Berdasarkan UU No. 30 Tahun 2002 Pasal 13, KPK memiliki kewenangan terhadap penyelenggara negara (PN) dalam...",
    "options": [
      "Pelaporan tindakan korupsi",
      "Penindakan tindakan korupsi",
      "Pendaftaran dan pelaporan kekayaan penyelenggara Negara",
      "Audit penyelenggara negara",
      "Menyadap komunikasi penyelenggara Negara"
    ],
    "correctAnswer": 2,
    "explanation": "Berdasarkan UU No. 30 Tahun 2002 tentang Komisi Pemberantasan Tindak Pidana Korupsi, salah satu kewenangan KPK terhadap penyelenggara negara adalah melakukan pendaftaran dan pemeriksaan Laporan Harta Kekayaan Penyelenggara Negara (LHKPN)."
  },
  {
    "id": 97,
    "question": "Ada sembilan nilai integritas dalam anti korupsi yang terbagi dalam 3 kelompok, yaitu...",
    "options": [
      "Inti, sikap, dan etos kerja",
      "Personal, perilaku, dan norma",
      "Kepribadian, agama, dan etos kerja",
      "Nilai, norma, dan kepribadian",
      "Inti, personal, dan sikap"
    ],
    "correctAnswer": 0,
    "explanation": "Sembilan nilai integritas anti korupsi terbagi dalam tiga kelompok: nilai inti (jujur, peduli, mandiri), nilai sikap (disiplin, tanggung jawab, kerja keras), dan nilai etos kerja (sederhana, berani, adil)."
  },
  {
    "id": 98,
    "question": "Integritas berdasarkan kompetensi KPK memiliki pengertian bahwa...",
    "options": [
      "Bertindak sesuai perkataan dan tindakan sesuai dengan nilai secara konsisten",
      "Mutu, sifat, dan keadaan yang digambarkan secara utuh yang memancarkan kewibawaan",
      "Patuh pada kode etik dalam perkataan dan perbuatan",
      "Berkepribadian utuh yang merujuk pada nilai moral dan etika",
      "Kepribadian yang membawa marwah bangsa dan negara sebagai identitas nasional"
    ],
    "correctAnswer": 0,
    "explanation": "Integritas (menurut KPK) berarti bertindak sesuai perkataan dan tindakan sesuai dengan nilai-nilai secara konsisten, tidak berbohong, tidak korupsi, dan tidak curang."
  },
  {
    "id": 99,
    "question": "Nilai-nilai berikut yang termasuk dalam nilai antikorupsi pada aspek etos kerja adalah...",
    "options": [
      "Jujur, tanggung jawab, dan adil",
      "Tanggung jawab, peduli, dan mandiri",
      "Kerja keras, mandiri, dan sederhana",
      "Adil, berani, peduli",
      "Jujur, disiplin, dan tanggung jawab"
    ],
    "correctAnswer": 2,
    "explanation": "Nilai anti korupsi pada aspek etos kerja meliputi kerja keras, mandiri, dan sederhana."
  },
  {
    "id": 100,
    "question": "Setiap negara mempunyai batas wilayahnya masing-masing. Indonesia sebagai negara yang dikelilingi laut memiliki batas laut teritorial. Mulai tanggal 21 Maret 1980 batas wilayah laut Indonesia sebesar...",
    "options": [
      "3 mil",
      "12 mil",
      "20 mil",
      "200 mil",
      "150 mil"
    ],
    "correctAnswer": 1,
    "explanation": "Mulai tanggal 21 Maret 1980, batas laut teritorial Indonesia ditetapkan sejauh 12 mil laut dari garis pangkal kepulauan."
  }
].map(transformQuestion);