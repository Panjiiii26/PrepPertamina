const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const wawasanUmum = [
  q(
    "Ibu kota baru Indonesia atau IKN Nusantara direncanakan berada di ...",
    ["Jakarta", "Kalimantan Timur", "Jawa Barat", "Sulawesi Utara"],
    1,
    "IKN Nusantara berada di wilayah Kalimantan Timur."
  ),
  q(
    "Gas rumah kaca utama yang berkontribusi terhadap pemanasan global adalah ...",
    ["Oksigen", "Karbon dioksida", "Nitrogen", "Argon"],
    1,
    "Karbon dioksida atau CO₂ merupakan salah satu gas rumah kaca utama."
  ),
  q(
    "Perjanjian internasional yang bertujuan menurunkan emisi karbon adalah ...",
    ["Protokol Kyoto", "Konvensi Geneva", "NAFTA", "ASEAN Charter"],
    0,
    "Protokol Kyoto adalah perjanjian internasional terkait pengurangan emisi gas rumah kaca."
  ),
  q(
    "Organisasi yang menerbitkan banyak standar teknis industri minyak dan gas adalah ...",
    ["OSHA", "OPEC", "API", "WHO"],
    2,
    "API atau American Petroleum Institute menerbitkan standar teknis untuk industri migas."
  ),
  q(
    "Mata uang resmi Indonesia adalah ...",
    ["Ringgit", "Rupiah", "Peso", "Dolar"],
    1,
    "Mata uang resmi Indonesia adalah Rupiah."
  ),
  q(
    "LNG merupakan singkatan dari ...",
    ["Liquefied Natural Gas", "Light Natural Gas", "Long Natural Gas", "Local Natural Gas"],
    0,
    "LNG adalah gas alam yang dicairkan, yaitu Liquefied Natural Gas."
  ),
  q(
    "Energi yang dihasilkan dari panas bumi disebut ...",
    ["Solar energy", "Geothermal energy", "Hydro energy", "Biomass energy"],
    1,
    "Geothermal energy merupakan energi yang berasal dari panas bumi."
  ),
  q(
    "Harga minyak dunia banyak menggunakan acuan pasar di ...",
    ["New York dan London", "Jakarta dan Tokyo", "Dubai dan Singapura", "Paris dan Berlin"],
    0,
    "WTI banyak dikaitkan dengan pasar Amerika Serikat, sedangkan Brent dengan pasar London."
  ),
  q(
    "Kilang minyak Pertamina dengan kapasitas besar berada di ...",
    ["Balikpapan", "Cilacap", "Dumai", "Jakarta"],
    1,
    "Kilang Cilacap merupakan salah satu kilang terbesar Pertamina."
  ),
  q(
    "B30 dalam program biofuel Indonesia berarti ...",
    [
      "30% biodiesel campuran dalam solar",
      "30% bioetanol campuran dalam bensin",
      "30% minyak sawit murni",
      "30% energi terbarukan dari gas",
    ],
    0,
    "B30 adalah campuran biodiesel sebesar 30% dalam bahan bakar solar."
  ),
  q(
    "Organisasi negara-negara pengekspor minyak adalah ...",
    ["ASEAN", "OPEC", "WHO", "WTO"],
    1,
    "OPEC adalah Organization of the Petroleum Exporting Countries."
  ),
  q(
    "Salah satu dampak pemanasan global adalah ...",
    [
      "Kenaikan permukaan laut",
      "Turunnya permukaan laut",
      "Penurunan karbon dioksida",
      "Perubahan gravitasi bumi",
    ],
    0,
    "Pemanasan global dapat mencairkan es dan menyebabkan kenaikan permukaan laut."
  ),
  q(
    "Crude oil dibagi menjadi light crude dan heavy crude berdasarkan ...",
    ["Titik didih", "Densitas atau berat jenis", "Warna", "Bau"],
    1,
    "Light crude dan heavy crude dibedakan terutama berdasarkan densitasnya."
  ),
  q(
    "Gas metana atau CH₄ merupakan komponen utama ...",
    ["LPG", "Gas alam", "Minyak mentah", "Bioetanol"],
    1,
    "Komponen terbesar gas alam adalah metana."
  ),
  q(
    "COP28 pada 2023 berkaitan dengan ...",
    [
      "Perubahan iklim global",
      "Harga minyak dunia",
      "Standar keselamatan kilang",
      "Produksi LNG",
    ],
    0,
    "COP merupakan konferensi internasional para pihak terkait perubahan iklim."
  ),
  q(
    "Target Net Zero Emission Indonesia adalah pada tahun ...",
    ["2030", "2050", "2060", "2045"],
    2,
    "Pemerintah Indonesia menargetkan Net Zero Emission pada 2060 atau lebih cepat."
  ),
  q(
    "Organisasi internasional yang berkaitan dengan standar ketenagakerjaan adalah ...",
    ["ILO", "UNESCO", "IMF", "WTO"],
    0,
    "ILO atau International Labour Organization berfokus pada isu ketenagakerjaan."
  ),
  q(
    "Komoditas energi yang sering dijadikan patokan harga minyak dunia adalah ...",
    ["Brent dan WTI", "Gas bumi Indonesia", "Batu bara lokal", "Panas bumi"],
    0,
    "Brent dan WTI adalah dua benchmark minyak mentah yang umum digunakan."
  ),
  q(
    "Tujuan utama transisi energi di Indonesia adalah ...",
    [
      "Mengurangi emisi karbon dan ketergantungan energi fosil",
      "Meningkatkan konsumsi BBM",
      "Menurunkan cadangan gas",
      "Menambah impor energi",
    ],
    0,
    "Transisi energi bertujuan meningkatkan pemanfaatan energi yang lebih bersih dan berkelanjutan."
  ),
];

export default wawasanUmum;