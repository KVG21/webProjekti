import React from 'react'
import {useState, useEffect} from 'react';
import Search from './Searchbar';
import './Etusivu.css'
import { Link } from "react-router-dom"


export default function Etusivu() {

  const [ravintola, setravintola] = useState([])

//url parametriä käyttäen filtteri
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filteredravintola = filterravintola(ravintola, searchQuery);

useEffect(async() => {
  const result = await fetch('http://localhost:3001/ravintola').then((res)=>
  res.json()
  )
  setravintola(result)
  
}, [])


//the action
  return (
  <div>        
    <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />
    <div className="ravintolaContainer">
        {filteredravintola.map(ravintola => (
           <Link to={ "/Tuotesivu/"+String(ravintola.idRavintola) }> 
           <div className='Items'>
             <img className="ravintolaKuva"src={ravintola.kuva} alt={ravintola.nimi} />
               <div className = "Tiedot">
                 <p>{ravintola.nimi}</p>
                 <p>{ravintola.osoite}</p>
                 <p>{ravintola.aukiolo}</p>
                 <p>{ravintola.tyyppi}</p>
                 <p>{ravintola.hintataso}</p>
                 <p>{ravintola.arviointi}</p>
               </div>                     
             </div>     
            </Link>
        ))}         
    </div>
  </div>
  );
}


//antaako ravintolan vai ei? Blank = ei oo tietokannassa jne

const filterravintola = (ravintola, query) => {
  if (!query) {
      return ravintola;
  }

  return ravintola.filter((ravintola) => {
      const postName = ravintola.nimi.toLowerCase();
      return postName.includes(query);
  });
};
