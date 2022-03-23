import React from 'react';

export default function Searchbar() {


  return (  
  <div className='name'>
    <h1>Kvg Rafla</h1>
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae ravintolaa <input type="text"/></div>
        <button className="itemButtons" onClick>Etsi</button>
    </div>
    <ul id= "hakemisto"></ul>
    </div>
  );
}