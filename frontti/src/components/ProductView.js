import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/productView.css'

export default function ProductView() { 

  const [buyInfo, setBuyInfo] = useState("")
  const [Products, setProducts] = useState([]) 
  const [ShoppingCart,setShoppingCart] = useState([])
  const [address,setAddress] = useState("")
  const [Total,setTotal] = useState(0);
  const [customer, setCustomer] = useState("")

  const  {idRavintola,idAsiakas}  = useParams();

  useEffect(async() =>{ //Haetaan tiedot backendistä
    const result = await fetch(`http://localhost:80/tuote/${idRavintola}`).then((res)=>
      res.json())
    setProducts(result)
  }, [])

  useEffect(async() =>{ // Haetaan tiedot backendistä
    const result = await fetch(`http://localhost:80/asiakas/${idAsiakas}`).then((res)=>
      res.json())
    setCustomer(result)
  }, [])

  const addToCart = (idTuote,nimi,hinta) => {  //lisätään ostoskoriin, jos tuotetta ei valmiiksi ole korissa niin tehdään uusi segmentti, muuten lisätään olemassa olevaan lisää hintaa ja kappalemäärää
    setTotal(Total+hinta) //tämä liittyy kokonaishinnan laskemiseen
    let newCart = [...ShoppingCart]
    let result = newCart.findIndex(i => i.idTuote === idTuote)
    if(result === -1){ //eli tehdään uusi tuote koska tällä saadulla indexillä ei löydetty tuotetta taulusta
      newCart = [...ShoppingCart, {
        idTuote : idTuote,
        kpl : 1,
        nimi : nimi,
        hinta : hinta
      }]; setShoppingCart(newCart);
    } else { //saadulla indexissä löydettiin tuote joten lisätään hintaa ja kappalemäärää
      let additions = {...newCart[result]}
        additions.hinta +=hinta;
        additions.kpl = additions.kpl+1;
        newCart[result] = additions;
        setShoppingCart(newCart);
    }
  }

  const RemoveFromCart = (idTuote) => { //poistetaan tuotetta korista, samalla lasketaan hinta uudestaan ja poistetaan kappalemäärää
    let newCart = [...ShoppingCart];
    let result = newCart.findIndex(i => i.idTuote === idTuote);
    let TotalDeletion = Products.findIndex(i => i.idTuote === idTuote); //kokonaishinnan uudelleen laskeminene vaatii että haetaan saadulla indexillä alkuperäisestä taulukosta hinta jota voidaan käyttää, muuten saatu kokonaishinta sekoaa.

    if(result !== -1){ //elikkä löydettiin indexillä tuote ja poistetaan hintaa ja kappalemäärää
      let Deletion = {...newCart[result]}
      let Substraction = {...Products[TotalDeletion]}
     
        if(Deletion.kpl <= 1) { //jos kappale määrä on 1 ja poistetaan viellä kerran niin poistuu koko tuote näkyvistä
          newCart.splice(result, 1);        
        }else{
          Deletion.hinta -= Substraction.hinta;
          Deletion.kpl = Deletion.kpl-1;
          newCart[result] = Deletion;
        } 
    setShoppingCart(newCart);
    setTotal(Total-Substraction.hinta) //kokonaishinnan laskeminen 
  }} 
  
  const BuyProducts = (Address) => { //Osto funktio, ei ehkä fiksuin mutta saadaan tehtyä kuitti ja lähetettyä tietokantaan.
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`; //pvm tekeminen
    let Items = "";
    let amount = "";

      for(let i = 0; i < ShoppingCart.length; i++) { //otetaan ostoskorissa olevat tuotteet ja rakennetaan niistä yksi pitkä stringgi..
          let addition = {...ShoppingCart[i]}       
          Items = Items + "  " +addition.nimi + " kpl: " + addition.kpl;
          amount += addition.kpl
      }
    if(Items.length === 0 || Address.length === 0) { //tarkistetaan ettei kuitti ole tyhjää täynnä, eli osoite täytyy antaa ja jotain on koriin lisättävä
        setBuyInfo("Jokin meni pieleen, Annoitko osoitteen tai onko korissasi mitään?")
      } else {
        fetch(`http://localhost:80/historia`,{ method: 'POST',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
            osoite : address,
            pvm: date,
            tuotteet: Items,
            summa: Total,
            asiakasID: Number(idAsiakas)
          })})
           setBuyInfo("Ostoksesi onnistui :)")
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
                    <div className="productCont1">
                      <img className="productImg"src={Products.kuva} alt={Products.nimi} />
                        <div className="products">
                      <div className="productCont2">
                        <p>Nimi: {Products.nimi} </p>
                          <p>Kategoria: {Products.kategoria}</p>
                        <p>Kuvaus : {Products.kuvaus}</p> 
                      <p>Hinta : {Products.hinta} $</p>           
                      </div>
                    <button className="subButtons" onClick={ ()=> addToCart(Products.idTuote,Products.nimi,Products.hinta) }>+</button>              
                  </div> 
                   
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
                  <p>Kokonais hinta: {Total} $</p>
                    <div className="inputDesc"> Toimitus osoite
                      <input value={address} onChange={(event) => setAddress(event.currentTarget.value)} type="text" placeholder="Anna toimitusosoite"/>
                    <button className="subButtons blue" onClick={ ()=> BuyProducts(address)}>Osta</button>
                  </div>
                  <div className="infoTxt">{buyInfo}</div>
                </div>           
              </div>
            </div>
          </div>
        </div>   
  )
}
