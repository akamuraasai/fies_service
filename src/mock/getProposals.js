import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';

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

const main = async () => {
  const res = await fetch('http://hmg-fiesservicos.mec.gov.br/servicos/pre-inscricao/pfies', {
    headers: {
      Authorization: 'F}mR>9u8dan*0qRb3]I$<=UwI-Bq=6',
    },
  });
  const json = await res.json();
  const codes = json.codigo;
  console.log(json);

  codes.forEach((id) => {
    fetch(`http://hmg-fiesservicos.mec.gov.br/servicos/pre-inscricao/pfies?id=${id}`, {
      headers: {
        Authorization: 'F}mR>9u8dan*0qRb3]I$<=UwI-Bq=6',
      },
    }).then(response => response.json())
      .then(proposals => insertJson(proposals.candidato));
  });
};

main();
