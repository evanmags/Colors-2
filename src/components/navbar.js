import React, { Component } from 'react';
// import '../App.css';

function NavBtn(props){
  return(
    <div className="nav_btn">{props.label}</div>
  )
}


const NavBtnGroup =(
      <div className="btn_group">
        <NavBtn label="GitHub"/>
        <NavBtn label="Codepen"/>
        <NavBtn label="Portfolio"/>
      </div>
    )

const NavBrand = ( <div className="nav_brand">Colors <i class="fas fa-swatchbook"></i></div> )

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar">
        {NavBrand}
        {NavBtnGroup}
      </nav>
    )
  }
}

export default Navbar;