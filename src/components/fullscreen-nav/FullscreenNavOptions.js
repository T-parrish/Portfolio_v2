import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class FullscreenNavOptions extends Component {
  render() {
    const {linkText, link} = this.props
    return (
      <div> 
        <Link classNames="fullscreen-nav__options" to={link}>{linkText}</Link>
      </div>
    )
  }
}

export default FullscreenNavOptions