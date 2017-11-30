const port = 80;
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server = express();

server.use(bodyParser.urlencoded({
  parameterLimit: 10000000,
  limit: '50mb',
  extended: true
}));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(allowCors);

server.listen(port, () => {
  console.log(`BACKEND rodando na porta ${port}.`);
});

module.exports = server;
