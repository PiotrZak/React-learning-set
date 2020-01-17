import React, { Component } from 'react';
import {AirportItem} from './AirportItem';


export  class AirportList extends Component {

    airportToAirportItem = airport => {
        const name = airport.Places.placeId;

        return <AirportItem name = {name}/>
    }


  render() {
    return (
        <ul>
            {this.props.airport.map(this.airportToAirportItem)}
        </ul>
    );
  }
}