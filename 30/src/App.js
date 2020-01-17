import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import  AppTest from './components/Articles.js'

import store from "./store/index.js";
import addArticle from "./actions/index.js";

window.store = store;
window.addArticle = addArticle;

class App extends Component {

    constructor(){
      super();

      this.state = {
        articles: [
          {title: "Title 1 mapped", id: 1},
          {title: "Title 2 mapped", id: 2}
        ]
      };
    }

  render() {

      const {articles} = this.state
    return (

      <div className="App">
    {/*<ul>{articles.map(el => <li key ={el.id}>{el.title}</li>)}</ul> */}
      <AppTest/>
      </div>
    );
  }
}

export default App;
