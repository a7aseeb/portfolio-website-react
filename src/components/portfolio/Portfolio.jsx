import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I've developed & designed</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio'>
          <div className="portfolio__head">
            <div className="card__development">
              development
            </div>
            <div className="card__design" style={{justifySelf: 'end'}}>
              design
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio