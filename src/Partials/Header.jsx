import React from "react";
import logo from './../assets/img/logo.png';

function Header(){
    return(
      <>
        <header>
            <img src={logo} width="150px" alt="Logo"></img>
            <nav class="Snavbar">
                <a href=""> Iniciar sesión </a>
                <a href=""> Registrarse </a>
            </nav> 
        </header>
      </>
    
    )
}  

export default Header ;
