import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I've developed & designed</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio'>
          <div className="portfolio__head">
          <Link className='card__development' to='/portfolio'>
                <div >
                  design
                </div>
              </Link>
              <Link className='card__design' to='/portfolio'>
                <div >
                  design
                </div>
              </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio