import React from 'react';

export default function Rekisteroityminen(props){

        return(
          <form>
            <label>Etunimi:
              <input type="text" />
            </label>
            <label>Sukunimi:
              <input type="text" />
            </label>
            <label>Puhelinnumero:
              <input type="text" />
            </label>
            <label>Kotiosoite:
              <input type="text" />
            </label>
            <label>salasana:
              <input type="text" />
            </label>
           
          </form>
        )
}
