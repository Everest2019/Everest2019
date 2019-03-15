'use strict';
const mongoose = require('mongoose');

let schema_etiquetas = new mongoose.Schema(
    {
        accion : {type: String, required: true},
        descripcion : {type: String, required:true}
    }
);
module.exports = mongoose.model('etiquetas', schema_etiquetas);
