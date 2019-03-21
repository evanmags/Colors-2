import React, { Component } from "react";

class GradBlock extends Component{
  constructor(props){
    super(props)
    this.state= {
      hue: props.hue,
      sat: props.sat,
      light: props.light
    }
    this.bgc = this.bgc.bind(this)
    this.clamp = this.clamp.bind(this)
    this.cap_hue = this.cap_hue.bind(this)
    this.text_color = this.text_color.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({ 
      ...props,
      hue: this.cap_hue(props.hue),
      sat: this.clamp(0, props.sat, 100),
      light: this.clamp(0, props.light, 100),
     });
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
  clamp(min, val, max){
    return Math.min(Math.max(min, val), max);
  }
  bgc(){
    return`hsl( ${this.state.hue}, ${this.state.sat}%, ${this.state.light}% )`
  };
  text_color(){
    return this.state.light > 50 ? '#333' : '#f8f8f8';
  }
  render(){
    return(
      <div className="gradient_block" style={{background: this.bgc(), color: this.text_color()}}>{this.state.h ? `H: ${this.state.hue}deg` : this.state.s ? `S: ${this.state.sat}%` : `L: ${this.state.light}%`}
      </div>
    )
  }
}

export default GradBlock;