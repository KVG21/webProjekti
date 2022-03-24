import React, {useState} from 'react';
import './kayttaja.css'

let form = document.getElementById('subscribe');
export default function rekisteroityminen(props){
    const Uusikäyttäjä = (item) => {
      fetch('http://localhost:3001/kirjautuminen',{method: 'POST',
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
    const [etunimi, setetunimi] = useState("")
    const [sukunimi, setsukunimi] = useState("")
    const [osoite, setosoite] = useState ("")
    const [puhnro, setpuhnro] = useState ("")
    const [salasana, setsalasana] = useState("")
    const [IDAsiakas, setIDAsiakas] = useState("")
       return(
         <div>
           <div className='etunimi'>
           <nav className='navigointi'>
             <button classname="naviNappula"><link className='naviNappula' to="/">Etusivu</link></button>
           </nav>
           </div>
           <div className=".kayttajaCont">
             <h2 className='rekisteröityminen'>Rekisteröidy</h2>
               <div className='inputDesc'>etunimi <br></br> <input value={etunimi} onChange={(event) => setetunimi(event.curentTarget.value)} type="text"/></div>
               <div className='inputDesc'>sukunimi <br></br> <input value={sukunimi} onChange={(event) => setsukunimi(event.curentTarget.value)} type="text"/></div>
               <div className='inputDesc'>osoite <br></br> <input value={osoite} onChange={(event) => setosoite(event.curentTarget.value)} type="text"/></div>
               <div className='inputDesc'>puhnro <br></br> <input value={puhnro} onChange={(event) => setpuhnro(event.curentTarget.value)} type="text"/></div>
               <div className='inputDesc'>salasana <br></br> <input value={salasana} onChange={(event) => setsalasana(event.curentTarget.value)} type="text"/></div>
               <div className='inputDesc'>IDAsiakas <br></br> <input value={IDAsiakas} onChange={(event) => setIDAsiakas(event.curentTarget.value)} type="text"/></div>
               
                <button className='saveNappi'onClick={()=>Rekisteroityminen({
                  etunimi,sukunimi,osoite,puhnro,salasana,IDAsiakas
                })}>Rekisteröidy</button>
           </div>
         </div>
       )
}
