const express = require('express');
const morgan = require('morgan');

const server = express();
server.use(express.json());
server.use(morgan('combined'));

server.post('/band', (req, res) => {
  res.send(req.body);
});

module.exports = server;
