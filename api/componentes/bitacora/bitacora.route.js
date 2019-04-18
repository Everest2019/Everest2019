'use strict';

const express = require('express');
const router = express.Router();
const api_bitacora = require('./bitacora.api');

router.route('/registrar_accion')
    .post(
        function(req,res){
            api_bitacora.registrar_accion(req,res);
        }
    );

router.route('/listar_bitacora')
.get(
    function(req,res){
        api_bitacora.listar_bitacora(req,res);
    }
);

module.exports = router;