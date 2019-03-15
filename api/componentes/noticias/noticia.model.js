'use strict';
let mongoose = require('mongoose');

let noticiaSchema = new mongoose.Schema({
    titulo: {type : String, required:true},
    fecha: {type:Date, required:true} ,
    descripcion:{type:String, required:true}
});

module.exports = mongoose.model('Noticia',noticiaSchema);   


