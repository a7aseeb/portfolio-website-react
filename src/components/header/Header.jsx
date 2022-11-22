import React from 'react'
import ME from "../../assets/my-photo.png"
import HeaderSocials from './HeaderSocials';
import './header.css'




const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="profile__container">
          <div className='name__container'>
            <h5> Hello I'm </h5>
            <h1>Abdul Haseeb</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <HeaderSocials/>
          </div>

          <div className="photo__container">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
        
        

      </div>
    </header>
  )
}



export default Header