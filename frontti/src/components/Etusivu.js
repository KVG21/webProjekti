import React from 'react'
import {useState, useEffect} from 'react';
import Search from './Searchbar';
import './Etusivu.css'
import { Link } from "react-router-dom"


export default function Etusivu() {

  const [restaurant, setrestaurant] = useState([])

//url parametriä käyttäen filtteri
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filteredrestaurant = filterrestaurant(restaurant, searchQuery);

useEffect(async() => {
  const result = await fetch('http://localhost:3001/ravintola').then((res)=>
  res.json()
  )
  setrestaurant(result)
  
}, [])


//the action
  return (
  <div>        
    <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />
    <div className="ravintolaContainer">
        {filteredrestaurant.map(restaurant => (
           <Link to={ "/Tuotesivu/"+String(restaurant.idRavintola) }> 
           <div className='Items'>
             <img className="ravintolaKuva"src={restaurant.kuva} alt={restaurant.nimi} />
               <div className = "Tiedot">
                 <p>{restaurant.nimi}</p>
                 <p>{restaurant.osoite}</p>
                 <p>{restaurant.aukiolo}</p>
                 <p>{restaurant.tyyppi}</p>
                 <p>{restaurant.hintataso}</p>
                 <p>{restaurant.arviointi}</p>
               </div>                     
             </div>     
            </Link>
        ))}         
    </div>
  </div>
  );
}


//antaako restaurantn vai ei? Blank = ei oo tietokannassa jne

const filterrestaurant = (restaurant, query) => {
  if (!query) {
      return restaurant;
  }

  return restaurant.filter((restaurant) => {
      const postName = restaurant.nimi.toLowerCase();
      return postName.includes(query);
  });
};