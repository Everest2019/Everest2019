'use strict';
const modelo_lista_utiles = require('./utiles.model');

module.exports.registrar_utiles = (req, res) => {
    let nuevo_utiles = new modelo_lista_utiles(
        {
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion
        }
    );

    nuevo_utiles.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se ha podido crea la lista`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se ha registrado correctamente la lista.`
                }
            );
        }
    })
};

module.exports.listar_todo = (req, res) => {
    modelo_lista_utiles.find().then(
        function (lista_utiles) {
            if (lista_utiles.length > 0) {
                res.json(
                    {
                        success: true,
                        lista_utiles: lista_utiles
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        lista_utiles: `No hay registro de las listas de utiles`
                    }
                )
            }
        }
    )
};


module.exports.buscar_por_id = function (req, res) {
    modelo_lista_utiles.find({ _id: req.body.id_lista_utiles }).then(
        function (lista_utiles) {
            if (lista_utiles) {
                res.json({ success: true, lista_utiles: lista_utiles });
            } else {
                res.json({ success: false, lista_utiles: lista_utiles });
            }
        }
    );
};

module.exports.actualizar = function (req, res) {
    modelo_lista_utiles.findByIdAndUpdate(req.body.id, {
        $set: req.body
    },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se ha podido actualizar el articulo de la lista' });
            } else {
                res.json({ success: true, msg: 'El articulo de la lista se ha actualizado con éxito' });
            }
        }
    );
}

module.exports.borrar = (req, res) => {
    modelo_lista_utiles.findByIdAndDelete(req.body.id_lista_utiles,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se ha podido eliminar el articulo de la lista' });
            } else {
                res.json({
                    success: true, meg: 'El articulo de la lista se ha eliminado con exito' });
            }
        }
    )
}