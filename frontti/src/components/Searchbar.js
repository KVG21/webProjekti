import React, { useState, useEffect } from 'react';


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
    
    </div>
    </div>
  );
}