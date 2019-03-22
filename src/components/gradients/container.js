import React, { Component } from "react";
import TintGradient from "./tint"
import AxialGradient from "./axial"
import ChromaGradient from "./chroma"

class GradientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      onClick: props.onClick,
      hue: props.state.hue,
      sat: props.state.sat,
      light: props.state.light 
    }
  }
  componentWillReceiveProps(props) {
    this.setState({ 
      onClick: props.onClick,
      hue: props.state.hue,
      sat: props.state.sat,
      light: props.state.light 
    });
  }
  render(){
    return(
      <div className="gradient_container">
        <AxialGradient state={this.state}/>
        <ChromaGradient state={this.state}/>
        <TintGradient state={this.state}/>
      </div>
    )
  }
}

export default GradientContainer;