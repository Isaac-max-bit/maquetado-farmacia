import React, { useState } from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';
import paracetamolImage from '../assets/paracetamol.jpg';
import ibuprofenoImage from '../assets/ibuprofeno-new.jpg';
import amoxicilinaImage from '../assets/amoxicilina.jpg';
import aspirinaImage from '../assets/aspirina.jpg';
import loratadinaImage from '../assets/loratadina.jpg';
import omeprazolImage from '../assets/omeprazol.jpg';

const sampleMedicamentos = [
  { id: 1, name: "Paracetamol", description: "Analgésico y antipirético.", image: paracetamolImage },
  { id: 2, name: "Ibuprofeno", description: "Antiinflamatorio no esteroideo.", image: ibuprofenoImage },
  { id: 3, name: "Amoxicilina", description: "Antibiótico de amplio espectro.", image: amoxicilinaImage },
  { id: 4, name: "Aspirina", description: "Antiinflamatorio y analgésico.", image: aspirinaImage },
  { id: 5, name: "Loratadina", description: "Antihistamínico.", image: loratadinaImage },
  { id: 6, name: "Omeprazol", description: "Inhibidor de la bomba de protones.", image: omeprazolImage },
];

function ListadoMedicamentosPage() {
  const [medicamentoDetalle, setMedicamentoDetalle] = useState(null);

  const mostrarDetalle = (medicamento) => {
    setMedicamentoDetalle(medicamento);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Listado de Medicamentos</h1>
      <WireFrameButton to="/" style={{ marginBottom: '20px' }}>Volver al Inicio</WireFrameButton>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {sampleMedicamentos.map((medicamento) => (
          <div key={medicamento.id} style={{ border: '1px solid black', padding: '10px', width: '150px', textAlign: 'center' }}>
            <img src={medicamento.image} alt={medicamento.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{medicamento.name}</h2>
            <p>{medicamento.description}</p>
            <WireFrameButton onClick={() => mostrarDetalle(medicamento)}>Ver Detalles</WireFrameButton>
          </div>
        ))}
      </div>

      {medicamentoDetalle && (
        <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px' }}>
          <h2>Detalles de {medicamentoDetalle.name}</h2>
          <img src={medicamentoDetalle.image} alt={medicamentoDetalle.name} style={{ maxWidth: '300px', height: 'auto', marginBottom: '20px' }} />
          <p><strong>Descripción:</strong> {medicamentoDetalle.description}</p>
          {/* Puedes agregar más detalles aquí */}
          <WireFrameButton onClick={() => setMedicamentoDetalle(null)}>Cerrar Detalles</WireFrameButton>
        </div>
      )}
    </div>
  );
}

export default ListadoMedicamentosPage;