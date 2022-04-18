import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './styles/Kayttaja.css'

/* Rekisteröinnissä haetaan backendin asiakas taulusta paikat täytettäville tiedoille joilla luodaan uusi käyttäjä.
käyttäjiä on kahdenlaisia, on joko tyyppi 0 joka on asiakas tai tyyppi 1 joka on ravintoloitsia
*/

export default function Registration(){

  const [etunimi, setEtunimi] = useState("")
  const [sukunimi, setSukunimi] = useState("")
  const [osoite, setOsoite] = useState ("")
  const [puhnro, setPuhnro] = useState ("")
  const [salasana, setSalasana] = useState("")
  const [tyyppi, setTyyppi] = useState(0)

  const Uusikayttaja = async(item) => {
    await fetch('http://localhost:3001/asiakas',{method: 'POST',
      headers:{'Content-type' : 'application/json'},
      body: JSON.stringify({
       etunimi: item.etunimi,
       sukunimi: item.sukunimi,
       osoite: item.osoite,
       puhnro: item.puhnro,
       salasana: item.salasana,
       tyyppi: item.tyyppi
})})
}

  return(
         <div>
           <div className='etunimi'>
            <nav className='navigointi'>
            <div className="searchBarContainer">
             <button classname="navbtn"><Link className='navbtn' to="/">Oliko sittenkin käyttäjä? Kirjaudu sisään</Link></button>
             </div>
            </nav>
           </div>
            <div className="kayttajaCont">
             <h2 className='Rekisteroityminen'>Rekisteröidy</h2>
               <div className='inputDesc'>etunimi <br></br> <input value={etunimi} onChange={(event) => setEtunimi(event.currentTarget.value)} type="text"/></div>
                <div className='inputDesc'>sukunimi <br></br> <input value={sukunimi} onChange={(event) => setSukunimi(event.currentTarget.value)} type="text"/></div>
                  <div className='inputDesc'>osoite <br></br> <input value={osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
                    <div className='inputDesc'>puhnro <br></br> <input value={puhnro} onChange={(event) => setPuhnro(event.currentTarget.value)} type="text"/></div>
                      <div className='inputDesc'>salasana <br></br> <input value={salasana} onChange={(event) => setSalasana(event.currentTarget.value)} type="password"/></div>
                    <div className="dropdown">
                      <p>Tyyppi</p>
                        <select id="tyyppi" onChange={(event) => setTyyppi(event.currentTarget.value)}>
                          <option value={0}>asiakas</option>
                          <option value={1}>Ravintoloitsija</option>   
                        </select>
                    </div>
                      <nav className="navigointi">
                        <Link className="naviNimi" to="/"> <button className='saveNappi'onClick={()=>Uusikayttaja({etunimi,sukunimi,osoite,puhnro,salasana,tyyppi
                      })}>Rekisteröidy</button> </Link></nav>
                    </div>
                  </div>
)}
