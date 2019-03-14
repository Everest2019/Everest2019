'use strict';
const mongoose = require('mongoose');

let schema_registrar = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        informacion: { type: String, required: true }
    }
);
module.exports = mongoose.model('registrar', schema_registrar);