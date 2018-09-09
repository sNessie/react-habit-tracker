import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper black">
          <div className="container">
          <a href="" className="brand-logo">Habbit Tracker</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addhabbit">Add Habbit</NavLink></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}


export default NavBar;
