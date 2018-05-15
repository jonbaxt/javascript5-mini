import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';    //Was missing ./ from movie call.

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlerield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {

    const badMovies = this.state.badMovies.map( movie => {    
      return Movie(movie)                                         //Did not declare return
      // <Movie movie={movie} />          //Declared the code as a Component and not a function
    })

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
        {badMovies}
      </div>
    );
  }
}

export default App;
