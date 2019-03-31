'use strict';

const modelo_noticia = require ('./noticia.model');

module.exports.registrar_noticia = function(req,res){
    let nuevaNoticia = modelo_noticia({
        id_centro_educativo: req.body.id_centro_educativo,
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
    });
    nuevaNoticia.save(function(error){
        if(error){
            res.json({
                success:false,
                msg:'No se pudo registrar la noticia'+error
            });
        }else{
            res.json({
                success: true,
                msg: 'Noticia registrada exitosamente'
            })
        }

    });
};

module.exports.listar_noticias = function(req,res){
    modelo_noticia.find().then(
        function (noticia) {
            if (noticia.length > 0) {
                res.json(
                    {
                        success: true,
                        noticia: noticia
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        noticia: 'No se encontraron noticias'
                    }
                )
            }
        }
    );
};

// -------------------------centro educativo-------------
