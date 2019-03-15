'use strict';

const modelo_centro_educativo = require('./centro_educativo_model');

module.exports.registrar = (req,res) =>{

    let nuevo_centro_educativo = new modelo_centro_educativo(
        {
            nombre_comercial: req.body.nombre_comercial,
            cedula_juridica: req.body.cedula_juridica,
            tipo_institucion: req.body.tipo_institucion,
            modalidad: req.body.modalidad,
            tipo_colegio: req.body.tipo_colegio,
            distrito: req.body.distrito,
            canton: req.body.canton,
            provincia: req.body.provincia,
            direccion_exacta: req.body.direccion_exacta,
            ubicacion_mapa_lat: req.body.ubicacion_mapa_lat,
            ubicacion_mapa_lng: req.body.ubicacion_mapa_lng,
            ano_creacion: req.body.ano_creacion,
            referencia_historica: req.body.referencia_historica,
            informacion_general: req.body.informacion_general,
            telefono: req.body.telefono,
            fax: req.body.fax,
            pagina_web: req.body.pagina_web,
            correo: req.body.correo,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            youtube: req.body.youtube,
            logo: req.body.logo,
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            contrasena: req.body.contrasena,
            imagen_portada: req.body.imagen_portada,
            galeria: req.body.galeria,
            documento: req.body.documento,
            informacion_adicional: req.body.informacion_adicional,
            primer_nombre: req.body.primer_nombre,
            segundo_nombre: req.body.segundo_nombre,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            correo_encargado: req.body.correo_encargado,
            departamento: req.body.departamento,
            telefono_encargado: req.body.telefono_encargado,
            extension: req.body.extension,
            identificacion: req.body.identificacion,
            fotografia_encargado: req.body.fotografia_encargado,
            aprobado: req.body.aprobado,
            estado: req.body.estado,
            servicio_adicional: req.body.servicio_adicional
        }
    );

    nuevo_centro_educativo.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `El centro educativo no pudo ser agregado. Verificar el error: ${error}`
                }
            )
        }
        
        else{
            res.json(
                {
                    success: true,
                    msg: `El centro educativo fue agregado correctamente`
                }
            )
        }
    });
};