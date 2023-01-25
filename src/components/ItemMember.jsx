import React from 'react'
import "../components/styles/Miembros.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const ItemMember = ({nombre, gustos}) => {
  return (
  
    <Container className="mt-2 ">
    
    <div class="card border-secondary mb-2" >
     <div class=" text-center">
    <h4> <span class="badge bg-secondary d-grid gap-2">{ nombre }</span></h4>
    </div>
     <div class="card-body text-secondary mb-4  ">
           <p className="card-text">{ gustos }</p>
     </div>
     </div>

   </Container>
)}

export default ItemMember;



