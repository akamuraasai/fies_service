import { MongoClient } from 'mongodb';

import StreamArray from 'stream-json/utils/StreamArray';
import path from 'path';
import fs from 'fs';

const url = 'mongodb://localhost:27017/fies';

const insertDocuments = (db, data, callback) => {
  const collection = db.collection('propostas');
  collection
    .insertMany(data, (err, result) => {
      callback(result);
    });
};

const insertLargeJson = () => {
  const jsonStream = StreamArray.make();
  let db;
  MongoClient.connect(url, (err, conn) => {
    db = conn;

    console.time('insert_time');
    const filename = path.join(__dirname, '../100k_propostas.json');
    fs.createReadStream(filename).pipe(jsonStream.input);
  });

  jsonStream.output.on('data', ({ index, value }) => {
    if (index % 1000 === 0 && index !== 0) {
      console.log(`${index} registros inseridos...`);
    }
    insertDocuments(db, [value], () => {});
  });

  jsonStream.output.on('end', () => {
    console.log('Todos os registros inseridos.');
    console.timeEnd('insert_time');
    db.close();
  });
};

const insertJson = () => {
  const json = JSON.parse(fs.readFileSync('./4-5k_propostas.json'));
  MongoClient.connect(url, (err, db) => {
    console.time('insert_time');
    insertDocuments(db, json, () => {
      console.timeEnd('insert_time');
      db.close();
    });
  });
};

const main = () => (
  process.argv.filter(i => i === '100k').length > 0
    ? insertLargeJson()
    : insertJson()
);

main();
