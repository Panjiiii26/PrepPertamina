const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const tkb = [
  q(
    "Hukum Pascal menyatakan ...",
    [
      "Tekanan dalam fluida statis sama ke segala arah",
      "Tekanan fluida berbanding lurus dengan kecepatan",
      "Energi kinetik fluida konstan",
      "Tekanan menurun dengan kedalaman",
    ],
    0,
    "Tekanan pada fluida tertutup diteruskan sama besar ke seluruh bagian fluida."
  ),
  q(
    "Hukum Bernoulli berhubungan dengan ...",
    [
      "Aliran fluida dan energi total",
      "Tegangan material",
      "Tegangan listrik",
      "Reaksi kimia",
    ],
    0,
    "Prinsip Bernoulli membahas hubungan tekanan, energi kinetik, dan energi potensial fluida."
  ),
  q(
    "Pipa dengan diameter lebih kecil umumnya memiliki ...",
    [
      "Tekanan lebih tinggi dan kecepatan lebih rendah",
      "Tekanan lebih rendah dan kecepatan lebih tinggi",
      "Tekanan dan kecepatan sama",
      "Tidak memengaruhi aliran",
    ],
    1,
    "Pada aliran fluida, penyempitan pipa meningkatkan kecepatan aliran dan dapat menurunkan tekanan."
  ),
  q(
    "Pompa sentrifugal digunakan untuk ...",
    [
      "Memompa fluida menggunakan gaya sentrifugal",
      "Memompa gas bertekanan tinggi",
      "Memisahkan minyak dan air",
      "Mengukur aliran",
    ],
    0,
    "Pompa sentrifugal menggunakan impeller untuk memberikan energi pada fluida."
  ),
  q(
    "Katup pengaman atau safety valve berfungsi untuk ...",
    [
      "Mengatur aliran",
      "Mencegah tekanan berlebih",
      "Mempercepat aliran",
      "Mengukur volume",
    ],
    1,
    "Safety valve membuka saat tekanan terlalu tinggi untuk melindungi peralatan."
  ),
  q(
    "Thermocouple digunakan untuk mengukur ...",
    ["Tekanan", "Temperatur", "Aliran", "Level fluida"],
    1,
    "Thermocouple adalah sensor untuk mengukur suhu."
  ),
  q(
    "Aliran laminar ditandai oleh ...",
    [
      "Aliran teratur dan paralel",
      "Aliran acak dan turbulen",
      "Fluida tidak bergerak",
      "Terjadi ledakan",
    ],
    0,
    "Aliran laminar bergerak dalam lapisan yang relatif teratur."
  ),
  q(
    "Boiler digunakan untuk ...",
    [
      "Menghasilkan uap dari air",
      "Menyuling minyak",
      "Menyimpan gas",
      "Menurunkan tekanan",
    ],
    0,
    "Boiler memanaskan air hingga menjadi uap."
  ),
  q(
    "Turbin gas menghasilkan energi dari ...",
    ["Uap", "Panas pembakaran gas", "Angin", "Air"],
    1,
    "Turbin gas memanfaatkan gas panas hasil pembakaran untuk memutar turbin."
  ),
  q(
    "Katup globe berfungsi untuk ...",
    [
      "Mengontrol aliran secara presisi",
      "Mencegah aliran balik",
      "Menyalurkan fluida tetap",
      "Mengukur tekanan",
    ],
    0,
    "Globe valve biasa digunakan untuk pengaturan atau throttling aliran."
  ),
  q(
    "Simbol SS pada material berarti ...",
    ["Stainless Steel", "Carbon Steel", "Mild Steel", "Aluminium"],
    0,
    "SS adalah singkatan dari stainless steel atau baja tahan karat."
  ),
  q(
    "Heat exchanger digunakan untuk ...",
    [
      "Memindahkan panas dari satu fluida ke fluida lain",
      "Memompa air",
      "Memurnikan minyak",
      "Menyimpan fluida",
    ],
    0,
    "Heat exchanger memindahkan energi panas antara dua fluida tanpa mencampurkannya."
  ),
  q(
    "Flow meter vortex digunakan untuk ...",
    [
      "Mengukur aliran fluida menggunakan putaran vortex",
      "Memanaskan fluida",
      "Menyaring partikel",
      "Mengontrol tekanan",
    ],
    0,
    "Vortex flow meter memanfaatkan pusaran yang terbentuk saat fluida melewati penghalang."
  ),
  q(
    "Tangki penyimpanan minyak harus memiliki ...",
    [
      "Ventilasi, grounding, dan sistem deteksi kebocoran",
      "Cat tebal saja",
      "Sistem pemanas saja",
      "Pipa lurus tanpa safety",
    ],
    0,
    "Ventilasi, grounding, dan deteksi kebocoran penting untuk mengurangi risiko kebakaran serta pencemaran."
  ),
  q(
    "Stress pada material dihitung dengan rumus ...",
    ["σ = F/A", "σ = P/V", "σ = mg", "σ = ρV"],
    0,
    "Tegangan atau stress adalah gaya dibagi luas penampang."
  ),
  q(
    "Pump cavitation terjadi karena ...",
    [
      "Tekanan inlet terlalu rendah sehingga terbentuk gelembung uap",
      "Tekanan outlet tinggi",
      "Motor overload",
      "Pompa berputar lambat",
    ],
    0,
    "Kavitasi terjadi saat tekanan lokal turun hingga fluida membentuk gelembung uap."
  ),
  q(
    "Rotameter digunakan untuk ...",
    [
      "Mengukur laju aliran vertikal fluida",
      "Mengukur tekanan",
      "Mengukur suhu",
      "Mengatur aliran",
    ],
    0,
    "Rotameter adalah flow meter dengan tabung tirus dan pelampung."
  ),
  q(
    "Katup check berfungsi untuk ...",
    [
      "Mengontrol aliran manual",
      "Mencegah aliran balik",
      "Mengatur suhu",
      "Mengukur level",
    ],
    1,
    "Check valve hanya mengizinkan aliran ke satu arah."
  ),
  q(
    "Pipa schedule 40 menunjukkan ...",
    [
      "Ketebalan dinding pipa",
      "Diameter luar pipa",
      "Panjang pipa",
      "Material pipa",
    ],
    0,
    "Schedule pada pipa menunjukkan klasifikasi ketebalan dinding pipa."
  ),
  q(
    "Level gauge digunakan untuk ...",
    [
      "Mengukur tinggi fluida di tangki",
      "Mengukur tekanan",
      "Mengukur temperatur",
      "Mengatur aliran",
    ],
    0,
    "Level gauge menunjukkan ketinggian atau jumlah cairan di dalam tangki."
  ),
  q(
    "Crude oil distillation memisahkan minyak mentah berdasarkan ...",
    ["Titik didih", "Warna", "Bau", "Tekanan"],
    0,
    "Distilasi fraksional memisahkan komponen minyak berdasarkan perbedaan titik didih."
  ),
  q(
    "Piping engineering membutuhkan pertimbangan ...",
    [
      "Tekanan, temperatur, bahan, dan korosi",
      "Hanya biaya",
      "Warna pipa",
      "Cat dan finishing",
    ],
    0,
    "Desain perpipaan harus mempertimbangkan kondisi operasi dan ketahanan material."
  ),
  q(
    "Orifice plate digunakan untuk ...",
    [
      "Mengukur aliran fluida",
      "Memompa fluida",
      "Menyaring partikel",
      "Memisahkan gas dan cairan",
    ],
    0,
    "Orifice plate menghasilkan perbedaan tekanan yang digunakan untuk menghitung laju aliran."
  ),
  q(
    "Fluida non-Newtonian memiliki ...",
    [
      "Viskositas yang berubah dengan laju geser",
      "Viskositas tetap",
      "Tidak memiliki massa",
      "Hanya berupa gas",
    ],
    0,
    "Viskositas fluida non-Newtonian berubah sesuai gaya atau laju geser yang diberikan."
  ),
  q(
    "Pressure drop pada pipa meningkat jika ...",
    [
      "Diameter pipa mengecil atau aliran turbulen",
      "Diameter pipa besar",
      "Fluida diam",
      "Tekanan konstan",
    ],
    0,
    "Pipa sempit dan aliran turbulen meningkatkan hambatan sehingga pressure drop bertambah."
  ),
];

export default tkb;