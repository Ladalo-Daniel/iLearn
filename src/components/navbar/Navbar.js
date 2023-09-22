import React, { useState } from 'react'
import Button from '../button/Button'
import Dropdown from '../dropdown/Dropdown'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if(window.innerWidth < "960px"){
      setDropdown(false)
    } else{
      setDropdown(true);
    }
  }
  const onMouseLeave = () => {
    if(window.innerWidth < "960px"){
      setDropdown(false)
    } else{
      setDropdown(false);
    }
  }

  return (
    <div>
     <nav className='navbar'>
       <Link to="/" className='navbar-logo'>iLearn</Link>
       <div onClick={handleClick} className='menu-icon'>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
       </div>
       <ul className={click ? 'nav-menu active' : "nav-menu"}>
        <li className='nav-item'>
          <Link 
          to="/" 
          className='nav-links' 
          onClick={closeMobileMenu}
          >Home
          </Link>
        </li>
        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link 
          to="/services" 
          className='nav-links' 
          onClick={closeMobileMenu}
          >
            Services
          <i className='fas fa-caret-down'></i>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className='nav-item'>
          <Link 
          to="/contact" 
          className='nav-links' 
          onClick={closeMobileMenu}
          >Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
          to="/sign-up" 
          className='nav-links-mobile' 
          onClick={closeMobileMenu}
          >Sign Up
          </Link>
        </li>
       </ul>
       <Button />
     </nav>
    </div>
  )
}

