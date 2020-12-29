import React, { Component } from 'react';
import pauli from './pauli.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={pauli} className="App-logo" alt="logo" />
          <h2>Pauli</h2>
        </div>
        <p className="App-intro">
          All around nice guy
        </p>
      </div>
    );
  }
}

export default App;
