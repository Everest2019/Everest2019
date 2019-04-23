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

module.exports.listar_citas = (req, res) => {
    modelo_cita.find().then(
        function (cita) {
            if (cita.length > 0) {
                res.json(
                    {
                        success: true,
                        cita: cita
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        articulo: 'No se encontraron citas'
                    }
                )
            }
        }
    )
};

module.exports.eliminar_cita = (req, res) => {
    modelo_cita.findByIdAndDelete(req.body.id_cita,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar la cita' });
            } else {
                res.json({ success: true, msg: 'La cita se elimino con éxito' });
            }
        }
    )
};