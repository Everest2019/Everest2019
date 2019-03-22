'use strict';

const modelo_cita = require('./citas.model');

module.exports.registrar_cita = function(req,res){
    let nueva_cita = new modelo_cita(
        {
            id_padre_familia: req.body.id_padre_familia,
            id_centro_educativo: req.body.id_centro_educativo,
            hora: req.body.hora,
            fecha : req.body.fecha,
            comentario: req.body.comentario
        }
    );

    nueva_cita.save(function(error){
        if(error){ 
            res.json(
                {
                    success: false,
                    msg: `La cita no pudo ser agregada. Verificar el error: ${error}`
                }
            )
        }else{
            res.json(
                {
                    success: true,
                    msg: `La cita fue agregada correctamente`
                }
            )
        }
    });
};

module.exports.listar_citas = function(req,res){
    modelo_cita.find().then(
        function(citas){
            res.send(citas);
        }
    );
};