'use strict';

const modelo_comentarios = require('./comentarios.model');

module.exports.registrar_comentario = (req, res) => {
    let nuevo_comentario = new modelo_comentarios(
        {
            
            id_centro_educativo: req.body.id_centro_educativo,
            comentario: req.body.comentario,
            calificacion: req.body.calificacion,
            id_padre_familia: req.body.id_padre_familia
        }
    );
    nuevo_comentario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo agregar el comentario`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `El comentario se agrego correctamente`
                }
            );
        }
    });
}

module.exports.listar_comentarios = (req, res) => {
    modelo_comentarios.find().then(
        function (comentarios) {
            if (comentarios.length > 0) {
                res.json(
                    {
                        success: true,
                        comentarios: comentarios,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron comentarios'
                    }
                )
            }
        }
    )
}

module.exports.buscar_por_id = (req, res) => {
    modelo_comentarios.find({ _id: req.body.id_comentario }).then(
        function (comentarios) {
            if (comentarios) {
                res.json(
                    { success: true, comentarios: comentarios })
            } else {
                res.json(
                    { success: false, comentarios: 'No se encontraron comentarios' })
            }
        }
    )
};

module.exports.eliminar_comentario = (req, res) => {
    modelo_comentarios.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: 'No se pudo eliminar el comentario'
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        msg: 'El comentario se elimino con éxito'
                    }
                )
            }
        })
};
