const logika = [
  {
    id: 1,
    pertanyaan:
      "Semua pegawai Pertamina wajib mengikuti pelatihan HSSE. Budi adalah pegawai Pertamina. Kesimpulan yang benar adalah...",
    pilihan: [
      "Budi wajib mengikuti pelatihan HSSE",
      "Budi bukan pegawai Pertamina",
      "Semua peserta HSSE adalah pegawai Pertamina",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 0,
    pembahasan:
      "Karena semua pegawai Pertamina wajib mengikuti pelatihan HSSE dan Budi adalah pegawai Pertamina, maka Budi wajib mengikuti pelatihan HSSE."
  },

  {
    id: 2,
    pertanyaan:
      "Jika semua pekerja memakai APD dan Andi adalah pekerja, maka...",
    pilihan: [
      "Andi memakai APD",
      "Andi tidak memakai APD",
      "Semua pemakai APD adalah pekerja",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 0,
    pembahasan:
      "Ini menggunakan penalaran deduktif. Jika semua pekerja memakai APD dan Andi adalah pekerja, maka Andi memakai APD."
  },

  {
    id: 3,
    pertanyaan:
      "Jika hujan maka jalan basah. Jalan tidak basah. Kesimpulan yang benar adalah...",
    pilihan: [
      "Hujan",
      "Tidak hujan",
      "Jalan licin",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 1,
    pembahasan:
      "Menggunakan modus tollens. Jika hujan menyebabkan jalan basah, tetapi jalan tidak basah, maka dapat disimpulkan tidak hujan."
  },
  {
    id: 4,
    pertanyaan:
      "Semua A adalah B. Tidak ada B adalah C. Sebagian C adalah D. Kesimpulan yang valid adalah...",
    pilihan: [
      "Tidak ada A yang C",
      "Sebagian A adalah D",
      "Semua D adalah A",
      "Semua A adalah C"
    ],
    jawaban: 0,
    pembahasan:
      "Karena semua A termasuk B dan tidak ada B yang termasuk C, maka tidak ada A yang termasuk C."
  },

  {
    id: 5,
    pertanyaan:
      "Jika P maka Q. Jika Q maka R. Tidak benar bahwa R. Kesimpulan adalah...",
    pilihan: [
      "P benar",
      "Q benar",
      "P salah",
      "Tidak ada hubungan"
    ],
    jawaban: 2,
    pembahasan:
      "Dengan modus tollens berantai, jika R salah maka Q salah sehingga P juga salah."
  },

  {
    id: 6,
    pertanyaan:
      "Semua penulis membaca buku. Ada penulis yang tidak menggunakan laptop. Sebagian pembaca buku adalah mahasiswa. Kesimpulan paling kuat adalah...",
    pilihan: [
      "Semua penulis mahasiswa",
      "Sebagian penulis mungkin mahasiswa",
      "Semua penulis menggunakan laptop",
      "Penulis bukan mahasiswa"
    ],
    jawaban: 1,
    pembahasan:
      "Informasi hanya memungkinkan kemungkinan sebagian penulis merupakan mahasiswa."
  },

  {
    id: 7,
    pertanyaan:
      "Jika hujan turun maka jalan licin. Jika jalan licin maka terjadi kecelakaan. Hari ini tidak terjadi kecelakaan. Kesimpulan yang tepat adalah...",
    pilihan: [
      "Hujan turun",
      "Hujan tidak turun",
      "Jalan licin",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 3,
    pembahasan:
      "Tidak terjadi kecelakaan belum tentu berarti tidak hujan. Hubungan implikasi tidak dapat dibalik."
  },

  {
    id: 8,
    pertanyaan:
      "Jika A benar maka B salah. Jika B salah maka C benar. C salah. Kesimpulannya adalah...",
    pilihan: [
      "A benar",
      "A salah",
      "B salah",
      "Tidak ada hubungan"
    ],
    jawaban: 1,
    pembahasan:
      "Karena C salah, maka rangkaian implikasi tidak terpenuhi sehingga A tidak mungkin benar."
  },

  {
    id: 9,
    pertanyaan:
      "Semua mobil merah cepat. Beberapa mobil cepat bukan mobil sport. Semua mobil sport mahal. Kesimpulan yang benar adalah...",
    pilihan: [
      "Semua mobil merah mahal",
      "Mobil cepat pasti merah",
      "Ada mobil cepat yang tidak mahal",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 2,
    pembahasan:
      "Mobil cepat yang bukan sport tidak harus mahal."
  },

  {
    id: 10,
    pertanyaan:
      "Jika ada diskon maka pembeli banyak. Jika pembeli banyak maka toko untung. Toko tidak untung. Kesimpulan adalah...",
    pilihan: [
      "Ada diskon",
      "Tidak ada diskon",
      "Pembeli banyak",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 1,
    pembahasan:
      "Dengan modus tollens, jika toko tidak untung maka pembeli tidak banyak sehingga tidak ada diskon."
  },


{
  id: 11,
  pertanyaan:
    "Semua pemain hebat berlatih keras. Beberapa yang berlatih keras cedera. Kesimpulan paling tepat adalah...",
  pilihan: [
    "Pemain hebat pasti cedera",
    "Beberapa pemain hebat mungkin cedera",
    "Semua pemain cedera hebat",
    "Tidak ada pemain yang cedera"
  ],
  jawaban: 1,
  pembahasan:
    "Karena sebagian yang berlatih keras cedera, maka sebagian pemain hebat mungkin cedera."
},

{
  id: 12,
  pertanyaan:
    "Jika toko buka maka ada penjaga. Jika ada penjaga maka lampu menyala. Lampu tidak menyala. Kesimpulan adalah...",
  pilihan: [
    "Toko buka",
    "Toko tutup",
    "Penjaga ada",
    "Lampu rusak"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens: lampu tidak menyala → tidak ada penjaga → toko tidak buka."
},

{
  id: 13,
  pertanyaan:
    "Semua orang sukses disiplin. Sebagian orang sukses kaya. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua orang kaya disiplin",
    "Sebagian orang disiplin kaya",
    "Semua orang sukses kaya",
    "Tidak ada yang kaya"
  ],
  jawaban: 1,
  pembahasan:
    "Karena sebagian orang sukses kaya dan semua orang sukses disiplin, maka sebagian orang disiplin kaya."
},

{
  id: 14,
  pertanyaan:
    "Beberapa ilmuwan adalah penulis. Semua penulis membaca. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua ilmuwan membaca",
    "Beberapa ilmuwan membaca",
    "Semua pembaca ilmuwan",
    "Tidak ada ilmuwan membaca"
  ],
  jawaban: 1,
  pembahasan:
    "Karena beberapa ilmuwan adalah penulis dan semua penulis membaca, maka beberapa ilmuwan membaca."
},

{
  id: 15,
  pertanyaan:
    "Semua buah berbiji memiliki kulit. Jeruk memiliki kulit. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Jeruk berbiji",
    "Jeruk bukan berbiji",
    "Tidak dapat disimpulkan",
    "Jeruk pasti tidak berbiji"
  ],
  jawaban: 2,
  pembahasan:
    "Memiliki kulit tidak berarti pasti buah berbiji."
},

{
  id: 16,
  pertanyaan:
    "Jika Rina datang maka rapat dimulai. Jika rapat dimulai maka pintu ditutup. Pintu terbuka. Kesimpulan adalah...",
  pilihan: [
    "Rina datang",
    "Rina tidak datang",
    "Rapat sudah dimulai",
    "Tidak dapat ditentukan"
  ],
  jawaban: 1,
  pembahasan:
    "Pintu terbuka berarti rapat belum dimulai sehingga Rina tidak datang."
},

{
  id: 17,
  pertanyaan:
    "Tidak ada guru yang malas. Beberapa staf malas. Semua guru adalah staf. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Semua staf tidak malas",
    "Ada staf tidak malas",
    "Guru bukan staf",
    "Sebagian staf malas bukan guru"
  ],
  jawaban: 3,
  pembahasan:
    "Karena guru tidak mungkin malas, maka staf yang malas bukan guru."
},

{
  id: 18,
  pertanyaan:
    "Semua tanaman membutuhkan air. Kaktus adalah tanaman. Kesimpulan yang benar adalah...",
  pilihan: [
    "Kaktus tidak membutuhkan air",
    "Kaktus membutuhkan air",
    "Semua tanaman berduri",
    "Kaktus pasti berduri"
  ],
  jawaban: 1,
  pembahasan:
    "Karena kaktus adalah tanaman dan semua tanaman membutuhkan air, maka kaktus membutuhkan air."
},

{
  id: 19,
  pertanyaan:
    "Jika nilai lebih dari 80 maka lulus A. Jika nilai lebih dari 90 maka mendapat bonus. Rita tidak mendapat bonus. Kesimpulan paling tepat adalah...",
  pilihan: [
    "Nilai Rita lebih dari 90",
    "Nilai Rita kurang dari 90",
    "Nilai Rita lebih dari 80",
    "Rita lulus A"
  ],
  jawaban: 1,
  pembahasan:
    "Karena Rita tidak mendapat bonus, maka nilai Rita tidak lebih dari 90."
},

{
  id: 20,
  pertanyaan:
    "Tidak semua dosen mengajar pagi. Semua dosen mengajar minimal satu kelas. Sebagian dosen mengajar sore. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua dosen mengajar sore",
    "Sebagian dosen tidak mengajar pagi",
    "Semua dosen mengajar pagi",
    "Tidak ada dosen mengajar sore"
  ],
  jawaban: 1,
  pembahasan:
    "Karena tidak semua dosen mengajar pagi, berarti ada dosen yang tidak mengajar pagi."
}

,
{
  id: 21,
  pertanyaan:
    "Jika semua karyawan disiplin maka perusahaan maju. Perusahaan tidak maju. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Semua karyawan disiplin",
    "Ada karyawan yang tidak disiplin",
    "Perusahaan bangkrut",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika perusahaan tidak maju, maka tidak benar bahwa semua karyawan disiplin."
},

{
  id: 22,
  pertanyaan:
    "Semua dokter adalah sarjana. Sebagian sarjana adalah dosen. Kesimpulan yang paling tepat adalah...",
  pilihan: [
    "Semua dokter adalah dosen",
    "Sebagian dokter mungkin dosen",
    "Semua dosen adalah dokter",
    "Tidak ada dokter yang menjadi dosen"
  ],
  jawaban: 1,
  pembahasan:
    "Karena sebagian sarjana adalah dosen, sebagian dokter mungkin termasuk kelompok tersebut."
},

{
  id: 23,
  pertanyaan:
    "Jika listrik padam maka mesin berhenti. Mesin berhenti. Kesimpulan yang benar adalah...",
  pilihan: [
    "Listrik pasti padam",
    "Listrik tidak padam",
    "Belum tentu listrik padam",
    "Mesin rusak"
  ],
  jawaban: 2,
  pembahasan:
    "Tidak dapat membalik implikasi. Mesin berhenti bisa disebabkan hal lain selain listrik padam."
},

{
  id: 24,
  pertanyaan:
    "Semua ikan hidup di air. Paus hidup di air. Kesimpulan yang benar adalah...",
  pilihan: [
    "Paus adalah ikan",
    "Paus bukan ikan",
    "Belum tentu paus adalah ikan",
    "Semua hewan air adalah ikan"
  ],
  jawaban: 2,
  pembahasan:
    "Hidup di air tidak cukup untuk menyimpulkan bahwa paus adalah ikan."
},

{
  id: 25,
  pertanyaan:
    "Jika belajar rajin maka nilai tinggi. Nilai Andi tinggi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Andi pasti rajin",
    "Andi mungkin rajin",
    "Andi tidak rajin",
    "Tidak ada hubungan"
  ],
  jawaban: 1,
  pembahasan:
    "Nilai tinggi belum tentu hanya disebabkan oleh rajin belajar."
},

{
  id: 26,
  pertanyaan:
    "Semua burung memiliki sayap. Elang adalah burung. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Elang memiliki sayap",
    "Elang tidak memiliki sayap",
    "Semua yang bersayap adalah burung",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena elang adalah burung dan semua burung memiliki sayap, maka elang memiliki sayap."
},

{
  id: 27,
  pertanyaan:
    "Jika hujan maka membawa payung. Hari ini tidak membawa payung. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Hari ini hujan",
    "Hari ini tidak hujan",
    "Hari ini mendung",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens: jika tidak membawa payung, maka diasumsikan hujan tidak terjadi."
},

{
  id: 28,
  pertanyaan:
    "Semua mahasiswa memiliki KTM. Budi memiliki KTM. Kesimpulan yang benar adalah...",
  pilihan: [
    "Budi adalah mahasiswa",
    "Budi bukan mahasiswa",
    "Belum tentu Budi mahasiswa",
    "Semua pemilik KTM adalah mahasiswa"
  ],
  jawaban: 2,
  pembahasan:
    "Memiliki KTM saja tidak cukup untuk memastikan bahwa Budi adalah mahasiswa."
},

{
  id: 29,
  pertanyaan:
    "Jika mesin menyala maka lampu indikator hidup. Lampu indikator mati. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mesin menyala",
    "Mesin tidak menyala",
    "Lampu rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens: indikator mati berarti mesin tidak menyala."
},

{
  id: 30,
  pertanyaan:
    "Semua bunga mawar berduri. Mawar merah adalah bunga mawar. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mawar merah tidak berduri",
    "Mawar merah berduri",
    "Semua bunga berduri",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena mawar merah termasuk bunga mawar dan semua bunga mawar berduri, maka mawar merah berduri."
}

,
{
  id: 31,
  pertanyaan:
    "Jika semua siswa belajar maka ujian lulus. Semua siswa belajar. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua siswa lulus ujian",
    "Sebagian siswa lulus",
    "Tidak ada siswa lulus",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua siswa belajar dan belajar menyebabkan lulus, maka semua siswa lulus ujian."
},

{
  id: 32,
  pertanyaan:
    "Semua pegawai memakai kartu identitas. Rina memakai kartu identitas. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Rina pegawai",
    "Belum tentu Rina pegawai",
    "Rina bukan pegawai",
    "Semua pemakai kartu identitas pegawai"
  ],
  jawaban: 1,
  pembahasan:
    "Memakai kartu identitas belum tentu berarti pegawai."
},

{
  id: 33,
  pertanyaan:
    "Jika alarm berbunyi maka semua orang keluar ruangan. Semua orang tidak keluar ruangan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Alarm berbunyi",
    "Alarm tidak berbunyi",
    "Alarm rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika semua orang tidak keluar, maka alarm tidak berbunyi."
},

{
  id: 34,
  pertanyaan:
    "Semua guru adalah pendidik. Semua pendidik dihormati. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua guru dihormati",
    "Semua yang dihormati adalah guru",
    "Sebagian guru tidak dihormati",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Guru termasuk pendidik, sedangkan semua pendidik dihormati."
},

{
  id: 35,
  pertanyaan:
    "Jika mesin bekerja maka listrik menyala. Listrik menyala. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mesin pasti bekerja",
    "Belum tentu mesin bekerja",
    "Mesin rusak",
    "Tidak ada hubungan"
  ],
  jawaban: 1,
  pembahasan:
    "Tidak dapat menarik kesimpulan kebalikan dari suatu implikasi."
},

{
  id: 36,
  pertanyaan:
    "Semua atlet rajin berlatih. Doni rajin berlatih. Kesimpulan yang benar adalah...",
  pilihan: [
    "Doni atlet",
    "Belum tentu Doni atlet",
    "Doni bukan atlet",
    "Semua yang rajin adalah atlet"
  ],
  jawaban: 1,
  pembahasan:
    "Rajin berlatih tidak berarti pasti seorang atlet."
},

{
  id: 37,
  pertanyaan:
    "Jika matahari terbit maka hari menjadi terang. Hari tidak terang. Kesimpulan yang benar adalah...",
  pilihan: [
    "Matahari terbit",
    "Matahari tidak terbit",
    "Sedang hujan",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika hari tidak terang, maka matahari tidak terbit."
},

{
  id: 38,
  pertanyaan:
    "Semua komputer memiliki prosesor. Laptop adalah komputer. Kesimpulan yang benar adalah...",
  pilihan: [
    "Laptop memiliki prosesor",
    "Laptop bukan komputer",
    "Semua prosesor adalah laptop",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena laptop termasuk komputer dan semua komputer memiliki prosesor."
},

{
  id: 39,
  pertanyaan:
    "Semua kendaraan bermotor menggunakan bahan bakar atau listrik. Mobil adalah kendaraan bermotor. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mobil menggunakan bahan bakar atau listrik",
    "Mobil pasti listrik",
    "Mobil pasti bensin",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Mobil termasuk kendaraan bermotor sehingga menggunakan bahan bakar atau listrik."
},

{
  id: 40,
  pertanyaan:
    "Jika seorang pegawai disiplin maka ia mendapat penilaian baik. Anton mendapat penilaian baik. Kesimpulan yang benar adalah...",
  pilihan: [
    "Anton pasti disiplin",
    "Anton belum tentu disiplin",
    "Anton tidak disiplin",
    "Tidak ada hubungan"
  ],
  jawaban: 1,
  pembahasan:
    "Penilaian baik bisa diperoleh karena berbagai faktor, sehingga tidak dapat dipastikan Anton disiplin."
}

,
{
  id: 41,
  pertanyaan:
    "Semua petugas HSSE mengikuti briefing pagi. Sinta adalah petugas HSSE. Kesimpulan yang benar adalah...",
  pilihan: [
    "Sinta mengikuti briefing pagi",
    "Sinta tidak mengikuti briefing pagi",
    "Semua yang briefing adalah petugas HSSE",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua petugas HSSE mengikuti briefing pagi dan Sinta adalah petugas HSSE, maka Sinta mengikuti briefing pagi."
},

{
  id: 42,
  pertanyaan:
    "Jika APD digunakan maka risiko kecelakaan berkurang. Risiko kecelakaan tidak berkurang. Kesimpulan yang tepat adalah...",
  pilihan: [
    "APD digunakan",
    "APD tidak digunakan",
    "APD rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika risiko tidak berkurang, maka APD tidak digunakan."
},

{
  id: 43,
  pertanyaan:
    "Semua operator harus memiliki sertifikat. Rudi memiliki sertifikat. Kesimpulan yang benar adalah...",
  pilihan: [
    "Rudi adalah operator",
    "Belum tentu Rudi operator",
    "Rudi bukan operator",
    "Semua yang bersertifikat adalah operator"
  ],
  jawaban: 1,
  pembahasan:
    "Memiliki sertifikat tidak otomatis berarti seorang operator."
},

{
  id: 44,
  pertanyaan:
    "Jika mesin overheat maka alarm berbunyi. Alarm berbunyi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mesin pasti overheat",
    "Belum tentu mesin overheat",
    "Mesin mati",
    "Tidak ada hubungan"
  ],
  jawaban: 1,
  pembahasan:
    "Alarm bisa berbunyi karena penyebab lain sehingga tidak dapat dipastikan mesin overheat."
},

{
  id: 45,
  pertanyaan:
    "Semua karyawan memakai seragam. Andi tidak memakai seragam. Kesimpulan yang benar adalah...",
  pilihan: [
    "Andi bukan karyawan",
    "Andi pasti karyawan",
    "Andi sedang cuti",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Jika semua karyawan memakai seragam dan Andi tidak memakai seragam, maka Andi bukan karyawan."
},

{
  id: 46,
  pertanyaan:
    "Semua kendaraan operasional menjalani inspeksi rutin. Mobil A adalah kendaraan operasional. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mobil A menjalani inspeksi rutin",
    "Mobil A tidak menjalani inspeksi",
    "Semua kendaraan yang diinspeksi adalah kendaraan operasional",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena Mobil A termasuk kendaraan operasional, maka Mobil A menjalani inspeksi rutin."
},

{
  id: 47,
  pertanyaan:
    "Jika tekanan terlalu tinggi maka katup pengaman terbuka. Katup pengaman tidak terbuka. Kesimpulan yang benar adalah...",
  pilihan: [
    "Tekanan terlalu tinggi",
    "Tekanan tidak terlalu tinggi",
    "Katup rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika katup tidak terbuka, maka tekanan tidak terlalu tinggi."
},

{
  id: 48,
  pertanyaan:
    "Semua mahasiswa memiliki NIM. Dika memiliki NIM. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dika mahasiswa",
    "Belum tentu Dika mahasiswa",
    "Dika bukan mahasiswa",
    "Semua pemilik NIM adalah mahasiswa"
  ],
  jawaban: 1,
  pembahasan:
    "Memiliki NIM saja tidak cukup untuk memastikan bahwa Dika mahasiswa."
},

{
  id: 49,
  pertanyaan:
    "Jika audit selesai maka laporan diterbitkan. Laporan belum diterbitkan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Audit selesai",
    "Audit belum selesai",
    "Laporan hilang",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Dengan modus tollens, jika laporan belum diterbitkan maka audit belum selesai."
},

{
  id: 50,
  pertanyaan:
    "Semua peserta pelatihan wajib hadir tepat waktu. Beni hadir tepat waktu. Kesimpulan yang benar adalah...",
  pilihan: [
    "Beni peserta pelatihan",
    "Belum tentu Beni peserta pelatihan",
    "Beni bukan peserta pelatihan",
    "Semua yang hadir tepat waktu adalah peserta pelatihan"
  ],
  jawaban: 1,
  pembahasan:
    "Hadir tepat waktu tidak otomatis menunjukkan bahwa seseorang adalah peserta pelatihan."
}

,
{
  id: 51,
  pertanyaan:
    "Semua pekerja yang memasuki area produksi wajib menggunakan helm keselamatan. Arif memasuki area produksi. Kesimpulan yang paling tepat adalah...",
  pilihan: [
    "Arif wajib menggunakan helm keselamatan",
    "Arif tidak wajib menggunakan helm",
    "Arif bukan pekerja",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena setiap pekerja yang memasuki area produksi wajib memakai helm keselamatan dan Arif memasuki area tersebut, maka Arif wajib menggunakan helm keselamatan."
},

{
  id: 52,
  pertanyaan:
    "Jika pelatihan selesai maka peserta memperoleh sertifikat. Peserta belum memperoleh sertifikat. Kesimpulan yang benar adalah...",
  pilihan: [
    "Pelatihan selesai",
    "Pelatihan belum selesai",
    "Sertifikat hilang",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika sertifikat belum diperoleh, maka pelatihan belum selesai."
},

{
  id: 53,
  pertanyaan:
    "Semua supervisor membuat laporan harian. Dina membuat laporan harian. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dina supervisor",
    "Belum tentu Dina supervisor",
    "Dina bukan supervisor",
    "Semua pembuat laporan adalah supervisor"
  ],
  jawaban: 1,
  pembahasan:
    "Membuat laporan harian tidak berarti pasti seorang supervisor."
},

{
  id: 54,
  pertanyaan:
    "Jika pompa rusak maka aliran air berhenti. Aliran air tetap berjalan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Pompa rusak",
    "Pompa tidak rusak",
    "Pipa bocor",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika aliran tetap berjalan, maka pompa tidak rusak."
},

{
  id: 55,
  pertanyaan:
    "Semua pegawai tetap mendapat BPJS. Anton mendapat BPJS. Kesimpulan yang benar adalah...",
  pilihan: [
    "Anton pegawai tetap",
    "Belum tentu Anton pegawai tetap",
    "Anton bukan pegawai tetap",
    "Semua penerima BPJS pegawai tetap"
  ],
  jawaban: 1,
  pembahasan:
    "Mendapat BPJS tidak cukup untuk menyimpulkan bahwa Anton pegawai tetap."
},

{
  id: 56,
  pertanyaan:
    "Jika suhu reaktor terlalu tinggi maka alarm berbunyi. Alarm tidak berbunyi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Suhu reaktor terlalu tinggi",
    "Suhu reaktor tidak terlalu tinggi",
    "Alarm rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Alarm tidak berbunyi berarti suhu reaktor tidak terlalu tinggi."
},

{
  id: 57,
  pertanyaan:
    "Semua mobil dinas memiliki logo perusahaan. Mobil X memiliki logo perusahaan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mobil X mobil dinas",
    "Belum tentu Mobil X mobil dinas",
    "Mobil X bukan mobil dinas",
    "Semua mobil berlogo adalah mobil dinas"
  ],
  jawaban: 1,
  pembahasan:
    "Adanya logo perusahaan belum tentu menunjukkan mobil tersebut merupakan mobil dinas."
},

{
  id: 58,
  pertanyaan:
    "Jika izin kerja diterbitkan maka pekerjaan dapat dimulai. Pekerjaan belum dimulai. Kesimpulan yang paling tepat adalah...",
  pilihan: [
    "Izin kerja belum diterbitkan",
    "Izin kerja sudah diterbitkan",
    "Pekerjaan selesai",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 3,
  pembahasan:
    "Pekerjaan belum dimulai bisa disebabkan banyak faktor, tidak hanya karena izin kerja belum diterbitkan."
},

{
  id: 59,
  pertanyaan:
    "Semua operator forklift memiliki lisensi. Budi memiliki lisensi forklift. Kesimpulan yang benar adalah...",
  pilihan: [
    "Budi operator forklift",
    "Belum tentu Budi operator forklift",
    "Budi bukan operator forklift",
    "Semua pemilik lisensi adalah operator forklift"
  ],
  jawaban: 1,
  pembahasan:
    "Memiliki lisensi belum tentu berarti seseorang bekerja sebagai operator forklift."
},

{
  id: 60,
  pertanyaan:
    "Semua peserta medical check-up harus membawa kartu identitas. Rina tidak membawa kartu identitas. Kesimpulan yang benar adalah...",
  pilihan: [
    "Rina peserta medical check-up",
    "Rina bukan peserta medical check-up",
    "Rina kehilangan kartu",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena semua peserta wajib membawa kartu identitas dan Rina tidak membawanya, maka Rina bukan peserta medical check-up."
}

,
{
  id: 61,
  pertanyaan:
    "Semua auditor memahami prosedur HSSE. Sebagian auditor merupakan supervisor. Kesimpulan yang paling tepat adalah...",
  pilihan: [
    "Semua supervisor memahami HSSE",
    "Sebagian supervisor memahami HSSE",
    "Tidak ada supervisor memahami HSSE",
    "Semua yang memahami HSSE adalah auditor"
  ],
  jawaban: 1,
  pembahasan:
    "Karena sebagian auditor adalah supervisor dan semua auditor memahami HSSE, maka sebagian supervisor memahami HSSE."
},

{
  id: 62,
  pertanyaan:
    "Jika seluruh inspeksi selesai maka laporan dikirim. Laporan belum dikirim. Kesimpulan yang benar adalah...",
  pilihan: [
    "Seluruh inspeksi belum selesai",
    "Laporan hilang",
    "Inspeksi gagal",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Menggunakan modus tollens. Jika laporan belum dikirim, maka inspeksi belum selesai."
},

{
  id: 63,
  pertanyaan:
    "Semua pekerja yang memiliki izin kerja boleh memasuki area terbatas. Rudi berada di area terbatas. Kesimpulan yang benar adalah...",
  pilihan: [
    "Rudi memiliki izin kerja",
    "Belum tentu Rudi memiliki izin kerja",
    "Rudi tidak memiliki izin kerja",
    "Semua orang di area terbatas adalah pekerja"
  ],
  jawaban: 1,
  pembahasan:
    "Berada di area terbatas belum tentu karena memiliki izin kerja. Bisa saja sebagai tamu atau pengawas."
},

{
  id: 64,
  pertanyaan:
    "Jika tekanan meningkat maka katup otomatis terbuka. Katup otomatis terbuka. Kesimpulan yang tepat adalah...",
  pilihan: [
    "Tekanan pasti meningkat",
    "Tekanan belum tentu meningkat",
    "Katup rusak",
    "Tekanan normal"
  ],
  jawaban: 1,
  pembahasan:
    "Katup dapat terbuka karena penyebab lain sehingga tidak dapat dipastikan tekanan meningkat."
},

{
  id: 65,
  pertanyaan:
    "Semua kendaraan operasional memiliki nomor inventaris. Truk A tidak memiliki nomor inventaris. Kesimpulan yang benar adalah...",
  pilihan: [
    "Truk A bukan kendaraan operasional",
    "Truk A kendaraan operasional",
    "Nomor inventaris hilang",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua kendaraan operasional memiliki nomor inventaris, maka kendaraan yang tidak memilikinya bukan kendaraan operasional."
},

{
  id: 66,
  pertanyaan:
    "Semua peserta pelatihan memakai ID Card. Sebagian peserta pelatihan berasal dari Balikpapan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua yang memakai ID Card berasal dari Balikpapan",
    "Sebagian peserta dari Balikpapan memakai ID Card",
    "Tidak ada peserta Balikpapan memakai ID Card",
    "Semua peserta berasal dari Balikpapan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena semua peserta memakai ID Card dan sebagian berasal dari Balikpapan, maka sebagian peserta Balikpapan memakai ID Card."
},

{
  id: 67,
  pertanyaan:
    "Jika mesin dihidupkan maka panel kontrol aktif. Panel kontrol tidak aktif. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mesin dihidupkan",
    "Mesin tidak dihidupkan",
    "Panel rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Panel tidak aktif berarti mesin tidak dihidupkan."
},

{
  id: 68,
  pertanyaan:
    "Semua operator kilang mengikuti briefing. Dani mengikuti briefing. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dani operator kilang",
    "Belum tentu Dani operator kilang",
    "Dani bukan operator",
    "Semua peserta briefing adalah operator"
  ],
  jawaban: 1,
  pembahasan:
    "Mengikuti briefing tidak otomatis berarti operator kilang."
},

{
  id: 69,
  pertanyaan:
    "Jika APAR tersedia maka kebakaran dapat segera ditangani. Kebakaran tidak segera ditangani. Kesimpulan yang benar adalah...",
  pilihan: [
    "APAR tidak tersedia",
    "APAR tersedia",
    "Semua APAR rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Dengan modus tollens, jika kebakaran tidak segera ditangani maka APAR tidak tersedia."
},

{
  id: 70,
  pertanyaan:
    "Semua teknisi memahami SOP. Semua yang memahami SOP wajib mengikuti evaluasi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua teknisi wajib mengikuti evaluasi",
    "Semua peserta evaluasi adalah teknisi",
    "Sebagian teknisi tidak mengikuti evaluasi",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua teknisi memahami SOP dan semua yang memahami SOP wajib mengikuti evaluasi, maka semua teknisi wajib mengikuti evaluasi."
}

,
{
  id: 71,
  pertanyaan:
    "Semua pegawai yang mengikuti briefing memahami prosedur keselamatan. Tono tidak memahami prosedur keselamatan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Tono mengikuti briefing",
    "Tono tidak mengikuti briefing",
    "Briefing dibatalkan",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Dengan modus tollens, jika Tono tidak memahami prosedur keselamatan maka Tono tidak mengikuti briefing."
},

{
  id: 72,
  pertanyaan:
    "Semua kendaraan tangki wajib diperiksa sebelum beroperasi. Mobil A telah diperiksa sebelum beroperasi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mobil A kendaraan tangki",
    "Belum tentu Mobil A kendaraan tangki",
    "Mobil A bukan kendaraan tangki",
    "Semua kendaraan diperiksa"
  ],
  jawaban: 1,
  pembahasan:
    "Diperiksa sebelum beroperasi tidak berarti pasti kendaraan tangki."
},

{
  id: 73,
  pertanyaan:
    "Jika alarm kebakaran berbunyi maka seluruh pekerja melakukan evakuasi. Seluruh pekerja tidak melakukan evakuasi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Alarm kebakaran berbunyi",
    "Alarm kebakaran tidak berbunyi",
    "Evakuasi gagal",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika tidak ada evakuasi maka alarm kebakaran tidak berbunyi."
},

{
  id: 74,
  pertanyaan:
    "Semua supervisor membuat laporan mingguan. Sebagian supervisor mengikuti pelatihan HSSE. Kesimpulan yang benar adalah...",
  pilihan: [
    "Sebagian peserta pelatihan membuat laporan mingguan",
    "Semua peserta pelatihan supervisor",
    "Tidak ada supervisor ikut pelatihan",
    "Semua laporan dibuat peserta pelatihan"
  ],
  jawaban: 0,
  pembahasan:
    "Karena sebagian supervisor ikut pelatihan dan semua supervisor membuat laporan, maka sebagian peserta pelatihan membuat laporan."
},

{
  id: 75,
  pertanyaan:
    "Jika suhu ruangan meningkat maka pendingin otomatis menyala. Pendingin otomatis menyala. Kesimpulan yang benar adalah...",
  pilihan: [
    "Suhu ruangan meningkat",
    "Belum tentu suhu meningkat",
    "Pendingin rusak",
    "Ruangan dingin"
  ],
  jawaban: 1,
  pembahasan:
    "Pendingin dapat menyala karena berbagai alasan sehingga tidak dapat dipastikan suhu meningkat."
},

{
  id: 76,
  pertanyaan:
    "Semua operator crane memiliki sertifikat. Joko tidak memiliki sertifikat. Kesimpulan yang benar adalah...",
  pilihan: [
    "Joko operator crane",
    "Joko bukan operator crane",
    "Joko kehilangan sertifikat",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena semua operator crane memiliki sertifikat, maka yang tidak memiliki sertifikat bukan operator crane."
},

{
  id: 77,
  pertanyaan:
    "Semua pekerja kontraktor memakai rompi oranye. Andi memakai rompi oranye. Kesimpulan yang benar adalah...",
  pilihan: [
    "Andi pekerja kontraktor",
    "Belum tentu Andi pekerja kontraktor",
    "Andi bukan pekerja kontraktor",
    "Semua pemakai rompi adalah kontraktor"
  ],
  jawaban: 1,
  pembahasan:
    "Memakai rompi oranye belum tentu menunjukkan Andi adalah pekerja kontraktor."
},

{
  id: 78,
  pertanyaan:
    "Jika izin masuk diterbitkan maka tamu dapat memasuki area kilang. Tamu belum memasuki area kilang. Kesimpulan yang benar adalah...",
  pilihan: [
    "Izin masuk belum diterbitkan",
    "Izin masuk sudah diterbitkan",
    "Tamu pulang",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 3,
  pembahasan:
    "Belum memasuki area kilang tidak selalu berarti izin belum diterbitkan."
},

{
  id: 79,
  pertanyaan:
    "Semua petugas keamanan mengikuti apel pagi. Sebagian petugas keamanan bertugas malam. Kesimpulan yang benar adalah...",
  pilihan: [
    "Sebagian petugas yang bertugas malam mengikuti apel pagi",
    "Semua petugas malam adalah keamanan",
    "Tidak ada petugas malam ikut apel",
    "Semua peserta apel bertugas malam"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua petugas keamanan ikut apel dan sebagian bertugas malam, maka sebagian petugas malam ikut apel."
},

{
  id: 80,
  pertanyaan:
    "Jika seluruh data telah lengkap maka laporan dapat dikirim. Laporan telah dikirim. Kesimpulan yang benar adalah...",
  pilihan: [
    "Seluruh data telah lengkap",
    "Belum tentu seluruh data lengkap",
    "Data hilang",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Laporan dapat dikirim karena berbagai alasan. Tidak dapat dipastikan seluruh data lengkap hanya dari laporan yang sudah dikirim."
}

,
{
  id: 81,
  pertanyaan:
    "Semua petugas laboratorium menggunakan APD lengkap. Sari tidak menggunakan APD lengkap. Kesimpulan yang benar adalah...",
  pilihan: [
    "Sari petugas laboratorium",
    "Sari bukan petugas laboratorium",
    "APD Sari rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena semua petugas laboratorium menggunakan APD lengkap, maka yang tidak menggunakan APD lengkap bukan petugas laboratorium."
},

{
  id: 82,
  pertanyaan:
    "Jika pompa utama berhenti maka produksi terhenti. Produksi tetap berjalan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Pompa utama berhenti",
    "Pompa utama tidak berhenti",
    "Produksi meningkat",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Jika produksi tetap berjalan maka pompa utama tidak berhenti."
},

{
  id: 83,
  pertanyaan:
    "Semua peserta pelatihan mengikuti ujian akhir. Andi mengikuti ujian akhir. Kesimpulan yang benar adalah...",
  pilihan: [
    "Andi peserta pelatihan",
    "Belum tentu Andi peserta pelatihan",
    "Andi bukan peserta pelatihan",
    "Semua yang ikut ujian adalah peserta pelatihan"
  ],
  jawaban: 1,
  pembahasan:
    "Mengikuti ujian akhir belum tentu berarti peserta pelatihan."
},

{
  id: 84,
  pertanyaan:
    "Semua kendaraan dinas memiliki plat merah. Mobil B berplat merah. Kesimpulan yang benar adalah...",
  pilihan: [
    "Mobil B kendaraan dinas",
    "Belum tentu Mobil B kendaraan dinas",
    "Mobil B bukan kendaraan dinas",
    "Semua plat merah adalah kendaraan dinas"
  ],
  jawaban: 1,
  pembahasan:
    "Plat merah belum tentu menjadi bukti bahwa kendaraan tersebut kendaraan dinas."
},

{
  id: 85,
  pertanyaan:
    "Jika audit internal selesai maka hasil audit diumumkan. Hasil audit belum diumumkan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Audit internal belum selesai",
    "Audit internal selesai",
    "Auditor tidak hadir",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Menggunakan modus tollens. Jika hasil audit belum diumumkan maka audit belum selesai."
},

{
  id: 86,
  pertanyaan:
    "Semua petugas pemadam kebakaran telah mengikuti pelatihan. Sebagian petugas pemadam bertugas malam. Kesimpulan yang benar adalah...",
  pilihan: [
    "Sebagian petugas malam telah mengikuti pelatihan",
    "Semua petugas malam adalah pemadam",
    "Tidak ada petugas malam mengikuti pelatihan",
    "Semua peserta pelatihan bertugas malam"
  ],
  jawaban: 0,
  pembahasan:
    "Karena semua petugas pemadam mengikuti pelatihan dan sebagian bertugas malam, maka sebagian petugas malam telah mengikuti pelatihan."
},

{
  id: 87,
  pertanyaan:
    "Jika tekanan pipa stabil maka distribusi lancar. Distribusi tidak lancar. Kesimpulan yang benar adalah...",
  pilihan: [
    "Tekanan pipa stabil",
    "Tekanan pipa tidak stabil",
    "Pipa bocor",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Menggunakan modus tollens. Distribusi tidak lancar berarti tekanan pipa tidak stabil."
},

{
  id: 88,
  pertanyaan:
    "Semua pegawai tetap mendapatkan tunjangan kesehatan. Dodi mendapatkan tunjangan kesehatan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dodi pegawai tetap",
    "Belum tentu Dodi pegawai tetap",
    "Dodi bukan pegawai tetap",
    "Semua penerima tunjangan adalah pegawai tetap"
  ],
  jawaban: 1,
  pembahasan:
    "Mendapat tunjangan kesehatan belum tentu berarti pegawai tetap."
},

{
  id: 89,
  pertanyaan:
    "Jika seluruh dokumen lengkap maka kontrak dapat ditandatangani. Kontrak belum ditandatangani. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dokumen belum lengkap",
    "Dokumen lengkap",
    "Kontrak dibatalkan",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Menggunakan modus tollens. Jika kontrak belum ditandatangani maka dokumen belum lengkap."
},

{
  id: 90,
  pertanyaan:
    "Semua anggota tim inspeksi memakai rompi biru. Beni memakai rompi biru. Kesimpulan yang benar adalah...",
  pilihan: [
    "Beni anggota tim inspeksi",
    "Belum tentu Beni anggota tim inspeksi",
    "Beni bukan anggota tim inspeksi",
    "Semua yang memakai rompi biru adalah tim inspeksi"
  ],
  jawaban: 1,
  pembahasan:
    "Memakai rompi biru tidak cukup untuk menyimpulkan bahwa Beni anggota tim inspeksi."
}

,
{
  id: 91,
  pertanyaan:
    "Semua pegawai yang mengikuti pelatihan HSSE lulus ujian keselamatan. Rina lulus ujian keselamatan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Rina mengikuti pelatihan HSSE",
    "Belum tentu Rina mengikuti pelatihan HSSE",
    "Rina tidak mengikuti pelatihan HSSE",
    "Semua yang lulus pasti mengikuti pelatihan HSSE"
  ],
  jawaban: 1,
  pembahasan:
    "Lulus ujian keselamatan belum tentu karena mengikuti pelatihan HSSE. Tidak dapat membalik implikasi."
},

{
  id: 92,
  pertanyaan:
    "Jika seluruh peralatan diperiksa maka pekerjaan dapat dimulai. Pekerjaan sudah dimulai. Kesimpulan yang benar adalah...",
  pilihan: [
    "Seluruh peralatan pasti diperiksa",
    "Belum tentu seluruh peralatan diperiksa",
    "Pemeriksaan gagal",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Pekerjaan bisa dimulai karena alasan lain. Tidak dapat menarik kesimpulan kebalikan."
},

{
  id: 93,
  pertanyaan:
    "Semua operator kilang memahami SOP darurat. Semua yang memahami SOP darurat mampu melakukan evakuasi. Kesimpulan yang benar adalah...",
  pilihan: [
    "Semua operator kilang mampu melakukan evakuasi",
    "Semua yang mampu evakuasi adalah operator",
    "Sebagian operator tidak mampu evakuasi",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Operator → Memahami SOP → Mampu evakuasi. Jadi semua operator mampu melakukan evakuasi."
},

{
  id: 94,
  pertanyaan:
    "Jika tekanan tangki melebihi batas maka alarm aktif. Alarm tidak aktif. Kesimpulan yang benar adalah...",
  pilihan: [
    "Tekanan tangki melebihi batas",
    "Tekanan tangki tidak melebihi batas",
    "Alarm rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Modus tollens: alarm tidak aktif berarti tekanan tidak melebihi batas."
},

{
  id: 95,
  pertanyaan:
    "Semua kendaraan operasional memiliki jadwal servis. Truk B memiliki jadwal servis. Kesimpulan yang benar adalah...",
  pilihan: [
    "Truk B kendaraan operasional",
    "Belum tentu Truk B kendaraan operasional",
    "Truk B bukan kendaraan operasional",
    "Semua kendaraan berservis adalah kendaraan operasional"
  ],
  jawaban: 1,
  pembahasan:
    "Memiliki jadwal servis belum tentu berarti kendaraan operasional."
},

{
  id: 96,
  pertanyaan:
    "Jika seluruh data valid maka sistem menerima laporan. Sistem menolak laporan. Kesimpulan yang benar adalah...",
  pilihan: [
    "Seluruh data tidak valid",
    "Seluruh data valid",
    "Server mati",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Modus tollens. Jika laporan ditolak maka tidak benar bahwa seluruh data valid."
},

{
  id: 97,
  pertanyaan:
    "Semua petugas keamanan membawa kartu identitas. Agus tidak membawa kartu identitas. Kesimpulan yang benar adalah...",
  pilihan: [
    "Agus petugas keamanan",
    "Agus bukan petugas keamanan",
    "Agus kehilangan kartu",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 1,
  pembahasan:
    "Karena semua petugas keamanan membawa kartu identitas, maka yang tidak membawa kartu bukan petugas keamanan."
},

{
  id: 98,
  pertanyaan:
    "Semua peserta briefing menandatangani daftar hadir. Dini menandatangani daftar hadir. Kesimpulan yang benar adalah...",
  pilihan: [
    "Dini peserta briefing",
    "Belum tentu Dini peserta briefing",
    "Dini bukan peserta briefing",
    "Semua yang menandatangani hadir adalah peserta briefing"
  ],
  jawaban: 1,
  pembahasan:
    "Menandatangani daftar hadir belum tentu menunjukkan bahwa Dini peserta briefing."
},

{
  id: 99,
  pertanyaan:
    "Jika APAR tersedia maka kebakaran dapat segera dikendalikan. Kebakaran tidak segera dikendalikan. Kesimpulan yang benar adalah...",
  pilihan: [
    "APAR tidak tersedia",
    "APAR tersedia",
    "Petugas terlambat",
    "Tidak dapat disimpulkan"
  ],
  jawaban: 0,
  pembahasan:
    "Dengan modus tollens, jika kebakaran tidak segera dikendalikan maka APAR tidak tersedia."
},

{
  id: 100,
  pertanyaan:
    "Semua pegawai yang disiplin datang tepat waktu. Budi datang tepat waktu. Kesimpulan yang benar adalah...",
  pilihan: [
    "Budi disiplin",
    "Belum tentu Budi disiplin",
    "Budi tidak disiplin",
    "Semua yang datang tepat waktu adalah pegawai disiplin"
  ],
  jawaban: 1,
  pembahasan:
    "Datang tepat waktu belum tentu berarti seseorang disiplin. Tidak dapat membalik implikasi."
}

];

export default logika;