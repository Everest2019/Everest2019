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
            });
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

module.exports.buscar_por_id = function(req, res){
  modelo_noticia.find({_id : req.body.id_noticia}).then(
    function(pnoticia){
      if(pnoticia){
        res.json({success:true, noticia:pnoticia});
      }else {
        res.json({success:false, noticia:pnoticia})
      }
    }
  );
};

module.exports.actualizar = function(req, res){
  modelo_noticia.findByIdAndUpdate(req.body.id, { $set:req.body},
    function(error){
      if(error){
        res.json({success : false, msg: 'No se pudo actualizar la noticia'})
      }else{
        res.json({success: true, msg: 'Noticia actualizada con éxito'})
      }
    }
  );
};

module.exports.eliminar =  (req, res)=>{
  modelo_noticia.findByIdAndDelete(req.body.id,
    function(error){
      if(error){
        res.json({ success:false, msg: 'No se pudo eliminar la noticia'})
      }else{
        res.json({ success:true, msg: 'La noticia se eliminó con éxito'})
      }
    });
};

// -------------------------centro educativo-------------
