import React, { Component } from 'react'

import Projects from './Projects';
import About from '../about/About';
import classnames from 'classnames';

// Main wrapper for portfolio section of webpage
// ToDo: add a component for project cards
// ToDo: add a component for a social icon sidebar
// ToDo: add a component for contacting me / emailing me

class Portfolio extends Component {
  render() {

    return (
      <div className= 'fullscreen-nav__animation-wrapper'>
        <div className="section__portfolio-intro">
          <h1 className="page-header__title centered">
            I like to make things
          </h1>
        </div>
        <div className="section__portfolio-cards">
          <div className="portfolio__intro-text">
            <h2>Stuff</h2>
          </div>
          <Projects />
        </div>
        <div className="section__about-me">
          <div className="portfolio__intro-text">
            <h2>About</h2>
          </div>
          <About />
        </div>
      </div>
    )
  }
}

export default Portfolio
