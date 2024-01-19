import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// ROOT ES LA RAIZ DE LA APLICACION QUE SE MONTA EN EL DIV#ROOT
const root = createRoot(container);

// RENDERIZA ALGO EN LA RAIZ DE LA APLICACION
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
