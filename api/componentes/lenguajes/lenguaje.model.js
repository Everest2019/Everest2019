'use strict';
let mongoose = require('mongoose');

let lenguaje_schema = new mongoose.Schema({
  iso:{type: String, required: true, unique:true},
  nombre:{type: String, required: true},
  bandera: {type: String}
});

module.exports = mongoose.model('Lenguaje',lenguaje_schema);
