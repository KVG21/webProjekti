import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './hakupalkki.js'

export default function Searchbar() {

  return (  
  <div className='name'>
    <h1>Kvg Rafla</h1>
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae ravintolaa <input type="search" name="Searchbar" id= "searchbar" placeholder="search..."/></div>
     <ul id="hakutulokset"></ul>
        <button className="itemButtons" onClick>Etsi</button>
                <nav>
                <button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button>   
                </nav>
    
    </div>
    </div>
  );
}
