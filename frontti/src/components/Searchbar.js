import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function Searchbar() {

  return (  
  <div className='name'>
    <h1>Kvg Rafla</h1>
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae ravintolaa <input type="search" id= "searchbar"/></div>
        <button className="itemButtons" onClick>Etsi</button>
                <nav>
                <button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button>   
                </nav>
    
    </div>
    </div>
  );
}
