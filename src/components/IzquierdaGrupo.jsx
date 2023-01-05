import React from 'react'
import { Container } from 'react-bootstrap'

export const IzquierdaGrupo = () => {
  return <Container className=" pt-4">
    <div className="info-header">
        <div className="fs-5 d-flex align-items-center gap-2 ">
        <tet>Estas en el grupo:</tet>
        <tet className="fs-4 text fw-bold ">Los Carteleros</tet>
        </div>
        <div className="fs-5 d-flex  alaing items-center gap-2 ">
         <tet>Tu Amigo Secreto es :</tet>
         <tet  className="fs-4 text fw-bold gap-3 ">******** </tet>
        <botoon className="btn btn-secondary btn-sm">Mostrar</botoon>
        </div>
    </div>
    </Container>
  
}
