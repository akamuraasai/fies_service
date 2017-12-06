const bodyParser = require('body-parser');
const express = require('express');

export const app = express();

app.use(bodyParser.urlencoded({
  parameterLimit: 10000000,
  limit: '50mb',
  extended: true,
}));

app.use(bodyParser.json({ limit: '50mb' }));

const server = port => app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

export default server;
