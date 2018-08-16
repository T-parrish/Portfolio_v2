import React, { Component } from 'react'

class Project extends Component {
  render() {
    const { name, highlight, synopsis } = this.props
    return (
      <div className="portfolio__card-content">
        <h3 style={{fontSize:'50px'}}>{name}</h3>
        <div className="project-highlight">
          <h4>{highlight}</h4>
        </div>
        <div className="project-synopsis">
          <p>{synopsis}</p>
        </div>
      </div>
    )
  }
}

export default Project