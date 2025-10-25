import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pratique from './pratique';
import CalculeAge from './age_calcule';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';
import Fotter from './Fotter';
import Weather_Fetcher from './Weather-Fetcher';
import { ThemeProvider } from './ThemeContext'; // import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <ThemeProvider>
        <Header />
        <App />
        <Pratique />
        <CalculeAge />
        <Weather_Fetcher />
        <Fotter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
