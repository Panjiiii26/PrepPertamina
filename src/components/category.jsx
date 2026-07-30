import kategori from "../data/kategori";

function Category({ aktif, setAktif }) {
  return (
    <div className="category">
      {kategori.map((item) => (
        <button
          key={item}
          onClick={() => setAktif(item)}
          className={aktif === item ? "active-category" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Category;