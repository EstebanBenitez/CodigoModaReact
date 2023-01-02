import fetch from  'react';
import React, { useEffect, useState } from 'react';
import data from '../data/Miembros.json';
import ItemMember from './ItemMember';


function  useMembers ()  {
  
      const [miembros] = useState(data)

      console.log(miembros);
      
      return miembros
}


export default function ListMembers() {
   const miembros = useMembers()
   return (
   
   
   <div className="info-members">
   <div className="fs-3 fw-bold ">Miembros:</div>
   <div className="list-members mt-3">
 
        {
 
           miembros.map((item, i)  => {
              return  <ItemMember key={i} {...item}/> 
        })
      }
   </div>
    
 </div>

)
   
   
};