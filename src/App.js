import React, { Component } from 'react';
import joe from './joe.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={joe} className="App-logo" alt="logo" />
          <h2>Joe</h2>
        </div>
        <p className="App-intro">
          All around nice guy
        </p>
      </div>
    );
  }
}

export default App;
