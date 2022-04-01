import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Tuotesivu.js'

const Kuitti = () => {
    const [kuitti, setkuitti] = useState([])

    useEffect(async() => {
        const result = await fetch('http://localhost:3001/historia').then((res)=>
        res.json())
        setkuitti(result)
        console.log(kuitti)
    }, [])


    return (
        <div className='kuittiContainer'>
            {kuitti.map(({tilaushistoria}) => (
                <div className='tilaushistoria'></div>
            ))}
        </div>
    )
}
