import React, { Component } from 'react'
import {CSSTransition, TransitionGroup, Transition} from 'react-transition-group'
import classnames from 'classnames';

import {Link} from 'react-router-dom';

import Header from '../Header';
import Portfolio from '../portfolio/Portfolio';
import FullscreenNav from './FullscreenNav';

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
      this.setState({ fullView: !this.state.fullView, color: '#ffffff'})
  }
  

  render() {
    return (
        <div 
          className= {
            classnames("fullscreen-nav__animation-wrapper", 
              {'fullscreen-nav__no-scroll': !this.state.fullView})
          }
        >
          <Header color={this.state.color} clickHandler={this.clickHandler} />
          {!this.state.fullView ? <CSSTransition
            in={!this.state.fullView}
            appear={true}
            timeout={400}
            classNames='fade'
          >
            <FullscreenNav />
          </CSSTransition> : null}
          
          <CSSTransition
            in={this.state.fullView}
            appear={true}
            timeout={600}
            classNames='fade'
          >
            <Portfolio />
          </CSSTransition>
          
            
        </div>
    )
  }
}

export default NavWrapper

