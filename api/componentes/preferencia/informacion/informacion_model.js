'use strict';
const mongoose = require ('mongoose');

let schema_informacion = new mongoose.Schema(
    {
        datos: {type: String, required: true},
    }
);
module.exports= mongoose.model('informacion', schema_informacion);