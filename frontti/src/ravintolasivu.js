/*Maijan etusivut*/

import './Etusivu.css';
import React from "react";
import { useState } from "react";
import Searchbar from './components/Searchbar'
import './Etusivu.js';

function ruokee() {

    const [ ruoka, setruoka ] = useState([
    ]);

    return (
        <div className = "ruokee">
            <Searchbar/>
        </div>
    );

}

export default ruokee;