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




<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-secondary">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>