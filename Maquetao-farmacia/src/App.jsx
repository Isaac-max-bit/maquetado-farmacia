import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import BuscarClientePage from './pages/BuscarClientePage.jsx';
import BuscarProductoPage from './pages/BuscarProductoPage.jsx';
import ListadoProductosPage from './pages/ListadoProductosPage.jsx';
import ListadoMedicamentosPage from './pages/ListadoMedicamentosPage.jsx';
import DetalleProductoPage from './pages/DetalleProductoPage.jsx';
import DetalleMedicamentoPage from './pages/DetalleMedicamentoPage.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar-cliente" element={<BuscarClientePage />} />
        <Route path="/buscar-producto" element={<BuscarProductoPage />} />
        <Route path="/productos" element={<ListadoProductosPage />} />
        <Route path="/producto-detalle/:productoId" element={<DetalleProductoPage />} />
        <Route path="/medicamentos" element={<ListadoMedicamentosPage />} />
        <Route path="/medicamento-detalle/:medicamentoId" element={<DetalleMedicamentoPage />} />
        <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
