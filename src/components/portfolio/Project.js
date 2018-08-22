import React, { Component } from 'react'

// Potentially want to include an img background for each card
// with changing opacity on mouseover, also thinking about
// animating each one of the elements in a different way rather than
// doing a bucket scaleY transform.

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
    const { name, highlight, synopsis, link, background, color } = this.props

    return (
      <div 
        className="portfolio-item" 
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
            <a href="http://www.github.com"><span><i className="fab fa-github"></i></span></a>
            <span><i className="fas fa-globe"></i></span>
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