import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';

function BuscarClientePage() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para buscar el cliente
    navigate('/medicamentos'); // Redirige a la lista de medicamentos
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Buscar Cliente</h1>
      <form onSubmit={handleBuscar}>
        <input
          type="text"
          placeholder="Ingresa el nombre del cliente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ width: '300px', padding: '10px', marginRight: '10px' }} // Ajusta el ancho y el padding
        />
        <WireFrameButton type="submit">Buscar</WireFrameButton>
      </form>
    </div>
  );
}

export default BuscarClientePage;
