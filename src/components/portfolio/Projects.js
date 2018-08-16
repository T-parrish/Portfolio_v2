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
        <div className="portfolio-item" style={{background: '#119bc9', color:'#ffffff'}}>
          <Project 
            name='Expensify' 
            highlight='placeholder'
            synopsis='Built an expense tracking app with React and Firebase'
          />
        </div>
        
        <div className="portfolio-item" style={{background: '#F89951', color:'#ffffff'}}>
          <Project 
            name='Dev Connector' 
            highlight='placeholder'
            synopsis='Built a social network on the MERN stack'
          />
        </div>
          
        <div className="portfolio-item portfolio-item-wide portfolio-item__pizzarovers">
          <h1>hello</h1>
        </div>

      </div>
    )
  }
}

export default Projects
