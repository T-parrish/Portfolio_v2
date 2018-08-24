import React, { Component } from 'react'
import FullscreenNavOptions from './FullscreenNavOptions';

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
      <div className="fullscreen-nav__menu">
        {navItems}
      </div>
    )
  }
}

export default FullscreenNav;