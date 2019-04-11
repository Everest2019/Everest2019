'use strict';

const express = require('express');
const router = express.Router();
const idiomas_api = require('./lenguaje.api');

router.route('/registrar_idioma')
  .post(function(req,res){
    idiomas_api.registrar_idioma(req,res);
  });
router.route('/listar_idiomas')
  .get(function(req,res){
    idiomas_api.listar_idiomas(req,res);
  });

module.exports = router;
