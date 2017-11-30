import fetch from 'node-fetch';

import json from '../../4-5k_propostas';

const main = () => fetch('http://localhost:8080/api/contratos', {
  method: 'POST',
  body: JSON.stringify(json),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

main();
