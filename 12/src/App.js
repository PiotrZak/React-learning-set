import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Form} from './components/form'
import {ApiCall} from './components/display'
import {Display} from './components/display'

function App() {
  return (
    <div className="App">
      <Display/>
      <Form/>
    </div>
  );
}

export default App;
