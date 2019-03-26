'use stritc';
const mongoose = require ('mongoose');

let schema_actividades = new mongoose.Schema(
    {
        titulo : {type: String, required: true},
        fecha : {type: Date, required : true},
        descripcion : {type : String, required : true}
    }
);

module.exports = mongoose.model('Actividades', schema_actividades);  