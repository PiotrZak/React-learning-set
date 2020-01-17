import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Airport } from './components/Airport.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Airport/>
      </div>
    );
  }
}

export default App;
