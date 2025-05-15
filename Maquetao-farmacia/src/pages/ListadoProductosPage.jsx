import React, { useState } from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';
import amoxicilinaProductoImage from '../assets/amoxicilina.jpg'; // Asegúrate de tener estas imágenes en tu carpeta assets
import ciprofloxacinoImage from '../assets/ciprofloxacina.jpg';
import doxiciclinaImage from '../assets/doxiclina.png';
import clindamicinaImage from '../assets/clindamicina.jpg';
import azitromicinaImage from '../assets/azitromicina.jpg';
import metronidazolImage from '../assets/metronidazol.png';

const sampleProductos = [
  { id: 1, name: "Amoxicilina", description: "Antibiótico de amplio espectro.", image: amoxicilinaProductoImage },
  { id: 2, name: "Ciprofloxacino", description: "Antibiótico de la familia de las fluoroquinolonas.", image: ciprofloxacinoImage },
  { id: 3, name: "Doxiciclina", description: "Antibiótico de la familia de las tetraciclinas.", image: doxiciclinaImage },
  { id: 4, name: "Clindamicina", description: "Antibiótico utilizado para tratar infecciones bacterianas.", image: clindamicinaImage },
  { id: 5, name: "Azitromicina", description: "Antibiótico macrólido.", image: azitromicinaImage },
  { id: 6, name: "Metronidazol", description: "Antibiótico y antiparasitario.", image: metronidazolImage },
];

function ListadoProductosPage() {
  const [productoDetalle, setProductoDetalle] = useState(null);

  const mostrarDetalle = (producto) => {
    setProductoDetalle(producto);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Listado de Productos</h1>
      <WireFrameButton to="/" style={{ marginBottom: '20px' }}>Volver al Inicio</WireFrameButton>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {sampleProductos.map((producto) => (
          <div key={producto.id} style={{ border: '1px solid black', padding: '10px', width: '150px', textAlign: 'center' }}>
            <img src={producto.image} alt={producto.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <WireFrameButton onClick={() => mostrarDetalle(producto)}>Ver Detalles</WireFrameButton>
          </div>
        ))}
      </div>

      {productoDetalle && (
        <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px' }}>
          <h2>Detalles de {productoDetalle.name}</h2>
          <img src={productoDetalle.image} alt={productoDetalle.name} style={{ maxWidth: '300px', height: 'auto', marginBottom: '20px' }} />
          <p><strong>Descripción:</strong> {productoDetalle.description}</p>
          {/* Puedes agregar más detalles aquí */}
          <WireFrameButton onClick={() => setProductoDetalle(null)}>Cerrar Detalles</WireFrameButton>
        </div>
      )}
    </div>
  );
}

export default ListadoProductosPage;