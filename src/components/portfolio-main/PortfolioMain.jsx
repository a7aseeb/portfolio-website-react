import React from 'react'
import './portfolioMain.css'

const PortfolioMain = () => {
  return (
    <section id='portfolio__main'> 
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__main-container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="image of project" />
            </div>
            <h3>This is my porfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className='btn'>github</a>
              <a href="https://www.github.com" className='btn btn-primary'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="image of project" />
            </div>
            <h3>This is my porfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className='btn'>github</a>
              <a href="https://www.github.com" className='btn btn-primary'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="image of project" />
            </div>
            <h3>This is my porfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className='btn'>github</a>
              <a href="https://www.github.com" className='btn btn-primary'>Live demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default PortfolioMain