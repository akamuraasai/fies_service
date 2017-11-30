import fetch from 'node-fetch';

import json from '../../4-5k_propostas';

const main = (name, value) => 
fetch('http://10.10.3.160:8080/api/contratos', {
  method: 'POST',
  body: JSON.stringify(json),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(res => {
    console.log('Thread: %s - Contagem: %d', name, value)
    if(value < 25)
      main(name, ++value);
  })
  .catch(err => console.error(err));

main('a', 1);
main('b', 1);
main('c', 1);
main('d', 1);
