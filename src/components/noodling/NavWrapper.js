import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import classnames from 'classnames';


import Header from '../Header';
import Portfolio from '../portfolio/Portfolio';

// wrapper for the header and the portfolio, added make sure 
// that overflow: hidden actually works as expected

// Passes the clickHandler to the header component so that
// clicking on the three line things will result in a background
// color fill, locked screen, and different menu items to choose from

class NavWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullView: true,
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    setTimeout(() => {
      this.setState({ fullView: !this.state.fullView})
    }, 1000)
  }
  

  render() {
    return (
      <div 
      className= {
        classnames({'fullscreen-nav__no-scroll': !this.state.fullView})
      }
      >
        <Header clickHandler={this.clickHandler} />
        <Portfolio />
      </div>
    )
  }
}

export default NavWrapper

