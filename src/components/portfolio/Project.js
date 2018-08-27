import React, { Component } from 'react';
import classnames from 'classnames';

// Potentially want to include an img background for each card
// --- decided that this doesn't look nearly as good as clean color

// ToDo: build animations for each card element, change placeholder with <hr/>
// ToDo: Modify code to show github / livelink icons on mobile

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'scaleY(1)',
      headerAni: 'translate3d(0, 0, 0)',
      socialAni: 'translateY(-100%)',
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    this.setState({
      transform: 'scaleY(1.3)',
      headerAni: 'translate3d(0,-30px,0)',
      socialAni: 'translateY(0%)',
    })
  }

  onMouseLeave() {
    this.setState({
      transform: 'scaleY(1)',
      headerAni: 'translate3d(0,0,0)',
      socialAni: 'translateY(-100%)',
    })
  }

  render() {
    const { 
      name, 
      highlight, 
      synopsis, 
      github, 
      liveLink, 
      background, 
      color,
      wide,
     } = this.props

    return (
      <div 
        className= {
          classnames("portfolio-item", 
            {'portfolio-item-wide' : wide})
          }
        style={{background: `${background}`}}
      >
        
        <div 
          className="portfolio__popup-wrapper"
          onMouseEnter={this.onMouseEnter} 
          onMouseLeave={this.onMouseLeave}
        >
          <div 
            className="portfolio__social-icons portfolio__social-dropdown"
            style={{
              transform: `${this.state.socialAni}`,
            }}
          >
            <a href={github}>
              <span><i className="fab fa-github"></i></span>
            </a>
            <a href={liveLink}>
              <span><i className="fas fa-globe"></i></span>
            </a> 
          </div>          
        </div>

        <div 
          className="portfolio__card-content"
          style={{color: `${color}`}}
        >
          <h3 style={{fontSize:'50px', transform:`${this.state.headerAni}`}}> {name} </h3>
          
          <div className="project-highlight">
            <h4>{highlight}</h4>
          </div>
          
          <div className="project-synopsis">
            <p>{synopsis}</p>
          </div>

        </div>

      </div>
    )
  }
}

export default Project