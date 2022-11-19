import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/abdul-haseeb-1710/" target="_blank"><FaLinkedin/></a>
      <a href="https://github.com/a7aseeb" target="_blank"><FaGithub/></a>

   </div>
  )
}

export default HeaderSocials