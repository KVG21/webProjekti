import './App.css';
import React from "react";
import { Link } from "react-router-dom";

import Ravintoloitsija from './components/Ravintoloitsija'
import Etusivu from './components/Etusivu'

export default function App() {
    

    return (
        <div>
            <Etusivu/>
            <nav>
                <Link to="/Ravintoloitsija">Ravintoloitsija</Link>
            </nav>

        </div>
    );

}

