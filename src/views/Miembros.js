import React from 'react'

import Miembros from '../components/Miembros';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import '../components/styles/Header.css';
import '../components/styles/Footer.css';
import '../components/styles/Login.css';


function miembros() {
    return (
      <div>
        <>
          <Header/>
          <Miembros/>
          <Footer />
        </>
      </div>
  )
}

export default miembros;
