import React from 'react';
import {Link} from "react-router-dom";


export default function SpecialDates  () { 
  return (
    <>
    <section>
        <h3 className="derecha-grupo d-flex flex-row w-100">Fechas Especiales</h3>
        <br/>
        <div className="derecha-grupo d-flex flex-row w-100">
        <textarea autoCapitalize="characters" placeholder="Eventos especiales"
                className="descripción p-2 w-100%"></textarea>
        <div className="p-2">
          <Link to={"/"} className="btn btn-primary mt-3 px-3" type="button">Agregar</Link>
        </div>
        </div>
    </section>
    <br/><br/><br/>
    </>
  )
}
