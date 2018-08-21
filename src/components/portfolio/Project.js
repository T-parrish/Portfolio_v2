import React, { Component } from 'react'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'scaleY(1)',
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    this.setState({transform: 'scaleY(1.3)'})
  }

  onMouseLeave() {
    this.setState({transform: 'scaleY(1)'})
  }

  render() {
    const { name, highlight, synopsis, link, background, color } = this.props

    return (
      <div 
        className="portfolio-item" 
        style={{background: `${background}`}}
      >
        <a 
          className="portfolio__popup-wrapper" 
          href={link}
          onMouseEnter={this.onMouseEnter} 
          onMouseLeave={this.onMouseLeave}
        />

        <div 
          className="portfolio__card-content"
          style={{transform: `${this.state.transform}`, color: `${color}`}}
        >
          <h3 style={{fontSize:'50px'}}> {name} </h3>
          
          <div className="project-highlight">
            <h4>{highlight}</h4>
          </div>
          
          <div className="project-synopsis">
            <p>{synopsis}</p>
          </div>

          <div className="portfolio__social-icons">
            <span><i class="fab fa-github"></i></span>
            <span><i class="fas fa-globe"></i></span>
          </div>
        </div>

      </div>
    )
  }
}

export default Project