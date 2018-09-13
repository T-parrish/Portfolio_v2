import React, { Component } from 'react';

import Project from './Project';

import {portfolioData} from '../../data';

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
  constructor(props){
    super(props);
    this.state = {
      projectArray: []
    }
  }

  componentDidMount() {
    let projectContainer = []
    projectContainer = portfolioData.filter((project) => project.id <= 3)
    this.setState({projectArray: projectContainer})
  }

  componentWillUnmount() {
    this.setState({ projectArray: [] })
  }

  render() {
    const projects = this.state.projectArray.map((project, idx) => {
      return <Project 
        name={project.name} 
        synopsis={project.synopsis} 
        background={project.background}
        color={project.color}
        github={project.github}
        livelink={project.livelink}
        key={idx}
        wide={project.wide}
      />
    })

    return (
      <div className="portfolio-item-container">
        {projects}
      </div>
    )
  }
}

export default Projects
