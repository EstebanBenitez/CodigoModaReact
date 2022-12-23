import React from 'react'

import MiembrosAdmin from '../components/MiembrosAdmin';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import '../components/styles/Header.css';
import '../components/styles/Footer.css';
import '../components/styles/Login.css';


function miembrosAdmin() {
    return (
      <div>
        <>
          <Header />
          <MiembrosAdmin />
          <Footer />
        </>
      </div>
  )
}

export default miembrosAdmin;
