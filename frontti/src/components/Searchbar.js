import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"


export default function Searchbar() {

const [haku, sethaku] = useState([])

useEffect(async() => {
  const result = await fetch('http://localhost:3001/ravintola').then((res)=>
  res.json()
  )
  haku(result)
  console.log(result)
}, [])



  return (  
  <div className='name'>
    <h1>Kvg Rafla</h1>
  <div className="searchBarContainer">
  {haku.map(({nimi}) => (
                <div className="searchBarContainer">
                  <p>{nimi}</p>
                </div>
              ))}
     <div className="searchBarItems">Hae ravintolaa <input type="search" id= "search"/></div>
        <button className="itemButtons" onClick>Etsi</button>
                <nav>
                <button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button>   
                </nav>
    
    </div>
    </div>
  );
}