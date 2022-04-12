import React from 'react';
import './Kirjautuminen.css'

export default class Uloskirjautuminen extends React.Component{
    handleLogout = e => {
        e.preventDefault();
        this.props.setUser(null);
        this.props.history.push("/Etusivu")
    }
     render(){   
        return(
            <div className='Käyttäjä-kortti'>
                <h1>Tervetuloa {this.props.user.etunimi}</h1>
                <button onClick={this.handleLogout}>Kirjaudu ulos</button>
            </div>
        )
    }
}