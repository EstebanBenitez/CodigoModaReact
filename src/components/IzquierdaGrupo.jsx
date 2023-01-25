import React from 'react';
import {Container} from 'react-bootstrap';

export const IzquierdaGrupo = () => {
    return <Container className=" pt-4">
        <div className="info-header">
            <div className="fs-5 d-flex align-items-center gap-2 ">
                <p>Estas en el grupo:</p>
                <p className="fs-4 text fw-bold ">Los Carteleros</p>
            </div>
            <div className="fs-5 d-flex  alaing items-center gap-2 ">
                <p>Tu Amigo Secreto es :</p>
                <p className="fs-4 text fw-bold gap-3 ">********</p>
                <button className="btn btn-secondary btn-sm">Mostrar</button>
            </div>
        </div>
    </Container>;

};
