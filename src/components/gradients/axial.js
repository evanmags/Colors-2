import React, { Component } from "react";
import GradBlock from "./block.js";

class AxialGradient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.state.onClick,
      hue: props.state.hue,
      sat: props.state.sat,
      light: props.state.light,
      width: window.innerWidth
    };
    this.generateblocks = this.generateblocks.bind(this);
  }
  generateblocks(width){
    const blocks = []
    if(width > 540){
      for(let i = -25; i <= 25; i += 5){
        blocks.push(<GradBlock
            h={true}
            hue={this.state.hue + i}
            sat={this.state.sat}
            light={this.state.light}
            onClick={this.state.onClick}
          />)
      }
    }
    else {
      for(let i = -15; i <= 15; i += 5){
        blocks.push(<GradBlock
          h={true}
          hue={this.state.hue + i}
          sat={this.state.sat}
          light={this.state.light}
          onClick={this.state.onClick}
        />)
      }
    }
    return blocks;
  }
  componentWillReceiveProps(props) {
    this.setState({ ...props.state });
  }
  render() {
    return (
      <div className="axial gradient">
        {this.generateblocks(this.state.width)}
      </div>
    );
  }
}

export default AxialGradient;
