import "../components/styles/Formulario.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useState } from 'react';



function Formulario() {

  const [Relaciones, setDatos] = useState({
    nombre: ``,
    gustos: ``,
    clave: ``,
    correo: ``
  })

  const guardar = (event) => { 
    event.preventDefault();
    const personas = JSON.parse(localStorage.getItem("persona")|| "{}");
    if(personas[Relaciones.nombre]) {alert('ya Esta Registrado '); return;}
   personas[Relaciones.nombre] = Relaciones;
   localStorage.setItem("persona" , JSON.stringify(personas));
  }


  const registros = (event) => {
    console.log(event.target.value)
    setDatos(state => {
      return {
        ...state,
        [event.target.name]: event.target.value
      }
    })

  }

  return (

    < form className="formulario">
      <Fragment>

        <h1>Registrate</h1>

        <div className="contenedor">

          <div className='input-contenedor'>
            <input placeholder='Nombre'
              className='from-control'
              type="text"
              name="nombre"
              onChange={registros}>
            </input>
          </div>



          <div className="input-contenedor">
            <textarea
              placeholder='Gustos y Disgustos '
              className='from-control'
              type="text"
              name="gustos"
              onChange={registros}>
            </textarea>
          </div>

          <div className="input-contenedor">
            <input
              placeholder='Clave '
              className='from-control'
              name="clave"
              type="password"
              onChange={registros} >
            </input>
          </div>






          <div className="input-contenedor">
            <input
              placeholder='Correo '
              className='from-control'
              type="email"
              name="email"
              onChange={registros}>
            </input>
          </div>

          <div className="d-grid gap-3 col-8 mx-auto">
            <button onClick={guardar} className="btn btn-primary btn-">Registro <a href='/login'></a> </button>
          </div>


          <span>
            ¿ Ya Tienes Cuenta? &nbsp;
            <a href='/login'>Ingresar</a>
          </span>




        </div>

      </Fragment>
    </form>
  );
}

export default Formulario;