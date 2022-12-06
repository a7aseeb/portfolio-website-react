import React from 'react'
import './footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> LOGO </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Abut</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><AiOutlineInstagram /></a>
        <a href=""><AiOutlineInstagram /></a>
        <a href=""><AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdul Haseeb. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer