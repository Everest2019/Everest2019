'use strict';

const modelo_contrasena = require('./contrasena_model');

module.exports.contrasena = (req, res) => {
    let nueva_contrasena = new modelo_contrasena(
        {
            correo: req.body.correo,
            contrasenna: req.body.contrasenna,
            confirmar_contrasena: req.body.confirmar_contrasena
        }
    );
    nueva_contrasena.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo crear la contraseña`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se creo correctamente`
                }
            );
        }
    });

    
};