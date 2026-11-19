import { useState } from "react";
function App() {
  // State React 
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");
  function handleTambah() {
    setCount((prev) => prev + 1);
  }
  return (
    <div className="text-center text-primary p-4">
      <h2>Latihan Dasar React: State vs Variabel biasa</h2>

      <div className="my-3">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Masukan Nama....."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <p className="mt-2">Halo, {nama || "Pengunjung"}!</p>
      </div>

      <p>
        <strong>State (count): </strong>{count}
      </p>
      <button className="btn btn-outline-primary" onClick={handleTambah}>
        Tambah (+1)
      </button>
    </div>
  );
}

export default App;