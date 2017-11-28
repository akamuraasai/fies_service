const express = require('express');
const { MongoClient } = require('mongodb');
// const contratoService = require('../api/contrato/contratoService');

const url = 'mongodb://localhost:27017/fies';

const insertDocuments = (db, data, callback) => {
  const collection = db.collection('propostas');
  collection
    .insertMany(data, (err, result) => {
      callback(result);
    });
};

const insertJson = (json) => {
  MongoClient.connect(url, (err, db) => {
    console.time('insert_time');
    insertDocuments(db, json, () => {
      console.timeEnd('insert_time');
      db.close();
    });
  });
};

module.exports = function (server) {
  const router = express.Router();
  router.post('/contratos', (req, res) => {
    insertJson(req.body);
    res.send('Feito.');
  });
  router.get('/contratos', (req, res) => {
    res.send('hueztop');
  });
  server.use('/api', router);

  // contratoService.register(router, '/contracts');
};
