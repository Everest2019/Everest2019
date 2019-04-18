'use strict';

const mongoose = require('mongoose');

let schema_utiles = new mongoose.Schema(
    {
        cantidad : {type: String, requiered:true},
        descripcion : {type: String, requiered:true},
        articulos:[
            {nombre:String}
        ]
    }
);
module.exports = mongoose.model('lista_utiles', schema_utiles); 