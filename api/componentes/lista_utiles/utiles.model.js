'use strict';
const mongoose =require('mongoose');

let schema_registrar = new mongoose.Schema(
    {
        articulo: {type:String, required:true},
        cantidad: {type:Number, required:true},
        descripcion: {type:String, required:false},
        
        articulo_1: {type:String, required:true},
        cantidad_1: {type:Number, required:true},
        descripcion_1: {type:String, required:false},
        
        articulo_2: {type:String, required:true},
        cantidad_2: {type:Number, required:true},
        descripcion_2: {type:String, required:false},//,
        //tipo_usuario:{type:String, required:true},
       // id_centro_educativo:{type:String,required:false}

       articulo_3: {type:String, required:true},
        cantidad_3: {type:Number, required:true},
        descripcion_3: {type:String, required:false},

        articulo_4: {type:String, required:true},
        cantidad_4: {type:Number, required:true},
        descripcion_4: {type:String, required:false},

        articulo_5: {type:String, required:true},
        cantidad_5: {type:Number, required:true},
        descripcion_5: {type:String, required:false},

        articulo_6: {type:String, required:true},
        cantidad_6: {type:Number, required:true},
        descripcion_6: {type:String, required:false},

        articulo_7: {type:String, required:true},
        cantidad_7: {type:Number, required:true},
        descripcion_7: {type:String, required:false},

        articulo_8: {type:String, required:true},
        cantidad_8: {type:Number, required:true},
        descripcion_8: {type:String, required:false},

        articulo_9: {type:String, required:true},
        cantidad_9: {type:Number, required:true},
        descripcion_9: {type:String, required:false},

        articulo_10: {type:String, required:true},
        cantidad_10: {type:Number, required:true},
        descripcion_10: {type:String, required:false},

        articulo_11: {type:String, required:true},
        cantidad_11: {type:Number, required:true},
        descripcion_11: {type:String, required:false},

        articulo_12: {type:String, required:true},
        cantidad_12: {type:Number, required:true},
        descripcion_12: {type:String, required:false},

        articulo_13: {type:String, required:true},
        cantidad_13: {type:Number, required:true},
        descripcion_13: {type:String, required:false},

        articulo_14: {type:String, required:true},
        cantidad_14: {type:Number, required:true},
        descripcion_14: {type:String, required:false}

    }
);
module.exports = mongoose.model('lista_utiles',schema_registrar);