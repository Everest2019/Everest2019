'use strict';
let actividadSchema = new mongoose.Schema({
    imagen: {type:String, required:true},
    fecha: {type:Date, required:true},
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true }
});

module.exports = mongoose.model('Actividades',actividadSchema);
