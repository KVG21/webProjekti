/*Maijan etusivut*/

import './ravintolasivu.js';
import './Etusivu.css';
import React, { useEffect } from "react";
import { useState } from "react";
import Searchbar from './components/Searchbar'

function etusivu() {

    const [ ravintola, setravintola ] = useState([]);

    useEffect (() => {});
    return (
        <div className = "etusivu">
            <Searchbar/>
            <div className='ravintolaContainer'>

                <div className='Items'>
                    <h1>Mäkkäri</h1>

            </div>
        </div>
        </div>
    );

}

export default etusivu;
