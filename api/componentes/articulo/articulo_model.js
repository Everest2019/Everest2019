'use strict';

const mongoose= require('mongoose');

let schema_articulo= new mongoose.Schema(
    {
        nombre: {type: String, required:true},
        descripcion: {type: String, required:true}
    }
);
module.exports=mongoose.model('articulo', schema_articulo);
