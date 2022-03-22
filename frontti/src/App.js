import './App.css';
import React from "react";

import Ravintoloitsija from './components/Ravintoloitsija'

function App() {

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
        <div className="App">
        <Ravintoloitsija 
        uusiTuote={uusiTuote}
        uusiRavintola={uusiRavintola}/>
        </div>

    );

}

export default App;
