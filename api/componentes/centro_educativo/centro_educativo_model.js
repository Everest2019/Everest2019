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

        imagen_portada: {type: String, required: false},
        galeria: {type: String, required: false},
        informacion_adicional: {type: String, required: false},
        documento: {type: String, required: false},

        //Encargado
        primer_nombre: {type: String, required: true},
        segundo_nombre: {type: String, required: true},
        primer_apellido: {type: String, required: true},
        segundo_apellido: {type: String, required: true},
        correo_encargado: {type: String, required: true},
        departamento: {type: String, required: false},
        telefono_encargado: {type: String, required: true},
        extension: {type: String, required: false},
        identificacion: {type: String, required: true}
        
    }
);

module.exports = mongoose.model('Centro_Educativo', schema_centro_educativo);