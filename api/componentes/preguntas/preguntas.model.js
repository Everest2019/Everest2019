'use strict';
const mongoose = require ('mongoose');

let schema_preguntas = new mongoose.Schema(
    {
        id_centro_educativo: {type: String, required: true},
        pregunta : {type: String, required: true},
        respuesta : {type: String, required : true},
        estado: {type: String, required:true}
    }
);

module.exports = mongoose.model('preguntas', schema_preguntas);   