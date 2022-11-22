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
      <a href="#" onClick={() => setActiveNav('home')} className={ activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={ activeNav === 'about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={ activeNav === 'experience' ? 'active' : ''}><FaBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={ activeNav === 'portfolio' ? 'active' : ''}><GoProject /></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={ activeNav === 'contact' ? 'active' : ''}><AiOutlineMessage /></a>      
    </nav>
  )
}

export default Nav

// import React, { Component } from 'react'

// export default class Nav extends Component {
//   render() {
//     return (
//       <div>Nav</div>
//     )
//   }
// }
