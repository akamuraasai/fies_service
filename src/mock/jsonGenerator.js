import { range } from 'ramda';
import faker from 'faker';

import Contrato from './Models/Contrato';
import Candidato from './Models/Candidato';
import Financiamento from './Models/Financiamento';
import GradeCurso from './Models/GradeCurso';
import Fiador from './Models/Fiador';

const grades = range(0, faker.random.number(5) + 1).map(GradeCurso);
const fiadores = range(0, faker.random.number(3) + 1).map(Fiador);
export const data = () => Contrato(Candidato(), Financiamento(), grades, fiadores);
export const makeJson = () => JSON.stringify(data());
