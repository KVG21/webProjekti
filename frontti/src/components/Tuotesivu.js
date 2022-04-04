import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Tuotesivu.css'

export default function Tuotesivu() {

  const  {id}  = useParams();
  console.log(id)
  const url = "http://localhost:3001/tuote/"+id
  console.log(url)

  const [Tuotteet, setTuotteet] = useState([]) 

  const [Ostoskori,setOstoskori] = useState([])

  const [osoite,setOsoite] = useState("")

  const [summa,setSumma] = useState(0);

  useEffect(async() =>{ //fetch items from backend api
    const result = await fetch(url).then((res)=>
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
  
  const OstaTuotteet = (osoite) => {
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    let LahtevatNimet = "";
    let maara = "";

      for(let i = 0; i < Ostoskori.length; i++) {
          let addition = {...Ostoskori[i]}       
          LahtevatNimet = LahtevatNimet + ", " +addition.nimi + " kpl: " + addition.kpl + "    ";
          maara += addition.kpl
      }
    
      fetch(`http://localhost:3001/historia`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        osoite : osoite,
        pvm: date,
        tuotteet: LahtevatNimet,
        summa: summa,
        asiakasID: 1
        })})
  }

  return (
    <div>
      <div className="Otsake"> KVG RAFLA
      <Link className="naviNimi" to="/etusivu"><button className="naviNappi">Etusivu</button></Link>
        </div>
      <div>
    </div>

      <div className="tuoteMainContainer">
            <div className="tuoteKontti">
              <div className="otsikko">Tuotteet</div>
                {Tuotteet.map(Tuotteet => (
                    <div className="tuotteet"> 
                      <img className="tuoteKuva"src={Tuotteet.kuva} alt={Tuotteet.nimi} />
                        <p>{Tuotteet.nimi}</p>
                          <p>{Tuotteet.kategoria}</p>
                        <p>{Tuotteet.kuvaus}</p> 
                      <p>{Tuotteet.hinta} $</p>
                    <button className="Napit" onClick={ ()=> LisaaKoriin(Tuotteet.idTuote,Tuotteet.nimi,Tuotteet.hinta) }>+</button>                 
                  </div>                   
                ))}
              </div>
                
            <div className="ostoskoriKontti">
              <div className="otsikko">Ostoskori</div>
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
                    <div className="inputDesc"> Toimitus osoite
                      <input value={osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/>
                    <button className="Napit" onClick={ ()=> OstaTuotteet(osoite)}>Osta</button>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>   
  )
}
