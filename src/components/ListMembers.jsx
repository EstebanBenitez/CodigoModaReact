import React from 'react';
import {useAuth} from "../context/AuthContext";
import ItemMember from './ItemMember';

export default function ListMembers() {
    const {user} = useAuth();
    const personas = JSON.parse(localStorage.getItem("personas"));
    const miembros = personas.filter(p => p.group === user.group);
    return miembros.map((item, i) => <ItemMember key={i} {...item}/>);
};
