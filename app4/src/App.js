import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind( this );      //Did not bind getCars
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data             //res is not getting the data by itself.
      })
    })
  }

  render() {
    const theCars = this.state.cars.map( car => {
      return (<p key={car.id}>{`${car.color} ${car.year} ${car.make} ${car.model} Price:$${car.price}`}</p>)    //Did not write any display.
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {theCars}

        {/*this.state.cars*/}               {/*Did not declare it outside of render.*/}
      </div>
    );
  }
}

export default App;
