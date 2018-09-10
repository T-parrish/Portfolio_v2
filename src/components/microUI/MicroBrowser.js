import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import PortfolioBrowser from './PortfolioBrowser';
import AboutBrowser from './AboutBrowser';
import MusicBrowser from './MusicBrowser';
import BlogBrowser from './BlogBrowser';


class MicroBrowser extends Component {
  constructor(props) {
      super(props);
      this.state = {
        width: 0, 
        height: 0,
        opacity: 0,
        background: '#6744d1'
      }
      this.browserRef = React.createRef();
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
      e.preventDefault();
      this.setState({ fullView: !this.state.fullView})
    }

    componentDidMount() {
      this.setState({ width: window.innerWidth, height: window.innerHeight});
      setTimeout(() => {
        this.setState({opacity: 1, background: '#fafafa'})
      }, 200)
    }

    componentWillUnmount() {
      this.setState({ width: 0, height: 0, opacity:0 });
    }
    
  render() {
    const { displayType } = this.props

    return (
      <div className="section__micro-browser">
        <div className="micro-browser__bg" style={{background: this.state.background,}}>
        </div>
        <div className="micro-browser__content" style={{opacity: this.state.opacity,}}>
          <div className="portfolio__intro-text micro-browser__intro">
            <Link to='/' style={{color: '#1f1f1f'}}><h6>Go Back</h6></Link>
          </div>
          {displayType === 'portfolio' && 
          <PortfolioBrowser 
            height={this.state.height} 
            width={this.state.width}
          />}
          {displayType === 'about' && <AboutBrowser />}
          {displayType === 'blog' && <BlogBrowser />}
          {displayType === 'music' && <MusicBrowser />}
        </div>
      </div>
    )
  }
}

export default MicroBrowser