import faker from 'faker';
import moment from 'moment';

const Fiador = () => ({
  CPFFiador: faker.random.number(99999999999),
  NomeFiador: faker.name.findName(),
  NaturalDe: faker.address.city(),
  PaísDeNascimento: faker.address.country(),
  RG: faker.random.number(999999999),
  OrgaoEmissor: 'SSP',
  DataEmissaoRG: moment(faker.date.past()).format('DMMYYYY'),
  UFOrgãoEmissorRG: faker.address.stateAbbr(),
  VlRendaBrutaFiador: faker.random.number(999999),
  EstadoCivilFiador: faker.hacker.adjective(),
  NomeCônjuge: faker.name.findName(),
  CPFCônjuge: faker.random.number(99999999999),
  GrauParentescoFiador: faker.hacker.adjective(),
  DataNascimetnoFiador: faker.date.past(),
  OcupacaoFiador: faker.hacker.adjective(),
  QuantoTempoTrabalhoFiador: faker.random.number(20),
  EmailFiador: faker.internet.email(),
  SexoFiador: faker.random.number(1) === 0 ? 'F' : 'M',
  EnderecoFiador: faker.address.streetAddress(),
  CEP: faker.random.number(99999999),
  Cidade: faker.address.city(),
  Estado: faker.address.state(),
  Tipodelogradouro: faker.address.streetPrefix(),
  Logradouro: faker.address.streetName(),
  Número: faker.random.number(9999),
  Complemento: faker.address.secondaryAddress(),
  Bairro: faker.address.county(),
  RedidenciaPropria: faker.random.number(1) === 0 ? 'S' : 'N',
  Telefone1: faker.random.number(9999999999),
  CelularFiador: faker.random.number(99999999999),
  QuantasPessoasResidem: faker.random.number(6),
});

export default Fiador;
