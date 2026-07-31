const verbal = [
  // Sinonim
  {
    pertanyaan: "Apa persamaan kata dari kesahihan?",
    pilihan: [
      "Kebenaran",
      "Kemantapan",
      "Keberlakuan",
      "Kesalahan",
      "Kematangan",
    ],
    jawaban: 0,
    pembahasan: "Kesahihan berarti keadaan yang benar, valid, atau sah.",
  },
  {
    pertanyaan: "Apa persamaan kata dari debat?",
    pilihan: [
      "Perbantahan",
      "Diskusi",
      "Komentar",
      "Permasalahan",
      "Pembicaraan",
    ],
    jawaban: 0,
    pembahasan: "Debat merupakan pertukaran argumen yang berlawanan, yaitu perbantahan.",
  },
  {
    pertanyaan: "Apa sinonim dari kata terkenal?",
    pilihan: ["Kaya", "Terhormat", "Populer", "Berani", "Terkemuka"],
    jawaban: 2,
    pembahasan: "Terkenal berarti dikenal luas oleh banyak orang atau populer.",
  },
  {
    pertanyaan: 'Kata yang memiliki makna sinonim dengan "membenci" adalah ...',
    pilihan: [
      "Menyukai",
      "Mengagumi",
      "Menjijikkan",
      "Mengejek",
      "Mengabaikan",
    ],
    jawaban: 2,
    pembahasan:
      "Mengikuti kunci pada materi sumber: menjijikkan. Catatan: secara kaidah bahasa, pilihan ini kurang tepat sebagai sinonim langsung dari membenci.",
  },
  {
    pertanyaan: 'Kata yang memiliki makna sinonim dengan "cerah" adalah ...',
    pilihan: ["Gelap", "Terang", "Suram", "Mendung", "Redup"],
    jawaban: 1,
    pembahasan: "Cerah memiliki makna terang, khususnya untuk cahaya atau cuaca.",
  },
  {
    pertanyaan: 'Sinonim dari kata "abstrak" adalah ...',
    pilihan: ["Nyata", "Kabur", "Konkrit", "Teoretis"],
    jawaban: 3,
    pembahasan: "Abstrak bersifat konseptual dan tidak berwujud fisik, sehingga dekat maknanya dengan teoretis.",
  },
  {
    pertanyaan: 'Sinonim dari kata "vital" adalah ...',
    pilihan: ["Penting", "Mati", "Sepele", "Biasa"],
    jawaban: 0,
    pembahasan: "Vital berarti sangat penting atau krusial.",
  },
  {
    pertanyaan: 'Sinonim dari kata "resesi" adalah ...',
    pilihan: ["Kemajuan", "Pemulihan", "Krisis", "Perkembangan"],
    jawaban: 2,
    pembahasan: "Resesi adalah kemunduran ekonomi yang dapat disebut krisis ekonomi.",
  },
  {
    pertanyaan: 'Sinonim dari kata "intensif" adalah ...',
    pilihan: ["Cepat", "Ringan", "Mendalam", "Sederhana"],
    jawaban: 2,
    pembahasan: "Intensif berarti dilakukan secara sungguh-sungguh dan mendalam.",
  },
  {
    pertanyaan: 'Sinonim dari kata "global" adalah ...',
    pilihan: ["Luas", "Umum", "Internasional", "Lokal"],
    jawaban: 2,
    pembahasan: "Global berarti mencakup dunia atau bersifat internasional.",
  },

  // Antonim
  {
    pertanyaan: "Apa lawan kata dari tenggelam?",
    pilihan: [
      "Melayang-layang",
      "Terombang-ambing",
      "Tak tentu",
      "Terkatung",
      "Terapung",
    ],
    jawaban: 4,
    pembahasan: "Tenggelam berada di bawah air, sedangkan terapung berada di permukaan air.",
  },
  {
    pertanyaan: "Apa lawan kata dari keseragaman?",
    pilihan: ["Monopoli", "Disparitas", "Tinggi rendah", "Berdua", "Uni"],
    jawaban: 1,
    pembahasan: "Keseragaman berarti sama; disparitas berarti perbedaan atau ketidakseragaman.",
  },
  {
    pertanyaan: "Apa lawan kata dari ekstrovert?",
    pilihan: ["Terisolasi", "Introvert", "Pendiam", "Penyendiri", "Pemalu"],
    jawaban: 1,
    pembahasan: "Ekstrovert berorientasi pada interaksi sosial, sedangkan introvert lebih nyaman dengan dunia internal atau kesendirian.",
  },
  {
    pertanyaan: "Kendala >< ...",
    pilihan: ["Hambatan", "Rintangan", "Pendukung", "Ujian", "Halangan"],
    jawaban: 2,
    pembahasan: "Kendala berarti penghambat, sedangkan pendukung membantu kelancaran kegiatan.",
  },
  {
    pertanyaan: "Lazim >< ...",
    pilihan: ["Zakat", "Beda", "Benci", "Jujur", "Lumrah"],
    jawaban: 1,
    pembahasan: "Lazim berarti umum atau biasa; lawannya adalah berbeda atau tidak umum.",
  },
  {
    pertanyaan: 'Antonim dari kata "objektif" adalah ...',
    pilihan: ["Netral", "Adil", "Subjektif", "Rasional"],
    jawaban: 2,
    pembahasan: "Objektif tidak dipengaruhi pandangan pribadi, sedangkan subjektif dipengaruhi pandangan pribadi.",
  },
  {
    pertanyaan: 'Antonim dari kata "ekspansif" adalah ...',
    pilihan: ["Meluas", "Kaku", "Terbatas", "Terbuka"],
    jawaban: 2,
    pembahasan: "Ekspansif berarti meluas atau berkembang; lawannya adalah terbatas.",
  },
  {
    pertanyaan: 'Antonim dari kata "progresif" adalah ...',
    pilihan: ["Inovatif", "Stagnan", "Aktif", "Cepat"],
    jawaban: 1,
    pembahasan: "Progresif berarti terus maju, sedangkan stagnan berarti tidak mengalami perkembangan.",
  },
  {
    pertanyaan: 'Antonim dari kata "loyal" adalah ...',
    pilihan: ["Taat", "Setia", "Khianat", "Jujur"],
    jawaban: 2,
    pembahasan: "Loyal berarti setia; lawannya adalah khianat.",
  },
  {
    pertanyaan: 'Antonim dari kata "minimal" adalah ...',
    pilihan: ["Sedikit", "Sederhana", "Maksimal", "Lumayan"],
    jawaban: 2,
    pembahasan: "Minimal berarti paling sedikit, sedangkan maksimal berarti paling banyak.",
  },

  // Pengelompokan kata
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok negara?",
    pilihan: [
      "Kenya",
      "Bangladesh",
      "Kuala Lumpur",
      "Cile",
      "Brunei Darussalam",
    ],
    jawaban: 2,
    pembahasan: "Kuala Lumpur adalah ibu kota Malaysia, bukan nama negara.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok mata uang?",
    pilihan: ["Rabat", "Dolar", "Rupee", "Baht", "Dinar"],
    jawaban: 0,
    pembahasan: "Rabat adalah ibu kota Maroko, bukan mata uang.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok materi Matematika?",
    pilihan: [
      "Eksponensial",
      "Logaritma",
      "Geofisika",
      "Fungsi Invers",
      "Transformasi",
    ],
    jawaban: 2,
    pembahasan: "Geofisika merupakan cabang ilmu bumi, bukan materi Matematika.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok istilah Biologi?",
    pilihan: ["Dikotil", "Dikotomi", "Ekosistem", "Hibernasi", "Kontur"],
    jawaban: 4,
    pembahasan: "Kontur adalah istilah yang berkaitan dengan geografi atau topografi.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok kata bahasa Inggris?",
    pilihan: ["Pillow", "Kitchen", "Character", "Merci", "Number"],
    jawaban: 3,
    pembahasan: "Merci adalah kata bahasa Prancis yang berarti terima kasih.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok makanan cepat saji?",
    pilihan: ["Hot Dog", "Burger", "Pizza", "Tiramisu", "French Fries"],
    jawaban: 3,
    pembahasan: "Tiramisu adalah makanan penutup, bukan makanan cepat saji.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok nama kerajaan di Indonesia?",
    pilihan: ["Majapahit", "Kalingga", "Kudungga", "Tarumanegara", "Kutai"],
    jawaban: 2,
    pembahasan: "Kudungga adalah raja pertama Kutai, bukan nama kerajaan.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok produk berbahan dasar susu?",
    pilihan: ["Yoghurt", "Puding", "Keju", "Krim", "Mentega"],
    jawaban: 1,
    pembahasan: "Yoghurt, keju, krim, dan mentega merupakan produk susu; puding tidak selalu berbahan dasar susu.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok nama profesi?",
    pilihan: ["Pemrogram", "Desainer", "Kontraktor", "Arkeologi", "Pengusaha"],
    jawaban: 3,
    pembahasan: "Arkeologi adalah bidang ilmu, bukan profesi.",
  },
  {
    pertanyaan: "Mana yang tidak masuk dalam kelompok pertempuran di Indonesia?",
    pilihan: [
      "Pertempuran Surabaya",
      "Puputan Margarana",
      "Bandung Lautan Api",
      "Perang Tujuh Tahun",
      "Perang Padri",
    ],
    jawaban: 3,
    pembahasan: "Perang Tujuh Tahun terjadi di berbagai wilayah dunia, bukan pertempuran Indonesia.",
  },

  // Padanan kata / Analogi
  {
    pertanyaan: "Gerbong : Lokomotif = ... : ...",
    pilihan: [
      "Taksi : Pengemudi",
      "Kereta : Masinis",
      "Pedati : Andong",
      "Trem : Rel",
      "Delman : Kuda",
    ],
    jawaban: 4,
    pembahasan: "Lokomotif menarik gerbong, seperti kuda menarik delman.",
  },
  {
    pertanyaan: "Modern : Tradisional = ... : ...",
    pilihan: [
      "Roket : Rudal Scud",
      "Mobil : Pedati",
      "Pesawat : Sepeda Motor",
      "Ferrari : Fiat",
      "TV : VCD Player",
    ],
    jawaban: 1,
    pembahasan: "Mobil adalah kendaraan modern, sedangkan pedati adalah kendaraan tradisional.",
  },
  {
    pertanyaan: "Gitar : Senar = ... : ...",
    pilihan: [
      "Piano : Tuts",
      "Drum : Palu",
      "Flute : Lubang",
      "Biola : Busur",
      "Trompet : Katup",
    ],
    jawaban: 0,
    pembahasan: "Senar merupakan bagian gitar yang menghasilkan suara; tuts memiliki fungsi serupa pada piano.",
  },
  {
    pertanyaan: "Dokter : Pasien = Guru : ...",
    pilihan: ["Murid", "Buku", "Sekolah", "Pelajaran"],
    jawaban: 0,
    pembahasan: "Dokter menangani pasien, sedangkan guru membimbing murid.",
  },
  {
    pertanyaan: "Pisau : Tajam = Kapas : ...",
    pilihan: ["Putih", "Lembut", "Ringan", "Kecil"],
    jawaban: 1,
    pembahasan: "Pisau identik dengan tajam, sedangkan kapas identik dengan lembut.",
  },
  {
    pertanyaan: "Mobil : Jalan = Kapal : ...",
    pilihan: ["Darat", "Sungai", "Laut", "Dermaga"],
    jawaban: 2,
    pembahasan: "Mobil digunakan di jalan, sedangkan kapal digunakan di laut.",
  },
  {
    pertanyaan: "Api : Panas = Es : ...",
    pilihan: ["Dingin", "Beku", "Cair", "Air"],
    jawaban: 0,
    pembahasan: "Api menghasilkan panas, sedangkan es menghasilkan rasa dingin.",
  },
  {
    pertanyaan: "Matahari : Siang = Bulan : ...",
    pilihan: ["Terang", "Malam", "Bintang", "Awan"],
    jawaban: 1,
    pembahasan: "Matahari identik dengan siang, sedangkan bulan identik dengan malam.",
  },
  {
    pertanyaan: "Melati : Putih = Mawar : ...",
    pilihan: ["Merah", "Harum", "Tajam", "Indah"],
    jawaban: 0,
    pembahasan: "Melati sering diidentikkan dengan putih, sedangkan mawar dengan merah.",
  },
  {
    pertanyaan: "Pensil : Tulis = Gunting : ...",
    pilihan: ["Kertas", "Gunting", "Potong", "Tajam"],
    jawaban: 2,
    pembahasan: "Pensil digunakan untuk menulis, sedangkan gunting digunakan untuk memotong.",
  },
];

export default verbal;