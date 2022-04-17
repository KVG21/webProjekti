import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/receipt.css'

export default function Receipt() {
    
    const [receipt, setreceipt] = useState([])
    const  {idAsiakas}  = useParams();


  //fetchaus tietokannasta, haetaan kuittitietoja
    useEffect(async() => {
        const result = await fetch(`http://localhost:3001/historia/${idAsiakas}`).then((res)=>
        res.json()
        )
        setreceipt(result)
        console.log(receipt)
    }, [])
    

//tyylittelyä containerit lähinnä, mappaus, näyttää kuitissa tiedot
return (
    <div>
        <div className="searchBarContainer">
            <div className='receiptContainer'>
                <Link className="navName" to={`/Etusivu/${idAsiakas}`}> <button className="navbtn">Etusivu</button></Link>
            </div>
        </div>
            {receipt.map(({osoite, pvm, tuotteet, summa}) => (
                <div className="clients_receipt">
                    <p>{osoite}</p>
                    <p>{pvm}</p>
                    <p>{tuotteet}</p>
                    <p>{summa} $</p>
                </div>
            ))}
        </div>
    )
}
