

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
        
                
                  <div class="contenedor">
                  <input
                   placeholder='Ingrese correo '
                   className='from-control'
                   type="email"
                   name="email"
                   onChange={registros}>
                   </input>
                  </div> 
        
                  <div class="contenedor">
                  <input
                   placeholder='clave '
                   className='from-control'
                   name="calve"
                   type="password"
                   onChange={registros} >
                   </input>
                  </div> 
        

                  
                  <button className="btn btn-primary btn-">Ingresar</button>
         
                 <p> Acepta nuentros Terminos de politica y seguridad.</p> 
        
               
               
                 </div>
            
            </Fragment>
           </form>
          );
        }
        
        export default Login;