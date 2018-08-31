const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// DB Config
const db = require('../config/keyRouter').MONGO_URI;

// connect to mongodb
mongoose
    .connect(db)
    .then(() => {console.log('mongoDB connected')})
    .catch(err => console.log(err))

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});