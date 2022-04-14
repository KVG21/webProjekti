import React from 'react'

import Etusivu from './components/Frontpage'
import Ravintoloitsija from './components/ManageRestaurants';
import Rekisteroityminen from './components/Rekisteroityminen'
import KirjautuminenSivu from './components/KirjautuminenSivu'

import Receipt from './components/Receipt'
import ProductView from './components/ProductView';
import Tuotehallinta from './components/ManageProducts';
import Asiakas from './components/ManageAccount';

import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Uloskirjautuminen from './components/Uloskirjautuminen';

function App() {

  return (
    <BrowserRouter>
        <div>   
        <Routes>
            <Route path="/" element={ <KirjautuminenSivu/> }/>
            <Route path="/Etusivu" element={ <Etusivu/> }/>
            <Route path="/Uloskirjautuminen" element={<Uloskirjautuminen/>}/>
            <Route path="/Rekisteroityminen" element={ <Rekisteroityminen/> }/>

            <Route path="/ProductView/:idRavintola" element={ <ProductView/> }/>


            <Route path="/Receipt" element= { <Receipt/> }/>

            <Route path="/Ravintoloitsija" element={<Ravintoloitsija />} />

            <Route path="/Tuotehallinta/:idRavintola" element={ <Tuotehallinta/> } />
            <Route path="/Asiakas/:idAsiakas" element={ <Asiakas/> }/>
                

        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

