import React from 'react';
import  ReactDOM  from 'react-dom';
export default function kentat(props){
    function MyForm() {
        return(
          <form>
            <label>Käyttäjätunnus:
              <input type="text" />
              <label>salasana:
              <input type="text" />
            </label>
            </label>
          </form>

}
ReactDOM.render(<MyForm/>, document.getElementById('root'));