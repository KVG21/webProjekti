import React from "react";

export default function Etusivuselaus(props) {
    return (
<div className="ravintola">
<div>{ props.id }</div>
<div><h1> { props.nimi }</h1></div>
<div>{ props.hintaluokka }</div>
</div>


    );
}