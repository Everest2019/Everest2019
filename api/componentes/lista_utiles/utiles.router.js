'use strict';
const express = require('express');
const router = express.Router();
const api_registrar = require('./utiles.api')

router.route('/registrar_utiles')
.post( 
    function(req,res){
        api_registrar.registrar_utiles(req,res);
    }
);
router.route('/listar_utiles')
.get(
    function(req,res){
        api_registrar.listar_utiles(req,res)
    }
)

module.exports = router;