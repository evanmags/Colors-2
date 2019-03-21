import React, { Component } from 'react';

class Modal extends Component{
  constructor(props){
    super(props)
    this.state = {
      opacity: 1,
      display: 'flex'
    }
    this.handle_transition = this.handle_transition.bind(this)
  }
  componentDidMount(){
    setTimeout(function(){
      this.setState({
        opacity: 0
      })
    }.bind(this), 2000)
  }
  handle_transition(e){
    this.setState({
      display: 'none'
    })
  }
  render(){
    return (
      <div className='modal' style={{opacity: this.state.opacity, display: this.state.display}} onTransitionEnd={this.handle_transition}>
        <h2><i class="fas fa-mouse-pointer"></i> Click to Generate a New Color Pallete</h2>
        <h2><i class="fas fa-sliders-h"></i> Use the Sliders to Adjust Current Pallete</h2>
      </div>
    )
  }
}

export default Modal;