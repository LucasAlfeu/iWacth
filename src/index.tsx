import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './components/Inicio';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Bem vindo ao futuro site de filmes</h1>
    <Inicio />
  </React.StrictMode>
);
