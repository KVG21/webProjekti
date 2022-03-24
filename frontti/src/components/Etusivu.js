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
            {ravintola.map(({nimi, osoite, aukiolo, kuva, tyyppi, hintataso, arviointi}) => (
                <div className='ravintolaContainer'>

                <div className='Items'>
                {kuva}
                <div className = "Tiedot">
                  <p>{nimi}</p>
                  <p>{osoite}</p>
                  <p>{aukiolo}</p>
                  <p>{tyyppi}</p>
                  <p>{hintataso}</p>
                  <p>{arviointi}</p>
                </div>
                </div>
                </div>
              ))}
        </div>
        </div>
  )
}