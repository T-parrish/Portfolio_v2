import React, { Component } from 'react'

import classnames from 'classnames';
import Boxy from './Boxy';

// <div className= {
//   classnames( 'fullscreen-nav__wrapper',
//     {'fullscreen-nav__no-scroll': this.state.isActive,
//   })
// }>

class FullscreenNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  componentDidMount() {
    console.log('component mounted')
    this.setState({isActive: true})
  }

  render() {
    return (
      <div>
        <span>this is my boomstick</span>
      </div>
    )
  }
}

export default FullscreenNav

