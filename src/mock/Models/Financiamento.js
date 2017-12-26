import faker from 'faker';
import moment from 'moment';

const Financiamento = () => ({
  SemestreAno: `0${(faker.random.number(1) + 1)}${moment(faker.date.between(2010, 2017)).format('YYYY')}`,
  SemestresFinanciados: faker.random.number({min:1, max:99}),
  MesInicioFinanciamento: `${faker.random.number(11) + 1}`,
  PeriodicidadeCurso: faker.random.number({min:1, max:15}),
  SemestreCursados: faker.random.number({min:1, max:10}),
  VlMensalidadeFIES: faker.random.number({min:1, max:9999}),
  VlTotalCurso: faker.random.number({min:1, max:9999}),
  NomeCurso: faker.company.companyName(),
  CnpjIES: faker.random.number(99999999999999),
  NomeIES: faker.name.findName(),
  NomeCampus: faker.company.companyName(),
  Funding: faker.company.companyName(),
});

export default Financiamento;
