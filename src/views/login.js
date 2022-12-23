import React from 'react'

import Login from '../components/Login';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import '../components/styles/Header.css';
import '../components/styles/Footer.css';
import '../components/styles/Login.css';

function login() {
    return (
      <div>
        <>
          <Header />
          <Login />
          <Footer />
        </>
      </div>
  )
}

export default login;
