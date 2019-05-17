import './App.scss';
import React from 'react';
import Intro from './Intro/Intro';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

function App() {
  return (
    <div className="App">
      <Intro />
    </div>
  );
}

export default App;
