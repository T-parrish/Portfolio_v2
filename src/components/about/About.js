import React, { Component } from 'react'

import AboutTimeline from './AboutTimeline';
import AboutDetails from './AboutDetails';

import aboutData from '../../data.js';

// ToDo: draw line through middle of dom with nodes corresponding
// to life events, on click or on view, load little blurbs about life


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 1,
      post: {}
    }
    
    this.clickHandler = this.clickHandler.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({idx: parseInt(e.target.id)})
  }

  getPost(idx) {
    return aboutData.find(post => post.id === idx)
  }

  componentDidMount() {
    this.setState({post: this.getPost(this.state.idx)})
  }

  componentDidUpdate(prevProps, prevState) {
    const {idx} = this.state
    if (idx !== prevState.idx) {
      this.setState({post: this.getPost(this.state.idx)})

    }

  }

  render() {    
    const {title, p1, p2, p3} = this.state.post
  
    return (
      <div className="about__wrapper">
        <AboutTimeline clickHandler={this.clickHandler}/>
        <div className="about__viewport">
          <AboutDetails 
            title={title}
            p1={p1}
            p2={p2}
            p3={p3}
          />
        </div>
      </div>
    )
  }
}

export default About