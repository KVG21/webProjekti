import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/Receipt.css'

export default function Receipt() {
    const [receipt, setreceipt] = useState([])
    const  {id}  = useParams();
  console.log(id)
  const url = "http://localhost:3001/historia"
  console.log(url)

    useEffect(async() => {
        const result = await fetch(url).then((res)=>
        res.json())
        setreceipt(result)
        console.log(receipt)
    }, [])


    return (
        <div>
        <div className="searchBarContainer">
        <div className='receiptContainer'>
        <Link className="navName" to="/Etusivu"> <button className="navbtn">Etusivu</button></Link>
        </div>
        </div>
        {receipt.map(({osoite, pvm, tuotteet, summa}) => (
                    <div className="clients_receipt">
                        <p>{osoite}</p>
                        <p>{pvm}</p>
                        <p>{tuotteet}</p>
                        <p>{summa} $</p>
        </div>
        ))}</div>
    )
}
