import React, { Component } from 'react';
import axios from 'axios';

import classnames from 'classnames';

import InputGroup from './InputGroup';
import TextAreaGroup from './TextAreaGroup';


// ToDo: fix UX and add spinner / 'submitting' text to display
// after the submit button has been pressed, change to 'submitted'
// or 'thank you' after successful submit 

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
      errors: {},
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

    axios
      .post('/api/messages', messageData)
      .then(() => this.setState({
        errors: {}, 
        submitted: true,
        name: '',
        email: '',
        message: '', })
      )
      .catch(error => this.setState({errors: error.response.data}))
  }

  render() {
    const {errors, submitted} = this.state

    return (
      <div className="form__wrapper">
        {this.state.submitted ? 
          (<div className="form__contact-form">
            <h1 className="form__thank-you">Thank you!</h1>
          </div>) : null}
        <form onSubmit={this.onSubmit} className="form__contact-form">
          <InputGroup 
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            errors={errors.name}
            disabled={submitted}
          />
          <InputGroup 
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            errors={errors.email}
            disabled={submitted}
          />
          <TextAreaGroup 
            placeholder="Send me a message <3"
            name='message'
            value={this.state.message}
            onChange={this.onChange}
            errors={errors.message}
            disabled={submitted}
          />
          {submitted ? <input 
            type='submit'
            value='Submit' 
            className={classnames({'form__button--disabled' : submitted})}
            disabled
            /> : <input 
                    type='submit'
                    value='Submit' 
                    className={classnames("form__button")}
                  /> }

        </form>
      </div>
    )
  }
}

export default Form