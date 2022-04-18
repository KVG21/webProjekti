import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './styles/managePages.css' // Tällä sivulla on niin vähän omia tyylityksiä, joten päädyin käyttämään samaa css tiedostoa näille manage-sivuille.
import '../App.css'

export default function ManageProducts() {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [picture, setPicture] = useState("")

    const  {idRavintola,idAsiakas}  = useParams();

  useEffect(async() =>{ //Haetaan tuotteet backendistä
    const result = await fetch(`http://localhost:3001/tuote/${idRavintola}`).then((res)=>
      res.json()
    )
    setProducts(result)
  }, [])

    const deleteProduct = async(idTuote) => { 
        let newProds = [...products];
        let deletedProd = newProds.findIndex(p => p.id === idTuote);
        await fetch(`http://localhost:3001/tuote/${idTuote}`, { method: 'DELETE'}) //Poistetaan tuote tietokannasta
        newProds.splice(deletedProd, 1);  //Poistetaan tuote näkymästä
        setProducts(newProds);  //Päivitetään näkymä poiston jälkeen
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
        ravintolaID: Number(idRavintola),   //Talletetaan ravintolaID suoraan, jotta asiakkaan ei tarvitse itse sitä syöttää 
        })})
        const resultTuote = await fetch(`http://localhost:3001/tuote/${idRavintola}`).then((res) => //Päivitetään näkymä lisäyksen jälkeen
        res.json()
        )
        setProducts(resultTuote)
    }

    const clearFields = () => { //Tyhjennetään useState taulukot
        setCategory("")
        setName("")
        setDesc("")
        setPrice("")
        setPicture("")
    }

  return (
    <div>
      <div className="name">
        <nav className="navigation">
          <Link className="navName" to={`/Ravintoloitsija/${idAsiakas}`}> <button className="navbtn">Takaisin</button></Link>
        </nav> 
    </div>   

    <div className="tuoteCont">
      <h2 className="manageTitle">Lisää tuote</h2>
        <div className="inputDesc"> Kategoria <input value={category} onChange={(event) => setCategory(event.currentTarget.value)} type="text"/></div>
          <div className="inputDesc"> Nimi <br></br><input value={name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
            <div className="inputDesc"> Kuvaus <input value={desc} onChange={(event) => setDesc(event.currentTarget.value)} type="text"/></div>
              <div className="inputDesc"> Hinta <input value={price} onChange={(event) => setPrice(event.currentTarget.value)} type="text"/></div>
                <div className="inputDesc"> Kuva URL <input value={picture} onChange={(event) => setPicture(event.target.value)} type="text"/></div>
                  <button className="savebtn" onClick={()=>{createProduct({
                    tuotenimi: name,kuvaus: desc,hinta: price,tuotekuva: picture})
                  clearFields();                            
                }}>Tallenna</button>
              </div>

    <div className="deleteCont">
      <h2 className="manageTitle">Poista tuote</h2>
        {products.map(({idTuote,nimi}) =>(
          <div className="itemsForDelete">
            <p>{nimi}</p>
              <button className="deletebtn" onClick={ ()=>{deleteProduct(idTuote)}}>Poista</button>
            </div>
          ))}
        </div>
      </div>
)}
