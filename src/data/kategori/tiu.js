const tiu = [
{
  id:1,
  pertanyaan:"2, 4, 8, 16, ...",
  pilihan:["18","24","30","32"],
  jawaban:3,
  pembahasan:"Pola dikali 2 sehingga 16 × 2 = 32."
},

{
  id:2,
  pertanyaan:"3, 6, 9, 12, ...",
  pilihan:["13","14","15","16"],
  jawaban:2,
  pembahasan:"Pola bertambah 3 sehingga berikutnya adalah 15."
},

{
  id:3,
  pertanyaan:"5, 10, 20, 40, ...",
  pilihan:["60","70","80","90"],
  jawaban:2,
  pembahasan:"Setiap angka dikali 2 sehingga menjadi 80."
},

{
  id:4,
  pertanyaan:"1, 4, 9, 16, ...",
  pilihan:["20","24","25","36"],
  jawaban:2,
  pembahasan:"Merupakan kuadrat bilangan: 1², 2², 3², 4², 5² = 25."
},

{
  id:5,
  pertanyaan:"7, 14, 21, 28, ...",
  pilihan:["30","35","36","42"],
  jawaban:1,
  pembahasan:"Pola bertambah 7 sehingga hasilnya 35."
},

{
  id:6,
  pertanyaan:"100, 90, 80, 70, ...",
  pilihan:["50","55","60","65"],
  jawaban:2,
  pembahasan:"Pola berkurang 10 sehingga menjadi 60."
},

{
  id:7,
  pertanyaan:"2, 5, 10, 17, 26, ...",
  pilihan:["35","36","37","38"],
  jawaban:2,
  pembahasan:"Selisihnya +3, +5, +7, +9 sehingga berikutnya +11 = 37."
},

{
  id:8,
  pertanyaan:"1, 1, 2, 3, 5, 8, ...",
  pilihan:["10","11","12","13"],
  jawaban:3,
  pembahasan:"Deret Fibonacci. 5 + 8 = 13."
},

{
  id:9,
  pertanyaan:"81, 27, 9, 3, ...",
  pilihan:["2","1","0","6"],
  jawaban:1,
  pembahasan:"Pola dibagi 3 sehingga hasil berikutnya adalah 1."
},

{
  id:10,
  pertanyaan:"6, 11, 16, 21, ...",
  pilihan:["24","25","26","27"],
  jawaban:2,
  pembahasan:"Pola bertambah 5 sehingga hasilnya 26."
}

,
{
  id:11,
  pertanyaan:"4, 7, 13, 25, 49, ...",
  pilihan:["96","97","98","99"],
  jawaban:1,
  pembahasan:"Pola = (angka × 2) - 1. 49 × 2 - 1 = 97."
},

{
  id:12,
  pertanyaan:"2, 6, 12, 20, 30, ...",
  pilihan:["40","42","44","46"],
  jawaban:1,
  pembahasan:"Selisih +4, +6, +8, +10, berikutnya +12 sehingga hasilnya 42."
},

{
  id:13,
  pertanyaan:"64, 32, 16, 8, ...",
  pilihan:["2","4","6","8"],
  jawaban:1,
  pembahasan:"Pola dibagi 2 sehingga 8 ÷ 2 = 4."
},

{
  id:14,
  pertanyaan:"1, 3, 7, 15, 31, ...",
  pilihan:["62","63","64","65"],
  jawaban:1,
  pembahasan:"Pola = (angka × 2) + 1. 31 × 2 + 1 = 63."
},

{
  id:15,
  pertanyaan:"5, 8, 13, 20, 29, ...",
  pilihan:["38","39","40","41"],
  jawaban:2,
  pembahasan:"Selisih +3, +5, +7, +9, berikutnya +11 sehingga hasilnya 40."
},

{
  id:16,
  pertanyaan:"100, 95, 85, 70, 50, ...",
  pilihan:["25","30","35","40"],
  jawaban:0,
  pembahasan:"Selisih -5, -10, -15, -20, berikutnya -25 sehingga hasilnya 25."
},

{
  id:17,
  pertanyaan:"3, 9, 27, 81, ...",
  pilihan:["162","243","324","729"],
  jawaban:1,
  pembahasan:"Setiap angka dikali 3 sehingga 81 × 3 = 243."
},

{
  id:18,
  pertanyaan:"2, 3, 5, 8, 12, 17, ...",
  pilihan:["21","22","23","24"],
  jawaban:2,
  pembahasan:"Selisih +1, +2, +3, +4, +5 sehingga berikutnya +6 = 23."
},

{
  id:19,
  pertanyaan:"50, 45, 39, 32, 24, ...",
  pilihan:["15","16","17","18"],
  jawaban:0,
  pembahasan:"Selisih -5, -6, -7, -8, berikutnya -9 sehingga hasilnya 15."
},

{
  id:20,
  pertanyaan:"9, 18, 36, 72, ...",
  pilihan:["108","126","144","150"],
  jawaban:2,
  pembahasan:"Setiap angka dikali 2 sehingga 72 × 2 = 144."
},

{
  id:21,
  pertanyaan:"A, C, E, G, ...",
  pilihan:["H","I","J","K"],
  jawaban:1,
  pembahasan:"Melompat satu huruf: A, C, E, G, I."
},

{
  id:22,
  pertanyaan:"Z, X, V, T, ...",
  pilihan:["S","R","Q","P"],
  jawaban:1,
  pembahasan:"Mundur dua huruf: Z, X, V, T, R."
},

{
  id:23,
  pertanyaan:"B, D, G, K, ...",
  pilihan:["N","O","P","Q"],
  jawaban:2,
  pembahasan:"Selisih huruf +2, +3, +4, berikutnya +5 sehingga menjadi P."
},

{
  id:24,
  pertanyaan:"A, D, G, J, ...",
  pilihan:["L","M","N","O"],
  jawaban:1,
  pembahasan:"Pola bertambah tiga huruf: A, D, G, J, M."
},

{
  id:25,
  pertanyaan:"C, F, I, L, ...",
  pilihan:["M","N","O","P"],
  jawaban:2,
  pembahasan:"Pola bertambah tiga huruf sehingga setelah L adalah O."
},

{
  id:26,
  pertanyaan:"A, B, D, G, K, ...",
  pilihan:["O","P","Q","R"],
  jawaban:1,
  pembahasan:"Selisih +1, +2, +3, +4, berikutnya +5 sehingga menjadi P."
},

{
  id:27,
  pertanyaan:"Y, V, S, P, ...",
  pilihan:["N","M","L","K"],
  jawaban:1,
  pembahasan:"Mundur tiga huruf sehingga setelah P adalah M."
},

{
  id:28,
  pertanyaan:"A, E, I, M, ...",
  pilihan:["P","Q","R","U"],
  jawaban:1,
  pembahasan:"Pola bertambah empat huruf: A, E, I, M, Q."
},

{
  id:29,
  pertanyaan:"D, H, L, P, ...",
  pilihan:["S","T","U","V"],
  jawaban:1,
  pembahasan:"Pola bertambah empat huruf sehingga menjadi T."
},

{
  id:30,
  pertanyaan:"M, K, I, G, ...",
  pilihan:["E","D","C","B"],
  jawaban:0,
  pembahasan:"Mundur dua huruf: M, K, I, G, E."
},

{
  id:31,
  pertanyaan:"Semua bunga adalah tumbuhan. Mawar adalah bunga. Kesimpulan yang benar adalah...",
  pilihan:[
    "Mawar adalah tumbuhan",
    "Semua tumbuhan adalah mawar",
    "Mawar bukan tumbuhan",
    "Tidak dapat disimpulkan"
  ],
  jawaban:0,
  pembahasan:"Mawar termasuk bunga dan semua bunga adalah tumbuhan."
},

{
  id:32,
  pertanyaan:"Jika hujan maka jalan basah. Jalan basah. Kesimpulan yang benar adalah...",
  pilihan:[
    "Hujan pasti turun",
    "Belum tentu hujan",
    "Tidak hujan",
    "Jalan kering"
  ],
  jawaban:1,
  pembahasan:"Jalan basah bisa disebabkan hal lain."
},

{
  id:33,
  pertanyaan:"5 orang dapat menyelesaikan pekerjaan dalam 12 hari. Jika pekerja menjadi 10 orang, waktu yang dibutuhkan adalah...",
  pilihan:["4","5","6","8"],
  jawaban:2,
  pembahasan:"Perbandingan berbalik nilai. 5×12 = 10×x sehingga x = 6 hari."
},

{
  id:34,
  pertanyaan:"Semua operator memakai helm. Budi tidak memakai helm. Kesimpulannya...",
  pilihan:[
    "Budi operator",
    "Budi bukan operator",
    "Helm Budi hilang",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Jika semua operator memakai helm, yang tidak memakai helm bukan operator."
},

{
  id:35,
  pertanyaan:"2, 6, 18, 54, ...",
  pilihan:["108","162","216","324"],
  jawaban:1,
  pembahasan:"Setiap angka dikali 3 sehingga hasilnya 162."
},

{
  id:36,
  pertanyaan:"81, 72, 63, 54, ...",
  pilihan:["45","46","47","48"],
  jawaban:0,
  pembahasan:"Pola berkurang 9."
},

{
  id:37,
  pertanyaan:"Jika semua pegawai hadir maka rapat dimulai. Rapat belum dimulai. Kesimpulan yang benar adalah...",
  pilihan:[
    "Semua pegawai hadir",
    "Ada pegawai yang belum hadir",
    "Rapat dibatalkan",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Menggunakan modus tollens."
},

{
  id:38,
  pertanyaan:"7, 10, 16, 25, 37, ...",
  pilihan:["50","51","52","53"],
  jawaban:2,
  pembahasan:"Selisih +3, +6, +9, +12, berikutnya +15 sehingga hasilnya 52."
},

{
  id:39,
  pertanyaan:"1, 8, 27, 64, ...",
  pilihan:["100","125","144","216"],
  jawaban:1,
  pembahasan:"Merupakan kubik bilangan: 1³, 2³, 3³, 4³, 5³ = 125."
},

{
  id:40,
  pertanyaan:"Semua peserta ujian membawa kartu peserta. Andi membawa kartu peserta. Kesimpulan yang benar adalah...",
  pilihan:[
    "Andi peserta ujian",
    "Belum tentu Andi peserta ujian",
    "Andi bukan peserta ujian",
    "Semua pembawa kartu adalah peserta"
  ],
  jawaban:1,
  pembahasan:"Membawa kartu peserta belum tentu berarti peserta ujian."
}

,
{
  id:41,
  pertanyaan:"25 + 17 × 2 = ...",
  pilihan:["59","74","84","67"],
  jawaban:0,
  pembahasan:"Kerjakan perkalian terlebih dahulu: 17 × 2 = 34, kemudian 25 + 34 = 59."
},

{
  id:42,
  pertanyaan:"480 ÷ 12 = ...",
  pilihan:["30","35","40","45"],
  jawaban:2,
  pembahasan:"480 ÷ 12 = 40."
},

{
  id:43,
  pertanyaan:"15% dari 400 adalah...",
  pilihan:["40","50","60","70"],
  jawaban:2,
  pembahasan:"15% × 400 = 60."
},

{
  id:44,
  pertanyaan:"Harga sebuah barang Rp250.000 didiskon 20%. Harga setelah diskon adalah...",
  pilihan:["Rp180.000","Rp190.000","Rp200.000","Rp210.000"],
  jawaban:2,
  pembahasan:"Diskon = 20% × 250.000 = 50.000 sehingga harga menjadi Rp200.000."
},

{
  id:45,
  pertanyaan:"7 × 9 − 18 = ...",
  pilihan:["35","45","55","63"],
  jawaban:1,
  pembahasan:"7 × 9 = 63, kemudian 63 − 18 = 45."
},

{
  id:46,
  pertanyaan:"3/4 dari 120 adalah...",
  pilihan:["80","85","90","95"],
  jawaban:2,
  pembahasan:"120 × 3/4 = 90."
},

{
  id:47,
  pertanyaan:"Jika x = 12 dan y = 8, maka x + y × 2 = ...",
  pilihan:["28","36","40","44"],
  jawaban:0,
  pembahasan:"8 × 2 = 16, lalu 12 + 16 = 28."
},

{
  id:48,
  pertanyaan:"Sebuah tangki berisi 200 liter air. Sebanyak 25% digunakan. Sisa air adalah...",
  pilihan:["100","120","140","150"],
  jawaban:3,
  pembahasan:"25% dari 200 = 50 liter, sehingga sisa 150 liter."
},

{
  id:49,
  pertanyaan:"45² = ...",
  pilihan:["1825","1925","2025","2125"],
  jawaban:2,
  pembahasan:"45 × 45 = 2025."
},

{
  id:50,
  pertanyaan:"A memiliki uang Rp120.000, kemudian mendapat tambahan 30%. Jumlah uang sekarang adalah...",
  pilihan:["Rp144.000","Rp150.000","Rp156.000","Rp160.000"],
  jawaban:2,
  pembahasan:"30% × 120.000 = 36.000 sehingga total Rp156.000."
},

{
  id:51,
  pertanyaan:"8 orang menyelesaikan pekerjaan dalam 15 hari. Jika pekerja menjadi 12 orang, waktu yang diperlukan adalah...",
  pilihan:["8","9","10","12"],
  jawaban:2,
  pembahasan:"8 × 15 = 120. Maka 120 ÷ 12 = 10 hari."
},

{
  id:52,
  pertanyaan:"Nilai rata-rata 5 siswa adalah 80. Jumlah seluruh nilainya adalah...",
  pilihan:["350","375","400","425"],
  jawaban:2,
  pembahasan:"Rata-rata × jumlah data = 80 × 5 = 400."
},

{
  id:53,
  pertanyaan:"Harga bensin naik dari Rp10.000 menjadi Rp11.500. Persentase kenaikan adalah...",
  pilihan:["10%","12%","15%","20%"],
  jawaban:2,
  pembahasan:"Kenaikan Rp1.500 dari Rp10.000 = 15%."
},

{
  id:54,
  pertanyaan:"Sebuah mobil menempuh 180 km dalam 3 jam. Kecepatan rata-ratanya adalah...",
  pilihan:["50","60","70","80"],
  jawaban:1,
  pembahasan:"180 ÷ 3 = 60 km/jam."
},

{
  id:55,
  pertanyaan:"Jika 2x + 8 = 20, maka nilai x adalah...",
  pilihan:["4","5","6","7"],
  jawaban:2,
  pembahasan:"2x = 12 sehingga x = 6."
},

{
  id:56,
  pertanyaan:"30% dari suatu bilangan adalah 90. Bilangan tersebut adalah...",
  pilihan:["250","280","300","320"],
  jawaban:2,
  pembahasan:"90 ÷ 30% = 300."
},

{
  id:57,
  pertanyaan:"Sebuah toko memberi diskon 10% untuk barang seharga Rp500.000. Harga akhirnya adalah...",
  pilihan:["Rp430.000","Rp440.000","Rp450.000","Rp460.000"],
  jawaban:2,
  pembahasan:"Diskon Rp50.000 sehingga harga menjadi Rp450.000."
},

{
  id:58,
  pertanyaan:"Jika 5 buku berharga Rp75.000, maka harga 8 buku adalah...",
  pilihan:["Rp100.000","Rp110.000","Rp120.000","Rp125.000"],
  jawaban:2,
  pembahasan:"Harga satu buku Rp15.000 sehingga 8 buku = Rp120.000."
},

{
  id:59,
  pertanyaan:"Hasil dari (18 + 12) ÷ 5 adalah...",
  pilihan:["5","6","7","8"],
  jawaban:1,
  pembahasan:"30 ÷ 5 = 6."
},

{
  id:60,
  pertanyaan:"Pendapatan perusahaan naik dari Rp800 juta menjadi Rp920 juta. Persentase kenaikannya adalah...",
  pilihan:["10%","12%","15%","18%"],
  jawaban:2,
  pembahasan:"Kenaikan Rp120 juta. 120 ÷ 800 × 100% = 15%."
}

,
{
  id:61,
  pertanyaan:"Perbandingan umur Andi dan Budi adalah 3 : 5. Jika umur Budi 25 tahun, umur Andi adalah...",
  pilihan:["12","15","18","20"],
  jawaban:1,
  pembahasan:"Andi = (3/5) × 25 = 15 tahun."
},

{
  id:62,
  pertanyaan:"Sebuah mobil melaju dengan kecepatan 60 km/jam selama 2 jam. Jarak yang ditempuh adalah...",
  pilihan:["100 km","110 km","120 km","130 km"],
  jawaban:2,
  pembahasan:"Jarak = Kecepatan × Waktu = 60 × 2 = 120 km."
},

{
  id:63,
  pertanyaan:"Jarak dua kota adalah 180 km. Jika ditempuh dalam 3 jam, kecepatan rata-rata kendaraan adalah...",
  pilihan:["50 km/jam","60 km/jam","70 km/jam","80 km/jam"],
  jawaban:1,
  pembahasan:"Kecepatan = Jarak ÷ Waktu = 180 ÷ 3 = 60 km/jam."
},

{
  id:64,
  pertanyaan:"Perbandingan uang Rina dan Sinta adalah 4 : 7. Jika uang mereka berjumlah Rp220.000, uang Rina adalah...",
  pilihan:["Rp80.000","Rp90.000","Rp100.000","Rp110.000"],
  jawaban:0,
  pembahasan:"Jumlah bagian = 11. Rina = 4/11 × 220.000 = Rp80.000."
},

{
  id:65,
  pertanyaan:"Sebuah kereta melaju 90 km/jam. Berapa waktu yang diperlukan untuk menempuh 270 km?",
  pilihan:["2 jam","2,5 jam","3 jam","3,5 jam"],
  jawaban:2,
  pembahasan:"Waktu = 270 ÷ 90 = 3 jam."
},

{
  id:66,
  pertanyaan:"Perbandingan panjang dan lebar sebuah persegi panjang adalah 5 : 3. Jika panjangnya 25 cm, lebarnya adalah...",
  pilihan:["10 cm","12 cm","15 cm","18 cm"],
  jawaban:2,
  pembahasan:"Lebar = (3/5) × 25 = 15 cm."
},

{
  id:67,
  pertanyaan:"Sebuah motor melaju 45 km/jam selama 4 jam. Berapa jarak yang ditempuh?",
  pilihan:["160 km","170 km","180 km","190 km"],
  jawaban:2,
  pembahasan:"45 × 4 = 180 km."
},

{
  id:68,
  pertanyaan:"Jarak 150 km ditempuh dalam 2,5 jam. Kecepatan rata-ratanya adalah...",
  pilihan:["50 km/jam","55 km/jam","60 km/jam","65 km/jam"],
  jawaban:2,
  pembahasan:"150 ÷ 2,5 = 60 km/jam."
},

{
  id:69,
  pertanyaan:"Perbandingan laki-laki dan perempuan di suatu kelas adalah 2 : 3. Jika jumlah siswa 30 orang, banyak siswa laki-laki adalah...",
  pilihan:["10","12","15","18"],
  jawaban:1,
  pembahasan:"Jumlah bagian = 5. Laki-laki = 2/5 × 30 = 12 orang."
},

{
  id:70,
  pertanyaan:"Sebuah mobil melaju 80 km/jam selama 30 menit. Jarak yang ditempuh adalah...",
  pilihan:["30 km","35 km","40 km","45 km"],
  jawaban:2,
  pembahasan:"30 menit = 0,5 jam. Jarak = 80 × 0,5 = 40 km."
},

{
  id:71,
  pertanyaan:"Perbandingan umur ayah dan anak adalah 7 : 2. Jika umur ayah 42 tahun, umur anak adalah...",
  pilihan:["10","11","12","13"],
  jawaban:2,
  pembahasan:"Umur anak = (2/7) × 42 = 12 tahun."
},

{
  id:72,
  pertanyaan:"Seseorang berjalan dengan kecepatan 5 km/jam selama 1 jam 30 menit. Berapa jarak yang ditempuh?",
  pilihan:["6 km","7 km","7,5 km","8 km"],
  jawaban:2,
  pembahasan:"1,5 jam × 5 km/jam = 7,5 km."
},

{
  id:73,
  pertanyaan:"Jika 4 pekerja menyelesaikan pekerjaan dalam 15 hari, maka 12 pekerja dapat menyelesaikannya dalam...",
  pilihan:["4 hari","5 hari","6 hari","7 hari"],
  jawaban:1,
  pembahasan:"4 × 15 = 60. Maka 60 ÷ 12 = 5 hari."
},

{
  id:74,
  pertanyaan:"Sebuah bus menempuh 360 km dalam 6 jam. Kecepatannya adalah...",
  pilihan:["50 km/jam","55 km/jam","60 km/jam","65 km/jam"],
  jawaban:2,
  pembahasan:"360 ÷ 6 = 60 km/jam."
},

{
  id:75,
  pertanyaan:"Perbandingan kelereng Budi dan Roni adalah 5 : 4. Jika jumlahnya 81 butir, kelereng Budi adalah...",
  pilihan:["40","45","50","55"],
  jawaban:1,
  pembahasan:"Jumlah bagian = 9. Budi = 5/9 × 81 = 45."
},

{
  id:76,
  pertanyaan:"Sebuah mobil membutuhkan waktu 4 jam untuk menempuh jarak 240 km. Kecepatannya adalah...",
  pilihan:["50 km/jam","55 km/jam","60 km/jam","65 km/jam"],
  jawaban:2,
  pembahasan:"240 ÷ 4 = 60 km/jam."
},

{
  id:77,
  pertanyaan:"Jika harga 6 buku Rp90.000, maka harga 10 buku adalah...",
  pilihan:["Rp140.000","Rp145.000","Rp150.000","Rp155.000"],
  jawaban:2,
  pembahasan:"Harga satu buku Rp15.000 sehingga 10 buku = Rp150.000."
},

{
  id:78,
  pertanyaan:"Seorang pelari berlari dengan kecepatan 12 km/jam selama 45 menit. Jarak yang ditempuh adalah...",
  pilihan:["7 km","8 km","9 km","10 km"],
  jawaban:2,
  pembahasan:"45 menit = 0,75 jam. 12 × 0,75 = 9 km."
},

{
  id:79,
  pertanyaan:"Perbandingan uang Andi dan Rudi adalah 3 : 2. Jika uang Andi Rp90.000, maka uang Rudi adalah...",
  pilihan:["Rp50.000","Rp55.000","Rp60.000","Rp65.000"],
  jawaban:2,
  pembahasan:"Rudi = (2/3) × 90.000 = Rp60.000."
},

{
  id:80,
  pertanyaan:"Sebuah kendaraan bergerak dengan kecepatan 72 km/jam. Berapa jarak yang ditempuh dalam 2,5 jam?",
  pilihan:["160 km","170 km","180 km","190 km"],
  jawaban:2,
  pembahasan:"72 × 2,5 = 180 km."
}

,
{
  id:81,
  pertanyaan:"2, 5, 11, 23, 47, ...",
  pilihan:["91","93","95","97"],
  jawaban:2,
  pembahasan:"Pola = (angka × 2) + 1 sehingga 47 × 2 + 1 = 95."
},

{
  id:82,
  pertanyaan:"128, 64, 32, 16, 8, ...",
  pilihan:["2","4","6","10"],
  jawaban:1,
  pembahasan:"Setiap angka dibagi 2 sehingga hasil berikutnya adalah 4."
},

{
  id:83,
  pertanyaan:"Jika semua supervisor adalah karyawan dan semua karyawan mendapat ID Card, maka...",
  pilihan:[
    "Semua supervisor mendapat ID Card",
    "Semua pemilik ID Card adalah supervisor",
    "Supervisor bukan karyawan",
    "Tidak dapat disimpulkan"
  ],
  jawaban:0,
  pembahasan:"Supervisor → Karyawan → Memiliki ID Card."
},

{
  id:84,
  pertanyaan:"Harga sebuah barang Rp400.000 naik 15%. Harga barunya adalah...",
  pilihan:[
    "Rp440.000",
    "Rp450.000",
    "Rp460.000",
    "Rp470.000"
  ],
  jawaban:2,
  pembahasan:"15% × 400.000 = 60.000 sehingga harga baru Rp460.000."
},

{
  id:85,
  pertanyaan:"4 pekerja menyelesaikan pekerjaan dalam 18 hari. Jika pekerja menjadi 6 orang, waktu yang diperlukan adalah...",
  pilihan:["10","11","12","13"],
  jawaban:2,
  pembahasan:"4 × 18 = 72. Maka 72 ÷ 6 = 12 hari."
},

{
  id:86,
  pertanyaan:"1, 4, 10, 19, 31, ...",
  pilihan:["42","44","46","48"],
  jawaban:2,
  pembahasan:"Selisih +3, +6, +9, +12, berikutnya +15 sehingga hasilnya 46."
},

{
  id:87,
  pertanyaan:"Jika tekanan boiler melebihi batas maka alarm berbunyi. Alarm tidak berbunyi. Kesimpulan yang benar adalah...",
  pilihan:[
    "Tekanan boiler melebihi batas",
    "Tekanan boiler tidak melebihi batas",
    "Alarm rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Menggunakan modus tollens."
},

{
  id:88,
  pertanyaan:"Seorang kendaraan menempuh 360 km dalam 4 jam. Kecepatan rata-ratanya adalah...",
  pilihan:["80","85","90","95"],
  jawaban:2,
  pembahasan:"360 ÷ 4 = 90 km/jam."
},

{
  id:89,
  pertanyaan:"Perbandingan uang A dan B adalah 7 : 5. Jika jumlah uang mereka Rp240.000, uang A adalah...",
  pilihan:[
    "Rp120.000",
    "Rp130.000",
    "Rp140.000",
    "Rp150.000"
  ],
  jawaban:2,
  pembahasan:"Jumlah bagian = 12. A = 7/12 × 240.000 = Rp140.000."
},

{
  id:90,
  pertanyaan:"27, 24, 21, 18, ...",
  pilihan:["12","13","14","15"],
  jawaban:3,
  pembahasan:"Pola berkurang 3 sehingga hasil berikutnya adalah 15."
},

{
  id:91,
  pertanyaan:"Semua operator wajib memakai APD. Budi tidak memakai APD. Kesimpulan yang benar adalah...",
  pilihan:[
    "Budi operator",
    "Budi bukan operator",
    "APD Budi rusak",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Karena semua operator memakai APD, maka yang tidak memakai APD bukan operator."
},

{
  id:92,
  pertanyaan:"12% dari 250 adalah...",
  pilihan:["25","28","30","32"],
  jawaban:2,
  pembahasan:"12% × 250 = 30."
},

{
  id:93,
  pertanyaan:"3, 6, 12, 24, 48, ...",
  pilihan:["72","84","96","98"],
  jawaban:2,
  pembahasan:"Setiap angka dikali 2 sehingga hasilnya 96."
},

{
  id:94,
  pertanyaan:"Sebuah mobil melaju 75 km/jam selama 4 jam. Jarak yang ditempuh adalah...",
  pilihan:["250","275","300","325"],
  jawaban:2,
  pembahasan:"75 × 4 = 300 km."
},

{
  id:95,
  pertanyaan:"Jika semua peserta lulus mendapat sertifikat. Andi mendapat sertifikat. Kesimpulan yang benar adalah...",
  pilihan:[
    "Andi pasti lulus",
    "Belum tentu Andi lulus",
    "Andi tidak lulus",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Tidak dapat membalik implikasi."
},

{
  id:96,
  pertanyaan:"5² + 7² = ...",
  pilihan:["64","72","74","76"],
  jawaban:2,
  pembahasan:"25 + 49 = 74."
},

{
  id:97,
  pertanyaan:"Perbandingan panjang dan lebar taman adalah 8 : 5. Jika panjangnya 40 meter, lebarnya adalah...",
  pilihan:["20","22","25","28"],
  jawaban:2,
  pembahasan:"Lebar = (5/8) × 40 = 25 meter."
},

{
  id:98,
  pertanyaan:"9, 18, 36, 72, 144, ...",
  pilihan:["216","240","288","300"],
  jawaban:2,
  pembahasan:"Setiap angka dikali 2 sehingga 144 × 2 = 288."
},

{
  id:99,
  pertanyaan:"Jika semua karyawan hadir maka briefing dimulai. Briefing belum dimulai. Kesimpulan yang paling tepat adalah...",
  pilihan:[
    "Semua karyawan hadir",
    "Ada karyawan yang belum hadir",
    "Briefing dibatalkan",
    "Tidak dapat disimpulkan"
  ],
  jawaban:1,
  pembahasan:"Menggunakan modus tollens."
},

{
  id:100,
  pertanyaan:"Nilai rata-rata 8 siswa adalah 82. Jumlah seluruh nilai siswa tersebut adalah...",
  pilihan:["640","648","656","664"],
  jawaban:2,
  pembahasan:"Jumlah nilai = rata-rata × banyak data = 82 × 8 = 656."
}

];

export default tiu;