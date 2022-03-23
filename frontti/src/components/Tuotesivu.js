import React from 'react'
import { useState,useEffect } from 'react'
import './Tuotesivu.css'

export default function Tuotesivu() {

  const [Tuotteet, setTuotteet] = useState([]) 

  const [Ostoskori,setOstoskori] = useState([])

  const [summa,setSumma] = useState(0);

  useEffect(async() =>{ //fetch items from backend api
    const result = await fetch('http://localhost:3001/tuote/2').then((res)=>
      res.json()
    )
    setTuotteet(result)
  }, [])

  const LisaaKoriin = (idTuote,nimi,hinta) => {
    setSumma(summa+hinta) 
    let newCasket = [...Ostoskori]
    let result = newCasket.findIndex(i => i.idTuote === idTuote)
    if(result === -1){
      let newOstoskori = [...Ostoskori, {
        idTuote : idTuote,
        kpl : 1,
        nimi : nimi,
        hinta : hinta
      }]; setOstoskori(newOstoskori);
    } else {
      let additions = {...newCasket[result]}
      additions.hinta +=hinta;
      additions.kpl = additions.kpl+1;
      newCasket[result] = additions;
      setOstoskori(newCasket);
    }
  }

  const Poistakorista = (idTuote) => {
    let newCard = [...Ostoskori];
    let result = newCard.findIndex(i => i.idTuote === idTuote);
    let Substraction = {...Tuotteet[idTuote-1]}
      if(result !== -1){
          let Deletion = {...newCard[result]}
            if(Deletion.kpl <= 1) {
              newCard.splice(result, 1);        
            } else{
              Deletion.hinta -= Substraction.hinta;
              Deletion.kpl = Deletion.kpl-1;
              newCard[result] = Deletion;
            } setOstoskori(newCard);
      }  
      setSumma(summa-Substraction.hinta)
    } 
  

  return (
    <div>
      <div className="name"></div>
      <div className="tuoteMainContainer">
            <div className="tuoteKontti">
              <div className="Otsikko">Tuotteet</div>
                {Tuotteet.map(({idTuote, nimi, kuvaus,hinta,kuva }) => (
                    <div className="tuotteet"> 
                    <img src = {kuva}/>
                    <p>{nimi}</p> 
                    <p>{kuvaus}</p> 
                    <p>{hinta} $</p>
                    <button className="Napit" onClick={ ()=> LisaaKoriin(idTuote,nimi,hinta) }>+</button>                 
                    </div>                   
                ))}
                </div>
                
            <div className="ostoskoriKontti">
            <div className="Otsikko">Ostoskori</div>
                {Ostoskori.map(({idTuote,nimi,hinta,kpl}) =>(
                  <div className="ostoskoriTavarat">
                    <p>{nimi}</p>
                    <p>{hinta} $</p>
                    <p>kpl: {kpl}</p>
                    <button className="Napit red" onClick={ ()=> Poistakorista(idTuote)} >-</button>
                    </div>
                ))}
              <div className="YhteenvetoKontti">Yhteenveto
              
                <div className="yhteenVeto">
                  <p>{summa} $</p>
                  <button className="Napit">Osta</button>
                </div>          
              </div>
            </div>
          </div>
        </div>   
  )
}
