import React, { Component } from "react";
import GradientContainer from "../gradients/container"
import Btn from "../btn"
import SliderGroup from "../sliders"

class ColorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: props.style.hue,
      sat: props.style.sat,
      light: props.style.light,
      id: props.id,
      locked: false
    };
    this.create_HSL = this.create_HSL.bind(this);
    this.handle_mousedown = this.handle_mousedown.bind(this);
    this.handle_mousemove = this.handle_mousemove.bind(this);
    this.handle_mouseup = this.handle_mouseup.bind(this);
    this.handle_lock = this.handle_lock.bind(this);
    this.set_color = this.set_color.bind(this);
    this.show_gradient = this.show_gradient.bind(this);
  }
  create_HSL() {
    return `hsl( ${this.state.hue}, ${this.state.sat}%, ${this.state.light}% )`;
  }
  hsl_to_255() {
    let h = this.state.hue,
      s = this.state.sat / 100,
      l = this.state.light / 100,
      c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
  }
  create_RGB() {
    let hsl = this.hsl_to_255();
    return "rgb( " + hsl.r + ", " + hsl.g + ", " + hsl.b + " )";
  }
  create_HEX() {
    let hsl = this.hsl_to_255(),
      r = hsl.r.toString(16),
      g = hsl.g.toString(16),
      b = hsl.b.toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return "#" + r + g + b;
  }
  set_color() {
    return this.state.light < 50 ? "#f8f8f8" : "#333";
  }
  componentWillReceiveProps(props) {
    if (!this.state.locked) {
      this.setState({ ...props.style, color: this.set_color() });
    }
  }
  componentDidMount() {
    this.setState({ color: this.set_color() });
  }
  handle_mousedown(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      mutable: true
    });
  }
  handle_mousemove(e) {
    e.nativeEvent.stopImmediatePropagation();
    if (this.state.mutable) {
      this.setState({
        [e.target.id]: parseFloat(e.target.value),
        color: this.set_color()
      });
    }
  }
  handle_mouseup(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      mutable: false
    });
    console.log(this.state.mutable);
  }
  handle_lock(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      locked: !this.state.locked
    });
    return false;
  }
  show_gradient(){
    document.getElementById(this.state.id).querySelector('.gradient_container').classList.toggle('open')
  }
  render() {
    return (
      <div
        id={this.state.id}
        className="color_block"
        style={{ background: this.create_HSL(), color: this.set_color() }}
      >
      <GradientContainer state={this.state} />
        <div className="cb_head">
          <p className="color_title">{this.create_HSL()}</p>
          <p className="color_title">{this.create_RGB()}</p>
          <p className="color_title">{this.create_HEX()}</p>
        </div>
        <div className="controls">
          <SliderGroup
            defaults={this.state}
            handlers={[
              this.handle_mousedown,
              this.handle_mousemove,
              this.handle_mouseup
            ]}
          />
          <div className="btn_row">
            <Btn id="lock" onClick={this.handle_lock}>
              {this.state.locked ? (
                <span>
                  <i className="fas fa-lock" /> Unlock
                </span>
              ) : (
                <span>
                  <i className="fas fa-lock-open" /> Lock
                </span>
              )}
            </Btn>
            <Btn id="convert" onClick={this.show_gradient}>Gradient</Btn>
          </div>
        </div>
      </div>
    );
  }
}


export default ColorBlock;