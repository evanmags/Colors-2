import React, { Component } from "react";
import ColorBlock from "./colorblock"

class ColorBlockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: {},
      color2: {},
      color3: {},
      color4: {}
    };

    this.handle_click = this.handle_click.bind(this);
    this.create_color = this.create_color.bind(this);
  }
  gen_random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  cap_hue(hue) {
    while (hue > 360) {
      hue -= 360;
    }
    while (hue < 0) {
      hue += 360;
    }
    return hue;
  }
  create_color() {
    const hue = this.gen_random(0, 361);
    const sat = this.gen_random(20, 101);
    const light = this.gen_random(20, 80);

    this.setState({
      color1: { hue: this.cap_hue(hue - 45), sat: sat, light: light },
      color2: { hue: this.cap_hue(hue - 15), sat: sat, light: light },
      color3: { hue: this.cap_hue(hue + 15), sat: sat, light: light },
      color4: { hue: this.cap_hue(hue + 45), sat: sat, light: light }
    });
  }
  handle_click(e) {
    if ( Array.from(document.querySelectorAll(".color_block")).includes(e.target) ) {
      this.create_color();
    }
  }
  componentDidMount() {
    return this.create_color();
  }
  render() {
    return (
      <div className="cb_container" onClick={this.handle_click}>
        <ColorBlock id="cb1" style={this.state.color1} />
        <ColorBlock id="cb2" style={this.state.color2} />
        <ColorBlock id="cb3" style={this.state.color3} />
        <ColorBlock id="cb4" style={this.state.color4} />
      </div>
    );
  }
}

export default ColorBlockContainer;