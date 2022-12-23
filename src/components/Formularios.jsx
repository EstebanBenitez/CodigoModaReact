
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Fragment,useState} from 'react';
import Header from "../Partials/Header"

<Header />


function Formulario() {
  
  const [Relaciones,setDatos] =useState({
    nombre: ``,
    gustos:``,
    clave:``,
    correo:``
  })

  const registros =(event)=>{
    console.log (event.target.value )
    setDatos({
      ...Relaciones,

      [event.target.value ]:event.target.value
    })

  }
  
  return (
< form class = "formulario">
   <Fragment>
        <h1>Registrate</h1>
        
        <div class="contenedor">

         <div class='input-contenedor'>
          <input placeholder='Ingrese Nombre'
          className='from-control'
          type= "text"  
           name="nombre" 
           onChange={registros}>
          </input>
          </div>
        
        

          <div class="input-contenedor">
          <input
           placeholder='Ingrese Tus Gustos '
           className='from-control'
           type="text"
           name="gustos"
           onChange={registros}>
           </input>
          </div>

          <div class="input-contenedor">
          <input
           placeholder='clave '
           className='from-control'
           name="clave"
           type="password"
           onChange={registros} >
           </input>
          </div> 





          
          <div class="input-contenedor">
          <input
           placeholder='Ingrese correo '
           className='from-control'
           type="email"
           name="email"
           onChange={registros}>
           </input>
          </div> 

          
       <input type="submit" value="Registrate " class="button">
       </input>

        <input type="checkbox"></input>
         <p> Acepta nuentros Terminos de politica y seguridad.</p> 

       
       
         </div>
    
    </Fragment>
   </form>
  );
}

export default Formulario;