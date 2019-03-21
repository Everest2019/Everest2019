'use strict';
const express = require('express');
const router = express.Router();
const api_actividades = require('./actividades.api');

router.route('/registrar_actividades')
    .post(
        function(req, res){
           api_actividades.registrar(req, res);
        }
    );
router.route('/listar_actividades')
        .get(
            function (req, res){
                api_actividades.listar_todos(req, res);
            }
        )

module.exports = router; 