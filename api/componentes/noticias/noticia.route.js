'use strict';

const express = require('express');
const router = express.Router();
const noticias_api = require('./noticia.api');

router.route('/registrar_noticia')
    .post(function(req,res){
        noticias_api.registrar_noticia(req,res);
    });
router.route('/listar_noticias')
    .get(function(req,res){
        noticias_api.listar_noticias(req,res);
    });

module.exports = router;    