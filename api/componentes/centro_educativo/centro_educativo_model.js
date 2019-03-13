'use strict';

const mongoose = require('mongoose');

let schema_centro_educativo = new mongoose.Schema(
    {
        //codigo: {type: String, required: true},
        
        nombre_comercial: {type:String, required: true},
        cedula_juridica: {type: String, required: true},
        tipo_institucion: {type: String, required: true},
        modalidad: {type: String, required: true},
        tipo_colegio: {type: String, required: true},
        distrito: {type: String, required: true},
        canton: {type: String, required: true},
        provincia: {type: String, required: true},
        direccion_exacta: {type: String, required: true},
        ubicacion_mapa_lat: {type: String, required: true},
        ubicacion_mapa_lng: {type: String, required: true},
        ano_creacion: {type: Number, required: true},
        referencia_historica: {type: String, required: true},
        informacion_general: {type: String, required: true},
        telefono: {type: String, required: true},
        fax: {type: String, required: false},
        pagina_web: {type: String, required: false},
        correo: {type: String, required: true},
        facebook: {type: String, required: false},
        twitter: {type: String, required: false},
        instagram: {type: String, required: false},
        youtube: {type: String, required: false},
        matricula: {type: Number, required: false},
        mensualidad: {type: Number, required: false},
        aprobado: {type: Boolean, required: false},
        estado: {type: Boolean, required: false},
        contrasena: {type: String, required: false},

        //tablas agregadas

        fotografia: {type: String, required: false},
        informacion_adicional: {type: String, required: false},
    }
);

module.exports = mongoose.model('Centro_Educativo', schema_centro_educativo);