import React, {useState} from 'react';
import ItemMember from './ItemMember';

function useMembers() {
    const data = JSON.parse(localStorage.getItem("personas"));
    const [miembros] = useState(data);
    console.log(miembros);
    return miembros;
}

export default function ListMembers() {
    const miembros = useMembers();
    return miembros.map((item, i) => <ItemMember key={i} {...item}/>);
};
