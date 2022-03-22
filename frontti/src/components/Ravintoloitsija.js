import React, { useState } from 'react';
import './Ravintoloitsija.css'


export default function Ravintoloitsija() {
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

    const [Nimi, setNimi] = useState("")
    const [Osoite, setOsoite] = useState("")
    const [Aukiolo, setAukiolo] = useState("")
    const [Kuva, setKuva] = useState("")
    const [Tyyppi, setTyyppi] = useState("")
    const [Hintataso, setHintataso] = useState("")
    const [Arviointi, setArviointi] = useState("")
    const [RavintoloitsijaID, setRavintoloitsijaID] = useState("")

    const [tuotenimi, setTuotenimi] = useState("")
    const [kuvaus, setKuvaus] = useState("")
    const [hinta, setHinta] = useState("")
    const [tuotekuva, setTuotekuva] = useState("")
    const [ravintolaID, setRavintolaID] = useState("")
    
  return (
        <div>
            <div className="ravintolaCont">
                <h2 className="luonti">Lisää ravintola</h2>
                    
                    <div className="inputDesc"> Nimi <br></br> <input value={Nimi} onChange={(event) => setNimi(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Osoite <input value={Osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Aukiolo <input value={Aukiolo} onChange={(event) => setAukiolo(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Kuva URL <input value={Kuva} onChange={(event) => setKuva(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Tyyppi <input value={Tyyppi} onChange={(event) => setTyyppi(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Hintataso <input value={Hintataso} onChange={(event) => setHintataso(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Arviointi <input value={Arviointi} onChange={(event) => setArviointi(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Ravintoloitsija ID <input value={RavintoloitsijaID} onChange={(event) => setRavintoloitsijaID(event.currentTarget.value)} type="text"/></div>
        
                        <button className="saveNappi"onClick={()=>uusiRavintola({
                            Nimi,Osoite,Aukiolo,Kuva,Tyyppi,Hintataso,Arviointi,RavintoloitsijaID
                        })}>Tallenna</button>
                        
            </div>

            <div className="tuoteCont">
                <h2 className="luonti">Lisää tuote</h2>
                        <div className="inputDesc"> Nimi <br></br><input value={tuotenimi} onChange={(event) => setTuotenimi(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Kuvaus <input value={kuvaus} onChange={(event) => setKuvaus(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Hinta <input value={hinta} onChange={(event) => setHinta(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Kuva URL <input value={tuotekuva} onChange={(event) => setTuotekuva(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Ravintola ID <input value={ravintolaID} onChange={(event) => setRavintolaID(event.currentTarget.value)} type="text"/></div>

                            <button className="saveNappi" onClick={()=>uusiTuote({
                                tuotenimi,kuvaus,hinta,tuotekuva,ravintolaID
                            })}>Tallenna</button>
            </div>    
        </div>

  )
}
