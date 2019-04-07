'use strict';

const modelo_idioma = require('./lenguaje.model');

module.exports.registrar_idioma = function(req,res){
  let nuevoIdioma = modelo_idioma({
    nombre:req.body.nombre,
    iso: req.body.iso,
    bandera: req.body.bandera
  });
  nuevoIdioma.save(function(error){
    if(error){
      res.json({
        success:false,
        msg:'No se pudo registrar el nuevo idioma, por favor revise los campos'
      });
    }else{
      res.json({
        success:true,
        msg:'Idioma agregado exitosamente '
      });
    }
  });
};

module.exports.listar_idiomas = function(req,res){
  modelo_idioma.find().then(
    function(pidioma) {
      if(pidioma.length > 0){
        res.json({
          success:true,
          lenguaje: pidioma
        });
      }else{
        res.json({
          success:false,
          lenguaje:'No se encontraron idiomas registrados :('
        });
      }
    }
  );
};
