import './App.scss';
import React from 'react';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import Testimonials from'./Testimonials/Testimonials';
import BuyBTC from './BuyBTC/BuyBTC';
import {Footer} from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Features />
      <Testimonials />
      <BuyBTC />
      <Footer />
    </div>
  );
}

export default App;
