import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
          Mbit
        </p>
        <p className="">
          Mikko Pitkänen
        </p>
        <p className="">
          2817872-4
        </p>
        <p className="btns">
          <a href="https://twitter.com/pitkane" target="_blank" rel="external" className="btn btn--twitter" title="Twitter">Twitter</a>
          <a href="https://github.com/pitkane" target="_blank" rel="external" className="btn btn--github" title="GitHub">GitHub</a>
        </p>
      </div>
    );
  }
}

export default App;
