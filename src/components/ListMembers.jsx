import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemMember from './ItemMember';


const ListMembers = () => {
  
     const [nombre, setNombre] = useState("");
     const [gustos, setGustos] = useState("");
     
      
      const personas = () => {
            return localStorage.getItem(nombre, gustos)
     }


      useEffect(() => {
            setNombre(personas());
            setGustos(personas());
      }, []);

     const vista = () =>{
      personas.render(<ItemMember />)
     }
     
   
};

export default ListMembers;




