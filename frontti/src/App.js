import React from 'react'
import Etusivu from './components/Etusivu'
import Ravintoloitsija from './components/Ravintoloitsija';
import Tuotesivu from './components/Tuotesivu';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <div>   
        <Routes>
            <Route path="/Etusivu" element={ <Etusivu/> }/>

            <Route path="/Tuotesivu" element={ <Tuotesivu/> }>
                <Route path=":id" element={ <Tuotesivu /> }/>
            </Route>

            <Route path="/Ravintoloitsija" element={<Ravintoloitsija />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

