import React, { Component } from 'react';

import Project from './Project';

// Creates a project card default 2 per row on desktop
// with the following options / fields:

// name: name of the project / title of card
// highlight: work in progress
// synopsis: a brief explanation of project
// background: background color of card
// color: color of text
// github: link to github repo on github popup menu
// liveLink: link to a live example of the website
// wide: boolean, sets project card width to 100% on Desktop 


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

        <Project 
          name='Dev Connector' 
          highlight='placeholder'
          synopsis='Built a social network on the MERN stack'
          link="http://www.linkedin.com"
          background="#0d627e"
          color="#ffffff"
          github='https://github.com/T-parrish/MERN_stack'
          liveLink='https://agile-tundra-60265.herokuapp.com/'
          wide='true'
        />

      </div>
    )
  }
}

export default Projects
