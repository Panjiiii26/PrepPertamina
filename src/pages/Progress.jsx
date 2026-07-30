import Header from "../components/Header";

function Progress() {
  const riwayat =
    JSON.parse(localStorage.getItem("progress")) || [];

  const totalTryOut = riwayat.length;

  const nilaiTertinggi =
    totalTryOut > 0
      ? Math.max(...riwayat.map((item) => item.nilai))
      : 0;

  const rataRata =
    totalTryOut > 0
      ? Math.round(
          riwayat.reduce(
            (total, item) => total + item.nilai,
            0
          ) / totalTryOut
        )
      : 0;

  return (
    <>
      <Header />

      <div className="quiz-container">
        <div className="card">
          <h1>📊 Progress Belajar</h1>

          <h3>Total Try Out</h3>
          <h2>{totalTryOut}</h2>

          <h3>Nilai Tertinggi</h3>
          <h2>{nilaiTertinggi}%</h2>

          <h3>Rata-rata Nilai</h3>
          <h2>{rataRata}%</h2>
        </div>
      </div>
    </>
  );
}

export default Progress;