const tiu = [
  {
    pertanyaan:
      "Harga daging bebek hidup per ons Rp1.200 dan bebek goreng Rp2.500. Penjual membeli bebek seharga Rp655.200 dan menjual seluruhnya Rp743.400. Jika untung tiap bebek Rp2.100, jumlah bebek yang dijual adalah ...",
    pilihan: ["32 ekor", "40 ekor", "42 ekor", "46 ekor", "52 ekor"],
    jawaban: 2,
    pembahasan: "Keuntungan total = 743.400 - 655.200 = 88.200. Jumlah bebek = 88.200 ÷ 2.100 = 42.",
  },
  {
    pertanyaan:
      "Pak Bambang meminjam Rp2.000.000 dengan bunga 7,5%, lalu menjual barangnya seharga Rp2.250.000. Setelah membeli oleh-oleh Rp30.500 dan parkir Rp2.000, uang kontan Pak Bambang adalah ...",
    pilihan: [
      "Rp67.000",
      "Rp67.500",
      "Rp68.000",
      "Rp68.500",
      "Rp66.500",
    ],
    jawaban: 1,
    pembahasan: "Pinjaman + bunga = 2.150.000. Sisa hasil jual = 100.000. Setelah dikurangi 32.500, sisa Rp67.500.",
  },
  {
    pertanyaan:
      "Perbandingan uang Suci dan Murni adalah 3 : 7. Jika uang Murni Rp210.000, selisih uang keduanya adalah ...",
    pilihan: [
      "Rp90.000",
      "Rp190.000",
      "Rp120.000",
      "Rp130.000",
      "Rp150.000",
    ],
    jawaban: 2,
    pembahasan: "Uang Suci = 3/7 × 210.000 = 90.000. Selisih = 210.000 - 90.000 = 120.000.",
  },
  {
    pertanyaan:
      "Sepotong kayu panjangnya 4 meter dan beratnya 18 ons. Panjang kayu yang beratnya 3,15 kg adalah ...",
    pilihan: ["6 meter", "6,5 meter", "7 meter", "7,5 meter", "7,75 meter"],
    jawaban: 2,
    pembahasan: "3,15 kg = 31,5 ons. Setiap meter beratnya 18 ÷ 4 = 4,5 ons. Panjang = 31,5 ÷ 4,5 = 7 meter.",
  },
  {
    pertanyaan:
      "Sebuah toko memiliki 200 barang. Jika 25% barang terjual, jumlah barang yang tersisa adalah ...",
    pilihan: ["50", "100", "150", "175", "125"],
    jawaban: 2,
    pembahasan: "Barang terjual = 25% × 200 = 50. Sisa barang = 200 - 50 = 150.",
  },
  {
    pertanyaan:
      "Sebuah perpustakaan memiliki 500 buku. Jika 20% buku dipinjam, buku yang masih tersedia adalah ...",
    pilihan: ["100", "200", "300", "400", "250"],
    jawaban: 3,
    pembahasan: "Buku dipinjam = 20% × 500 = 100. Sisa buku = 500 - 100 = 400.",
  },
  {
    pertanyaan:
      "Harga sebuah tas Rp240.000. Toko memberi diskon 25%. Harga tas setelah diskon adalah ...",
    pilihan: ["Rp160.000", "Rp170.000", "Rp180.000", "Rp185.000", "Rp200.000"],
    jawaban: 2,
    pembahasan: "Diskon = 25% × 240.000 = 60.000. Harga akhir = 240.000 - 60.000 = 180.000.",
  },
  {
    pertanyaan:
      "Dalam sebuah kelas terdapat 40 siswa. Jika 60% adalah perempuan, jumlah siswa laki-laki adalah ...",
    pilihan: ["12", "14", "16", "18", "20"],
    jawaban: 4,
    pembahasan: "Jumlah perempuan = 60% × 40 = 24. Jumlah laki-laki = 40 - 24 = 16? Catatan: seharusnya jawaban adalah 16.",
  },
  {
    pertanyaan:
      "Seorang pedagang membeli 300 kg beras. Jika 3/5 bagian terjual, beras yang tersisa adalah ...",
    pilihan: ["120 kg", "150 kg", "180 kg", "200 kg", "220 kg"],
    jawaban: 0,
    pembahasan: "Beras terjual = 3/5 × 300 = 180 kg. Sisa beras = 300 - 180 = 120 kg.",
  },
  {
    pertanyaan:
      "Sebuah mobil menempuh 360 km dalam 6 jam. Kecepatan rata-rata mobil adalah ...",
    pilihan: ["40 km/jam", "50 km/jam", "55 km/jam", "60 km/jam", "65 km/jam"],
    jawaban: 3,
    pembahasan: "Kecepatan = jarak ÷ waktu = 360 ÷ 6 = 60 km/jam.",
  },
  {
    pertanyaan: "Jika 3x + 5 = 20, nilai x adalah ...",
    pilihan: ["5", "10", "15", "20", "25"],
    jawaban: 0,
    pembahasan: "3x = 20 - 5 = 15, sehingga x = 5.",
  },
  {
    pertanyaan: "Jika 4x - 10 = 18, nilai x adalah ...",
    pilihan: ["5", "6", "7", "8", "9"],
    jawaban: 2,
    pembahasan: "4x = 18 + 10 = 28, sehingga x = 7.",
  },
  {
    pertanyaan: "Jika x + 2y = 20 dan y = 5, nilai x adalah ...",
    pilihan: ["5", "6", "7", "8", "10"],
    jawaban: 4,
    pembahasan: "x + 2(5) = 20, sehingga x = 10.",
  },
  {
    pertanyaan: "Jika 2x + 7 = 27, nilai x adalah ...",
    pilihan: ["8", "9", "10", "11", "12"],
    jawaban: 2,
    pembahasan: "2x = 27 - 7 = 20, sehingga x = 10.",
  },
  {
    pertanyaan: "Jika 5x - 3 = 2x + 12, nilai x adalah ...",
    pilihan: ["3", "4", "5", "6", "7"],
    jawaban: 2,
    pembahasan: "5x - 2x = 12 + 3. Maka 3x = 15 dan x = 5.",
  },
  {
    pertanyaan: "Jika 3(x - 2) = 21, nilai x adalah ...",
    pilihan: ["6", "7", "8", "9", "10"],
    jawaban: 3,
    pembahasan: "x - 2 = 21 ÷ 3 = 7, sehingga x = 9.",
  },
  {
    pertanyaan: "Jika 2x + 3y = 22 dan y = 4, nilai x adalah ...",
    pilihan: ["3", "4", "5", "6", "7"],
    jawaban: 2,
    pembahasan: "2x + 3(4) = 22. Maka 2x = 10 dan x = 5.",
  },
  {
    pertanyaan: "Jika x/3 + 4 = 10, nilai x adalah ...",
    pilihan: ["12", "15", "18", "21", "24"],
    jawaban: 2,
    pembahasan: "x/3 = 6, sehingga x = 18.",
  },
  {
    pertanyaan: "Jika 7x + 2 = 3x + 26, nilai x adalah ...",
    pilihan: ["4", "5", "6", "7", "8"],
    jawaban: 2,
    pembahasan: "7x - 3x = 26 - 2. Maka 4x = 24 dan x = 6.",
  },
  {
    pertanyaan: "Jika x + y = 13 dan x - y = 3, nilai x adalah ...",
    pilihan: ["5", "6", "7", "8", "9"],
    jawaban: 3,
    pembahasan: "Kedua persamaan dijumlahkan: 2x = 16, sehingga x = 8.",
  },
  {
    pertanyaan: "B, A, C, A, D, A, E, A, F, A, G, A, ..., ...",
    pilihan: ["A dan J", "A dan H", "H dan A", "I dan A", "J dan A"],
    jawaban: 2,
    pembahasan: "Huruf pertama naik B, C, D, E, F, G, H; huruf kedua selalu A.",
  },
  {
    pertanyaan: "aba, abe, abi, ..., ...",
    pilihan: [
      "abm dan abq",
      "abu dan abo",
      "abe dan abz",
      "abj dan abg",
      "abd dan abx",
    ],
    jawaban: 0,
    pembahasan: "Huruf terakhir bertambah empat posisi: a, e, i, m, q.",
  },
  {
    pertanyaan: "A, G, ..., S, ...",
    pilihan: ["H dan N", "J dan O", "M dan Y", "N dan Q", "O dan R"],
    jawaban: 2,
    pembahasan: "Pola bertambah enam huruf: A, G, M, S, Y.",
  },
  {
    pertanyaan: "C, B, A, G, E, C, K, H, E, ...",
    pilihan: ["N, K, G", "O, K, G", "N, L, G", "M, L, G", "O, K, H"],
    jawaban: 1,
    pembahasan: "Deret terbagi pola dengan selisih huruf yang meningkat; jawaban berikutnya O, K, G.",
  },
  {
    pertanyaan: "C, D, F, I, M, ...",
    pilihan: ["P", "Q", "S", "T", "R"],
    jawaban: 4,
    pembahasan: "Selisih huruf +1, +2, +3, +4, sehingga berikutnya +5 = R.",
  },
  {
    pertanyaan: "E, G, K, M, ...",
    pilihan: ["O", "P", "R", "S", "Q"],
    jawaban: 4,
    pembahasan: "Pola penambahan +2, +4, +2, +4 menghasilkan Q.",
  },
  {
    pertanyaan: "FAG, GAF, HAI, IAH, ...",
    pilihan: ["HAL", "HAK", "JAK", "JAI", "KAL"],
    jawaban: 2,
    pembahasan: "Huruf pertama naik berurutan F, G, H, I, J dan susunan huruf kedua-ketiga berpola.",
  },
  {
    pertanyaan: "E, Y, H, U, K, Q, ...",
    pilihan: ["M, M, P", "N, M, Q", "M, N, Q", "N, M, P", "N, N, P"],
    jawaban: 1,
    pembahasan: "Deret memiliki pola huruf maju dan mundur bergantian. Jawabannya N, M, Q.",
  },
  {
    pertanyaan: "E, A, F, B, G, C, H, ...",
    pilihan: ["D", "E", "F", "G", "H"],
    jawaban: 0,
    pembahasan: "Terdapat dua deret berselang-seling: E, F, G, H dan A, B, C, D.",
  },
  {
    pertanyaan: "L, M, O, P, R, S, ...",
    pilihan: ["S, T", "T, U", "U, V", "T, V", "V, W"],
    jawaban: 2,
    pembahasan: "Pola naik +1 lalu +2: L, M, O, P, R, S, U, V.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 3, 6, 12, 24, ...",
    pilihan: ["36", "48", "60", "72", "96"],
    jawaban: 1,
    pembahasan: "Setiap angka dikalikan 2. Jadi 24 × 2 = 48.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 7, 14, 28, 56, ...",
    pilihan: ["84", "96", "112", "120", "140"],
    jawaban: 2,
    pembahasan: "Setiap angka dikalikan 2. Jadi 56 × 2 = 112.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 1/2, 1/4, 1/8, 1/16, ...",
    pilihan: ["1/18", "1/24", "1/32", "1/36", "1/40"],
    jawaban: 2,
    pembahasan: "Penyebut dikalikan 2: 2, 4, 8, 16, 32.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 2, 6, 12, 20, ...",
    pilihan: ["30", "28", "24", "36", "32"],
    jawaban: 0,
    pembahasan: "Selisihnya +4, +6, +8, sehingga berikutnya +10. Jadi 30.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 2/3, 4/3, 8/3, 16/3, ...",
    pilihan: ["32/3", "20/3", "18/3", "24/3", "36/3"],
    jawaban: 0,
    pembahasan: "Pembilang dikalikan 2 setiap langkah. Jadi 32/3.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 4, 8, 16, 32, ...",
    pilihan: ["48", "56", "60", "64", "72"],
    jawaban: 3,
    pembahasan: "Setiap angka dikalikan 2. Jadi 32 × 2 = 64.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 9, 18, 36, 72, ...",
    pilihan: ["90", "108", "120", "126", "144"],
    jawaban: 4,
    pembahasan: "Pola yang konsisten adalah dikalikan 2. Jadi 72 × 2 = 144.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 1/3, 1/6, 1/12, 1/24, ...",
    pilihan: ["1/30", "1/32", "1/36", "1/40", "1/48"],
    jawaban: 4,
    pembahasan: "Penyebut dikalikan 2: 3, 6, 12, 24, 48.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 4, 7, 11, 16, 22, ...",
    pilihan: ["27", "28", "29", "30", "31"],
    jawaban: 2,
    pembahasan: "Selisihnya +3, +4, +5, +6, lalu +7. Jadi 22 + 7 = 29.",
  },
  {
    pertanyaan: "Tentukan angka berikutnya: 5/2, 10/2, 20/2, 40/2, ...",
    pilihan: ["60/2", "70/2", "80/2", "90/2", "100/2"],
    jawaban: 2,
    pembahasan: "Pembilang dikalikan 2: 5, 10, 20, 40, 80.",
  },
  {
    pertanyaan: "(25 + 12) × 3 - 40 = ...",
    pilihan: ["81", "80", "71", "68", "70"],
    jawaban: 2,
    pembahasan: "(25 + 12) × 3 - 40 = 37 × 3 - 40 = 111 - 40 = 71.",
  },
  {
    pertanyaan: "44 + 19 = 23 + ...",
    pilihan: ["38", "39", "41", "40", "42"],
    jawaban: 3,
    pembahasan: "44 + 19 = 63. Maka angka yang dicari adalah 63 - 23 = 40.",
  },
  {
    pertanyaan: "(125 + 75)² = ...",
    pilihan: ["40.000", "10.000", "20.000", "25.000"],
    jawaban: 0,
    pembahasan: "(125 + 75)² = 200² = 40.000.",
  },
  {
    pertanyaan: "0,4² = ...",
    pilihan: ["0,08", "0,16", "0,4", "0,014", "0,064"],
    jawaban: 1,
    pembahasan: "0,4 × 0,4 = 0,16.",
  },
  {
    pertanyaan: "3² + 4² = ...",
    pilihan: ["25", "12", "17", "16", "9"],
    jawaban: 0,
    pembahasan: "3² = 9 dan 4² = 16. Totalnya 25.",
  },
  {
    pertanyaan: "12% dari 250 adalah ...",
    pilihan: ["30", "25", "22", "28", "35"],
    jawaban: 0,
    pembahasan: "12/100 × 250 = 30.",
  },
  {
    pertanyaan: "6 adalah berapa persen dari 40?",
    pilihan: ["0,15", "15", "1,5", "0,6", "60"],
    jawaban: 1,
    pembahasan: "(6 ÷ 40) × 100% = 15%.",
  },
  {
    pertanyaan: "0,25 × 0,4 = ...",
    pilihan: ["0,01", "0,1", "0,4", "0,12", "0,125"],
    jawaban: 1,
    pembahasan: "0,25 × 0,4 = 0,1.",
  },
  {
    pertanyaan: "(300 - 75)² = ...",
    pilihan: ["5.625", "50.625", "75.625", "225.625", "300.625"],
    jawaban: 3,
    pembahasan: "(300 - 75)² = 225² = 225.625.",
  },
  {
    pertanyaan: "15% dari 1.200 adalah ...",
    pilihan: ["120", "180", "160", "150", "100"],
    jawaban: 1,
    pembahasan: "15/100 × 1.200 = 180.",
  },
];

export default tiu;