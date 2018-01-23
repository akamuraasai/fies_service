import { MongoClient } from 'mongodb';
import axios from 'axios';

const url = 'mongodb://localhost:27017/fies';

const insertDocuments = (db, data, callback) => {
  const collection = db.collection('propostas');
  collection
    .insertMany(data, (err, result) => {
      callback(result);
    });
};

const insertJson = (json, id) => {
  MongoClient.connect(url, (err, db) => {
    console.log(id);
    console.time(`insert_time_id_${id}`);
    insertDocuments(db, json, () => {
      console.timeEnd(`insert_time_id_${id}`);
      db.close();
    });
  });
};

const main = async () => {
  const res = await axios.get('http://hmg-fiesservicos.mec.gov.br/servicos/pre-inscricao/pfies', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'F}mR>9u8dan*0qRb3]I$<=UwI-Bq=6',
    },
  });
  const codes = res.data.codigo;

  codes.forEach((id) => {
    axios.get(`http://hmg-fiesservicos.mec.gov.br/servicos/pre-inscricao/pfies?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'F}mR>9u8dan*0qRb3]I$<=UwI-Bq=6',
      },
    }).then(proposals => insertJson(proposals.data.candidato, id));
  });
};

main();
