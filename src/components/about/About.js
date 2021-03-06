import React, { Component } from 'react'

// Load components
import AboutTimeline from './AboutTimeline';
import AboutDetails from './AboutDetails';

// Load data
import { aboutData } from '../../data.js';

// ToDo: change About app into a game of '2 truths and a lie'
// Would be a much more engaging way of letting people get to know me

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 1,
      fade: false,
      post: {},
    }
    
    this.clickHandler = this.clickHandler.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({idx: parseInt(e.target.id), fade: true})
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
    const {title, p1, p2, img, bgfill} = this.state.post
  
    return (
      <div className="about__wrapper">
        <AboutTimeline clickHandler={this.clickHandler}/>
        <div className="about__viewport">
        <div className="about__bg-image-wrapper">
          <div style={{backgroundImage:img}} className="about__bg-layer-one"></div>
          <div style={{background:bgfill}} className="about__bg-layer-two"></div>
        </div>
            <AboutDetails 
              title={title}
              p1={p1}
              p2={p2}
            />

        </div>
      </div>
    )
  }
}

export default About