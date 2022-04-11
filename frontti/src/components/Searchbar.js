import React from 'react'
import { Link } from "react-router-dom"

//asettelua lähinnä sis. nappit ja linkit
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
