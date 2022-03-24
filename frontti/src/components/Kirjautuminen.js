import React, { useState } from 'react';
import './Kirjautuminen.css'
 

export default function Kirjautuminen(){
  const [token, setToken] = useState();
        return(
          
          <form action='/kirjautuminen.css' method='POST'>
           <div class='container'>
            <label for= "Puhnro"><b>Käyttäjätunnus:</b></label>
              <input type='text'placeholder='Anna Puhnro' name='puhnro' required />
              <label for="Salasana"> <b>Salasana</b> </label>
              <input type="Salasana" placeholder='Anna Salasana' name='Salasana' required />
              <button type='submit'>kirjaudu sisään</button>
              <label>
                <input type='checkbox' checked="checked" name='remember'> Muista kirjautuminen</input>
              </label>
            
           </div> 
          
</form>
        )
    
}