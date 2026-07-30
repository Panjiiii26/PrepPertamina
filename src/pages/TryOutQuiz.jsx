import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timer from "../components/Timer";

import verbal from "../data/kategori/verbal";
import logika from "../data/kategori/logika";
import hsse from "../data/kategori/hsse";
import pertamina from "../data/kategori/pertamina";
import twk from "../data/kategori/twk";
import tiu from "../data/kategori/tiu";
import tkb from "../data/kategori/tkb";

function acakSoal(soal) {
  const hasil = [...soal];

  for (let i = hasil.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [hasil[i], hasil[randomIndex]] = [
      hasil[randomIndex],
      hasil[i],
    ];
  }

  return hasil;
}

function TryOutQuiz() {
  const location = useLocation();
  const jumlah = location.state?.jumlah || 25;

  const semuaSoal = useMemo(
    () => [
      ...twk,
      ...tiu,
      ...hsse,
      ...verbal,
      ...logika,
      ...pertamina,
      ...tkb,
    ],
    []
  );

  const [percobaan, setPercobaan] = useState(0);

  const soalTryOut = useMemo(() => {
    return acakSoal(semuaSoal).slice(
      0,
      Math.min(jumlah, semuaSoal.length)
    );
  }, [semuaSoal, jumlah, percobaan]);

  const [nomor, setNomor] = useState(0);
  const [jawabanUser, setJawabanUser] = useState(
    Array(soalTryOut.length).fill(null)
  );
  const [ragu, setRagu] = useState(
    Array(soalTryOut.length).fill(false)
  );
  const [selesai, setSelesai] = useState(false);
  const [lihatReview, setLihatReview] = useState(false);
  const soal = soalTryOut[nomor];

  const skor = jawabanUser.reduce((total, jawaban, index) => {
    if (jawaban === soalTryOut[index]?.jawaban) {
      return total + 1;
    }

    return total;
  }, 0);

  const persen = soalTryOut.length
    ? Math.round((skor / soalTryOut.length) * 100)
    : 0;

  // Simpan hasil sekali saja saat try out selesai.
  useEffect(() => {
    if (!selesai) return;

    const riwayat =
      JSON.parse(localStorage.getItem("progress")) || [];

    riwayat.push({
      jenis: "Try Out",
      nilai: persen,
      benar: skor,
      totalSoal: soalTryOut.length,
      tanggal: new Date().toLocaleDateString("id-ID"),
    });

    localStorage.setItem("progress", JSON.stringify(riwayat));
  }, [selesai]); // Jangan menambahkan skor/persen di sini agar tidak tersimpan berulang.

  function pilih(index) {
    if (jawabanUser[nomor] !== null) return;

    const jawabanBaru = [...jawabanUser];
    jawabanBaru[nomor] = index;

    setJawabanUser(jawabanBaru);
  }

  function nextSoal() {
    if (nomor < soalTryOut.length - 1) {
      setNomor((sebelumnya) => sebelumnya + 1);
    } else {
      setSelesai(true);
    }
  }

  function prevSoal() {
    if (nomor > 0) {
      setNomor((sebelumnya) => sebelumnya - 1);
    }
  }

  function toggleRagu() {
    const raguBaru = [...ragu];
    raguBaru[nomor] = !raguBaru[nomor];

    setRagu(raguBaru);
  }

  function ulangiTryOut() {
    setNomor(0);
    setJawabanUser(Array(soalTryOut.length).fill(null));
    setRagu(Array(soalTryOut.length).fill(false));
    setSelesai(false);
    setLihatReview(false);

    // Memicu pengacakan soal baru.
    setPercobaan((sebelumnya) => sebelumnya + 1);
  }

  if (!soalTryOut.length) {
    return (
      <>
        <Header />

        <div className="quiz-container">
          <div className="card">
            <h2>Soal try out belum tersedia.</h2>
          </div>
        </div>
      </>
    );
  }

  if (lihatReview) {
  return (
    <>
      <Header />

      <div className="quiz-container">
        <div className="card">
          <h1>📖 Review Jawaban</h1>

          {soalTryOut.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "30px",
                paddingBottom: "20px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <h3>
                {index + 1}. {item.pertanyaan}
              </h3>

              <p>
                <strong>Jawaban Kamu:</strong>{" "}
                {jawabanUser[index] !== null
                  ? item.pilihan[jawabanUser[index]]
                  : "Tidak dijawab"}
              </p>

              <p style={{ color: "green" }}>
                <strong>Jawaban Benar:</strong>{" "}
                {item.pilihan[item.jawaban]}
              </p>

              <p>
                <strong>Pembahasan:</strong>
              </p>

              <p>{item.pembahasan}</p>
            </div>
          ))}

          <button
            className="menu-btn"
            onClick={() => setLihatReview(false)}
          >
            ⬅ Kembali
          </button>
        </div>
      </div>
    </>
  );
}

  if (selesai) {
    const belumDijawab = jawabanUser.filter(
      (jawaban) => jawaban === null
    ).length;

    const jumlahRagu = ragu.filter(Boolean).length;

    let grade = "";
let pesan = "";

if (persen >= 90) {
  grade = "🟢 A";
  pesan = "Luar biasa! Pertahankan hasilmu.";
} else if (persen >= 80) {
  grade = "🔵 B";
  pesan = "Bagus! Tinggal sedikit lagi menuju sempurna.";
} else if (persen >= 70) {
  grade = "🟡 C";
  pesan = "Cukup baik, terus latihan agar lebih konsisten.";
} else {
  grade = "🔴 D";
  pesan = "Jangan menyerah. Pelajari kembali pembahasan dan coba lagi.";
}

    return (
      <>
        <Header />

        <div className="quiz-container">
          <div className="card result">
            <h1>🎉 Try Out Selesai</h1>

            <h2>
              {skor} / {soalTryOut.length}
            </h2>

            <h1>{persen}%</h1>

            <h2>{grade}</h2>

            <p
              style={{
                fontWeight: "bold",
                color: "#555",
                 marginBottom: "20px",
              }}
            >
              {pesan}
            </p>

            <p>Soal belum dijawab: {belumDijawab}</p>
            <p>Soal ditandai ragu-ragu: {jumlahRagu}</p>

            <button className="menu-btn" onClick={ulangiTryOut}>
              🔄 Ulangi Try Out
            </button>
            <button
             className="menu-btn"
             onClick={() => setLihatReview(true)}
           >
            📖 Review Jawaban
           </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="quiz-container">
        <Sidebar
          soal={soalTryOut}
          nomor={nomor}
          jawabanUser={jawabanUser}
          ragu={ragu}
          setNomor={setNomor}
        />

        <div className="card">
          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${((nomor + 1) / soalTryOut.length) * 100}%`,
              }}
            />
          </div>

          <Timer
  key={percobaan}
  menit={20}
  onTimeUp={() => {
    setSelesai(true);
  }}
/>

          <h2>
            Soal {nomor + 1} / {soalTryOut.length}
          </h2>

          <h3>{soal.pertanyaan}</h3>

          {soal.pilihan.map((item, index) => {
            const sudahMenjawab = jawabanUser[nomor] !== null;
            const jawabanBenar = index === soal.jawaban;
            const jawabanDipilih = jawabanUser[nomor] === index;

            let kelas = "option";

            if (sudahMenjawab && jawabanBenar) {
              kelas += " correct";
            } else if (sudahMenjawab && jawabanDipilih) {
              kelas += " wrong";
            }

            return (
              <button
                key={index}
                className={kelas}
                onClick={() => pilih(index)}
              >
                {item}
              </button>
            );
          })}

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <button
              className="menu-btn"
              onClick={toggleRagu}
              style={{
                background: ragu[nomor] ? "#facc15" : "",
                color: ragu[nomor] ? "#000" : "",
              }}
            >
              {ragu[nomor] ? "⭐ Ditandai" : "🤔 Ragu-ragu"}
            </button>

            <button
              className="menu-btn"
              onClick={prevSoal}
              disabled={nomor === 0}
            >
              ← Sebelumnya
            </button>

            <button className="menu-btn" onClick={nextSoal}>
              {nomor === soalTryOut.length - 1
                ? "Lihat Hasil"
                : "Berikutnya →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TryOutQuiz;