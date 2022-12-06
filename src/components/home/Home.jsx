import React from 'react'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import About from '../about/About'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

export default function Home() {
  return (
      <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Portfolio />
         <Testimonials />
         <Contact />
         <Footer />
      </>

  )
}
