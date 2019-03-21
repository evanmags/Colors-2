import React, { Component } from "react";
import GradBlock from "./block.js";

class ChromaGradient extends Component {
  constructor(props){
    super(props)
    this.state = {
      hue: props.state.hue,
      sat: props.state.sat,
      light: props.state.light
    }
  }
  componentWillReceiveProps(props) {
    this.setState({ ...props.state });
  }
  render(){
    return(
      <div className='chroma_gradient'>
        <GradBlock s={true} sat={this.state.sat - 25} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat - 20} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat - 15} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat - 10} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat - 5} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat + 5} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat + 10} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat + 15} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat + 20} hue={this.state.hue} light={this.state.light} />
        <GradBlock s={true} sat={this.state.sat + 25} hue={this.state.hue} light={this.state.light} />
      </div>
    )
  }
}

export default ChromaGradient;