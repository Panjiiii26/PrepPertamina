import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import verbal from "../data/kategori/verbal";
import logika from "../data/kategori/logika";
import hsse from "../data/kategori/hsse";
import pertamina from "../data/kategori/pertamina";
import twk from "../data/kategori/twk";
import tiu from "../data/kategori/tiu";
import tkb from "../data/kategori/tkb";
import manajemen from "../data/kategori/manajemen";
import english from "../data/kategori/english";
import sjt from "../data/kategori/sjt";

import "./Quiz.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timer from "../components/Timer";

function Quiz() {
  const location = useLocation();
  const kategori = location.state?.kategori || "Verbal";

  console.log("Kategori =", kategori);

  const soal = useMemo(() => {
   switch (kategori) {
  case "Verbal":
    return verbal;

  case "Numerik":
    return tiu;

  case "Logika":
    return logika;

  case "Energi & Migas":
    return pertamina;

  case "HSSE":
    return hsse;

  case "Teknik Dasar":
    return tkb;

  case "Manajemen Proyek":
  return manajemen;

  case "Wawasan Umum":
  return twk;

  case "Bahasa Inggris":
  return english;

  case "SJT":
  return sjt;


  default:
    return [];
}
  }, [kategori]);

  const [nomor, setNomor] = useState(0);
  const [jawabanUser, setJawabanUser] = useState(
    Array(soal.length).fill(null)
  );
  const [skor, setSkor] = useState(0);
  const [ragu, setRagu] = useState(Array(soal.length).fill(false));
  const [selesai, setSelesai] = useState(false);

  // Reset data jika pengguna membuka kategori quiz lain
  useEffect(() => {
    setNomor(0);
    setJawabanUser(Array(soal.length).fill(null));
    setSkor(0);
    setRagu(Array(soal.length).fill(false));
    setSelesai(false);
  }, [soal]);

  const data = soal[nomor];

  function pilih(index) {
    // Jawaban tidak dapat diubah setelah memilih
    if (jawabanUser[nomor] !== null) return;

    const jawabanBaru = [...jawabanUser];
    jawabanBaru[nomor] = index;
    setJawabanUser(jawabanBaru);

    if (index === data.jawaban) {
      setSkor((skorSebelumnya) => skorSebelumnya + 1);
    }
  }

  function nextSoal() {
    if (nomor < soal.length - 1) {
      setNomor((nomorSebelumnya) => nomorSebelumnya + 1);
    } else {
      setSelesai(true);
    }
  }

  function prevSoal() {
    if (nomor > 0) {
      setNomor((nomorSebelumnya) => nomorSebelumnya - 1);
    }
  }

  function toggleRagu() {
    const raguBaru = [...ragu];
    raguBaru[nomor] = !raguBaru[nomor];
    setRagu(raguBaru);
  }

  function ulangiQuiz() {
    setNomor(0);
    setJawabanUser(Array(soal.length).fill(null));
    setSkor(0);
    setRagu(Array(soal.length).fill(false));
    setSelesai(false);
  }

  if (!soal.length || !data) {
    return (
      <>
        <Header />
        <div className="quiz-container">
          <div className="card">
            <h2>Soal untuk kategori ini belum tersedia.</h2>
          </div>
        </div>
      </>
    );
  }

  if (selesai) {
    const persen = Math.round((skor / soal.length) * 100);

    return (
      <>
        <Header kategori={kategori} />

        <div className="quiz-container">
          <div className="card result">
            <h1>🎉 Quiz Selesai</h1>
            <h2>
              {skor} / {soal.length}
            </h2>
            <h1>{persen}%</h1>

            <button className="next-btn" onClick={ulangiQuiz}>
              🔄 Ulangi Quiz
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header kategori={kategori} />

      <div className="quiz-container">
        <Sidebar
          soal={soal}
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
                width: `${((nomor + 1) / soal.length) * 100}%`,
              }}
            />
          </div>

          <Timer key={kategori} menit={20} />

          <h2>
            Soal {nomor + 1} / {soal.length}
          </h2>

          <h3>{data.pertanyaan}</h3>

          {data.pilihan.map((item, index) => (
            <button
              key={index}
              onClick={() => pilih(index)}
              className={`option
                ${
                  jawabanUser[nomor] !== null && index === data.jawaban
                    ? "correct"
                    : ""
                }
                ${
                  jawabanUser[nomor] === index && index !== data.jawaban
                    ? "wrong"
                    : ""
                }
                ${jawabanUser[nomor] === index ? "selected" : ""}`}
            >
              {item}
            </button>
          ))}

          {jawabanUser[nomor] !== null && (
            <>
              <hr />

              {jawabanUser[nomor] === data.jawaban ? (
                <h3 style={{ color: "green" }}>✅ Jawaban Benar</h3>
              ) : (
                <h3 style={{ color: "red" }}>❌ Jawaban Salah</h3>
              )}

              <p>
                <b>Pembahasan:</b>
              </p>
              <p>{data.pembahasan}</p>

              <div
                className="quiz-actions"
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="next-btn"
                  onClick={toggleRagu}
                  style={{
                    background: ragu[nomor] ? "#facc15" : "#888",
                    color: ragu[nomor] ? "#000" : "#fff",
                  }}
                >
                  {ragu[nomor] ? "⭐ Ditandai" : "🤔 Ragu-ragu"}
                </button>

                <button
                  className="next-btn"
                  onClick={prevSoal}
                  disabled={nomor === 0}
                >
                  ← Sebelumnya
                </button>

                <button className="next-btn" onClick={nextSoal}>
                  {nomor === soal.length - 1
                    ? "Lihat Hasil"
                    : "Berikutnya →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;