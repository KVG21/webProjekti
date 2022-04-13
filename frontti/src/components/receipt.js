import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Tuotesivu.js'
import './Receipt.css'

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
            <button classname="naviNappi"><Link className='naviNappi' to="/Frontpage">Etusivu</Link></button>
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
