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
    
   <Link className="navName" to="/Ravintoloitsija"> <button className="navbtn">Ravintoloitsija</button></Link>
  <Link className="navName" to="/Receipt"><button className="navbtn">Kuitti</button></Link>
  <Link className="navName" to="/"><button className="navbtn">Ulos kirjautuminen</button></Link>


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
  </form>
);

export default SearchBar;
