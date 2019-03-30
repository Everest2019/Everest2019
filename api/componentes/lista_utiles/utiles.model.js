'use strict';
const mongoose =require('mongoose');

let schema_registrar = new mongoose.Schema(
    {
        articulo: {type:String, required:true},
        cantidad: {type:Number, required:true},
        descripcion: {type:String, required:false},
        
        articulo_1: {type:String, required:true},
        cantidad_1: {type:Number, required:true},
        descripcion_1: {type:String, required:false}//,
        //tipo_usuario:{type:String, required:true},
       // id_centro_educativo:{type:String,required:false}

    }
);
module.exports = mongoose.model('lista_utiles',schema_registrar);