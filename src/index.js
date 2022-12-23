import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Partials/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './components/styles/Header.css';
import  './components/styles/Footer.css';
import Registro from './Registro';
import Login from './login';
import Miembros from './Miembros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Miembros/>
  </React.StrictMode>
);



