import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../components/styles/Login.css";
import {useAuth} from '../context/AuthContext';


const Login = () => {
    const navigate = useNavigate();
    const {signIn, refreshState} = useAuth();
    const [relaciones, setDatos] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        refreshState();
    }, []);

    const handleSession = (event) => {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem("personas") || "[]");

        if (users && users?.find(u => u.email === relaciones.email && u.clave === relaciones.clave)) {
            signIn(users?.find(u => u.email === relaciones.email && u.clave === relaciones.clave)?.email || "");
            navigate(`/miembrosadmin`);
        }
        console.log(users);

        setError("Email o clave incorrectos");
    };

    const handleChange = (event) => {
        setDatos({
            ...relaciones,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={handleSession} className="formulario">
            <Fragment>
                <h1>Iniciar sesión </h1>
                <div className="contenedor">
                    <div className="contenedor">
                        <input
                            placeholder="Ingrese correo "
                            className="from-control"
                            type="email"
                            name="email"
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className="contenedor">
                        <input
                            placeholder="Clave"
                            className="from-control"
                            name="clave"
                            type="password"
                            onChange={handleChange}>
                        </input>
                    </div>


                    <div className="d-grid gap-3 col-8 mx-auto">
                        <button type="submit" className="btn btn-primary btn-">Ingresar</button>
                    </div>


                    <span>
            ¿ No Tienes Cuenta? &nbsp;
                        <a href="/register">registrate</a>
          </span>

                </div>
            </Fragment>
        </form>
    );
};

export default Login;

