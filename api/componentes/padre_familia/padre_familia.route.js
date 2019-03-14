'use strict';
const express = require('express');
const router = express.Router();
const api_padre_familia = require('./padre_familia.api');

router.route('/registrar_padre_familia')
    .post(
        function(req, res){
           api_padre_familia.registrar(req, res);
        }
    );
router.route('/listar_padre_Famlia')
        .get(
            function (req, res){
                api_padre_familia.listar_todos(req, res);
            }
        )

module.exports = router; 