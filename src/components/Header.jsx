import React, { useState } from 'react'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/SCM-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
      <nav className='navbar'>
        <div className='logo'>
            {/* <span className="company-name">SCM LAW FIRM</span>   */}
            <img src={Logo} alt='logo' />
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <NavLink to='/' exact activeClassName='active' onClick={closeMenu}><li>Home</li></NavLink>
            <NavLink to='/services' exact activeClassName='active' onClick={closeMenu}><li>Services</li></NavLink>
            <NavLink to='/about' activeClassName='active' onClick={closeMenu}><li>About</li></NavLink>
            <NavLink to='/contact' exact activeClassName='active' onClick={closeMenu}><li>Contact</li></NavLink>
          </ul>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </nav>
  )
}

export default Header
