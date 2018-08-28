import React, { Component } from 'react';

import InputGroup from './InputGroup';
import TextAreaGroup from './TextAreaGroup';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="form__wrapper">
        <form className="form__contact-form">
          <InputGroup 
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <InputGroup 
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextAreaGroup 
            placeholder="Send me a message <3"
            name='message'
            value={this.state.message}
            onChange={this.onChange}
          />
          <input 
            type='submit'
            value='Submit' 
            className="form__button"
          />
        </form>
      </div>
    )
  }
}

export default Form