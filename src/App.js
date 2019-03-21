import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Modal from "./components/openmodal.js";
import ColorBlockContainer from "./components/colorblock/container.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal />
        <ColorBlockContainer />
      </div>
    );
  }
}

export default App;
