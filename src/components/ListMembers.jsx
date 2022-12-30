

import fetch from  'react';
import React, { useEffect, useState } from 'react';
import ItemMember from './ItemMember';

function  ListMembers ()  {
  
      const [miembros, setMiembros] = useState([])

      useEffect(()=>{
         fetch("data\Miembros.json")
         .then(response=>response.json())
         .then(datos=>{
            setMiembros(datos)
         })
      },[])

      return miembros
}


export default function ListMembers(){
   const miembros = ListMembers()
   return (
   
   
   <div className="info-members">
   <div className="fs-3 fw-bold ">Miembros:</div>
   <div className="list-members mt-3">
 
        {
 
           miembros.map(item => {
              return  <ItemMember/>
           })
        }
 
 
 
 
       
   </div>
    
 </div>

   )
   
};