import React from 'react'

import Home from '../components/Home';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import '../components/styles/Header.css';
import '../components/styles/Footer.css';
import '../components/styles/styles.css';

function home() {
    return (
      <div>
        <>
          <Header />
          <Home />
          <Footer />
        </>
      </div>
  )
}




export default home;
