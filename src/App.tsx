import React, { useState } from 'react';
import './App.css';

function App() {
  const [vnev, setVnev] = useState('');
  const [vcim, setVcim] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://merlinvizsga.hu/api/pizza/vevo', { vnev, vcim });
      alert('Sikeresen rögzítve!');
      // Reset form
      setVnev('');
      setVcim('');
    } catch (error) {
      console.error('Hiba történt a vevő rögzítésekor:', error);
      alert('Hiba történt a vevő rögzítésekor.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Új vevő rögzítése</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="vnev" className="form-label">Vevő neve </label>
          <input
            type="text"
            className="form-control"
            id="vnev"
            value={vnev}
            onChange={(e) => setVnev(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vcim" className="form-label">Vevő címe </label>
          <input
            type="text"
            className="form-control"
            id="vcim"
            value={vcim}
            onChange={(e) => setVcim(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-4">Rögzít</button>
      </form>
    </div>
  );
}

export default App;
