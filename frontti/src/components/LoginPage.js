import React, {useState} from 'react';
import './styles/loginPage.css'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

/*Login page alustetaan ja kutsutaan backendin kirjautumista josta pyydetään seuraavat tiedot
   salasana sekä puhelinnumero. Puhelinumero vastaa tässä ohjelmassa käyttäjätunnusta*/


export default function LoginPage() {

    const navigate = useNavigate();
    const [puhNro, setPuhNro] = useState("")
    const [salasana, setSalasana] = useState("")

    const Kirjautuminen = async (puhNro, salasana) => {

        let result = await fetch(`http://localhost:3000/kirjautuminen`,
        { method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        puhnro: puhNro,
        salasana: salasana, 
        })})
       
        if(result.status == 204){
                const result = await fetch(`http://localhost:3000/kirjautuminen/${puhNro}`).then((res)=>
                  res.json()
                )
                getIndex(result)
                
        }else  {
            return alert("Puuttuvia tietoja")
        }    
    }                
            
      const getIndex = (item) => {
        let newCustomer = [...item]
        let index = newCustomer.findIndex(i => i.puhnro === puhNro);    
        if(index !== -1){
            let id = {...item[index]}
            let SendId = id.idAsiakas
            let type = id.tyyppi
            console.log(type)   
              return navigate(`/Etusivu/${SendId}/${type}`, {replace: true})
        }else {
            return alert("Käyttäjää ei löydy")
        }
      }  

    
return (
  <div>
  <div className="header">KVG RAFLA</div> 
    <div className="mainLoginContainer">
      <h1 className="title">Kirjautuminen</h1>
        <div className="inputs"> Puhnro <br></br> <input value={puhNro} onChange={(event) => setPuhNro(event.currentTarget.value)} type="text"/></div>
          <div className="inputs"> Salasana <br></br> <input value={salasana} onChange={(event) => setSalasana(event.currentTarget.value)} type="password"/></div>
          <button className="buttons" onClick={ () => Kirjautuminen(puhNro , salasana)}>Kirjaudu sisään</button>
        <Link to="/Rekisteroityminen"><button className="buttons">Rekisteröidy käyttäjäksi</button></Link>
    </div>
    </div>
)}