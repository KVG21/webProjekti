import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './styles/managePages.css' // Tällä sivulla on niin vähän omia tyylityksiä, joten päädyin käyttämään samaa css tiedostoa näille manage-sivuille.
import '../App.css'
export default function ManageAccount() {

    const [customer, setCustomer] = useState([])

    const {idAsiakas} = useParams();
    const url = "http://localhost:3001/asiakas/"+idAsiakas

    useEffect(async() =>{
        const result = await fetch(url).then((res)=>
        res.json()
        )
        setCustomer(result)
    }, [])
    const editCustomer = async (item) => {
        await fetch (url, { method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            puhnro: item.puhnro,
            osoite: item.osoite,
            salasana: item.salasana,
            idAsiakas: Number(idAsiakas),
        })})
        const result = await fetch(`http://localhost:3001/asiakas`).then((res) =>
        res.json()
        )
        setCustomer(result)
    }

    const [puhnro, setPuhnro] = useState("")
    const [osoite, setOsoite] = useState ("")
    const [salasana, setSalasana] = useState("")

    const clearFields = () => {
        setPuhnro("")
        setOsoite("")
        setSalasana("")
    }

    const [passwordShown, setPasswordShown] = useState(false);

        const togglePassword = () => {
            setPasswordShown(!passwordShown);
        };
  return (
    <div>
        <div className="name">
            <nav className="navigointi">
                <Link className="navName" to={"/Etusivu/"+String(idAsiakas)}> <button className="navbtn">Takaisin etusivulle</button></Link>
            </nav>
        </div>
        <div className="customerContainer">
            <h2 className="customerTitle">Muokkaa tietojasi</h2>
                <div className="inputDesc">Puhelinnumero  <input value={puhnro} onChange={(event) => setPuhnro(event.currentTarget.value)} type="text"/> </div>
                <div className="inputDesc">Kotiosoite <input value={osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/> </div>
                <div className="inputDesc">Salasana<input value={salasana} onChange={(event) => setSalasana(event.currentTarget.value)} type={passwordShown ? "text" : "password"}/> </div>
                <button className="btnShowPwd" onClick={togglePassword}>Näytä salasana</button>
        </div>                       
                <div className="saveCont">
                    <button className="savebtn" onClick={ ()=>{
                        editCustomer({
                        puhnro,osoite,salasana
                    })
                        clearFields();
                    }}>Päivitä</button>
                </div>

    </div>
  )
}
