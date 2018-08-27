import React, { Component } from 'react'
import Node from './Node';

// maps over nodes array to render node components 

class AboutTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [1, 2, 3, 4, 5],
    }
  }

  render() {
    
    const nodes = this.state.nodes.map((node, i) => {
      return <Node 
        clickHandler={this.props.clickHandler} 
        node_id={node} 
        key={i}
      />
    })
    
    return (
      <div className="about__timeline">
        <div className="about__nodes">
          {nodes}
        </div>
      </div>
    )
  }
}

export default AboutTimeline