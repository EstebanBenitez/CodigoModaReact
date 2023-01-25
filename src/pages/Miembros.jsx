import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IzquierdaGrupo} from "../components/IzquierdaGrupo";
import ListMembers from "../components/ListMembers";
import "../components/styles/styles.css";

function Miembros() {

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to={"/"} className="btn btn-primary mt-3 px-5" type="button">Regresar</Link>
            </div>
            <section id="pantalla-d-grupo">
                <IzquierdaGrupo/>
            </section>
            <ListMembers/>


            <Container className="pt-4 fs-5 t ">

                <h4>Fechas Especiales:</h4>
                <div id="contenedor">
                    <h5>Primera endulzada</h5>
                    <p type="date" className="fecha">22 de diciembre </p>
                </div>

            </Container>

        </>
    );
};

export default Miembros;
