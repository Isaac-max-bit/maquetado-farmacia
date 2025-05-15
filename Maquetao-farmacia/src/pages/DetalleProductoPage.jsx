import React from 'react';
import { useParams } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';


const getProductoData = (id) => {
  const productos = [
    { id: 1, name: "Producto A", description: "Descripción del producto A.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto B", description: "Descripción del producto B.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto C", description: "Descripción del producto C.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Producto D", description: "Descripción del producto D.", image: "https://via.placeholder.com/150" },
  ];
  return productos.find(p => p.id === parseInt(id));
};

function DetalleProductoPage() {
  let { productoId } = useParams();
  const productoData = getProductoData(productoId);

  if (!productoData) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>{productoData.name}</h1>
      <img src={productoData.image} alt={productoData.name} style={{ width: '150px', height: 'auto' }} />
      <p><strong>Descripción:</strong> {productoData.description}</p>
      <WireFrameButton to="/productos">Volver a la lista de Productos</WireFrameButton>
    </div>
  );
}

export default DetalleProductoPage;
