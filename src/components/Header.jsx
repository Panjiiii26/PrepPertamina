import "./Header.css";

function Header({ kategori }) {
  return (
    <header className="header">
      <h2>⛽ PrepPertamina</h2>

      <div className="header-right">
        <span>📚 Belajar {kategori}</span>
      </div>
    </header>
  );
}

export default Header;