import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner';
import Inicio from './components/Inicio';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);
