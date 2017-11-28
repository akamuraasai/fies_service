import faker from 'faker';

const GradeCurso = () => ({
  NuSemestre: faker.random.number(12) + 1,
  ValorPorSemestre: faker.random.number(99999),
});

export default GradeCurso;
