import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Category from "../components/Category";

function Home() {
 const [aktif, setAktif] = useState("TWK");
  return (
    <div className="home">

      <div className="home-card">

        <h1>🚀 PrepPertamina</h1>

        <p>
          Belajar & Try Out Seleksi Pertamina
        </p>

        <Category
          aktif={aktif}
          setAktif={setAktif}
        />

<Link to="/dashboard">
  <button className="menu-btn">
    📊 Dashboard
  </button>
</Link>

<Link
  to="/quiz"
  state={{ kategori: aktif }}
>
  <button className="menu-btn">
    📚 Mulai Belajar
  </button>
</Link>

<Link to="/tryout">
  <button className="menu-btn">
    📝 Try Out
  </button>
</Link>

<Link to="/progress">
  <button className="menu-btn">
    📊 Progress
  </button>
</Link>

<Link to="/ranking">
  <button className="menu-btn">
    🏆 Ranking
  </button>
</Link>
        <p className="version">
          Version 1.0
        </p>

      </div>

    </div>
  );
}

export default Home;