import Menu from 'components/Menu';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Banner from './components/Banner';
import Inicio from './components/Inicio';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Menu />
    </RecoilRoot>
  </React.StrictMode>
);
