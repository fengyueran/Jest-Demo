import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import images from './configs/images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={images.cat} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
