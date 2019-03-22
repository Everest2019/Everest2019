'use strict';
let mongoose = require('mongoose');

let schema_cita = new mongoose.Schema({
    id_padre_familia: {type: String, required: true},
    id_centro_educativo: {type: String, required: true},
    hora: {type: String, required: true},
    fecha: {type: Date, required: true},
    comentario: {type: String, required: false }
});

module.exports = mongoose.model('Citas', schema_cita);
