const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect.openUri('mongodb://localhost/fies');
