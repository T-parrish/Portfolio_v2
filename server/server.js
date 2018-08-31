const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Models
const messages = require('./routes/api/messages')

// create the express instance
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('../config/keyRouter').MONGO_URI;

// connect to mongodb
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {console.log('mongoDB connected')})
    .catch(err => console.log(err))

// Use routes 
app.use('/api/messages', messages)

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});