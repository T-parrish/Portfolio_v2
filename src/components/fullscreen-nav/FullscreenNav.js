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
      </div>
    )
  }
}

export default FullscreenNav;