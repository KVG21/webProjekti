import React from 'react'
import {useState, useEffect} from 'react';
import Search from './Searchbar';
import './styles/Frontpage.css'
import { Link, useParams } from "react-router-dom"

//filtterin ja hakupalkin aktuaalinen koodi ja sen fetchaus

export default function Frontpage() {


const {idAsiakas,tyyppi} = useParams();
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

//mappausta, tyylittelyä containerit ja viewit
  return (
  <div>        
    <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        idAsiakas={idAsiakas}
    />
    <div className="restaurantContainer">
        {filteredrestaurant.map(restaurant => (
           <Link className="LinkDecoration" to={ `/ProductView/${restaurant.idRavintola}/${idAsiakas}` }> 
            <div className='Items'>
              <img className="restaurantPic"src={restaurant.kuva} alt={restaurant.nimi} />
                <div className = "Information">
                  <h3>{restaurant.nimi}</h3>
                  <p>{restaurant.osoite} | {restaurant.aukiolo} </p>
                  <p>{restaurant.tyyppi} | {restaurant.hintataso} </p>
                  <p> Arviointi : {restaurant.arviointi}</p>
                </div>                     
              </div>     
            </Link>
        ))}         
    </div>
  </div>
  );
}

//searchbarin filtterin jatkoa, joko näyttää ravintolan tai ei.
const filterrestaurant = (restaurant, query) => {
  if (!query) {
      return restaurant;
  }

  return restaurant.filter((restaurant) => {
      const postName = restaurant.nimi.toLowerCase();
      return postName.includes(query);
  });
};