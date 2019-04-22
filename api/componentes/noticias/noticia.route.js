'use strict';

const express = require('express');
const router = express.Router();
const noticias_api = require('./noticia.api');

router.param('id_noticia', function(req, res, next, id_noticia){
  req.body.id_noticia = id_noticia;
  next();
});

router.route('/registrar_noticia')
    .post(function(req,res){
        noticias_api.registrar_noticia(req,res);
    });
router.route('/listar_noticias')
    .get(function(req,res){
        noticias_api.listar_noticias(req,res);
    });
router.route('/buscar_noticia/:id_noticia')
      .get(
        function(req,res){
          noticias_api.buscar_por_id(req,res);
        }
);
router.route('/actualizar_noticia')
  .post(
    function(req, res){
      noticias_api.actualizar(req, res);
    }
  );

router.route('/eliminar_noticia')
    .post(
      function(req, res){
        noticias_api.eliminar(req, res);
      }
  );

module.exports = router;
