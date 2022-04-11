import React from 'react'
import Etusivu from './components/Etusivu'
import Ravintoloitsija from './components/Ravintoloitsija';
import Rekisteroityminen from './components/Rekisteroityminen'
import Receipt from './components/Receipt'
import Tuotesivu from './components/Tuotesivu';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <div>   
        <Routes>
            <Route path="/" element={ <Rekisteroityminen/> }/>
            <Route path="/Etusivu" element={ <Etusivu/> }/>

            <Route path="/Tuotesivu" element={ <Tuotesivu/> }>
                <Route path=":id" element={ <Tuotesivu /> }/>
            </Route>
            <Route path="/Receipt" element= { <Receipt/> }/>
            <Route path="/Ravintoloitsija" element={<Ravintoloitsija />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

