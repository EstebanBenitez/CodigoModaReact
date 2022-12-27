import React from "react";
import { Row } from "react-bootstrap";


function Home ()  {

     return (
        <>
    
       <div class="d-grid gap-3 btn-sm tex-end">
                  <button className="btn btn-primary btn-">Ingresar</button>
                  </div>
                  
                  <div class="d-grid gap-3 btn-sm ">
                  <button className="btn btn-primary btn-">Registrar </button>
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


