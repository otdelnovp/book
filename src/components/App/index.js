import React, { Component } from 'react';
import './base.css';

import Header from '../Header';
import Home from '../Home';
import Catalog from '../Catalog';
import Footer from '../Footer';

export default class App extends Component {

  render() {
    return (
      <div className="main">

        <Header/>

        <Home/>

        <Catalog/>

        <Footer/>

      </div>
    )
  }
}
