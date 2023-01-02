import React from 'react'


const ItemMember = ({nombre, gustos}) => {
  return <div className="item mt-2">
     <div className="card">
        <div className="card-body">
           <h5 className="card-title">{nombre}</h5>
           <p className="card-text">{gustos}</p>
        </div>
     </div>
  </div>;
}

export default ItemMember;




