import React, {useState} from 'react';
import './styles/Kirjautuminen.css'
import { Link } from "react-router-dom";

import {useNavigate} from "react-router-dom"



export default function KirjautuminenSivu() {
    const navigate = useNavigate();
    const [puhNro, setPuhNro] = useState("")
    const [salasana, setSalasana] = useState("")

    const Kirjautuminen = async (puhNro, salasana) => {

        let result = await fetch('http://localhost:3001/kirjautuminen',
        { method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        puhnro: puhNro,
        salasana: salasana, 
        })})

        console.log(String(result.status))
       
    if(result.status == 200){ return navigate("/Etusivu", {replace: true})}
    else  {
        console.log("moro")
    }
        
    }                
            
        

    
return (
    <div>
    <h1>Kirjautuminen</h1>
        <div className="inputDesc"> Puhnro <br></br> <input value={puhNro} onChange={(event) => setPuhNro(event.currentTarget.value)} type="text"/></div>
        <div className="inputDesc"> Salsana <br></br> <input value={salasana} onChange={(event) => setSalasana(event.currentTarget.value)} type="text"/></div>
        <button onClick={ () => Kirjautuminen(puhNro , salasana)}>Kirjaudu sisään</button>
        <button className="navbtn"><Link className='navbtn' to="/Rekisteroityminen">Rekisteröidy käyttäjäksi</Link></button>
</div>
  )


}