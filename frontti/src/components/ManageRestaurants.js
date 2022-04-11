import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './styles/manageRestaurants.css'


export default function ManageRestaurants() {

    const [ravintolat, setRavintolat] = useState([])

    useEffect(async () => {
        const result = await fetch(`http://localhost:3001/ravintola`).then((res) => 
        res.json()
        )
        setRavintolat(result)
    }, [])

    const poistaRavintola = async (idRavintola) => {
        let uudetRaflat = [...ravintolat];
        let poistettu = uudetRaflat.findIndex(p => p.id === idRavintola);
        await fetch(`http://localhost:3001/ravintola/${idRavintola}`, { method: 'DELETE'})
        uudetRaflat.splice(poistettu, 1);
        setRavintolat(uudetRaflat);
    }

    
    const uusiRavintola = async (item) => {
        await fetch(`http://localhost:3001/ravintola`,{ method: 'POST',
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
        const result = await fetch(`http://localhost:3001/ravintola`).then((res) => 
        res.json()
        )
        setRavintolat(result)
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


    
  return (
        <div>
            <div className="name">
            <nav className="navigointi">
           <Link className="naviNimi" to="/Etusivu"> <button className="naviNappi">Etusivu</button></Link>
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
                    
                        <h2 className="luonti">Poista ravintola</h2>
                        <div>
                            {ravintolat.map(({idRavintola,nimi}) =>(
                                <div className="poistaCont">
                                    <p>{nimi}</p>
                                    <button className="poistoNappi" onClick={ ()=>{
                                        poistaRavintola(idRavintola)

                                    }}>Poista</button>
                                    </div>
                            ))}
                        </div>
                        
            </div>
                                    <div className="tuoteCont">
                                        <h2 className="luonti">Ravintolasi</h2>
                                        {ravintolat.map(({idRavintola, nimi}) =>(
                                            <><p>{nimi}</p><nav className="navigointi">
                                                <Link className="naviNimi" to={"/Tuotehallinta/"+String(idRavintola)}> <button className="naviNappi">Hallitse tuotteita</button></Link>
                                            </nav></> 
                                        ))}

                                    </div>    
        </div>
        

  )
}