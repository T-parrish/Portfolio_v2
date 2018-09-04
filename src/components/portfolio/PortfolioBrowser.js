import React, { Component } from 'react'

import Header from '../Header';

class PortfolioBrowser extends Component {
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
      <div>
        
      </div>
    )
  }
}

export default PortfolioBrowser