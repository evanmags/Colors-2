import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import ColorBlockContainer from "./components/colorblock/container.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ColorBlockContainer />
      </div>
    );
  }
}

export default App;
