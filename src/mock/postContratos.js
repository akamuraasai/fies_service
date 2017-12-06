import fetch from 'node-fetch';

import json from '../../4-5k_propostas';

const main = (name, value, time) =>
  fetch('http://localhost:8080/api/contratos', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      console.log('Thread: %s - Contagem: %d - Status: %s - Time: %d', name, value, res.msg, (new Date()).getTime() - time)
      if (value < 37) {
        main(name, value + 1, (new Date()).getTime());
      }
    })
    .catch(err => console.error(err));

main('a', 1, (new Date()).getTime());
main('b', 1, (new Date()).getTime());
main('c', 1, (new Date()).getTime());
