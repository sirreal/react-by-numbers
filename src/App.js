/** @format */

import React, { Component } from 'react';
import './App.css';

import * as exercises from './exercises';

class App extends Component {
  render() {
    const params = new URL(window.location.href).searchParams;
    const exercise = params.get('exercise');

    const Content = exercises[exercise] ? exercises[exercise] : Welcome;

    return (
      <div className="App">
        <nav className="App__Nav">
          {Object.keys(exercises).map(component => (
            <a key={component} href={`/?exercise=${component}`}>
              {component}
            </a>
          ))}
        </nav>
        <Content />
      </div>
    );
  }
}

function Welcome() {
  return (
    <section>
      <header>
        <h1>Welcome to the exercises!</h1>
      </header>
      <div>
        <p>Click on an exercise to begin</p>
      </div>
    </section>
  );
}

export default App;
