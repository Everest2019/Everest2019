'use strict';

const mongoose = require('mongoose');

let modelo_bitacora = new mongoose.Schema({
    
    usuario: {type: String, required: true},
    detalle: {type: String, required: true},
    fecha: {type: Date, required: true}

});

module.exports = mongoose.model('bitacora', modelo_bitacora);