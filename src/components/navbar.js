import React, { Component } from 'react';

function NavBtn(props){
  return(
    <a href={props.href} className="navbar_btn">{props.label}</a>
  )
}


const NavBtnGroup =(
      <div className="navbar_buttons">
        <NavBtn label="GitHub" href="https://github.com/evanmags"/>
        <NavBtn label="Codepen" href="https://codepen.io/emags112/"/>
        <NavBtn label="Portfolio"/>
      </div>
    )

const NavBrand = (  <div className="navbar_brand">Colors 
                      <i className="fas fa-swatchbook brand_icon"></i>
                    </div> )

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