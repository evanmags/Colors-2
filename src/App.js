import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar.js";
import ColorBlocks from "./components/colorblocks.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ColorBlocks />
      </div>
    );
  }
}

export default App;
