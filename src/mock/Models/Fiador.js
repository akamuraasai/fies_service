import faker from 'faker';
import moment from 'moment';
import {cpf} from "../Helpers/CPFGenerator";

const Fiador = () => ({
  CPFFiador: cpf(),
  NomeFiador: faker.name.findName(),
  NaturalDe: faker.address.city(),
  PaísDeNascimento: faker.address.country(),
  RG: `${faker.random.number(999999999)}`,
  OrgaoEmissor: 'SSP',
  DataEmissaoRG: moment(faker.date.past()).format('DDMMYYYY'),
  UFOrgãoEmissorRG: faker.random.number(27),
  VlRendaBrutaFiador: faker.random.number(999999),
  EstadoCivilFiador: faker.hacker.adjective(),
  NomeCônjuge: faker.name.findName(),
  CPFCônjuge: cpf(),
  GrauParentescoFiador: faker.hacker.adjective(),
  DataNascimetnoFiador: moment(faker.date.past()).format('DDMMYYYY'),
  OcupacaoFiador: faker.hacker.adjective(),
  QuantoTempoTrabalhoFiador: faker.random.number({min:1, max:10}),
  EmailFiador: faker.internet.email(),
  SexoFiador: faker.random.number(1) === 0 ? 'F' : 'M',
  EnderecoFiador: faker.address.streetAddress(),
  CEP: `${faker.random.number(99999999)}`,
  Cidade: faker.address.city(),
  Estado: faker.address.stateAbbr(),
  'Tipo de logradouro': faker.address.streetPrefix(),
  Logradouro: faker.address.streetName(),
  Número: faker.random.number(9999),
  Complemento: faker.address.secondaryAddress(),
  Bairro: faker.address.county(),
  RedidenciaPropria: faker.random.number(1) === 0 ? 'S' : 'N',
  'Telefone 1': faker.random.number(9999999999),
  CelularFiador: faker.random.number(99999999999),
  QuantasPessoasResidem: faker.random.number({min:1, max:10}),
});

export default Fiador;
