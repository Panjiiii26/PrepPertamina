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
    id: 3,
    pertanyaan:
      "Semua operator memakai APD. Andi adalah operator. Kesimpulan yang benar adalah...",
    pilihan: [
      "Andi memakai APD",
      "Andi tidak memakai APD",
      "Semua pemakai APD adalah operator",
      "Tidak dapat disimpulkan"
    ],
    jawaban: 0,
    pembahasan:
      "Semua operator memakai APD. Karena Andi adalah operator, maka Andi memakai APD."
  }
];

export default logika;