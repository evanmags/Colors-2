import React, { Component } from "react";
import GradBlock from "./block.js";

class ChromaGradient extends Component {
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
            s={true}
            sat={this.state.sat + i}
            hue={this.state.hue}
            light={this.state.light}
            onClick={this.state.onClick}
          />)
      }
    }
    else {
      for(let i = -15; i <= 15; i += 5){
        blocks.push(<GradBlock
          s={true}
          sat={this.state.sat + i}
          hue={this.state.hue}
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
      <div className="chroma gradient">
        {this.generateblocks(this.state.width)}
      </div>
    );
  }
}

export default ChromaGradient;
