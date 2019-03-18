'use strict'
const modelo_informacion = require('./informacion_model');

module.exports.registrar = (req, res) => {
    let nueva_informacion = new modelo_registrar(
        {
            dato: req.body.dato,
        }
    );
    nueva_informacion.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la información, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registro correctamente`
                }
            );

        }

    });

};
module.exports.listar_informacion = (req, res) => {
    modelo_informacion.find().then(
        function (información) {
            if (información.length > 0) {
                res.json(
                    {
                        success: true,
                        información: información
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        información: 'No se encontraro la información'
                    }
                )
            }
        }
    )
};