import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class FullscreenNavOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftAnimation: 'translateX(200px)',
      rightAnimation: 'translateX(-200px)'
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)

  }

  onMouseEnter() {
    this.setState({
      leftAnimation: 'translateX(0px)',
      rightAnimation: 'translateX(0px)',
    })
  }

  onMouseLeave() {
    this.setState({
      leftAnimation: 'translateX(200px)',
      rightAnimation: 'translateX(-200px)'
    })
  }

  render() {
    const {linkText, link } = this.props
    return (
      <div> 
        <Link 
          className="fullscreen-nav__options" 
          onMouseEnter={this.onMouseEnter} 
          onMouseLeave={this.onMouseLeave}
          to={link}
        > 
          {linkText}
        </Link>
        <div className="fullscreen-nav__animated-underscore-wrapper">
          <div 
            className="fullscreen-nav__animated-underscore-left"
            style={{transform:this.state.leftAnimation}}
          ></div>
          <div 
            className="fullscreen-nav__animated-underscore-right"
            style={{transform:this.state.rightAnimation}}
          ></div>
        </div>
      </div>
    )
  }
}

export default FullscreenNavOptions