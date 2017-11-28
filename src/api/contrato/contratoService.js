const Contrato = require('./contrato');

Contrato.methods(['get', 'post', 'delete']);
Contrato.updateOptions({ new: true, runValidators: true });

module.exports = Contrato;
