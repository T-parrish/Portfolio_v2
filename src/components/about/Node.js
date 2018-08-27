import React, { Component } from 'react'

import classnames from 'classnames';

// Dynamically generates nodes on 'timeline' ui element
// click handler sets idx state on parent component to show/hide
// different timeline events in a sibling component

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeFocused: false
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

  }

  onMouseEnter() {
    this.setState({ nodeFocused: true })
  }

  onMouseLeave() {
    this.setState({ nodeFocused: false })
  }

  render() {
    const {clickHandler, node_id} = this.props

    return (
      <div className={classnames("about__nodes--wrapper")}>
        <div
          onClick={clickHandler} 
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className={
            classnames(`about__nodes-${node_id}`, 
              {'about__nodes--focused' : this.state.nodeFocused}
          )}
          id={node_id}
        >
        </div>
      </div>
    )
  }
}

export default Node