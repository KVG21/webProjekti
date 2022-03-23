import React from 'react'
import Searchbar from './Searchbar'
import {useState, useEffect} from 'react';

export default function Etusivu() {


const [ravintola, setravintola] = useState([])

useEffect(async() => {
  const result = await fetch('http://localhost:3001/ravintola').then((res)=>
  res.json()
  )
  setravintola(result)
  console.log(result)
}, [])

  return (
    <div className = "etusivu">
           <Searchbar/>
            <div className='ravintolaContainer'>
            {ravintola.map(({Nimi, Osoite, Aukiolo, Kuva, Tyyppi, Hintataso, Arviointi}) => (
                <div className='ravintolaContainer'>

                <div className='Items'>
                {Kuva}
                <div className = "Tiedot">
                  <p>{Nimi}</p>
                  <p>{Osoite}</p>
                  <p>{Aukiolo}</p>
                  <p>{Tyyppi}</p>
                  <p>{Hintataso}</p>
                  <p>{Arviointi}</p>
                </div>
                </div>
                </div>
              ))}
        </div>
        </div>
  )
}
