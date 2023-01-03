import React from "react";
import "../components/styles/styles.css"
import {Link} from "react-router-dom"
import ListMembers from "../components/ListMembers";
import { IzquierdaGrupo } from "../components/IzquierdaGrupo";

function Miembros () {

  return (
<>
<div className ="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to={"/"} className="btn btn-primary mt-3 px-5" type="button">Regresar</Link>
  
</div>
<section id="pantalla-d-grupo">
  <IzquierdaGrupo/>
</section>

<br /><br /><br />
<ListMembers/>
<br /><br /><br />

<section>
       
    <h4>Fechas Especiales:</h4>
    <div id="contenedor">
        <h5>Primera endulzada</h5>
        <p type="date" className ="fecha">22 de diciembre </p> 
    </div>

</section>

</>
)
};

export default Miembros;