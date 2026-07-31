const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const hsse = [
  q(
    "Tujuan utama HSE dalam industri energi adalah ...",
    [
      "Meningkatkan profit",
      "Menjamin keselamatan, kesehatan pekerja, dan lingkungan",
      "Menurunkan biaya operasional",
      "Mempercepat produksi",
    ],
    1,
    "HSE bertujuan menjaga pekerja tetap aman dan sehat serta melindungi lingkungan."
  ),
  q(
    "APD merupakan singkatan dari ...",
    [
      "Alat Pelindung Diri",
      "Alat Penanganan Darurat",
      "Analisis Proses Distribusi",
      "Alat Pengukur Debu",
    ],
    0,
    "APD digunakan untuk melindungi pekerja dari risiko kerja."
  ),
  q(
    "Fire Triangle terdiri dari ...",
    [
      "Panas, oksigen, bahan bakar",
      "Panas, air, bahan bakar",
      "Panas, udara, gas",
      "Panas, tekanan, bahan bakar",
    ],
    0,
    "Api membutuhkan tiga unsur: panas, oksigen, dan bahan bakar."
  ),
  q(
    "Contoh hazard fisik di industri energi adalah ...",
    ["Kebocoran gas", "Suara bising", "Bahan kimia berbahaya", "Polusi air"],
    1,
    "Hazard fisik mencakup bising, panas, getaran, dan radiasi."
  ),
  q(
    "MSDS adalah ...",
    [
      "Manual Safety Data Sheet",
      "Material Safety Data Sheet",
      "Management Safety Document System",
      "Medical Safety Data Sheet",
    ],
    1,
    "MSDS berisi informasi bahaya bahan kimia serta tindakan pencegahannya."
  ),
  q(
    "Standar OHSAS kini digantikan oleh ...",
    ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 50001"],
    2,
    "ISO 45001 adalah standar sistem manajemen keselamatan dan kesehatan kerja."
  ),
  q(
    "Risiko tertinggi di lokasi pengeboran biasanya terkait ...",
    ["Kecepatan internet", "Kebakaran dan ledakan", "Suhu kantor", "Pemasaran produk"],
    1,
    "Operasi pengeboran memiliki risiko tinggi kebakaran dan ledakan."
  ),
  q(
    "Lockout-tagout digunakan untuk ...",
    [
      "Mengunci sistem sebelum perbaikan untuk mencegah kecelakaan",
      "Mengukur tekanan pipa",
      "Mematikan lampu darurat",
      "Menghentikan alarm kebakaran",
    ],
    0,
    "Lockout-tagout mengisolasi sumber energi sebelum pekerjaan perbaikan dilakukan."
  ),
  q(
    "Ergonomi berkaitan dengan ...",
    [
      "Desain pekerjaan untuk keselamatan dan kenyamanan pekerja",
      "Pengelolaan limbah",
      "Pemasaran energi",
      "Proses produksi",
    ],
    0,
    "Ergonomi menyesuaikan pekerjaan, alat, dan lingkungan dengan manusia."
  ),
  q(
    "PPE yang wajib digunakan saat bekerja di kilang panas adalah ...",
    [
      "Helm, sepatu keselamatan, sarung tangan tahan panas",
      "Kacamata hitam dan sandal",
      "Masker debu saja",
      "Sepatu biasa",
    ],
    0,
    "APD harus sesuai dengan risiko kerja di area panas."
  ),
  q(
    "Izin kerja untuk memasuki atau melakukan pekerjaan di area kerja disebut ...",
    ["Lockout", "Permit to Work", "Emergency Response", "Safety Observation"],
    1,
    "Permit to Work adalah sistem izin kerja untuk memastikan pekerjaan dilakukan aman."
  ),
  q(
    "Gas detector digunakan untuk ...",
    [
      "Mengukur tekanan pipa",
      "Mendeteksi keberadaan gas berbahaya",
      "Mengukur suhu ruangan",
      "Menghitung produksi minyak",
    ],
    1,
    "Gas detector memberi peringatan bila terdapat gas berbahaya."
  ),
  q(
    "Spills dan leak management bertujuan untuk ...",
    [
      "Mengurangi polusi dan bahaya keselamatan",
      "Mempercepat distribusi BBM",
      "Mengurangi biaya produksi",
      "Meningkatkan RON BBM",
    ],
    0,
    "Penanganan tumpahan dan kebocoran mencegah pencemaran serta kecelakaan."
  ),
  q(
    "Simulasi evakuasi dilakukan untuk ...",
    [
      "Mengevaluasi kesiapsiagaan dalam keadaan darurat",
      "Menghitung produksi energi",
      "Mengukur kebisingan",
      "Mengatur jadwal proyek",
    ],
    0,
    "Simulasi memastikan semua orang memahami prosedur keadaan darurat."
  ),
  q(
    "Tanda segitiga kuning dengan gambar api berarti ...",
    [
      "Peringatan bahan mudah terbakar",
      "Peringatan area radioaktif",
      "Peringatan bahaya listrik",
      "Peringatan permukaan licin",
    ],
    0,
    "Simbol api pada rambu kuning menunjukkan bahaya bahan mudah terbakar."
  ),
  q(
    "Prosedur HAZOP digunakan untuk ...",
    [
      "Analisis risiko proses industri",
      "Pengukuran temperatur",
      "Distribusi BBM",
      "Menghitung cadangan minyak",
    ],
    0,
    "HAZOP digunakan untuk mengidentifikasi potensi bahaya dalam proses industri."
  ),
  q(
    "Bahan kimia dengan simbol tengkorak menandakan ...",
    ["Korosif", "Beracun atau mematikan", "Mudah terbakar", "Radiasi"],
    1,
    "Simbol tengkorak menunjukkan bahan bersifat toksik atau beracun."
  ),
  q(
    "Safety Culture berarti ...",
    [
      "Budaya memproduksi cepat",
      "Budaya keselamatan di seluruh organisasi",
      "Budaya marketing",
      "Budaya menunda pekerjaan",
    ],
    1,
    "Safety culture adalah nilai dan perilaku keselamatan yang diterapkan semua orang."
  ),
  q(
    "Contoh hazard biologis di industri energi adalah ...",
    ["Jamur, bakteri, virus", "Bising", "Gas beracun", "Suhu tinggi"],
    0,
    "Hazard biologis berasal dari organisme seperti bakteri, virus, dan jamur."
  ),
  q(
    "Penanganan limbah B3 harus dilakukan ...",
    [
      "Dengan mengabaikannya",
      "Sesuai regulasi pemerintah dan SOP perusahaan",
      "Dengan membakarnya sembarangan",
      "Dengan menyimpannya di sembarang tempat",
    ],
    1,
    "Limbah B3 wajib dikelola sesuai regulasi dan prosedur yang berlaku."
  ),
  q(
    "Rambu keselamatan berwarna hijau menunjukkan ...",
    [
      "Larangan",
      "Informasi atau jalur keselamatan",
      "Bahaya listrik",
      "Bahan mudah terbakar",
    ],
    1,
    "Warna hijau umumnya menunjukkan kondisi aman, P3K, atau jalur evakuasi."
  ),
  q(
    "Alarm darurat di industri digunakan untuk ...",
    [
      "Memberi tahu adanya kondisi berbahaya",
      "Mengukur tekanan",
      "Menghitung cadangan",
      "Memberi informasi cuaca",
    ],
    0,
    "Alarm memberi peringatan cepat terhadap kondisi darurat."
  ),
  q(
    "Material handling manual yang salah dapat menyebabkan ...",
    [
      "Produktivitas meningkat",
      "Cedera muskuloskeletal",
      "Polusi udara",
      "Konsumsi energi naik",
    ],
    1,
    "Teknik angkat yang salah dapat menyebabkan cedera otot dan tulang."
  ),
  q(
    "Safety observation card digunakan untuk ...",
    [
      "Melaporkan praktik kerja aman atau bahaya",
      "Menghitung produksi harian",
      "Mencatat cuaca",
      "Mengukur pH bahan kimia",
    ],
    0,
    "Kartu observasi keselamatan dipakai untuk melaporkan perilaku aman maupun kondisi bahaya."
  ),
  q(
    "Manajemen risiko HSE meliputi ...",
    [
      "Identifikasi, analisis, mitigasi, monitoring",
      "Pemasaran, distribusi, penjualan",
      "Desain, produksi, perawatan",
      "Penjadwalan proyek dan logistik",
    ],
    0,
    "Tahapan manajemen risiko mencakup identifikasi bahaya, analisis, mitigasi, dan pemantauan."
  ),
];

export default hsse;