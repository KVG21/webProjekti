import React, {useState} from 'react';
import './Kirjautuminen.css'
import { Link } from "react-router-dom";
import { Router } from 'express';
import { render } from 'express/lib/response';




export class Login extends Component{
    state = {
        etunimi: '',
        salasana: ''
    }
    handleChange = e => this.setState ({[e.target.name] : e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        fetch ('http://localhost:3000/Kirjautuminen' , {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then (response => response.json())
        .then(data => {
            localStorage.setItem('IDAsiakas', data.user.id)
            this.props.setUser(data.user)
            this.props.history.push('/Etusivu')
        })
        this.setState({
            etunimi: '',
            salasana: ''
        })
    }
    render (){
        return(
            <div>
                <h1>Kirjautuminen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Käyttäjänimi</label>
                    <input type="text" name="etunimi" placeholder="Etunimi" value={this.state.etunimi} onChange={this.handleChange} />
                    <label>Salasana</label>
                    <input type="text" name="salasana" placeholder="Salasana" value={this.state.salasana} onChange={this.handleChange} />
                    <button>Kirjaudu sisään</button>
                </form>
            </div>
        )
    }
   
}
export class Home extends Component{
    handleLogout = e => {
        e.preventDefault();
        this.props.setUser(null);
        this.props.history.push("/Etusivu")
    }
    render() {
        return(
            <div className='Käyttäjä-kortti'>
                <h1>Tervetuloa {this.props.user.etunimi}</h1>
                <button onClick={this.handleLogout}>Kirjaudu ulos</button>
            </div>
        )
    }
}
 
export default withRouter(Login)