/*Maijan etusivut*/

import './ravintolasivu.js';
import './Etusivu.css';
import Tuotesivu from './components/Tuotesivu'
import React, { useEffect } from "react";
import { useState } from "react";
import Searchbar from './components/Searchbar'
import Ravintoloitsija from './components/Ravintoloitsija'

function Etusivu() {

    const [ ravintola, setravintola ] = useState([]);
    useEffect (() => {});

    const uusiRavintola = (item) => {
        fetch(`http://localhost:3001/ravintola`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        Nimi: item.Nimi,
        Osoite: item.Osoite,
        Aukiolo: item.Aukiolo,
        Kuva: item.Kuva,
        Tyyppi: item.Tyyppi,
        Hintataso: item.Hintataso,
        Arviointi: item.Arviointi,
        RavintoloitsijaID: item.RavintoloitsijaID  
        })})
    }

    const uusiTuote = (item) => {
        fetch(`http://localhost:3001/tuote`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        Nimi: item.tuotenimi,
        Kuvaus: item.kuvaus,
        Hinta: item.hinta,
        Kuva: item.tuotekuva,
        Ravintola_idRavintola: item.ravintolaID,    
        })})
    }
    

    return (
        <div>
        <Ravintoloitsija 
        uusiTuote={uusiTuote}
        uusiRavintola={uusiRavintola}/>
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
