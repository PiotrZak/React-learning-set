import React, { Component } from 'react';

import {AirportList} from './AirportList';

export  class Airport extends Component {

    state = {
        airport:[]
    };

    componentDidMount() {
        fetch("http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=stockholm&apiKey=prtl6749387986743898559646983194",{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
          .then(res => res.json())
          .then(json => this.setState({airport: json.results}));
      }


  render() {
    return (
      <div className="App">
         <AirportList airport ={this.state.airport} />
      </div>
    );
  }
}


