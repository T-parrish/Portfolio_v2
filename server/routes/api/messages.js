const express = require('express');
const router = express.Router();

// Extremely basic authentication, meant for one super user
const PULL_KEY = require('../../../config/keyRouter').PULL_KEY;

// Load Models
const Message = require('../../models/Message');

// Server-side validation layer
const validateMessageInput = require('../../validation/messages')

// @route    GET api/messages/test
// @desc     Tests POST route
// @access   Public
router.get(
  `/test/${PULL_KEY}`, 
  (req, res) => {
    Message.find({})
      .then(messages => res.json(messages))
      .catch(err => console.log(err))
  }
);

// @route    POST api/messages
// @desc     Create a message
// @access   Public
router.post(
  '/', 
  (req, res) => {

    const { errors, isValid } = validateMessageInput(req.body)

    if(!isValid) {
      console.log(errors)
      return res.status(400).json(errors)
    };

    const newMessage = new Message ({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    newMessage.save()
      .then(post => res.json(post))
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;