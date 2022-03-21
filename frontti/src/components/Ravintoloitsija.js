import React, { useState } from 'react';



function Ravintoloitsija(props) {
    const [Nimi, setNimi] = useState("")
    const [Osoite, setOsoite] = useState("")
    const [Aukiolo, setAukiolo] = useState("")
    const [Kuva, setKuva] = useState("")
    const [Tyyppi, setTyyppi] = useState("")
    const [Hintataso, setHintataso] = useState("")
    const [Arviointi, setArviointi] = useState("")
    const [RavintoloitsijaID, setRavintoloitsijaID] = useState("")

    const [tuotenimi, setTuotenimi] = useState("")
    const [kuvaus, setKuvaus] = useState("")
    const [hinta, setHinta] = useState("")
    const [tuotekuva, setTuotekuva] = useState("")
    const [ravintolaID, setRavintolaID] = useState("")
  return (
        <div>
            <div classname="ravintolaCont">
                <h2 classname="luontiTitle">Lisää ravintola</h2>
                    <div classname="inputDesc"> Nimi <input value={Nimi} onChange={(event) => setNimi(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Osoite <input value={Osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Aukiolo <input value={Aukiolo} onChange={(event) => setAukiolo(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Kuva URL <input value={Kuva} onChange={(event) => setKuva(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Tyyppi <input value={Tyyppi} onChange={(event) => setTyyppi(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Hintataso <input value={Hintataso} onChange={(event) => setHintataso(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Arviointi <input value={Arviointi} onChange={(event) => setArviointi(event.currentTarget.value)} type="text"/></div>
                    <div classname="inputDesc"> Ravintoloitsija ID <input value={RavintoloitsijaID} onChange={(event) => setRavintoloitsijaID(event.currentTarget.value)} type="text"/></div>
        
                        <button classname="saveNappi"onClick={()=>props.uusiRavintola({
                            Nimi,Osoite,Aukiolo,Kuva,Tyyppi,Hintataso,Arviointi,RavintoloitsijaID
                        })}>Tallenna</button>
            </div>

            <div classname="tuoteCont">
                <h2 classname="luontiTitle">Lisää tuote</h2>
                        <div classname="inputDesc"> Nimi <input value={tuotenimi} onChange={(event) => setTuotenimi(event.currentTarget.value)} type="text"/></div>
                        <div classname="inputDesc"> Kuvaus <input value={kuvaus} onChange={(event) => setKuvaus(event.currentTarget.value)} type="text"/></div>
                        <div classname="inputDesc"> Hinta <input value={hinta} onChange={(event) => setHinta(event.currentTarget.value)} type="text"/></div>
                        <div classname="inputDesc"> Kuva <input value={tuotekuva} onChange={(event) => setTuotekuva(event.currentTarget.value)} type="text"/></div>
                        <div classname="inputDesc"> Ravintola ID <input value={ravintolaID} onChange={(event) => setRavintolaID(event.currentTarget.value)} type="text"/></div>

                            <button classname="saveNappi" onClick={()=>props.uusiTuote({
                                tuotenimi,kuvaus,hinta,tuotekuva,ravintolaID
                            })}>Tallenna</button>
            </div>    
        </div>

  )
}
export default Ravintoloitsija;