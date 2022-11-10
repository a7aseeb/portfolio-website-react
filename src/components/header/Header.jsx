import React from 'react'
import { FaGithub } from "react-icons/fa";




const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='name__container'>
          <h5> Hello I'm </h5>
          <h1>Abdul Haseeb</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <a href=""><FaGithub/></a><a href=""><FaGithub/></a>
        </div>
        <div className="photo__container">
        

        </div>
        
        

      </div>
    </header>
  )
}



export default Header