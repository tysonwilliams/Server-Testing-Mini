const express = require('express');
const morgan = require('morgan');

const server = express();
server.use(express.json());
server.use(morgan('combined'));

server.post('/band', (req, res) => {
  res.send(req.body);
});

server.get('/bands', (req, res) => {
  res.json('all bands');
});

module.exports = server;
