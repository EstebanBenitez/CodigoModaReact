import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './views/Registro';
import Login from './views/login';
import Miembros from './views/Miembros';
import Home from './views/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);



