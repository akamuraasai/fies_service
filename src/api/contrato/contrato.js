const restful = require('node-restful');

const { mongoose } = restful;

const contratoSchema = new mongoose.Schema({
  senha: { type: String, maxlength: 100, required: true },
});

module.exports = restful.model('Contrato', contratoSchema);
