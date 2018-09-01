const Validator = require('validator');
const isEmpty = require('./is-empty');

// Validates the input for the messages form
module.exports = function validateMessageInput(data) {  
  let errors = {}

  // Checks the inputs to see if they're empty or not
  // if not empty return the input otherwise return empty string
  data.email = !isEmpty(data.email) ? data.email : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.message = !isEmpty(data.message) ? data.message : '';


  // Checks to see if the entered email is a real email
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Valid Email required';
  }

  // Checks to make sure that the email field isn't empty
  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
 
  // Checks to make sure that the name field isn't empty
  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Checks to make sure that 6 char < message < 1000 char
  if(!Validator.isLength(data.message, {min: 6, max: 1000})) {
    errors.message = 'message must be at least 6 characters'
  }

  return {
    errors,
    // if no errors, means that the input is valid
    // use custom isEmpty function to minimize dependencies
    // returns true if null / undefined / empty object / '' string
    isValid: isEmpty(errors)
  };
}