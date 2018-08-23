import React, { Component } from 'react';

import Project from './Project';

// ToDo: create project card for expensify
// ToDo: create project card for Dev connector
// ToDo: create project card for Node Chat app
// ToDo: create project card for pizza rovers
// ToDo: create project card for et and me


class Projects extends Component {
  render() {
    return (
      <div className="portfolio-item-container">
        <Project 
          name='Expensify' 
          highlight='placeholder'
          synopsis='Built an expense tracking app with React and Firebase'
          background="#119bc9"
          color="#ffffff"
          github='https://github.com/T-parrish/expensify_app'
          liveLink='https://secure-cliffs-73695.herokuapp.com/'
        />
        <Project 
            name='Dev Connector' 
            highlight='placeholder'
            synopsis='Built a social network on the MERN stack'
            link="http://www.linkedin.com"
            background="#F89951"
            color="#ffffff"
            github='https://github.com/T-parrish/MERN_stack'
            liveLink='https://agile-tundra-60265.herokuapp.com/'
        />
        <div 
          className="portfolio-item portfolio-item-wide portfolio-item__pizzarovers"
          style={{
            background: 'linear-gradient(to bottom, #1181a7 0%,#119bc9 100%)', 
            color:'#ffffff'
          }}>
          <h1>hello</h1>
        </div>

      </div>
    )
  }
}

export default Projects
