import React from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';


function HomePage() {
  return (
    <div style={{ padding: '20px 40px' }}>
      <h1 style={{ textAlign: 'center' }}>Bienvenido a la Gestión de Medicamentos</h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <WireFrameButton to="/buscar-cliente" style={{ marginRight: '10px' }}>Buscar Cliente</WireFrameButton>
        <WireFrameButton to="/buscar-producto">Buscar Producto</WireFrameButton>
        <WireFrameButton to="/medicamentos" style={{ marginTop: '10px' }}>Listado de Medicamentos</WireFrameButton>
        <WireFrameButton to="/productos" style={{ marginTop: '10px' }}>Listado de Productos</WireFrameButton>
      </div>
    </div>
  );
}

export default HomePage;
