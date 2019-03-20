'use strict';

const actividadModel = require('./actividades.model');

module.exports.registrar_actividad = function(req,res){
    let nuevaActividad= new actividadModel(
        {
            imagen: req.body.imagen,
            fecha: req.body.fecha,
            titulo : req.body.titulo,
            descripcion: req.body.descripcion
        }
    );

    nuevaActividad.save(function(error){
        if(error){ 
            res.json(
                {
                    success: false,
                    msg: `La actividad no pudo ser agregada. Verificar el error: ${error}`
                }
            )
        }else{
            res.json(
                {
                    success: true,
                    msg: `La actividad fue agregada correctamente`
                }
            )
        }
    });
};

module.exports.listar_actividades = function(req,res){
    actividadModel.find().then(
        function(actividades){
            res.send(actividades);
        }
    );
};
