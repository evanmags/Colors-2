import React, { Component } from "react";
import GradBlock from "./block.js";

class TintGradient extends Component {
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
      <div className='tint_gradient'>
        <GradBlock l={true} light={this.state.light - 25} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light - 20} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light - 15} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light - 10} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light - 5} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light + 5} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light + 10} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light + 15} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light + 20} hue={this.state.hue} sat={this.state.sat} />
        <GradBlock l={true} light={this.state.light + 25} hue={this.state.hue} sat={this.state.sat} />
      </div>
    )
  }
}

export default TintGradient;