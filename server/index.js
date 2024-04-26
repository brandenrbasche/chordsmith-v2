const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 8080;

const app = express();

const mongoURI =
  process.env.NODE_ENV === 'test'
    ? 'mongodb://localhost/unit11test'
    : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

app.use('../', express.static(path.resolve(__dirname, '../')));

app.get('/home', (req, res) => {
  res.send('hello from express!');
});

module.exports = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}.`)
);
