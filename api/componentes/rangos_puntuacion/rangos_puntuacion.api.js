'use strict';

const modelo_rangos_puntuacion = require('./rangos_puntuacion.model');


module.exports.agregar_rangos_puntuacion = (req, res) =>{
    let rangos_puntuacion = new modelo_rangos_puntuacion(
        {
            estrella1: req.body.estrella1,
            estrella2: req.body.estrella2,
            estrella3: req.body.estrella3,
            estrella4: req.body.estrella4,
            estrella5: req.body.estrella5
        }
    );
    rangos_puntuacion.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudieron registrar los rangos, ocurrio el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Rangos registrados correctamente`
                }
            );
        }
    });
}

module.exports.listar_rangos_puntuacion = (req, res) => {
    modelo_rangos_puntuacion.find().then(
        function (rangos) {
            if (rangos.length > 0) {
                res.json(
                    {
                        success: true,
                        rangos: rangos
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        rangos: 'No se encontraron rangos'
                    }
                )
            }
        }
    )
};

module.exports.modificar_rangos_puntuacion = (req,res) =>{
    modelo_rangos_puntuacion.findByIdAndUpdate(req.body.id_rangos,
        {
            $set: req.body
        },
        function(error){
            if(error){
                res.json({
                    success: false,
                    msg: `No se pudieron modificar los rangos, revisar el error: ${error}`
                });
            }
            else{
                res.json({
                    success: true,
                    msg: `Los rangos han sido modificados correctamente`
                });
            }
        });
};