import React, { Component } from "react";
import GradBlock from "./block.js";

class AxialGradient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.state.onClick,
      hue: props.state.hue,
      sat: props.state.sat,
      light: props.state.light
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ ...props.state });
  }
  render() {
    return (
      <div className="axial gradient">
        <GradBlock
          h={true}
          hue={this.state.hue - 25}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue - 20}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue - 15}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue - 10}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue - 5}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue + 5}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue + 10}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue + 15}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue + 20}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
        <GradBlock
          h={true}
          hue={this.state.hue + 25}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />
      </div>
    );
  }
}

export default AxialGradient;
