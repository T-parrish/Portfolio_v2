import React, { Component } from 'react'

import Projects from './Projects';
import About from '../about/About';
import PhotoWrapper from '../photography/PhotoWrapper';
import Form from '../contact/Form';
import Footer from '../Footer';

// Main wrapper for portfolio section of webpage
// ToDo: add a component for a social icon sidebar

class Portfolio extends Component {
  render() {

    return (
      <div className= 'fullscreen-nav__animation-wrapper'>
        <div className="section__portfolio-intro">
          <h1 className="page-header__title centered">
            Digitally creative <span className="page-header__ampersand">&</span> naturally curious
          </h1>
        </div>
        <div className="section__portfolio-cards">
          <div className="portfolio__intro-text">
            <h2>Web</h2>
          </div>
          <Projects />
        </div>
        <div className="section__about-me">
          <div className="portfolio__intro-text">
            <h2>About</h2>
          </div>
          <About />
        </div>
        <div className="section__photography">
          <div className="portfolio__intro-text">
            <h2>Photo</h2>
          </div>
          <PhotoWrapper />
        </div>
        <div className="section__contact">
          <div style={{fontSize:'5rem'}} className="portfolio__intro-text">
            <h2>Contact</h2>
          </div>
          <Form />
        </div>
        <div className="section__footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Portfolio
