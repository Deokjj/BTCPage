import './App.scss';
import React from 'react';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

function App() {
  return (
    <div className="App">
      <Intro />
      <Features />
    </div>
  );
}

export default App;
