import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/productView.css'

export default function ProductView() { 
  const [Products, setProducts] = useState([]) 
  const [ShoppingCart,setShoppingCart] = useState([])
  const [address,setAddress] = useState("")
  const [Total,setTotal] = useState(0);
  const [customer, setCustomer] = useState("")

  const  {idRavintola,idAsiakas}  = useParams();

  useEffect(async() =>{ //fetch items from backend api
    const result = await fetch(`http://localhost:3000/tuote/${idRavintola}`).then((res)=>
      res.json()
    )
    setProducts(result)
  }, [])

  useEffect(async() =>{
    const result = await fetch(`http://localhost:3000/asiakas/${idAsiakas}`).then((res)=>
      res.json()
      )
      setCustomer(result)
  }, [])

  const addToCart = (idTuote,nimi,hinta) => {
    setTotal(Total+hinta) 
    let newCasket = [...ShoppingCart]
    let result = newCasket.findIndex(i => i.idTuote === idTuote)
    if(result === -1){
      let newShoppingCart = [...ShoppingCart, {
        idTuote : idTuote,
        kpl : 1,
        nimi : nimi,
        hinta : hinta
      }]; setShoppingCart(newShoppingCart);
    } else {
      let additions = {...newCasket[result]}
      additions.hinta +=hinta;
      additions.kpl = additions.kpl+1;
      newCasket[result] = additions;
      setShoppingCart(newCasket);
    }
  }

  const RemoveFromCart = (idTuote) => {
    let newCart = [...ShoppingCart];
    let result = newCart.findIndex(i => i.idTuote === idTuote);
    let TotalDeletion = Products.findIndex(i => i.idTuote === idTuote);

      if(result !== -1){
            let Deletion = {...newCart[result]}
            let Substraction = {...Products[TotalDeletion]}
            
            if(Deletion.kpl <= 1) {
                newCart.splice(result, 1);        
              } else{
                  Deletion.hinta -= Substraction.hinta;
                  Deletion.kpl = Deletion.kpl-1;
                  newCart[result] = Deletion;
                } 
              setShoppingCart(newCart);
              setTotal(Total-Substraction.hinta)

      }  
    } 
  
  const BuyProducts = (Address) => {
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    let Items = "";
    let amount = "";

      for(let i = 0; i < ShoppingCart.length; i++) {
          let addition = {...ShoppingCart[i]}       
          Items = Items + "  " +addition.nimi + " kpl: " + addition.kpl;
          amount += addition.kpl
      }
    if(Items.length === 0 || Address.length === 0) {
        return alert("Lisää tuote koriin tai osoite ennen ostoa")
      } else {
        fetch(`http://localhost:3000/historia`,{ method: 'POST',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
          osoite : address,
          pvm: date,
          tuotteet: Items,
          summa: Total,
          asiakasID: idAsiakas
          })})
          return alert("Ostoksesi onnistui :)")
      }
  }

  return (
    <div>
      <div className="header"> 
            <Link className="navName" to={`/etusivu/${idAsiakas}`}>KVG RAFLA</Link>
        </div>
      <div>
    </div>

      <div className="productMainContainer">
            <div className="productContainer">
              <div className="subTitle">Tuotteet</div>
                {Products.map(Products => (
                    <div className="products"> 
                      <img className="productImg"src={Products.kuva} alt={Products.nimi} />
                        <p>{Products.nimi}</p>
                          <p>{Products.kategoria}</p>
                        <p>{Products.kuvaus}</p> 
                      <p>{Products.hinta} $</p>
                    <button className="subButtons" onClick={ ()=> addToCart(Products.idTuote,Products.nimi,Products.hinta) }>+</button>                 
                  </div>                   
                ))}
              </div>
                
            <div className="shoppingCartContainer">
              <div className="subTitle">Ostoskori</div>
                  {ShoppingCart.map(({idTuote,nimi,hinta,kpl}) =>(
                    <div className="shoppingCartItems">
                      <p>{nimi}</p>
                        <p>{hinta} $</p>
                      <p>kpl: {kpl}</p>
                    <button className="subButtons red" onClick={ ()=> RemoveFromCart(idTuote) } >-</button>
                  </div>
                ))}

              <div className="recapitulationContainer">
                <div className="recapitulation">
                  <p>{Total} $</p>
                    <div className="inputDesc"> Toimitus osoite
                      <input value={address} onChange={(event) => setAddress(event.currentTarget.value)} type="text"/>
                    <button className="buyButton" onClick={ ()=> BuyProducts(address)}>Osta</button>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>   
  )
}
