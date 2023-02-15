import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handScroll = () => {
    if (window.scrollY >= 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  console.log(scrolled)

  useEffect(() => {
    window.addEventListener('scroll', handScroll)
    return () => {
      window.removeEventListener("scroll", handScroll)
    }
  }, [])
  return (


    <nav className={scrolled ? "fixed" : null}>
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