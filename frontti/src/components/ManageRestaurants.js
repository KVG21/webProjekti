import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './styles/managePages.css'


export default function ManageRestaurants() {

    const [restaurants, setRestaurants] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [openhours, setOpenhours] = useState("")
    const [picture, setPicture] = useState("")
    const [type, setType] = useState("")
    const [priceclass, setPriceclass] = useState("")
    const [review, setReview] = useState("")
    
    const {idAsiakas} = useParams();

    useEffect(async () => {
        const result = await fetch(`http://localhost:3000/ravintola/${idAsiakas}`).then((res) => 
        res.json()
        )
        setRestaurants(result)
    }, [])

    const deleteRestaurant = async (idRavintola) => {
        let uudetRaflat = [...restaurants];
        let poistettu = uudetRaflat.findIndex(p => p.id === idRavintola);
        await fetch(`http://localhost:3000/ravintola/${idRavintola}`, { method: 'DELETE'})
        uudetRaflat.splice(poistettu, 1);
        setRestaurants(uudetRaflat);
    }

    
    const createRestaurant = async (item) => {
        await fetch(`http://localhost:3000/ravintola`,{ method: 'POST',
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
        const result = await fetch(`http://localhost:3000/ravintola/${idAsiakas}`).then((res) => 
        res.json()
        )
        setRestaurants(result)
    }

    const clearFields = () => {
        setName("")
        setAddress("")
        setOpenhours("")
        setPicture("")
        setType("")
        setPriceclass("")
        setReview("")
    }
    
  return (
        <div>
            <div className="name">
            <nav className="navigointi">
           <Link className="navName" to={`/Etusivu/${idAsiakas}`}> <button className="navbtn">Etusivu</button></Link>
            </nav> 
            </div>
            <div className="restaurantCont">
                <h2 className="manageTitle">Lisää ravintola</h2>
                    
                    <div className="inputDesc"> Nimi <br></br> <input value={name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Osoite <input value={address} onChange={(event) => setAddress(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Aukiolo <input value={openhours} onChange={(event) => setOpenhours(event.currentTarget.value)} type="text"/></div>
                    <div className="inputDesc"> Kuva URL <input value={picture} onChange={(event) => setPicture(event.target.value)} type="text"/></div>
                    
                    <div className="dropdown">
                        <p>Tyyppi</p>
                            <select id="raflaTyyppi" onChange={(event) => setType(event.currentTarget.value)}>
                                <option value="Buffet">Buffet</option>
                                <option value="Fast food">Fast food</option>
                                <option value="Fast casual">Fast casual</option>
                                <option value="Casual dining">Casual dining</option>
                                <option value="Fine dining">Fine dining</option>
                            </select>
                    </div>

                    <div className="dropdown">
                        <p>Hintataso</p>
                            <select id="raflaHinta" onChange={(event) => setPriceclass(event.currentTarget.value)}>
                                <option value="€">€</option>
                                <option value="€€">€€</option>
                                <option value="€€€">€€€</option>
                                <option value="€€€€">€€€€</option>
                            </select>
                    </div>
                    <div className="inputDesc"> Arviointi <input value={review} onChange={(event) => setReview(event.currentTarget.value)} type="text"/></div>
        
                        <button className="saveNappi"onClick={()=>{
                            createRestaurant({
                            nimi: name,osoite: address,aukiolo: openhours,kuva: picture,tyyppi: type,hintataso: priceclass,arviointi: review
                        })
                            clearFields();

                        }}>Tallenna</button>
                        
            </div>
                                    <div className="ownedRestaurants">
                                        <h2 className="manageTitle">Ravintolasi</h2>
                                        {restaurants.map(({idRavintola, nimi}) =>(
                                            <><p>{nimi}</p><nav className="navigointi">
                                                <Link className="navName" to={`/Tuotehallinta/${idRavintola}/${idAsiakas}`}> <button className="navbtn">Hallitse tuotteita</button></Link>
                                                <button className="deletebtn" onClick={ ()=>{
                                        deleteRestaurant(idRavintola)

                                    }}>Poista</button>
                                            </nav></> 
                                        ))}

                                    </div>    
        </div>
        

  )
}