import express from 'express';
import { MongoClient } from 'mongodb';
import { DEFAULT_RETURN, MONGO_URL, MONGO_COLLECTION } from './consts';

export const insertDocument =
  (collection, json) => collection.insertMany(json, (err, result) => result);

const defaultRoute = (req, res) => res.status(200).send(DEFAULT_RETURN);
const insertRoute = (req, res) => {
  const json = [{
    code: 1,
    status: 'Success',
    msg: 'Inserted in 1234ms.',
  }];

  MongoClient.connect(MONGO_URL, {}, (err, db) => {
    const collection = db.collection(MONGO_COLLECTION);
    insertDocument(collection, json, (result) => {
      console.log(result);
      db.close();
    });
  });

  return res.status(200).send(json);
};

const routes = (server) => {
  const router = express.Router();

  router.get('/', defaultRoute);
  router.post('/contratos', insertRoute);

  server.use('/api', router);
  return server;
};

export default routes;
