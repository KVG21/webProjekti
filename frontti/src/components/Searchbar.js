<<<<<<< Updated upstream
import React from 'react';

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
=======
import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
>>>>>>> Stashed changes


<<<<<<< Updated upstream
  return (  
  <div className='name'>
    <h1>Kvg Rafla</h1>
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae ravintolaa <input type="search" id= "search" onKeyUp="Haku()"/></div>
        <button className="itemButtons" onClick>Etsi</button>
  <ul id="myUL">
  <li><a href="#">McDonalds</a></li>
  <li><a href="#">Hesburger</a></li>

  <li><a href="#">Arbello</a></li>
  <li><a href="#">Quattro</a></li>
</ul>
    </div>
    </div>
  );
}
=======
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get"><div className='name'>
  <h1>Kvg Rafla</h1>
<div className="searchBarContainer">
    <label htmlFor="header-search">
        <span className="visually-hidden">Etsi ravintolaa</span>
    </label>
    <nav><button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button></nav>
 
      <label htmlFor="header-search">
          <span className="visually-hidden">Etsi ravintolaa</span>
      </label>
         </div>
         </div>
      <input
       value={searchQuery}
       onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Etsi ravintolaa"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;
>>>>>>> Stashed changes
