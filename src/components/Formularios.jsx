
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Fragment,useState} from 'react';

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
          <input placeholder='Nombre'
          className='from-control'
          type= "text"  
           name="nombre" 
           onChange={registros}>
          </input>
          </div>
        
        

          <div class="input-contenedor">
           <textarea
           placeholder='Gustos y Disgustos '
           className='from-control'
           type="text"
           name="gustos"
           onChange={registros}>
           </textarea>
          </div>

          <div class="input-contenedor">
          <input
           placeholder='Clave '
           className='from-control'
           name="clave"
           type="password"
           onChange={registros} >
           </input>
          </div> 





          
          <div class="input-contenedor">
          <input
           placeholder='Correo '
           className='from-control'
           type="email"
           name="email"
           onChange={registros}>
           </input>
          </div> 
   
      <button className="btn btn-primary btn-">Registro</button>
       

        

       
       
         </div>
    
    </Fragment>
   </form>
  );
}

export default Formulario;