import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import './Kayttaja.css'


export default function Rekisteroityminen(){
    const Uusikayttaja = (item) => {
      fetch('http://localhost:3001/asiakas',{method: 'POST',
    headers:{'Content-type' : 'application/json'},
     body: JSON.stringify({
       etunimi: item.etunimi,
       sukunimi: item.sukunimi,
       osoite: item.osoite,
       puhnro: item.puhnro,
       salasana: item.salasana,
       IDAsiakas: item.IDAsiakas

     })
    })
    }
    const [etunimi, setEtunimi] = useState("")
    const [sukunimi, setSukunimi] = useState("")
    const [osoite, setOsoite] = useState ("")
    const [puhnro, setPuhnro] = useState ("")
    const [salasana, setSalasana] = useState("")
    const [IDAsiakas, setIDAsiakas] = useState("")

       return(
         <div>
           <div className='etunimi'>
           <nav className='navigointi'>
             <button classname="naviNappi"><Link className='naviNappi' to="/Etusivu">Etusivu</Link></button>
           </nav>
           </div>
           <div className="kayttajaCont">
             <h2 className='Rekisteroityminen'>Rekisteröidy</h2>
               <div className='inputDesc'>etunimi <br></br> <input value={etunimi} onChange={(event) => setEtunimi(event.currentTarget.value)} type="text"/></div>
               <div className='inputDesc'>sukunimi <br></br> <input value={sukunimi} onChange={(event) => setSukunimi(event.currentTarget.value)} type="text"/></div>
               <div className='inputDesc'>osoite <br></br> <input value={osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
               <div className='inputDesc'>puhnro <br></br> <input value={puhnro} onChange={(event) => setPuhnro(event.currentTarget.value)} type="text"/></div>
               <div className='inputDesc'>salasana <br></br> <input value={salasana} onChange={(event) => setSalasana(event.currentTarget.value)} type="text"/></div>
               <div className='inputDesc'>IDAsiakas <br></br> <input value={IDAsiakas} onChange={(event) => setIDAsiakas(event.currentTarget.value)} type="text"/></div>
               
                <button className='saveNappi'onClick={()=>Uusikayttaja({
                  etunimi,sukunimi,osoite,puhnro,salasana,IDAsiakas
                })}>Rekisteröidy</button>
           </div>
         </div>
       )
}
