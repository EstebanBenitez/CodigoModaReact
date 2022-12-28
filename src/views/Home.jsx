import React from "react";
import "../components/styles/styles.css";
import {Link} from "react-router-dom"

function Home ()  {

     return (
        <>
    
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to={"/login"} className="btn btn-primary mt-3 px-5" type="button">Ingresar</Link>
    <Link to={"/register"} className="btn btn-primary mt-3 px-5" type="button">Registrar</Link>
  
</div>
                  
        <section id="pantalla-dividida">
            <div class="izquierda">
                <h2>¿Ya tienes un grupo al que perteneces?</h2>
                <label>Ingresa el nombre del grupo para unirte:</label>
                <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>&nbsp;
                <button type="button" class="btn btn-secondary">Ingresar</button>
                </div>
                
            </div>
            <div class="derecha">
                <h2>¿No tienes un grupo? Crealo.</h2>
                <label>Nombre del grupo:</label>
                <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>&nbsp;
                <button type="button" class="btn btn-secondary">Ingresar</button>
                </div>
            </div>
        </section>
        </>
     )
}
;


export default Home;


