'use strict';
const express = require('express');
const router = express.Router();
const api_utiles = require('./utiles.api');

router.route('/registrar_utiles')
.post(
    function(req, res){
        api_utiles.registrar_utiles(req,res);
    }
);
router.route('/listar_utiles')
.get(
    function(req, res){
        api_utiles.listar_todo(req,res);
    }
);
module.exports = router;