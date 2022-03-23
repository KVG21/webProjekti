import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import Ravintoloitsija from './components/Ravintoloitsija';
import Tuotesivu from './components/Tuotesivu';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Ravintoloitsija" element={<Ravintoloitsija />} />
      <Route path="Tuotesivu" element={<Tuotesivu />}/>
    </Routes>
  </BrowserRouter>  ,
  document.getElementById('root')
);

reportWebVitals();

