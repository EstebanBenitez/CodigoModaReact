import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState} from 'react';
import "../components/styles/Formulario.css";


function Register() {
    const [relaciones, setDatos] = useState();


    const guardar = (event) => {
        event.preventDefault();
        let personas = JSON.parse(localStorage.getItem("personas") || "[]");

        if (personas?.find(p => p.nombre === relaciones.email)) {
            alert('Ya está registrado ');
            return;
        } else {
            relaciones.isAdmin = false;
            personas.push(relaciones);
            console.log(personas);
            localStorage.setItem("personas", JSON.stringify(personas));

        }
    };

    const handleChange = (event) => {
        setDatos(state => {
            return {
                ...state,
                [event.target.name]: event.target.value
            };
        });
    };

    return (

        <form onSubmit={guardar} className="formulario">
            <Fragment>
                <h1>Registrate</h1>
                <div className="contenedor">
                    <div className="input-contenedor">
                        <input placeholder="Nombre"
                               className="from-control"
                               type="text"
                               name="nombre"
                               onChange={handleChange}>
                        </input>
                    </div>

                    <div className="input-contenedor">
            <textarea
                placeholder="Gustos y Disgustos "
                className="from-control"
                type="text"
                name="gustos"
                onChange={handleChange}>
            </textarea>
                    </div>

                    <div className="input-contenedor">
                        <input
                            placeholder="Clave "
                            className="from-control"
                            name="clave"
                            type="password"
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className="input-contenedor">
                        <input
                            placeholder="Correo "
                            className="from-control"
                            type="email"
                            name="email"
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className="d-grid gap-3 col-8 mx-auto">
                        <button type="submit" className="btn btn-primary btn-">Registro</button>
                    </div>


                    <span>
            ¿ Ya Tienes Cuenta? &nbsp;
                        <a href="/login">Ingresar</a>
          </span>

                </div>

            </Fragment>
        </form>
    );
}

export default Register;
