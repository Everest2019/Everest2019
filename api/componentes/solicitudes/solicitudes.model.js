'use strict';

const mongoose= require('mongoose');

let schema_solicitud = new mongoose.Schema(
    {
        id_centro_educativo: {type: String, required:true},
        id_padre_familia: {type: String, required:true},
    }
);
module.exports=mongoose.model('solicitud', schema_solicitud);