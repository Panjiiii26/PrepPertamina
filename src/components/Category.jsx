import kategori from "../data/kategori";

function Category({ aktif, setAktif }) {
  return (
    <div className="category">
      {kategori.map((item) => (
        <button
          key={item.id}
          type="button"
          disabled={!item.siap}
          onClick={() => setAktif(item.id)}
          className={aktif === item.id ? "active-category" : ""}
        >
          {item.nama}
          {!item.siap && " — Segera hadir"}
        </button>
      ))}
    </div>
  );
}

export default Category;