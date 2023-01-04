import React from 'react'
import "../components/styles/Miembros.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemMember = ({nombre, gustos}) => {
  return <div class="card border-secondary mb-4 " >

    <div class=" text-center">
     <h4> <span class="badge bg-secondary d-grid gap-2  ">{nombre}</span></h4>
    </div>
     <div class="card-body text-secondary">
           <p className="card-text">{gustos}</p>
     </div>
     
  </div>;
}

export default ItemMember;



