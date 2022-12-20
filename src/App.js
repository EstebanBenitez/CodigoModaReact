import React ,{Fragment, useState} from 'react';



function Formulario() {
  
  const [Relaciones,setDatos] =useState({
    nombre: ``,
    apellido: ``,
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
< div className = "container">
   <Fragment>
       <h1>Registro</h1>
       <form className='row'>

         <div className="">
          <input placeholder='Ingrese Nombre'
          className='from-control'
          type= "text"  
           name="nombre" 
           onChange={registros}>
          </input>
          </div>
        
          <div className="">
          <input
           placeholder='Ingrese Apellido '
           className='from-control'
           type="text"
           name="apellido"
           onChange={registros}>
           </input>
          </div>


          <div className="">
          <input
           placeholder='Ingrese Tus Gustos '
           className='from-control'
           type="text"
           name="gustos"
           onChange={registros}>
           </input>
          </div>

          <div className="">
          <input
           placeholder='clave '
           className='from-control'
           type="password"
           name="calve"
           onChange={registros} >
           </input>
          </div> 


          
          <div className="">
          <input
           placeholder='Ingrese correo '
           className='from-control'
           type="email"
           name="email"
           onChange={registros}>
           </input>
          </div> 

          <div className="">
          <button className='btn btn-primary' type='submit'>Registrame</button>
          </div>


       </form>
       
    
    
    </Fragment>
   </div>
  );
}

export default Formulario;
