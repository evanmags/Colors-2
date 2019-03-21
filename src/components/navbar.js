import React, { Component } from 'react';
// import '../App.css';

class NavBtn extends Component{
  render(props){
    return(
      <div className="nav_btn">{this.props.label}</div>
    )
  }
}

class NavBtnGroup extends Component{
  render(){
    return (
      <div className="btn_group">
        <NavBtn label="GitHub"/>
        <NavBtn label="Codepen"/>
        <NavBtn label="Portfolio"/>
      </div>
    )
  }
}

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar">
        <div className="nav_brand">Colors</div>
        <NavBtnGroup />
      </nav>
    )
  }
}

export default Navbar;