const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const sjt = [
  q(
    "Kamu mendapat tugas dari atasan, tetapi ada bagian instruksi yang tidak dipahami. Apa yang dilakukan?",
    [
      "Menunggu tanpa melakukan apa-apa",
      "Menebak sendiri agar cepat selesai",
      "Bertanya kepada atasan untuk memperjelas instruksi",
      "Mengerjakan sebagian yang dipahami saja",
    ],
    2,
    "Bertanya secara terbuka memastikan pekerjaan dilakukan dengan tepat dan bertanggung jawab."
  ),
  q(
    "Rekan kerja sering datang terlambat dan memengaruhi tim. Apa tindakan terbaik?",
    [
      "Mengingatkannya secara baik-baik",
      "Langsung melapor tanpa bicara dengannya",
      "Membiarkannya",
      "Menyindirnya di depan orang lain",
    ],
    0,
    "Mengingatkan dengan sopan menjaga hubungan kerja sekaligus membantu kinerja tim."
  ),
  q(
    "Kamu diminta membantu rekan yang kewalahan, sementara pekerjaanmu juga banyak. Apa tindakan terbaik?",
    [
      "Menolak sepenuhnya",
      "Membantu sebisanya sambil menyelesaikan tugas sendiri",
      "Menyuruh orang lain membantu",
      "Meninggalkan semua pekerjaan sendiri",
    ],
    1,
    "Bantuan yang proporsional menunjukkan kolaborasi dan tanggung jawab."
  ),
  q(
    "Kamu menemukan kesalahan kecil dalam laporan yang sudah dikirim ke atasan. Apa yang dilakukan?",
    [
      "Diam saja",
      "Mengakui kesalahan dan segera memperbaikinya",
      "Menyalahkan rekan kerja",
      "Menunggu atasan menemukan sendiri",
    ],
    1,
    "Integritas ditunjukkan dengan mengakui dan memperbaiki kesalahan."
  ),
  q(
    "Pelanggan marah karena pelayanan lambat. Apa respons terbaik?",
    [
      "Menjelaskan alasan dan meminta maaf dengan sopan",
      "Mengabaikannya",
      "Menyalahkan sistem",
      "Memintanya menunggu tanpa penjelasan",
    ],
    0,
    "Komunikasi yang empatik dan sopan adalah bentuk pelayanan profesional."
  ),
  q(
    "Kamu diminta presentasi mendadak, padahal belum siap. Apa yang dilakukan?",
    [
      "Menolak karena belum siap",
      "Menerima dan menyiapkan sebaik mungkin dalam waktu singkat",
      "Meminta rekan menggantikan",
      "Mengerjakan asal-asalan",
    ],
    1,
    "Sikap adaptif dan kompeten ditunjukkan dengan mempersiapkan diri sebaik mungkin."
  ),
  q(
    "Kamu mendengar rumor negatif tentang rekan kerja. Apa yang dilakukan?",
    [
      "Menyebarkannya",
      "Mengabaikannya karena belum tentu benar",
      "Menceritakannya ke teman lain",
      "Mengejek rekan tersebut",
    ],
    1,
    "Jangan mudah terprovokasi gosip yang belum terbukti."
  ),
  q(
    "Atasan memberikan tugas yang bukan bidang utama kamu. Apa respons terbaik?",
    [
      "Menolak",
      "Mencoba belajar dan melaksanakan dengan bimbingan",
      "Menyuruh rekan lain",
      "Menunda tanpa alasan",
    ],
    1,
    "Tugas baru adalah kesempatan untuk belajar dan meningkatkan kompetensi."
  ),
  q(
    "Kamu melakukan kesalahan yang menyebabkan kerugian kecil bagi perusahaan. Apa yang dilakukan?",
    [
      "Menutupinya",
      "Mengakui kesalahan dan mencari solusi",
      "Menyalahkan sistem",
      "Mengalihkan perhatian",
    ],
    1,
    "Tanggung jawab berarti mengakui kesalahan dan memperbaikinya."
  ),
  q(
    "Rekan kerja mendapat pujian dari atasan, padahal kamu merasa kontribusimu lebih besar. Apa sikap terbaik?",
    [
      "Iri dan mengeluh",
      "Menghargai pencapaiannya dengan tulus",
      "Membicarakan ketidakadilan kepada orang lain",
      "Merendahkan hasil kerjanya",
    ],
    1,
    "Sikap profesional menghargai keberhasilan rekan kerja."
  ),
  q(
    "Kamu melihat rekan mengambil barang milik kantor tanpa izin. Apa tindakan terbaik?",
    [
      "Diam saja",
      "Melaporkan dengan bukti kepada atasan secara bijak",
      "Ikut mengambil",
      "Menyebarkan cerita ke semua rekan",
    ],
    1,
    "Tindakan tidak etis perlu dilaporkan melalui jalur yang tepat dan dengan bukti."
  ),
  q(
    "Kamu diberi kritik keras oleh atasan di depan tim. Apa respons terbaik?",
    [
      "Membalas dengan emosi",
      "Mendengarkan, lalu melakukan introspeksi",
      "Menyalahkan rekan lain",
      "Keluar ruangan dengan marah",
    ],
    1,
    "Kritik perlu diterima secara profesional untuk memperbaiki diri."
  ),
  q(
    "Kamu melihat rekan baru kesulitan memahami sistem kerja. Apa yang dilakukan?",
    [
      "Membiarkannya",
      "Membantu menjelaskan dengan sabar",
      "Mengeluh karena terganggu",
      "Langsung melaporkannya",
    ],
    1,
    "Membantu rekan baru mencerminkan kerja sama dan sikap harmonis."
  ),
  q(
    "Kamu diminta bekerja lembur sementara rekan lain sudah pulang. Apa sikap terbaik?",
    [
      "Menolak karena merasa tidak adil",
      "Menerima dan menyelesaikan tugas sebagai tanggung jawab",
      "Mengeluh sepanjang pekerjaan",
      "Menundanya sampai besok",
    ],
    1,
    "Ketika diperlukan dan sesuai prosedur, menyelesaikan tanggung jawab menunjukkan komitmen."
  ),
  q(
    "Pelanggan meminta informasi rahasia milik pelanggan lain. Apa yang dilakukan?",
    [
      "Menolak dengan sopan dan menjelaskan alasan",
      "Memberikan sedikit informasi",
      "Memberikan seluruh informasi",
      "Meneruskannya kepada rekan tanpa alasan",
    ],
    0,
    "Kerahasiaan data harus dijaga sesuai etika dan prosedur perusahaan."
  ),
  q(
    "Rekan tim memiliki perbedaan pendapat dalam rapat. Apa tindakan terbaik?",
    [
      "Memaksakan pendapat sendiri",
      "Mendengarkan dan mencari jalan tengah",
      "Diam tanpa terlibat",
      "Menyudahi rapat tanpa kesepakatan",
    ],
    1,
    "Mendengarkan dan mencari solusi bersama mendukung kolaborasi."
  ),
  q(
    "Kamu menemukan cara baru untuk mempercepat pekerjaan. Apa yang dilakukan?",
    [
      "Menyimpannya sendiri",
      "Membagikannya kepada tim untuk kemajuan bersama",
      "Menggunakannya diam-diam",
      "Menunggu pujian sebelum berbagi",
    ],
    1,
    "Berbagi perbaikan proses dapat meningkatkan kinerja seluruh tim."
  ),
  q(
    "Kamu menerima email dengan data penting dari pengirim yang tidak dikenal. Apa yang dilakukan?",
    [
      "Langsung membuka lampiran",
      "Melaporkan ke bagian IT atau atasan",
      "Mengirimkannya ke semua rekan",
      "Mengabaikannya tanpa tindakan",
    ],
    1,
    "Email mencurigakan perlu dilaporkan untuk menjaga keamanan data."
  ),
  q(
    "Rekan kerja salah paham terhadap ucapanmu dan tersinggung. Apa yang dilakukan?",
    [
      "Membiarkannya",
      "Meminta maaf dan menjelaskan maksud sebenarnya",
      "Membantah di depan orang lain",
      "Menjauhinya",
    ],
    1,
    "Komunikasi yang baik dapat menyelesaikan kesalahpahaman secara dewasa."
  ),
  q(
    "Kamu mendapat tugas baru yang menantang dan belum pernah dikerjakan sebelumnya. Apa respons terbaik?",
    [
      "Menolak karena takut gagal",
      "Menerima sebagai kesempatan belajar",
      "Menyuruh orang lain mengerjakan",
      "Mengeluh karena tugas berat",
    ],
    1,
    "Sikap adaptif dan kompeten terlihat dari kemauan belajar hal baru."
  ),
];

export default sjt;