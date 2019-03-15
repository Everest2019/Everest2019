'use strict';

const express = require('express');
const router = express.Router();
const noticiasApi = require('./noticia.api');

router.route('/registrar_noticia')
    .post(function(req,res){
        noticiasApi.registrar_noticia(req,res);
    });
router.route('/listar_noticias')
    .get(function(req,res){
        noticiasApi.listar_noticias(req,res);
    });

module.exports = router;    