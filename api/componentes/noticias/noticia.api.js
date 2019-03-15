'use strict';

const noticiaModel = require ('./noticia.model');

module.exports.registrar_noticia = function(req,res){
    let nuevaNoticia = noticiaModel({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion 
    });
    nuevaNoticia.save(function(error){
        if(error){
            res.json({
                success:false,
                msj:'No se pudo registrar la noticia'+error
            });
        }else{
            res.json({
                success: true,
                msj: 'Notica registrada exitosamente'
            })
        }

    });
}; 

module.exports.listar_noticias = function(req,res){
    noticiaModel.find().sort({fecha: 'asc'}).then(
        function(noticias){
            res.send(noticias);
        }
    );
};