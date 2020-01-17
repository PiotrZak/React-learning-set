
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './tablerow';

export  function ApiCall() {

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/business',
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  
  return (
    <ul>
       <div>
        <h3 align="center">Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>GST Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>

                {data.hits.map(item => (
                  <ul key={item.objectID}>
                            <li>  {this.props.obj.person_name}</li>
                            <li> {this.props.obj.business_name}</li>
                            <li>  {this.props.obj.business_gst_number}</li>
                  </ul>
                ))}

          </tbody>
        </table>
      </div>
    </ul>
  );
}

export class Display extends Component {

constructor(props){
    super(props);
    this.state = {business: []};
}




componentDidMount(){
    axios.get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <TableRow obj={object} key={i} />;
    });
  }




  render() {
    return (
      <div>
        <h3 align="center">Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>GST Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
}







