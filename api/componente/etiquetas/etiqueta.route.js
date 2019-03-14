'use strict';
const express = require('express');
const router = express.Router();
const api_etiquetas = require('./etiqueta.api');

router.route('/registrar_etiquetas')
.post(
    function(req, res){
        api_etiquetas.registrar_etiquetas(req,res);
    }
);
router.route('/consultar_etiquetas')
.get(
    function(req,res){
        api_etiquetas.consultar_todo(req,res);
    }
);
module.exports = router;