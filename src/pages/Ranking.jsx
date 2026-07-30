import Header from "../components/Header";

function Ranking() {
  const riwayat =
    JSON.parse(localStorage.getItem("progress")) || [];

  const ranking = [...riwayat]
    .sort((a, b) => b.nilai - a.nilai)
    .slice(0, 10);

  return (
    <>
      <Header />

      <div className="quiz-container">
        <div className="card">
          <h1>🏆 Ranking</h1>

          {ranking.length === 0 ? (
            <p>Belum ada data.</p>
          ) : (
            ranking.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <span>#{index + 1}</span>

                <span>{item.nilai}%</span>

                <span>{item.tanggal}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Ranking;