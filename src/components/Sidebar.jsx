import "./Sidebar.css";
function Sidebar({
  soal,
  nomor,
  jawabanUser,
  setNomor,
}) {
  return (
    <div className="sidebar">

      <h3>Daftar Soal</h3>

      <p>
        Dijawab :
        {" "}
        {jawabanUser.filter(j => j !== null).length}
        {" / "}
        {soal.length}
      </p>

      <div className="number-grid">

        {soal.map((item, index) => (

          <button
            key={index}
            onClick={() => setNomor(index)}
            className={
              nomor === index
                ? "nomor aktif"
                : jawabanUser[index] !== null
                ? "nomor selesai"
                : "nomor"
            }
          >
            {index + 1}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;