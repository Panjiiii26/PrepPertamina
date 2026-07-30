import Header from "../components/Header";
import { useEffect, useState } from "react";
import ScoreChart from "../components/ScoreChart";

function Dashboard() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("progress")) || [];

    setProgress(data);
  }, []);

  const totalTryOut = progress.length;

  const nilaiTertinggi =
    progress.length > 0
      ? Math.max(...progress.map((item) => item.nilai))
      : 0;

  const rataRata =
    progress.length > 0
      ? Math.round(
          progress.reduce(
            (total, item) => total + item.nilai,
            0
          ) / progress.length
        )
      : 0;

  return (
    <>
      <Header />

      <div className="quiz-container">
        <div className="card">

          <h1>👋 Selamat Datang</h1>

          <br />

          <h2>📊 Dashboard</h2>

          <hr />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
    gap: "20px",
    marginTop: "25px",
  }}
>

  <div className="stat-card">
    <h3>📝 Try Out</h3>
    <h1>{totalTryOut}</h1>
  </div>

  <div className="stat-card">
    <h3>🏆 Tertinggi</h3>
    <h1>{nilaiTertinggi}%</h1>
  </div>

  <div className="stat-card">
    <h3>📈 Rata-rata</h3>
    <h1>{rataRata}%</h1>
  </div>

</div>
<hr />

<h2>📈 Grafik Perkembangan Nilai</h2>

<ScoreChart progress={progress} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;