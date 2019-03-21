'use strict';
const modelo_articulo = require('./articulo_model');

module.exports.registrar_articulo = (req, res) => {
    let nuevo_articulo = new modelo_articulo(
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        }
    );
    nuevo_articulo.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: 'No se pudo ingresar el artículo'
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: 'Se registro correctamente'
                }
            );
        }
    });
};
module.exports.listar = (req, res) => {
    modelo_articulo.find().then(
        function (articulo) {
            if (articulo.length > 0) {
                res.json(
                    {
                        success: true,
                        articulo: articulo
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        articulo: 'No se encontraron articulos'
                    }
                )
            }
        }
    )
};
