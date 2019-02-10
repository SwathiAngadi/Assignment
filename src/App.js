import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/header';
import Footer from './components/footer';
import TopCategory from './components/topCategory';
import CartVideos from './components/carVideos';
import MotionVideos from './components/motionVideos';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div class="container">
        <TopCategory />
        <hr/>
        <CartVideos/>
        <hr/>
        <MotionVideos />
      </div>
      <hr/>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
