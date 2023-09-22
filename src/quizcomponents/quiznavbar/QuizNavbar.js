import React, { useState } from 'react'
import "./quiznavbar.css"
import { NavLink } from 'react-router-dom'
import Menu from '../menu/Menu'

export default function QuizNavbar() {
    const [menuClick, setMenuClick] = useState(false)
    const toggleMenubar = () => {
        setMenuClick(!menuClick)
    }

  return (
    <header className='header'>
    <nav className='quizNavbar'>
      <h1>iLearn</h1>
      <NavLink className='navLinks'>Courses</NavLink>
      <NavLink className='navLinks' to="/quiz">Start Quiz</NavLink>
      <div className='menuIconContainer' onClick={toggleMenubar}>
      <i className={menuClick ? " fas fa-times menuIcon " : "fas fa-bars menuIcon "}></i>
      </div>
    {menuClick && <Menu menuClick={menuClick} />}
    </nav>
    </header>
  )
}
