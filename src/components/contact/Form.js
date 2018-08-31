import React, { Component } from 'react';
import axios from 'axios';

import InputGroup from './InputGroup';
import TextAreaGroup from './TextAreaGroup';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const messageData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    axios.post('/api/messages', messageData)
      .then(res => console.log(res))
      .then(this.setState({submitted: !this.state.submitted}))
      .catch(err => this.setState({errors: err}))

  }

  render() {
    let formFields 

    if (!this.state.submitted) {
      formFields = (
        <form onSubmit={this.onSubmit} className="form__contact-form">
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
      )
    } else {
      formFields = (
        <div className="form__contact-form">
          <h1 className="form__thank-you">Thank you!</h1>
        </div>
      )
    }

    return (
      <div className="form__wrapper">
        {formFields}
      </div>
    )
  }
}

export default Form