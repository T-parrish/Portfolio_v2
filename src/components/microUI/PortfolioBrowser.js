import React, { Component } from 'react';

import { portfolioData } from '../../data';

import InputGroup from '../contact/InputGroup';
import MicroPortfolio from './MicroPortfolio';

class PortfolioBrowser extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      search: '',
      cards: []
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    let cards = []
    portfolioData.map((card, idx) => {
      cards.push(card)
    })
    this.setState({cards})
  }

  componentDidUpdate(prevProps, prevState) {
    let cards = []
    if (prevState.search !== this.state.search) {
      return portfolioData.filter((card) => {
        const textMatch = card.name.toLowerCase().includes(this.state.search.toLowerCase());
        textMatch && cards.push(card)
        this.setState({cards})
      })
    }
  }

  render() {
    const renderedCards = this.state.cards.map((card, idx) => {
      return <MicroPortfolio {...card} key={idx}/>
    })

    return (
      <div className='micro-browser__interface micro-browser__search'>
        <InputGroup 
          placeholder="Search"
          name="search"
          value={this.state.search}
          onChange={this.onChange}
        />
        <div className="portfolio-card__wrapper">
          {renderedCards}
        </div>

      </div>
    )
  }
}

export default PortfolioBrowser