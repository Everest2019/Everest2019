'use strict';
const express = require('express');
const router = express.Router();
const api_preguntas = require('./preguntas.api');

router.route('/registrar_pregunta')
    .post(
        function (req, res) {
            api_preguntas.registrar_pregunta(req, res);
        }
    ); 
    router.route('/listar_pregunta')
    .get(
        function (req, res) {
            api_preguntas.listar(req, res);
        }
    )
module.exports = router;   