'use stritc';
const mongoose = require ('mongoose');

let schema_actividades = new mongoose.Schema(
    {
        id_centro_educativo: {type: String, required: true},
        titulo : {type: String, required: true},
        fecha : {type: Date, required : true},
        descripcion : {type : String, required : true}
    }
);

module.exports = mongoose.model('actividades', schema_actividades);  