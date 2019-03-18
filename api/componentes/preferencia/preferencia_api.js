'use strict'
const modelo_registrar = require('./preferencia_model');

module.exports.registrar = (req, res) => {
    let nuevo_registrar = new modelo_registrar(
        {
            nombre: req.body.nombre,
            informacion: req.body.informacion,
        }
    );
    nuevo_registrar.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la preferencia, ocurrió el siguiente error ${error}`
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
module.exports.listar = (req, res) => {
    modelo_registrar.find().then(
        function (registro) {
            if (registro.length > 0) {
                res.json(
                    {
                        success: true,
                       registro: registro
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        registro: 'No se encontraron preferencias'
                    }
                )
            }
        }
    )
};