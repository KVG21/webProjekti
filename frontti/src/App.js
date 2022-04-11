import React from 'react'

import Etusivu from './components/Etusivu'
import Ravintoloitsija from './components/ManageRestaurants';
import Rekisteroityminen from './components/Rekisteroityminen'
import Receipt from './components/Receipt'
import Tuotesivu from './components/Tuotesivu';
import Tuotehallinta from './components/ManageProducts';

import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <div>   
        <Routes>
            <Route path="/" element={ <Rekisteroityminen/> }/>

            <Route path="/Etusivu" element={ <Etusivu/> }/>

            <Route path="/Tuotesivu/:id" element={ <Tuotesivu/> }/>


            <Route path="/Receipt" element= { <Receipt/> }/>

            <Route path="/Ravintoloitsija" element={<Ravintoloitsija />} />

            <Route path="/Tuotehallinta/:idRavintola" element={ <Tuotehallinta/> } />
                

        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

