import "../styles/styles.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';

function BuscarProductoPage() {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    // Verificar si el producto existe en la lista
    const productos = [
      "Amoxicilina",
      "Ciprofloxacino",
      "Doxiciclina",
      "Clindamicina",
      "Azitromicina",
      "Metronidazol",
    ];

    if (productos.includes(nombre)) {
      navigate('/productos'); // Redirige a la lista de productos si existe
    } else {
      setError('Producto no encontrado. Por favor, verifica el nombre e intenta nuevamente.');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Buscar Producto</h1>
      <form onSubmit={handleBuscar}>
        <input
          type="text"
          placeholder="Ingresa el nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ width: '300px', padding: '10px', marginRight: '10px' }}
        />
        <WireFrameButton type="submit">Buscar</WireFrameButton>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
    </div>
  );
}

export default BuscarProductoPage;
