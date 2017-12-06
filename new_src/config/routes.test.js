import request from 'supertest';
import mongodb, { MongoClient } from 'mongo-mock';
import routes, { insertDocument } from './routes';
import { app } from './server';
import { DEFAULT_RETURN, MONGO_URL, MONGO_COLLECTION } from './consts';

MongoClient.persist = 'mongo.js';

describe('Routes', () => {
  const router = routes(app);

  describe('quando acessa a rota padrão', () => {
    const route = '/api/';

    it('verifica se está acessivel', (done) => {
      request(router)
        .get(route)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          done();
        });
    });

    it('verifica se teve a resposta correta', (done) => {
      request(router)
        .get(route)
        .then((res) => {
          expect(res.text).toBe(DEFAULT_RETURN);
          done();
        });
    });
  });

  describe('quando acessa a rota de POST para inserção de propostas', () => {
    const route = '/api/contratos';
    const expectedReturn = {
      code: 1,
      status: 'Success',
      msg: 'Inserted in',
    };

    it('verifica se a rota está acessivel', (done) => {
      request(router)
        .post(route)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          done();
        });
    });

    it('retorna sucesso no retorno junto com o tempo de inserção em formato JSON', (done) => {
      request(router)
        .post(route)
        .then((res) => {
          const json = JSON.parse(res.text);
          expect(json.status).toBe(expectedReturn.status);
          expect(json.code).toBe(expectedReturn.code);
          expect(json.msg).toEqual(expect.stringContaining(expectedReturn.msg));
          done();
        });
    });
  });
});

describe('insertDocument', () => {
  it('verifica se ao mandar os dados, eles são inseridos corretamente', () => {
    const json = {
      senha: 'asd1asda-123dase12-asd21daasd-123fsdf',
      candidato: {
        nome: 'John Due',
      },
      financas: {
        valor: 10,
      },
    };

    return MongoClient.connect(MONGO_URL, {}, (err, db) => {
      const collection = db.collection(MONGO_COLLECTION);
      insertDocument(collection, json, (result) => {
        db.close();
        return expect(result).toBe(true);
      });
    });
  });
});
