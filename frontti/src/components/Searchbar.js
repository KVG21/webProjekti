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

export default function Searchbar() {

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