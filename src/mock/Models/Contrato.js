import faker from 'faker';

const Contrato = (candidato, financiamento, grades, fiadores) => ({
  senha: faker.random.uuid(),
  candidato,
  financiamento,
  grades,
  fiadores,
});

export default Contrato;
