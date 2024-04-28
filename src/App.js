import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <p className="App-intro">
          Mbit Finland
        </p>
        <p className="">
          Mikko Kohtala
        </p>
        <p className="">
          FI28178724
        </p>
        <p className="btns">
          <a
            href="https://github.com/pitkane"
            target="_blank"
            rel="external"
            className="btn btn--github"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/pitkane"
            target="_blank"
            rel="external"
            className="btn btn--twitter"
            title="Twitter"
          >
            Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default App;
