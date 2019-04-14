'use strict';
const modelo_solicitud = require('./solicitudes.model');

module.exports.registrar_solicitud = (req, res) => {
    let nueva_solicitud = new modelo_solicitud(
        {
            id_centro_educativo: req.body.id_centro_educativo,
            id_padre_familia: req.body.id_padre_familia
        }
    );
    nueva_solicitud.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la solicitud`
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
module.exports.buscar_por_id = (req, res) => {
    modelo_solicitud.find({ _id: req.body.id }).then(
        function (solicitud) {
            if (solicitud) {
                res.json(
                    {
                        success: true,
                        solicitud: solicitud
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        solicitud: 'No se encontraron solicitudes'
                    }
                )
            }
        }
    )
};
module.exports.listar_solicitudes = (req, res) => {
    modelo_solicitud.find().then(
        function (solicitud) {
            if (solicitud.length > 0) {
                res.json(
                    {
                        success: true,
                        solicitud: solicitud
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        solicitud: 'No se encontraron solicitudes'
                    }
                )
            }
        }
    )
};

module.exports.borrar = (req, res) => {
    modelo_solicitud.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar la solicitud' });
            } else {
                res.json({ success: true, msg: 'La solicitud se elimino con éxito' });
            }
        }
    )
};