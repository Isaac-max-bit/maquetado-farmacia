import React from 'react';
import { useParams } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';


const getMedicamentoData = (id) => {
  const medicamentos = [
    { id: 1, name: "Paracetamol", description: "Analgésico y antipirético.", dosage: "500mg cada 8 horas.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Ibuprofeno", description: "Antiinflamatorio no esteroideo.", dosage: "400mg cada 6 horas.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Amoxicilina", description: "Antibiótico de amplio espectro.", dosage: "250mg cada 8 horas.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Aspirina", description: "Antiinflamatorio y analgésico.", dosage: "500mg cada 8 horas.", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Loratadina", description: "Antihistamínico.", dosage: "10mg una vez al día.", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Omeprazol", description: "Inhibidor de la bomba de protones.", dosage: "20mg una vez al día.", image: "https://via.placeholder.com/150" },
  ];
  return medicamentos.find(m => m.id === parseInt(id));
};

function DetalleMedicamentoPage() {
  let { medicamentoId } = useParams();
  const medicamentoData = getMedicamentoData(medicamentoId);

  if (!medicamentoData) {
    return <h2>Medicamento no encontrado</h2>;
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>{medicamentoData.name}</h1>
      <img src={medicamentoData.image} alt={medicamentoData.name} style={{ width: '150px', height: 'auto' }} />
      <p><strong>Descripción:</strong> {medicamentoData.description}</p>
      <p><strong>Dosificación:</strong> {medicamentoData.dosage}</p>
      <WireFrameButton to="/medicamentos">Volver a la lista de Medicamentos</WireFrameButton>
    </div>
  );
}

export default DetalleMedicamentoPage;
