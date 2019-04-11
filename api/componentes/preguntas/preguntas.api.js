'use strict';
const modelo_preguntas = require('./preguntas.model');

module.exports.registrar_pregunta = (req, res) => {
    let nueva_pregunta = new modelo_preguntas(
        {
            id_centro_educativo: req.body.id_centro_educativo,
            pregunta: req.body.pregunta,
            respuesta: req.body.respuesta,
            estado: 'Activo'
        }
    );
    nueva_pregunta.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo agregar la pregunta`
                }
            );
        } else {
            res.json(
                {
                    succes: true,
                    msg: `Se agrego correctamente la pregunta`
                }
            );

        }

    });
};
module.exports.listar = (req, res) => {
    modelo_preguntas.find().then(
        function (preguntas) {
            if (preguntas.length > 0) {
                res.json(
                    {
                        success: true,
                        preguntas: preguntas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        preguntas: 'No se encontraron preguntas'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = (req, res) => {
    modelo_preguntas.find({ _id: req.body.id }).then(
        function (pregunta) {
            if (pregunta) {
                res.json(
                    {
                        success: true,
                        pregunta: pregunta
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        pregunta: 'No se encontraron preguntas'
                    }
                )
            }
        }
    )
};
module.exports.actualizar = (req, res) => {
    modelo_preguntas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la pregunta`
                    }
                );
            } else {
                res.json(
                    {
                        succes: true,
                        msg: `Se actualizó correctamente la pregunta`
                    }
                );

            }
        }
    );
}
module.exports.borrar = (req, res) => {
    modelo_preguntas.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar la pregunta' });
            } else {
                res.json({ success: true, msg: 'La pregunta se elimino con éxito' });
            }
        }
    )
};