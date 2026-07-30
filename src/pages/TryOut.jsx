import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function TryOut() {
  const [jumlah, setJumlah] = useState(25);

  return (
    <>
      <Header kategori="Try Out" />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <h1>📝 Try Out Pertamina</h1>

        <p>Pilih jumlah soal yang ingin dikerjakan.</p>

        <select
          value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
        >
          <option value={25}>25 Soal</option>
          <option value={50}>50 Soal</option>
          <option value={100}>100 Soal</option>
        </select>

        <br />
        <br />

        <Link
  to="/tryoutquiz"
  state={{ jumlah }}
>
  <button className="menu-btn">
    🚀 Mulai Try Out ({jumlah} Soal)
  </button>
</Link>

<br />
<br />

<Link to="/">
  <button className="menu-btn">
    ⬅ Kembali ke Home
  </button>
</Link>

      </div>
    </>
  );
}

export default TryOut;