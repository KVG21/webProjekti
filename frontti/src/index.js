import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import Ravintoloitsija from './components/Ravintoloitsija';
import Tuotesivu from './components/Tuotesivu';
import reportWebVitals from './reportWebVitals';
import Rekisteroityminen from './components/Rekisteroityminen';
import Kirjautuminen from './components/Kirjautuminen';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Ravintoloitsija" element={<Ravintoloitsija />} />
      <Route path="Rekisteroityminen" element={<Rekisteroityminen />} />
      <Route path="Kirjautuminen" element={<Kirjautuminen />} />
      <Route path="Tuotesivu" element={<Tuotesivu />}/>
    </Routes>
  </BrowserRouter>  ,
  document.getElementById('root')
);

reportWebVitals();

