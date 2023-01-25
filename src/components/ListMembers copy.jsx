import React, { useState } from 'react';
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
   
    <>

        {
 
           miembros.map((item, i)  => {
              return  <ItemMember key={i} {...item}/> 
        })
      }

 </>
)
   
   
};




