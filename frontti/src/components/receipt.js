import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Tuotesivu.js'
import './receipt.css'

const Receipt = () => {
    const [receipt, setreceipt] = useState([])

    useEffect(async() => {
        const result = await fetch('http://localhost:3001/historia').then((res)=>
        res.json())
        setreceipt(result)
        console.log(receipt)
    }, [])


    return (
        <div className='receiptContainer'>
        <div className='tilaushistoria'></div>
        {receipt.map(({osoite, pvm, tuotteet,summa, asiakasID}) => (
                    <div className="clients_receipt">
                        <p>{osoite}</p>
                        <p>{pvm}</p>
                        <p>{tuotteet}</p>
                        <p>{summa} $</p>
                        <p>{asiakasID}</p>
        </div>
        ))}
        </div>
    )
}
