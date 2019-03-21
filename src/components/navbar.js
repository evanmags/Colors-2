import React, { Component } from 'react';

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

const NavBrand = ( <div className="nav_brand">Colors <i className="fas fa-swatchbook"></i></div> )

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