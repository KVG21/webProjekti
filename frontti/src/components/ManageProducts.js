import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './styles/managePages.css' // Tällä sivulla on niin vähän omia tyylityksiä, joten päädyin käyttämään samaa css tiedostoa näille manage-sivuille.
import '../App.css'

export default function ManageProducts() {

    const [products, setProducts] = useState([])

    const  {idRavintola}  = useParams();
    console.log(idRavintola)
    const url = "http://localhost:3001/tuote/"+idRavintola
    console.log(url)

  useEffect(async() =>{ //fetch items from backend api
    const result = await fetch(url).then((res)=>
      res.json()
    )
    setProducts(result)
  }, [])

    const deleteProduct = async(idTuote) => {
        let uudetTuotteet = [...products];
        let poistettuTuote = uudetTuotteet.findIndex(p => p.id === idTuote);
        await fetch(`http://localhost:3001/tuote/${idTuote}`, { method: 'DELETE'})
        uudetTuotteet.splice(poistettuTuote, 1);
        setProducts(uudetTuotteet);
    }

    const createProduct = async(item) => {
        await fetch(`http://localhost:3001/tuote`,{ method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
        kategoria: item.kategoria,
        nimi: item.tuotenimi,
        kuvaus: item.kuvaus,
        hinta: item.hinta,
        kuva: item.tuotekuva,
        ravintolaID: Number(idRavintola),    
        })})
        const resultTuote = await fetch(`http://localhost:3001/tuote`).then((res) => 
        res.json()
        )
        setProducts(resultTuote)
    }
    const [kategoria, setKategoria] = useState("")
    const [tuotenimi, setTuotenimi] = useState("")
    const [kuvaus, setKuvaus] = useState("")
    const [hinta, setHinta] = useState("")
    const [tuotekuva, setTuotekuva] = useState("")

    const clearFields = () => {
        setKategoria("")
        setTuotenimi("")
        setKuvaus("")
        setHinta("")
        setTuotekuva("")
    }

  return (
    <div>
    <div className="name">
            <nav className="navigation">
           <Link className="navName" to="/Ravintoloitsija"> <button className="navbtn">Takaisin</button></Link>
           <Link className="navName" to="/Etusivu"> <button className="navbtn">Etusivu</button></Link>
            </nav> 
    </div>        
    <div className="tuoteCont">
    <h2 className="manageTitle">Lisää tuote</h2>
            <div className="inputDesc"> Kategoria <input value={kategoria} onChange={(event) => setKategoria(event.currentTarget.value)} type="text"/></div>
            <div className="inputDesc"> Nimi <br></br><input value={tuotenimi} onChange={(event) => setTuotenimi(event.currentTarget.value)} type="text"/></div>
            <div className="inputDesc"> Kuvaus <input value={kuvaus} onChange={(event) => setKuvaus(event.currentTarget.value)} type="text"/></div>
            <div className="inputDesc"> Hinta <input value={hinta} onChange={(event) => setHinta(event.currentTarget.value)} type="text"/></div>
            <div className="inputDesc"> Kuva URL <input value={tuotekuva} onChange={(event) => setTuotekuva(event.target.value)} type="text"/></div>

                <button className="savebtn" onClick={()=>{
                    createProduct({
                    tuotenimi,kuvaus,hinta,tuotekuva
                })
                clearFields();                            
                }}>Tallenna</button>
    </div>
    <div className="deleteCont">
                <h2 className="manageTitle">Poista tuote</h2>
                {products.map(({idTuote,nimi}) =>(
                    <div className="itemsForDelete">
                        <p>{nimi}</p>
                        <button className="deletebtn" onClick={ ()=>{
                            deleteProduct(idTuote)
                        }}>Poista</button>
                        </div>
                ))}
                </div>
            </div>
  )
}
