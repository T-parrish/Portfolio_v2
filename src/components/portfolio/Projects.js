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
          name='Node Chat' 
          synopsis='Multi-user Chat app built with Node.js, and webhooks, deployed on Heroku'
          background="#119bc9"
          color="#ffffff"
          github='https://github.com/T-parrish/node-chat-app'
          liveLink='https://lit-cliffs-45276.herokuapp.com/'
        />
        <Project 
          name='Dev Connector' 
          highlight='placeholder'
          synopsis='Social network for developers, built using MongoDB, Mongoose, Node, Express, React, and deployed with Heroku. Authentication handled with JWT, Passport, and Bcrypt'
          background="#F89951"
          color="#ffffff"
          github='https://github.com/T-parrish/MERN_stack'
          liveLink='https://agile-tundra-60265.herokuapp.com/'
        />

        <Project 
          name='Expensify' 
          synopsis='Multi-user expense tracking app built with Node, Express, React, and Firebase. Authentication handled with Google oAuth, JWT, and Bcrypt. Test suite written with Jest and Enzyme, deployed on Heroku.'
          background="#0d627e"
          color="#ffffff"
          github='https://github.com/T-parrish/expensify_app'
          liveLink='https://secure-cliffs-73695.herokuapp.com/'
          wide='true'
        />

      </div>
    )
  }
}

export default Projects
