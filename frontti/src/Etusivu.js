/*Maijan etusivut*/

import './ravintolasivu.js';
import './Etusivu.css';
import Tuotesivu from './components/Tuotesivu'
import React, { useEffect } from "react";
import { useState } from "react";
import Searchbar from './components/Searchbar'

function Etusivu() {

    const [ ravintola, setravintola ] = useState([]);
    useEffect (() => {});

    const Tekonakyma = Tuotesivu //importtaa oma sivusi componentteista ja vaihda se tuohon niin pääset helposti muokkaamaan omaa sivua

    return (

        <div>
            <Tekonakyma/>
        </div>

        /*<div className = "etusivu">
           <Searchbar/>
            <div className='ravintolaContainer'>

                <div className='Items'>
                    <h1>Mäkkäri</h1>

            </div>
        </div>
        </div>*/
    );

}

export default Etusivu;
