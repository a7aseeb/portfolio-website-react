import React from 'react'
import './nav.css'
import { FaHome, FaUser, FaBook } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={ activeNav === 'about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#portfolio"><GoProject /></a>
      <a href="#contact"><AiOutlineMessage /></a>      
    </nav>
  )
}

export default Nav