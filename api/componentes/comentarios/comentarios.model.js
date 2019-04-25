'use strict';
const mongoose = require('mongoose');

let schema_comentarios = new mongoose.Schema(
    {
        id_centro_educativo: { type: String, required: true },
        comentario : { type: String, required: true },
        calificacion: { type: String, required: true },
        id_padre_familia: { type: String, required: true }
    }
);

module.exports = mongoose.model('Comentarios', schema_comentarios);