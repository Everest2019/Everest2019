'use strict';

const mongoose = require('mongoose');

let schema_criterios_evaluacion = new mongoose.Schema({
    nombre : {type:String, required: true}
});

module.exports = mongoose.model('criterios_evaluacion', schema_criterios_evaluacion);