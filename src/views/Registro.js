import React from 'react'

import Formulario from '../components/Formularios';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import '../components/styles/Header.css';
import '../components/styles/Footer.css';
import '../components/styles/Formulario.css';


function registro() {
    return (
      <div>
        <>
          <Header />
          <Formulario />
          <Footer />
        </>
      </div>
  )
}




export default registro;
