import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container} from 'react-bootstrap';
import "../components/styles/Miembros.css";

const ItemMember = ({nombre, gustos}) => {
    return (
        <Container className="mt-2 ">
            <div classclass="card border-secondary mb-2">
                <div className=" text-center">
                    <h4><span className="badge bg-secondary d-grid gap-2">{nombre}</span></h4>
                </div>
                <div className="card-body text-secondary mb-4  ">
                    <p className="card-text">{gustos}</p>
                </div>
            </div>
        </Container>
    );
};

export default ItemMember;



