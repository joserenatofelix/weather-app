import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Corrigido o caminho da importação
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
