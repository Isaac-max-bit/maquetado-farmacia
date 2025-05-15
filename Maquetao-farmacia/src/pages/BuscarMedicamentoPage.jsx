import React, { useState } from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';


function BuscarMedicamentoPage() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Aquí puedes implementar la lógica para buscar medicamentos
    console.log('Buscando medicamento:', query);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Buscar Medicamento</h1>
      <input
        type="text"
        placeholder="Nombre del medicamento"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <WireFrameButton onClick={handleSearch}>Buscar</WireFrameButton>
    </div>
  );
}

export default BuscarMedicamentoPage;
