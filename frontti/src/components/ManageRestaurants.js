import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './styles/managePages.css'


export default function ManageRestaurants() {

    const {idAsiakas} = useParams();
    const [restaurants, setRestaurants] = useState([])

    useEffect(async () => {
        const result = await fetch(`http://localhost:3001/ravintola${idAsiakas}`).then((res) => 
        res.json()
        )
        setRestaurants(result)
    }, [])

    const deleteRestaurant = async (idRavintola) => {
        let uudetRaflat = [...restaurants];
        let poistettu = uudetRaflat.findIndex(p => p.id === idRavintola);
        await fetch(`http://localhost:3001/ravintola/${idRavintola}`, { method: 'DELETE'})
        uudetRaflat.splice(poistettu, 1);
        setRestaurants(uudetRaflat);
    }

    
    const createRestaurant = async (item) => {
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
        asiakasID: Number(idAsiakas),  
        })})
        const result = await fetch(`http://localhost:3001/ravintola/${idAsiakas}`).then((res) => 
        res.json()
        )
        setRestaurants(result)
    }

    const [nimi, setNimi] = useState("")
    const [osoite, setOsoite] = useState("")
    const [aukiolo, setAukiolo] = useState("")
    const [kuva, setKuva] = useState("")
    const [tyyppi, setTyyppi] = useState("")
    const [hintataso, setHintataso] = useState("")
    const [arviointi, setArviointi] = useState("")

    const clearFields = () => {
        setNimi("")
        setOsoite("")
        setAukiolo("")
        setKuva("")
        setTyyppi("")
        setHintataso("")
        setArviointi("")
    }
    
  return (
        <div>
            <div className="name">
            <nav className="navigointi">
           <Link className="navName" to="/Etusivu"> <button className="navbtn">Etusivu</button></Link>
            </nav> 
            </div>
            <div className="restaurantCont">
                <h2 className="manageTitle">Lisää ravintola</h2>
                    
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
        
                        <button className="saveNappi"onClick={()=>{
                            uusiRavintola({
                            nimi,osoite,aukiolo,kuva,tyyppi,hintataso,arviointi
                        })
                            clearFields();

                        }}>Tallenna</button>
                        
            </div>
                                    <div className="ownedRestaurants">
                                        <h2 className="manageTitle">Ravintolasi</h2>
                                        {restaurants.map(({idRavintola, nimi}) =>(
                                            <><p>{nimi}</p><nav className="navigointi">
                                                <Link className="navName" to={"/Tuotehallinta/"+String(idRavintola)}> <button className="navbtn">Hallitse tuotteita</button></Link>
                                                <button className="deletebtn" onClick={ ()=>{
                                        deleteRestaurant(idRavintola)

                                    }}>Poista</button>
                                            </nav></> 
                                        ))}

                                    </div>    
        </div>
        

  )
}