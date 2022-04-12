import React, {useState} from 'react';
import './Kirjautuminen.css'
import { Link } from "react-router-dom";





export default class KirjautuminenSivu extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {puhnum: '',salasana: '' };
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
            puhnum: '',
            salasana: ''
        }) }
    
     render(){
        return(
            <div>
                <h1>Kirjautuminen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Käyttäjänimi</label>
                    <input type="text" name="puhnum" placeholder="puhelin-numero" value={this.state.puhnum} onChange={this.handleChange} />
                    <label>Salasana</label>
                    <input type="text" name="salasana" placeholder="Salasana" value={this.state.salasana} onChange={this.handleChange} />
                    <button>Kirjaudu sisään</button>
                </form>
                <nav className="navigointi">
           <Link className="naviNimi" to="/Rekisteroityminen"> <button className="naviNappi">Rekisteröidy</button></Link>
            </nav>
            </div>
        )
    }
   
}
