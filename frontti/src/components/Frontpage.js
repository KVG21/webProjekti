import React from 'react'
import {useState, useEffect} from 'react';
import Search from './Searchbar';
import './styles/Frontpage.css'
import { Link } from "react-router-dom"


export default function Frontpage() {
const [restaurant, setrestaurant] = useState([])
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

  return (
  <div>        
    <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />
    <div className="restaurantContainer">
        {filteredrestaurant.map(restaurant => (
           <Link to={ "/Tuotesivu/"+String(restaurant.idRavintola) }> 
           <div className='Items'>
             <img className="restaurantPic"src={restaurant.kuva} alt={restaurant.nimi} />
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

const filterrestaurant = (restaurant, query) => {
  if (!query) {
      return restaurant;
  }

  return restaurant.filter((restaurant) => {
      const postName = restaurant.nimi.toLowerCase();
      return postName.includes(query);
  });
};