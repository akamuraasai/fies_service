import fs from 'fs';
import { range } from 'ramda';
import { data as contratoData } from './jsonGenerator';

const json = size => JSON.stringify(range(0, size).map(contratoData));
const adjustJsonEnd = (ix, n, data) => (
  ix === n - 1
    ? `${data}]`
    : `${data},`
);
const adjustJsonStart = (ix, n, data) => (
  ix === 0
    ? `[${data},`
    : adjustJsonEnd(ix, n, data)
);

const makeSimpleJson = size => fs.writeFile('4-5k_propostas.json', json(size));
const makeLargeJson = (n, size) =>
  range(0, n)
    .forEach((i, ix) => {
      console.log(`Pacote [${ix}] - ${ix * size} até ${(ix + 1) * size}`);
      fs.appendFileSync('100k_propostas.json', adjustJsonStart(ix, n, json(size).slice(1, -1)));
    });

const main = () => (
  process.argv.filter(i => i === '100k').length > 0
    ? makeLargeJson(20, 5000)
    : makeSimpleJson(4500)
);

console.time('write_file');
main();
console.timeEnd('write_file');
