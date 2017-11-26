import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as exercises from 'exercises';

class App extends Component {
  state = { exercise: null }

  render() {
    return (
      <div className="App">
        <nav>
          { Object.keys( exercises ).map( ExerciseComponent => <a href=`/?exercise=${}`
        </nav>
      </div>
    );
  }
}

export default App;
