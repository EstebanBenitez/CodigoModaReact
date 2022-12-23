import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import  './components/styles/Header.css';
import  './components/styles/Formulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loguin from './components/Loguin';
import  './components/styles/Loguin.css';
import  './components/styles/Header.css';
import Formulario from './components/Formularios';
import  './components/styles/Footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
