'use strict';
const mongoose = require('mongoose');

let schema_contrasena = new mongoose.Schema(
    {
        correo:{type: String, required: true},
        contrasenna: {type: String, required: true},
        confirmar_contrasena: {type: String, required: true}
    }
);
module.exports = mongoose.model('contrasena', schema_contrasena);
