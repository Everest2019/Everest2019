'use stritc';
const mongoose = require ('mongoose');

let schema_preguntas = new mongoose.Schema(
    {
        pregunta : {type: String, required: true},
        respuesta : {type: String, required : true}
    }
);

module.exports = mongoose.model('preguntas', schema_preguntas);   