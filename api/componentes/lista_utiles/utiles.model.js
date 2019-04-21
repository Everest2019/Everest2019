'use strict';
const mongoose =require('mongoose');

let schema_registrar = new mongoose.Schema(
    {
        articulo: {type:String, required:true},
        cantidad: {type:Number, required:true},
        descripcion: {type:String, required:false},       
    }
);
module.exports = mongoose.model('lista_utiles',schema_registrar);