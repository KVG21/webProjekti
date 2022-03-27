import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Ravintoloitsija.css'


export default function Ravintoloitsija() {

    const [ravintola, setRavintola] = useState([])

    useEffect(async () => {
        const result = await fetch(`http://localhost:3001/ravintola`).then((res) => 
        res.json()
        )
        setRavintola(result)
        console.log(result)
    }, [])

    const poistaRavintola = (idRavintola) => {
        fetch(`http://localhost:3001/ravintola/${idRavintola}`, { method: 'DELETE'})
        console.log(idRavintola)
    }

    /* const muokkaaRavintola = (item, idRavintola) => {
        fetch(`http://localhost:3001/ravintola/${idRavintola}`, { method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
            nimi: item.nimi,
            osoite: item.osoite,
            aukiolo: item.aukiolo,
            kuva: item.kuva,
            tyyppi: item.tyyppi,
            hintataso: item.hintataso,
            arviointi: item.arviointi,
            asiakasID: item.asiakasID,
        })})
    }   */
    
    const uusiRavintola = (item) => {
        fetch(`http://localhost:3001/ravintola`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        nimi: item.nimi,
        osoite: item.osoite,
        aukiolo: item.aukiolo,
        kuva: item.kuva,
        tyyppi: item.tyyppi,
        hintataso: item.hintataso,
        arviointi: item.arviointi,
        asiakasID: item.asiakasID,  
        })})
    }

    const [tuote, setTuote] = useState([])

    useEffect(async () => {
        const result = await fetch(`http://localhost:3001/tuote`).then((res) => 
        res.json()
        )
        setTuote(result)
        console.log(result)
    }, [])

    const poistaTuote = (idTuote) => {
        fetch(`http://localhost:3001/tuote/${idTuote}`, { method: 'DELETE'})
        console.log(idTuote)
    }

    const uusiTuote = (item) => {
        fetch(`http://localhost:3001/tuote`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        kategoria: item.kategoria,
        nimi: item.tuotenimi,
        kuvaus: item.kuvaus,
        hinta: item.hinta,
        kuva: item.tuotekuva,
        ravintolaID: item.ravintolaID,    
        })})
    }


    const [nimi, setNimi] = useState("")
    const [osoite, setOsoite] = useState("")
    const [aukiolo, setAukiolo] = useState("")
    const [kuva, setKuva] = useState("")
    const [tyyppi, setTyyppi] = useState("")
    const [hintataso, setHintataso] = useState("")
    const [arviointi, setArviointi] = useState("")
    const [asiakasID, setAsiakasID] = useState("")

    const tyhjennaRavintola = () => {
        setNimi("")
        setOsoite("")
        setAukiolo("")
        setKuva("")
        setTyyppi("")
        setHintataso("")
        setArviointi("")
        setAsiakasID("")
    }
    const [kategoria, setKategoria] = useState("")
    const [tuotenimi, setTuotenimi] = useState("")
    const [kuvaus, setKuvaus] = useState("")
    const [hinta, setHinta] = useState("")
    const [tuotekuva, setTuotekuva] = useState("")
    const [ravintolaID, setRavintolaID] = useState("")

    const tyhjennaTuote = () => {
        setTuotenimi("")
        setKuvaus("")
        setHinta("")
        setTuotekuva("")
        setRavintolaID("")
    }

    
  return (
        <div>
            <div className="name">
            <nav className="navigointi">
            <button className="naviNappi"><Link className="naviNimi" to="/">Etusivu</Link></button>
            </nav> 
            </div>
            <div className="ravintolaCont">
                <h2 className="luonti">Lisää ravintola</h2>
                    
                    <div className="inputDesc"> Nimi <br></br> <input value={nimi} onChange={(event) => setNimi(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Osoite <input value={osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Aukiolo <input value={aukiolo} onChange={(event) => setAukiolo(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Kuva URL <input value={kuva} onChange={(event) => setKuva(event.target.value)} type="text"/></div>
                    
                    <div className="dropdown">
                        <p>Tyyppi</p>
                            <select id="raflaTyyppi" onChange={(event) => setTyyppi(event.currentTarget.value)}>
                                <option value="Buffet">Buffet</option>
                                <option value="Fast food">Fast food</option>
                                <option value="Fast casual">Fast casual</option>
                                <option value="Casual dining">Casual dining</option>
                                <option value="Fine dining">Fine dining</option>
                            </select>
                    </div>

                    <div className="dropdown">
                        <p>Hintataso</p>
                            <select id="raflaHinta" onChange={(event) => setHintataso(event.currentTarget.value)}>
                                <option value="€">€</option>
                                <option value="€€">€€</option>
                                <option value="€€€">€€€</option>
                                <option value="€€€€">€€€€</option>
                            </select>
                    </div>
                    <div className="inputDesc"> Arviointi <input value={arviointi} onChange={(event) => setArviointi(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Ravintoloitsija ID <input value={asiakasID} onChange={(event) => setAsiakasID(event.currentTarget.value)} type="text"/></div>
        
                        <button className="saveNappi"onClick={()=>{
                            uusiRavintola({
                            nimi,osoite,aukiolo,kuva,tyyppi,hintataso,arviointi,asiakasID
                        })
                            tyhjennaRavintola();

                        }}>Tallenna</button>

                        <h2 className="luonti">Poista rafla</h2>
                        <div>
                            {ravintola.map(({idRavintola,nimi}) =>(
                                <div className="poistaCont">
                                    <p>{nimi}</p>
                                    <button className="poistoNappi" onClick={ ()=>{
                                        poistaRavintola(idRavintola)
                                        alert("Poistettu")
                                        window.location.reload();
                                    }}>Poista</button>
                                    </div>
                            ))}
                        </div>

            </div>

            <div className="tuoteCont">
                <h2 className="luonti">Lisää tuote</h2>
                        <div className="inputDesc">Kategoria <input value={kategoria} onChange={(event) => setKategoria(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Nimi <br></br><input value={tuotenimi} onChange={(event) => setTuotenimi(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Kuvaus <input value={kuvaus} onChange={(event) => setKuvaus(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Hinta <input value={hinta} onChange={(event) => setHinta(event.currentTarget.value)} type="text"/></div>
                        <div className="inputDesc"> Kuva URL <input value={tuotekuva} onChange={(event) => setTuotekuva(event.target.value)} type="text"/></div>
                        <div className="inputDesc"> Ravintola ID <input value={ravintolaID} onChange={(event) => setRavintolaID(event.currentTarget.value)} type="text"/></div>

                            <button className="saveNappi" onClick={()=>{
                                uusiTuote({
                                tuotenimi,kuvaus,hinta,tuotekuva,ravintolaID
                            })
                            tyhjennaTuote();                            
                            }}>Tallenna</button>

                            <h2 className="luonti">Poista tuote</h2>
                        <div>
                            {tuote.map(({idTuote,nimi}) =>(
                                <div className="poistaCont">
                                    <p>{nimi}</p>
                                    <button className="poistoNappi" onClick={ ()=>{
                                        poistaTuote(idTuote)
                                        alert("Poistettu")
                                        window.location.reload();
                                    }}>Poista</button>
                                    </div>
                            ))}
                        </div>

            </div>   

        </div>
        

  )
}
