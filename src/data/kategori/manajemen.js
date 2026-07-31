const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const manajemen = [
  q(
    "Project life cycle biasanya terdiri dari ...",
    [
      "Initiation, Planning, Execution, Monitoring, Closing",
      "Design, Marketing, Sales, Distribution",
      "Research, Testing, Launch",
      "Procurement, Finance, HR",
    ],
    0,
    "Tahapan proyek umumnya dimulai dari inisiasi hingga penutupan."
  ),
  q(
    "Triple constraint dalam manajemen proyek mencakup ...",
    [
      "Waktu, biaya, dan scope atau kualitas",
      "Biaya, lokasi, dan tim",
      "Risiko, anggaran, dan cuaca",
      "Karyawan, supplier, dan pelanggan",
    ],
    0,
    "Triple constraint berhubungan dengan waktu, biaya, serta ruang lingkup atau kualitas."
  ),
  q(
    "WBS atau Work Breakdown Structure digunakan untuk ...",
    [
      "Membagi proyek menjadi bagian kecil yang mudah dikelola",
      "Menghitung biaya bahan bakar",
      "Mengukur produksi BBM",
      "Mengatur shift pekerja",
    ],
    0,
    "WBS menguraikan proyek besar menjadi pekerjaan yang lebih kecil."
  ),
  q(
    "Critical Path Method atau CPM digunakan untuk ...",
    [
      "Menentukan jalur kritis agar proyek selesai tepat waktu",
      "Mengatur distribusi energi",
      "Menghitung tekanan pipa",
      "Meningkatkan RON BBM",
    ],
    0,
    "CPM membantu menentukan rangkaian aktivitas yang tidak boleh terlambat."
  ),
  q(
    "Earned Value Management atau EVM digunakan untuk ...",
    [
      "Mengukur kinerja biaya dan jadwal proyek",
      "Menghitung stok BBM",
      "Menganalisis risiko HSE",
      "Menentukan supplier terbaik",
    ],
    0,
    "EVM membandingkan biaya, jadwal, dan pekerjaan yang sudah dicapai."
  ),
  q(
    "ROI atau Return on Investment dihitung dengan rumus ...",
    [
      "(Keuntungan - Biaya) / Biaya × 100%",
      "Biaya / Keuntungan",
      "Pendapatan × Biaya",
      "Keuntungan / Pendapatan",
    ],
    0,
    "ROI menunjukkan tingkat keuntungan dibandingkan biaya investasi."
  ),
  q(
    "Risiko proyek dapat dikurangi dengan ...",
    [
      "Identifikasi, analisis, mitigasi, dan monitoring",
      "Mengabaikan masalah kecil",
      "Menunda keputusan",
      "Menambah biaya",
    ],
    0,
    "Manajemen risiko dimulai dari identifikasi hingga pemantauan."
  ),
  q(
    "Gantt chart digunakan untuk ...",
    [
      "Menampilkan jadwal proyek secara visual",
      "Mengukur tekanan pipa",
      "Menghitung produksi minyak",
      "Menyusun laporan keuangan",
    ],
    0,
    "Gantt chart menunjukkan aktivitas proyek dan durasinya dalam garis waktu."
  ),
  q(
    "Break-even point adalah ...",
    [
      "Titik impas antara biaya dan pendapatan",
      "Titik maksimum produksi",
      "Titik kritis HSE",
      "Titik distribusi BBM",
    ],
    0,
    "Break-even point terjadi saat pendapatan sama dengan total biaya."
  ),
  q(
    "KPI atau Key Performance Indicator digunakan untuk ...",
    [
      "Mengukur kinerja individu atau tim terhadap tujuan proyek",
      "Mengukur kecepatan pipa",
      "Menentukan RON BBM",
      "Menyusun laporan safety",
    ],
    0,
    "KPI menjadi indikator pencapaian target proyek atau organisasi."
  ),
  q(
    "Supply chain management dalam energi berfokus pada ...",
    [
      "Pengadaan, transportasi, distribusi, dan penjualan",
      "Pemasaran produk minyak saja",
      "Perawatan kilang saja",
      "Distribusi lokal saja",
    ],
    0,
    "Rantai pasok mencakup aliran barang, informasi, dan proses dari pengadaan sampai pengguna."
  ),
  q(
    "Capex atau Capital Expenditure adalah ...",
    [
      "Biaya investasi untuk aset tetap",
      "Biaya operasional harian",
      "Biaya pemasaran",
      "Biaya administrasi",
    ],
    0,
    "Capex digunakan untuk investasi aset jangka panjang seperti peralatan dan fasilitas."
  ),
  q(
    "Opex atau Operational Expenditure adalah ...",
    [
      "Biaya operasional rutin",
      "Biaya investasi aset tetap",
      "Biaya proyek marketing",
      "Biaya keselamatan",
    ],
    0,
    "Opex adalah biaya untuk menjalankan kegiatan operasional sehari-hari."
  ),
  q(
    "Feasibility study bertujuan untuk ...",
    [
      "Menilai kelayakan teknis, finansial, dan lingkungan proyek",
      "Menentukan jadwal shift",
      "Menghitung produksi harian",
      "Menentukan supplier",
    ],
    0,
    "Studi kelayakan menentukan apakah proyek layak dijalankan."
  ),
  q(
    "Risiko finansial dalam proyek energi biasanya terkait dengan ...",
    [
      "Fluktuasi harga minyak dan biaya proyek",
      "Kecelakaan kerja",
      "Pemadaman listrik",
      "Polusi udara",
    ],
    0,
    "Harga komoditas dan perubahan biaya dapat memengaruhi keuntungan proyek energi."
  ),
  q(
    "Konsep time value of money penting untuk ...",
    [
      "Menilai nilai uang masa depan dibandingkan nilai sekarang",
      "Mengatur shift pekerja",
      "Mengukur cadangan minyak",
      "Menentukan titik pengapian",
    ],
    0,
    "Nilai uang saat ini berbeda dengan nilai uang di masa depan."
  ),
  q(
    "Contoh risiko HSE pada proyek konstruksi kilang adalah ...",
    [
      "Ledakan gas, kebakaran, dan jatuh dari ketinggian",
      "Keterlambatan laporan keuangan",
      "Harga BBM turun",
      "Terlambat pengiriman material",
    ],
    0,
    "Risiko HSE berhubungan dengan keselamatan, kesehatan, dan lingkungan."
  ),
  q(
    "Balanced Scorecard digunakan untuk ...",
    [
      "Mengukur kinerja organisasi dari berbagai perspektif",
      "Mengatur aliran pipa",
      "Menghitung produksi kilang",
      "Menyusun jadwal proyek",
    ],
    0,
    "Balanced Scorecard melihat perspektif finansial, pelanggan, proses internal, serta pembelajaran."
  ),
  q(
    "Benchmarking dalam proyek berarti ...",
    [
      "Membandingkan kinerja dengan standar terbaik industri",
      "Membandingkan tekanan pipa",
      "Mengukur temperatur kilang",
      "Membandingkan shift kerja",
    ],
    0,
    "Benchmarking membantu menemukan praktik terbaik untuk meningkatkan kinerja."
  ),
  q(
    "Stakeholder analysis bertujuan untuk ...",
    [
      "Mengidentifikasi pihak terkait dan kepentingannya dalam proyek",
      "Mengukur kapasitas pompa",
      "Menghitung biaya proyek",
      "Menentukan kualitas bahan bakar",
    ],
    0,
    "Stakeholder analysis memetakan pihak yang dapat memengaruhi atau dipengaruhi proyek."
  ),
  q(
    "Cash flow management penting untuk ...",
    [
      "Menjaga arus kas tetap positif selama proyek",
      "Mengukur aliran pipa",
      "Menghitung RON BBM",
      "Memantau produksi minyak",
    ],
    0,
    "Proyek perlu memiliki kas yang cukup untuk membayar kebutuhan pada waktunya."
  ),
  q(
    "Change management dalam proyek dilakukan untuk ...",
    [
      "Menangani perubahan scope, jadwal, atau anggaran secara terkendali",
      "Mengatur shift pekerja",
      "Menyimpan bahan bakar",
      "Menentukan harga jual BBM",
    ],
    0,
    "Perubahan harus dikendalikan agar tidak merusak target proyek."
  ),
  q(
    "Lean management bertujuan untuk ...",
    [
      "Mengurangi pemborosan dan meningkatkan efisiensi",
      "Meningkatkan biaya proyek",
      "Mempercepat aliran minyak mentah",
      "Mengatur keselamatan pekerja",
    ],
    0,
    "Lean berfokus menghilangkan aktivitas yang tidak memberi nilai tambah."
  ),
  q(
    "Risiko pasar di sektor energi biasanya terkait dengan ...",
    [
      "Fluktuasi harga minyak, gas, atau energi terbarukan",
      "Kecelakaan di lapangan",
      "Tekanan pipa",
      "Maintenance equipment",
    ],
    0,
    "Harga komoditas energi dapat berubah karena kondisi pasar global."
  ),
  q(
    "Project close-out report berisi ...",
    [
      "Evaluasi hasil proyek, pelajaran yang dipetik, dan dokumentasi lengkap",
      "Jadwal harian pekerja",
      "Laporan tekanan pipa",
      "Data RON BBM",
    ],
    0,
    "Laporan penutupan mendokumentasikan hasil proyek dan pembelajaran untuk proyek berikutnya."
  ),
];

export default manajemen;