import React from "react";
import logo from './../assets/img/logo.png';


function  Footer(){
    return(
        <>
            <footer class="Sfooter">
                    <img src={logo} width="150px" alt="Logo"></img>
                <div class="Smapa">
                    <h3>Mapa del sitio</h3>
                    <a href>Iniciar sesión</a>
                    <a href>Registrarse</a>
                </div>
                <div>
                    <h3>Datos de contacto</h3>
                    <p><strong>Ubicación: </strong>Medellín, Colombia</p>
                    <p><strong>Email: </strong>atencion@lineadirecta.com</p>
                    <p><strong>Teléfono: </strong> +57 6044485533</p>
                </div>
            </footer> 
</>
    )
}

export default Footer ;