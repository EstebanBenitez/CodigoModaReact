

import React from 'react'
import ItemMember from './ItemMember';

const ListMembers= () => {
  return <div className="info-members">
  <div className="fs-3 fw-bold ">Miembros:</div>
  <div className="list-members mt-3">

       {

          [1,2,3,4 ].map((item) => {
             return  <ItemMember/>
          })
       }




      
  </div>
   
</div>

}


export default ListMembers;