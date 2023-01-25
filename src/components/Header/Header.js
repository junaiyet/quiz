import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (

    <nav>
        <div className="container navigation-area">
        <div className="nav-logo">
            <img src={logo} alt="" />
           
        </div>
        <div className="nav-items">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Quiz</NavLink>
        </div>

        </div>
    </nav>
  )
}

export default Header