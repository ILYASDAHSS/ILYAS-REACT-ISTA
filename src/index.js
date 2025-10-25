import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pratique from './pratique';
import CalculeAge from './age_calcule';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';
import Fotter from './Fotter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <App />
      <Pratique />
      <CalculeAge />
      <Fotter />
    </BrowserRouter>
  </React.StrictMode>
);
