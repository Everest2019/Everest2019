'use stritc';
const mongoose = require ('mongoose');

let schema_actividades = new mongoose.Schema(
    {
        fecha : {type: String, required : true},
        titulo : {type: String, required : true},
        descripcion : {type : String, required : true}
    }
);

module.exports = mongoose.model('actividad', schema_actividades); 