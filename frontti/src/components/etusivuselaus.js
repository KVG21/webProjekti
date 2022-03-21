import React from "react";
import etusivu from "../Etusivu";

export default function ravintola(props) {
    return (
<div className="ravintola">
<div>{ props.id }</div>
<div><h1> { props.nimi }</h1></div>
<div>{ props.hintaluokka }</div>
</div>


    );
}