import './App.css';
import React from "react";
import { Link } from "react-router-dom";


import Etusivu from './components/Etusivu'

export default function App() {
    

    return (
        <div>
            <Etusivu/>
            <nav>
                <button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button>   
            </nav>
        </div>
    );

}

