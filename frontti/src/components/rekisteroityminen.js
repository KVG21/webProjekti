import React from 'react';
import  ReactDOM  from 'react-dom';
export default function rekisteroityminen(props){
    function MyForm() {
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

}
ReactDOM.render(<MyForm/>, document.getElementById('root'));