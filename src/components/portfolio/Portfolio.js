import React, { Component } from 'react'

import Projects from './Projects';

// Main wrapper for portfolio section of webpage
// ToDo: add a component for project cards
// ToDo: add a component for a social icon sidebar
// ToDo: add a component for contacting me / emailing me

class Portfolio extends Component {
  render() {
    return (
      <div className="main-wrapper">
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
      </div>
    )
  }
}

export default Portfolio
