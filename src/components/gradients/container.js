import React, { Component } from "react";
import TintGradient from "./tint"
import AxialGradient from "./axial"
import ChromaGradient from "./chroma"

class GradientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      ...props.state
    }
  }
  componentWillReceiveProps(props) {
    this.setState({ ...props.state });
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