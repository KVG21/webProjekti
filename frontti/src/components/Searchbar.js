import React from 'react'
import { Link } from "react-router-dom"
//nimi searchbar hämää, oikea searchbar on alustettu frontpagessa. täällä vain se asetettu "fyysisesti"
//asettelua lähinnä sis. nappit ja linkit. Searchin komentojen alustaminen
const SearchBar = ({ searchQuery, setSearchQuery,idAsiakas,managementMode }) => {

return(
  <form action="/" method="get"><div className='name'>
    <h1>Kvg Rafla</h1>
      <div className="searchBarContainer">
        <label htmlFor="header-search">
          <span className="visually-hidden">Etsi ravintolaa</span>
            </label>
              <div className="searchInput">
                <input //searching valuet ja komennot asetetaan.
                  value={searchQuery}
                  onInput={e => setSearchQuery(e.target.value)}
                  type="text"
                  id="header-search"
                  placeholder="Etsi ravintolaa"
                  name="s"/>
                </div>

      {managementMode}
      <Link className="navName" to={`/Receipt/${idAsiakas}`}><button className="navbtn">Kuitti</button></Link>
        <Link className="navName" to="/"><button className="navbtn">Ulos kirjautuminen</button></Link>

    <div className="spaceForSvg"></div>
      <Link className="navName" to={`/Asiakas/${idAsiakas}`}><svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg></Link>
        <label htmlFor="header-search">
          <span className="visually-hidden">Etsi ravintolaa</span>
        </label>
      </div>
    </div>
  </form>
);}

export default SearchBar;
