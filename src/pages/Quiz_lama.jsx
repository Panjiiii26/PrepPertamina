import { useState } from "react";
import soal from "../data/soal";
import "./Quiz.css";
import Timer from "../components/Timer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Quiz() {
  const [nomor, setNomor] = useState(0);
  const [jawabanUser, setJawabanUser] = useState(
    Array(soal.length).fill(null)
  );
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);

  const data = soal[nomor];

  function pilih(index) {
    if (jawabanUser[nomor] !== null) return;

    const baru = [...jawabanUser];
    baru[nomor] = index;
    setJawabanUser(baru);

    if (index === data.jawaban) {
      setSkor((prev) => prev + 1);
    }
  }

  function nextSoal() {
    if (nomor < soal.length - 1) {
      setNomor((prev) => prev + 1);
    } else {
      setSelesai(true);
    }
  }

  function prevSoal() {
    if (nomor > 0) {
      setNomor((prev) => prev - 1);
    }
  }

  if (selesai) {
    const persen = Math.round((skor / soal.length) * 100);

    let grade = "D";
    let warna = "#E30613";

    if (persen >= 90) {
      grade = "A";
      warna = "#00A859";
    } else if (persen >= 80) {
      grade = "B";
      warna = "#005BAC";
    } else if (persen >= 70) {
      grade = "C";
      warna = "#F5A623";
    }

   return (
  <>
    <Header />

    <div className="quiz-container">
        <div className="card result">
          <h1>🎉 Quiz Selesai</h1>

          <h3>Skor Kamu</h3>

          <h2>
            {skor} / {soal.length}
          </h2>

          <h1
            style={{
              color: warna,
              fontSize: "70px",
            }}
          >
            {persen}%
          </h1>

          <h2>🏆 Grade {grade}</h2>

          </button>
            className="next-btn"
            onClick={() => {
              setNomor(0);
              setJawabanUser(Array(soal.length).fill(null));
              setSkor(0);
              setSelesai(false);
            }}
          >
            🔄 Ulangi Quiz
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="quiz-container">

      <Sidebar
        soal={soal}
        nomor={nomor}
        jawabanUser={jawabanUser}
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

        <Timer menit={20} />

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginTop: "10px",
          }}
        >
          Progress:{" "}
          {Math.round(((nomor + 1) / soal.length) * 100)}%
        </p>

        <h2>
          Soal {nomor + 1} / {soal.length}
        </h2>

        <h3>{data.pertanyaan}</h3>

        {data.pilihan.map((item, index) => (
          <button
            key={index}
            onClick={() => pilih(index)}
            className={
              jawabanUser[nomor] === index
                ? "option selected"
                : "option"
            }
          >
            {item}
          </button>
        ))}

        {jawabanUser[nomor] !== null && (
          <>
            <hr />

            {jawabanUser[nomor] === data.jawaban ? (
              <h3 style={{ color: "green" }}>
                ✅ Jawaban Benar
              </h3>
            ) : (
              <h3 style={{ color: "red" }}>
                ❌ Jawaban Salah
              </h3>
            )}

            <p>
              <b>Pembahasan:</b>
            </p>

            <p>{data.pembahasan}</p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                className="next-btn"
                onClick={prevSoal}
                disabled={nomor === 0}
                style={{
                  background:
                    nomor === 0 ? "#999" : "#666",
                }}
              >
                ← Sebelumnya
              </button>

              <button
                className="next-btn"
                onClick={nextSoal}
              >
                {nomor === soal.length - 1
                  ? "Lihat Hasil"
                  : "Berikutnya →"}
              </button>
            </div>
          </>
        )}      </div>
    </div>
  );
}

export default Quiz;
