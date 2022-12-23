

import React ,{Fragment,useState} from 'react';

function Login() {
  
    const [Relaciones,setDatos] =useState({
      
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
                <h1>Iniciar sesión </h1>
                
                <div class="contenedor">
        
                
                  <div class="input-contenedor">
                  <input
                   placeholder='Ingrese correo '
                   className='from-control'
                   type="email"
                   name="email"
                   onChange={registros}>
                   </input>
                  </div> 
        
                  <div class="input-contenedor">
                  <input
                   placeholder='clave '
                   className='from-control'
                   name="calve"
                   type="password"
                   onChange={registros} >
                   </input>
                  </div> 
        

                  
               <input type="submit" value="Registrate " class="button">
               </input>
         
                 <p> Acepta nuentros Terminos de politica y seguridad.</p> 
        
               
               
                 </div>
            
            </Fragment>
           </form>
          );
        }
        
        export default Login;