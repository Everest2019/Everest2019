'use strict';
const modelo_actividades = require('./actividades.model');

module.exports.registrar = (req, res) => {
    let nueva_actividad = new modelo_actividades(
        {
            id_centro_educativo: req.body.id_centro_educativo,
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            descripcion: req.body.descripcion
        }
    );
    nueva_actividad.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la actividad, ocurrio el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    succes: true,
                    msg: `Se registro correctamente la actividad`
                }
            );

        }

    });
}
module.exports.listar_todas = (req, res) => {
    modelo_actividades.find().then(
        function (actividades) {
            if (actividades.length > 0) {
                res.json(
                    {
                        sucess: true,
                        actividades: actividades
                    }
                )
            } else {
                res.json(
                    {
                        succes: false,
                        actividades: 'No se encontraron actividades'
                    }
                )
            }
        }
    )
}

module.exports.buscar_por_id = function (req, res) {
    modelo_actividades.find({ _id: req.body.id_actividades }).then(
        function (actividades) {
            if (actividades) {
                res.json({ success: true, actividades: actividades });
            } else {
                res.json({ success: false, actividades: actividades });
            }
        }
    );
};

module.exports.actualizar = (req, res) => {
    modelo_actividades.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la actividad`
                    }
                );
            } else {
                res.json(
                    {
                        succes: true,
                        msg: `La actividad se actualizó correctamente.`
                    }
                );

            }
        }
    );
}

module.exports.borrar = (req, res) => {
    modelo_actividades.findByIdAndDelete(req.body.id_actividades,
        function (error) {
            if (error) {
                res.json({ success: false, msg: ' Nose ha podido eliminar la actividad' }
                )
            } else {
                res.json({ success: true, msg: 'La actividad se elimino con exito' })
            }
        }
    )
}