'use strict';

const mongoose = require('mongoose');

let schema_usuarios = new mongoose.Schema(
    {
        /*DATOS DE LOS USUARIOS CENTROS EDUCATIVOS*/

            nombre_comercial: {type:String, required: false},
            cedula_juridica: {type: String, required: false},
            tipo_institucion: {type: String, required: false},
            modalidad: {type: String, required: false},
            tipo_colegio: {type: String, required: false},
            direccion_exacta: {type: String, required: false},
            ubicacion_mapa_lat: {type: String, required: false},
            ubicacion_mapa_lng: {type: String, required: false},
            ano_creacion: {type: Number, required: false},
            referencia_historica: {type: String, required: false},
            informacion_general: {type: String, required: false},
            fax: {type: String, required: false},
            pagina_web: {type: String, required: false},
            facebook: {type: String, required: false},
            twitter: {type: String, required: false},
            instagram: {type: String, required: false},
            youtube: {type: String, required: false},
            logo: {type: String, required: false},
            matricula: {type: Number, required: false},
            mensualidad: {type: Number, required: false},

            //tablas agregadas

            imagen_portada: {type: String, required: false},
            galeria1: {type: String, required: false},
            galeria2: {type: String, required: false},
            galeria3: {type: String, required: false},
            galeria4: {type: String, required: false},
            informacion_idioma: {type: String, required: false},
            informacion_religion: {type: String, required: false},
            informacion_ensenanza: {type: String, required: false},
            documento1: {type: String, required: false},
            documento2: {type: String, required: false},
            documento3: {type: String, required: false},
            aprobado: {type: Boolean, required: false},

            //Encargado
            primer_nombre_encargado: {type: String, required: false},
            segundo_nombre_encargado: {type: String, required: false},
            primer_apellido_encargado: {type: String, required: false},
            segundo_apellido_encargado: {type: String, required: false},
            correo_encargado: {type: String, required: false},
            departamento_encargado: {type: String, required: false},
            telefono_encargado: {type: String, required: false},
            extension_encargado: {type: String, required: false},
            identificacion_encargado: {type: String, required: false},
            fotografia_encargado: {type: String, required: false},

            //Servicios adicionales
            servicios : [
                {servicio: String}
            ],


        /* DATOS DE LOS USUARIOS PADRES DE FAMILIA*/
            tipo_identificacion: {type: String, required: false},
            nacionalidad: {type: String,  required: false},
            cantidad_hijos : {type: Number, required: false},
            edad_hijos : [
               {type: Number, required: false}
            ]



            foto_perfil : {type: String, required: false},


        /* DATOS DEL ADMINISTRADOR */
            puesto_mep: {type: String, required: false},

        /* CAMPOS COMPARTIDOS*/

            //Padre de familia y Administador
            primer_nombre: {type: String, required: false},
            segundo_nombre: {type: String, required: false},
            primer_apellido: {type: String, required: false},
            segundo_apellido: {type: String, required: false},
            identificacion: {type: String, required: false},

            //Padre de familia y Centro educativo

            distrito: {type: String, required: false},
            canton: {type: String, required: false},
            provincia: {type: String, required: false},

            //Todos los usuarios
            telefono: {type: String, required: true},
            correo: {type: String, required: true},

            estado: {type: Boolean, required: true},
            contrasena: {type: String, required: false},
            tipo_usuario: {type: String, required: true},

            etiquetas: [
                {
                  accion : {type: String, required: true},
                  descripcion : {type: String, required:true}
                }
            ]



    }
);

module.exports = mongoose.model('usuarios', schema_usuarios);
