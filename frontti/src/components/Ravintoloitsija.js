import React, { useState } from 'react'

export default function Ravintoloitsija(props) {
    const [Nimi, setNimi] = useState("")
    const [Osoite, setOsoite] = useState("")
    const [Aukiolo, setAukiolo] = useState("")
    const [Kuva, setKuva] = useState("")
    const [Tyyppi, setTyyppi] = useState("")
    const [Hintataso, setHintataso] = useState("")
    const [Arviointi, setArviointi] = useState("")
    const [RavintoloitsijaID, setRavintoloitsijaID] = useState("")
  return (
    <div classname="ravintoloitsijaCont">
        <div classname="ravintolaLuontiCont">
            <h2 classname="luontiTitle">Lisää ravintola</h2>
            <div classname="ravintola-save"> Nimi<input value={Nimi} onChange={(event) => setNimi(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Osoite<input value={Osoite} onChange={(event) => setOsoite(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Aukiolo<input value={Aukiolo} onChange={(event) => setAukiolo(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Kuva URL<input value={Kuva} onChange={(event) => setKuva(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Tyyppi<input value={Tyyppi} onChange={(event) => setTyyppi(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Hintataso<input value={Hintataso} onChange={(event) => setHintataso(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Arviointi<input value={Arviointi} onChange={(event) => setArviointi(event.currentTarget.value)} type="text"/></div>
            <div classname="ravintola-save"> Ravintoloitsija ID<input value={RavintoloitsijaID} onChange={(event) => setRavintoloitsijaID(event.currentTarget.value)} type="text"/></div>
        
                <button classname="saveNappi"onClick={()=>props.uusiRavintola({
                    Nimi,Osoite,Aukiolo,Kuva,Tyyppi,Hintataso,Arviointi,RavintoloitsijaID
                })}>Tallenna</button>
        </div>
    </div>
  )
}
