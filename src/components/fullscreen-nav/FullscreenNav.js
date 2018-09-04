import React, { Component } from 'react'
import FullscreenNavOptions from './FullscreenNavOptions';

// Maps over state object keys to render linktext and link values

class FullscreenNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      Portfolio: '/portfolio',
      About: '/about',
      Blog: '/blog',
      Music: '/music',
    }
  }

  render() {
    const navItems = Object.keys(this.state).map((key, i) => {
      return <FullscreenNavOptions key={i} linkText={key} link={this.state[key]}/>
    });

    return (
      <div className="fullscreen-nav__menu fullscreen-nav__animation-wrapper">
        {navItems}
        <div className="fullscreen-nav__social-icons">
          <a href="https://www.twitter.com/twpearish" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/et.and.me" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.soundcloud.com/50crates" target="_blank">
            <i className="fab fa-soundcloud"></i>
          </a>
          <a href="https://www.linkedin.com/in/taylor-parrish-55663379" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/t-parrish" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default FullscreenNav;