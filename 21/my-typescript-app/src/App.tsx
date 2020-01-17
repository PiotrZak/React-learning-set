import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyMessageProps {
  message: string;
}

function MyMessage({ message }: MyMessageProps) {
  console.log({message})
  return <div>i shall speak! my message is: {message}</div>;
}

class App extends Component {
  
  render() {

    const variable = {
      message: 'my test'
   };



    return (
      <div>
            <button onClick = {() => MyMessage(variable)}>Click!</button>
            <div></div>
      </div>
    );
  }
}

export default App;