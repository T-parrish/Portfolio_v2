import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import classnames from 'classnames';

import Header from '../Header';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import FullscreenNav from './FullscreenNav';

// wrapper for the header and the portfolio, added make sure 
// that overflow: hidden actually works as expected

// Passes the clickHandler to the header component so that
// clicking on the three line things will result in a background
// color fill, locked screen, and different menu items to choose from

// Set some conditional logic on the header to render the Header
// component with different colors / opacities depening on whether
// the Fullscreen nav is visible or not.

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
    this.setState({ fullView: !this.state.fullView})
  }
  

  render() {
    return (
        <div 
          className= {
            classnames('fullscreen-nav__animation-wrapper',
              {'fullscreen-nav__no-scroll': !this.state.fullView})
          }
        >

          { this.state.fullView ? 
            <Header color={'#1f1f1f'} clickHandler={this.clickHandler} /> : 
            <Header 
              color={'#ffffff'} 
              opacity={.93} 
              textShadow={'0px 1px 3px #3f0ed1'}
              clickHandler={this.clickHandler} 
            />
          }
          
          {!this.state.fullView ? 
            <CSSTransition
              in={!this.state.fullView}
              appear={true}
              timeout={500}
              classNames='fade'
            >
              <FullscreenNav />
            </CSSTransition> : null}
          
          <CSSTransition
            in={this.state.fullView}
            appear={true}
            timeout={300}
            classNames='fade'
          >
            <Portfolio />
          </CSSTransition>          
            
        </div>
    )
  }
}

export default NavWrapper

