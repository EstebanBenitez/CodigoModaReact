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
                <input class="input-index-group" type="text" data-label="grupo" name="grupo"></input>
                <button class="bIngresar" href="">Ingresar</button>
            </div>
            <div class="derecha">
                <h2>¿No tienes un grupo? Crealo.</h2>
                <label>Nombre del grupo:</label>
                <input class="input-grupo" type="text" data-label="crear-grupo" name="crear-grupo"></input>
                <button class="bCrear" href="">Crear Grupo</button>
            </div>
        </section>
        </>
     )
}
;


export default Home;


