const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const logika = [
  q(
    "Semua buku di rak adalah novel. Harry Potter adalah sebuah buku. Kesimpulan yang benar adalah ...",
    [
      "Semua buku adalah Harry Potter",
      "Semua novel adalah Harry Potter",
      "Semua novel adalah buku",
      "Harry Potter adalah novel",
      "Semua buku di rak adalah Harry Potter",
    ],
    3,
    "Harry Potter termasuk buku, sedangkan semua buku di rak adalah novel."
  ),
  q(
    "Semua pensil di dalam kotak berwarna biru. Pensil yang diambil berasal dari kotak tersebut. Kesimpulannya ...",
    [
      "Semua pensil di dunia biru",
      "Semua benda biru adalah pensil",
      "Pensil yang diambil berwarna biru",
      "Semua benda dalam kotak adalah pensil",
      "Semua pensil biru berasal dari kotak",
    ],
    2,
    "Pensil yang diambil berasal dari kelompok pensil dalam kotak yang semuanya berwarna biru."
  ),
  q(
    "Semua manusia adalah makhluk hidup. Bunga adalah makhluk hidup. Kesimpulan yang benar adalah ...",
    [
      "Semua bunga adalah manusia",
      "Beberapa bunga adalah manusia",
      "Bunga adalah makhluk hidup",
      "Tidak ada kesimpulan",
      "Semua salah",
    ],
    2,
    "Pernyataan kedua langsung menyebutkan bahwa bunga adalah makhluk hidup."
  ),
  q(
    "Semua kucing suka susu. Tom adalah seekor kucing. Kesimpulan yang benar adalah ...",
    [
      "Tom suka susu",
      "Semua kucing adalah Tom",
      "Semua hewan suka susu",
      "Semua hewan adalah kucing",
      "Tom adalah manusia",
    ],
    0,
    "Tom termasuk kucing, sehingga mengikuti sifat semua kucing yang suka susu."
  ),
  q(
    "Semua ikan hidup di air. Piranha adalah ikan. Apakah piranha hidup di air?",
    ["Ya", "Tidak", "Kadang-kadang", "Hanya saat kecil", "Tidak dapat dipastikan"],
    0,
    "Piranha adalah ikan dan semua ikan hidup di air."
  ),
  q(
    "Semua mamalia bernapas dengan paru-paru. Paus adalah mamalia. Apakah paus bernapas dengan paru-paru?",
    ["Ya", "Tidak", "Dengan insang", "Dengan kulit", "Hanya saat di darat"],
    0,
    "Paus termasuk mamalia, maka ia bernapas dengan paru-paru."
  ),
  q(
    "Semua mamalia menyusui anaknya. Kucing adalah mamalia. Kesimpulannya ...",
    [
      "Tidak ada kesimpulan",
      "Kucing menyusui anaknya",
      "Semua hewan menyusui anaknya",
      "Kucing bukan mamalia",
      "Semua salah",
    ],
    1,
    "Kucing adalah anggota kelompok mamalia."
  ),
  q(
    "Semua burung bisa terbang. Sebagian hewan yang bisa terbang adalah burung. Kesimpulan yang benar adalah ...",
    [
      "Semua hewan terbang adalah burung",
      "Sebagian burung adalah hewan yang bisa terbang",
      "Hewan yang tidak terbang bukan burung",
      "Semua hewan adalah burung",
      "Tidak ada kesimpulan",
    ],
    1,
    "Pernyataan kedua setara dengan sebagian burung termasuk hewan yang dapat terbang."
  ),
  q(
    "Jika hujan turun, maka jalanan basah. Hari ini hujan turun. Kesimpulannya ...",
    [
      "Jalanan tetap kering",
      "Jalanan basah",
      "Tidak ada hubungan",
      "Semua jalanan banjir",
      "Tidak dapat dipastikan",
    ],
    1,
    "Ini adalah pola modus ponens: hujan terjadi, maka jalanan basah."
  ),
  q(
    "Semua orang yang rajin belajar akan lulus ujian. Andi rajin belajar. Kesimpulannya ...",
    [
      "Andi lulus ujian",
      "Andi tidak lulus ujian",
      "Semua orang lulus ujian",
      "Hanya sebagian orang lulus",
      "Tidak ada kesimpulan",
    ],
    0,
    "Andi memenuhi syarat rajin belajar."
  ),
  q(
    "Semua A adalah B. Semua B adalah C. Kesimpulannya: semua A adalah C.",
    ["Benar", "Salah"],
    0,
    "Jika A bagian dari B dan B bagian dari C, maka A bagian dari C."
  ),
  q(
    "Semua kucing adalah hewan. Beberapa hewan adalah mamalia. Kesimpulannya: beberapa kucing adalah mamalia.",
    ["Benar", "Salah"],
    1,
    "Tidak ada informasi bahwa hewan mamalia tersebut adalah kucing."
  ),
  q(
    "Tidak ada burung yang bisa berenang. Angsa adalah burung. Kesimpulannya: angsa tidak bisa berenang.",
    ["Benar", "Salah"],
    0,
    "Berdasarkan premis formal, angsa termasuk burung yang tidak bisa berenang."
  ),
  q(
    "Semua pegawai memakai seragam. Rina adalah pegawai. Kesimpulannya: Rina memakai seragam.",
    ["Benar", "Salah"],
    0,
    "Rina termasuk kelompok pegawai yang semuanya memakai seragam."
  ),
  q(
    "Semua A adalah B. Sebagian B adalah C. Kesimpulannya: sebagian A adalah C.",
    ["Benar", "Salah"],
    1,
    "Bagian B yang menjadi C belum tentu berasal dari A."
  ),
  q(
    "Semua mahasiswa cerdas. Budi bukan mahasiswa. Kesimpulannya: Budi tidak cerdas.",
    ["Benar", "Salah"],
    1,
    "Bukan mahasiswa tidak berarti tidak cerdas."
  ),
  q(
    "Sebagian dokter adalah perokok. Andi adalah dokter. Kesimpulannya: Andi perokok.",
    ["Benar", "Salah"],
    1,
    "Kata sebagian tidak berarti semua dokter perokok."
  ),
  q(
    "Semua bunga membutuhkan cahaya. Mawar adalah bunga. Kesimpulannya: mawar membutuhkan cahaya.",
    ["Benar", "Salah"],
    0,
    "Mawar termasuk bunga, maka mengikuti sifat semua bunga."
  ),
  q(
    "Sebagian guru adalah wanita. Sinta adalah wanita. Kesimpulannya: Sinta adalah guru.",
    ["Benar", "Salah"],
    1,
    "Sebagian wanita guru tidak berarti semua wanita adalah guru."
  ),
  q(
    "Semua pemain bola suka olahraga. Semua yang suka olahraga sehat. Kesimpulannya: semua pemain bola sehat.",
    ["Benar", "Salah"],
    0,
    "Pemain bola → suka olahraga → sehat."
  ),
  q(
    "Jika Andi belajar maka ia lulus. Jika Andi tidak lulus maka ia tidak belajar. Hubungan kedua pernyataan adalah ...",
    [
      "Tidak berhubungan",
      "Kebalikan",
      "Premis kedua menguatkan premis pertama",
      "Bertentangan",
    ],
    2,
    "Pernyataan kedua adalah kontraposisi dari pernyataan pertama."
  ),
  q(
    "Semua A adalah B. Tidak ada B adalah C. Sebagian C adalah D. Kesimpulan valid adalah ...",
    [
      "Tidak ada A yang C",
      "Sebagian A adalah D",
      "Semua D adalah A",
      "Semua A adalah C",
    ],
    0,
    "Karena A termasuk B dan B tidak mungkin C, maka A tidak mungkin C."
  ),
  q(
    "Jika P maka Q. Jika Q maka R. R tidak benar. Kesimpulannya ...",
    ["P benar", "Q benar", "P salah", "Tidak ada hubungan"],
    2,
    "P → Q → R. Jika R salah, maka Q dan P tidak dapat benar."
  ),
  q(
    "Semua penulis membaca buku. Ada penulis yang tidak memakai laptop. Sebagian pembaca buku adalah mahasiswa. Kesimpulan paling kuat adalah ...",
    [
      "Semua penulis mahasiswa",
      "Sebagian penulis mungkin mahasiswa",
      "Semua penulis memakai laptop",
      "Penulis bukan mahasiswa",
    ],
    1,
    "Penulis pasti pembaca buku, tetapi hanya sebagian pembaca yang mahasiswa."
  ),
  q(
    "Jika hujan maka jalan licin. Jika jalan licin maka terjadi kecelakaan. Hari ini tidak terjadi kecelakaan. Kesimpulan paling tepat adalah ...",
    [
      "Hujan turun",
      "Hujan tidak turun",
      "Jalan licin",
      "Tidak dapat dipastikan",
    ],
    3,
    "Tidak terjadi kecelakaan tidak cukup untuk memastikan hujan atau jalan licin."
  ),
  q(
    "Jika A benar maka B salah. Jika B salah maka C benar. C salah. Kesimpulannya ...",
    ["A benar", "A salah", "B salah", "Tidak berhubungan"],
    1,
    "Jika A benar, C seharusnya benar. Karena C salah, A tidak benar."
  ),
  q(
    "Semua mobil merah cepat. Beberapa mobil cepat bukan mobil sport. Semua mobil sport mahal. Kesimpulannya ...",
    [
      "Semua mobil merah mahal",
      "Mobil cepat pasti merah",
      "Ada mobil cepat yang tidak mahal",
      "Tidak dapat disimpulkan",
    ],
    3,
    "Mobil cepat yang bukan sport belum tentu tidak mahal."
  ),
  q(
    "Jika ada diskon, pembeli banyak. Jika pembeli banyak, toko untung. Toko tidak untung. Kesimpulannya ...",
    ["Ada diskon", "Tidak ada diskon", "Pembeli banyak", "Tidak dapat dipastikan"],
    1,
    "Diskon → pembeli banyak → untung. Jika untung tidak terjadi, diskon tidak terjadi."
  ),
  q(
    "Semua pemain hebat berlatih keras. Beberapa yang berlatih keras cedera. Kesimpulan paling tepat adalah ...",
    [
      "Pemain hebat pasti cedera",
      "Beberapa pemain hebat mungkin cedera",
      "Semua pemain cedera",
      "Tidak ada pemain cedera",
    ],
    1,
    "Ada kemungkinan irisan pemain hebat dengan kelompok yang cedera, tetapi tidak pasti."
  ),
  q(
    "Semua tanaman membutuhkan air. Kaktus adalah tanaman. Kesimpulan paling kuat adalah ...",
    [
      "Kaktus berdaun",
      "Kaktus tidak berdaun",
      "Kaktus membutuhkan air",
      "Kaktus tidak perlu air",
    ],
    2,
    "Kaktus termasuk tanaman sehingga membutuhkan air."
  ),
];

export default logika;