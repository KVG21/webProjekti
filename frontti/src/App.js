import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import Etusivu from './components/Etusivu';
import Search from './components/Searchbar';

const App = () => {

    const [ravintola, setravintola] = useState([])
//etsitään ravintola tietokannasta nim. ravintola
useEffect(async() => {
  const result = await fetch('http://localhost:3001/ravintola').then((res)=>
  res.json()
  )
  setravintola(result)
  console.log(result)
}, [])
//url parametriä käyttäen filtteri

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredravintola = filterravintola(ravintola, searchQuery);

    //the action
    return (
        <div>
            
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredravintola.map(ravintola => (
                    <li key={ravintola.key}>{ravintola.nimi}</li>
                ))}
            </ul>
            <Etusivu/>
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



export default App;
