import React from 'react'
import "./about.css"
import ME from '../../assets/my-photo-2.JPG'
import { FiAward } from 'react-icons/fi'
import { GiBookPile } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working experience</small>
            </article>

            <article className='about__card'>
              <GiBookPile className='about__icon' />
              <h5>Projects</h5>
              <small>10+ projects using React & Angular</small>
            </article>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in</p>
        </div>
      </div>
    </section>
  )
}

export default About