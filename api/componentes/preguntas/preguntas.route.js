'use strict';
const express = require('express');
const router = express.Router();
const api_preguntas = require('./preguntas.api');

router.route('/registrar_preguntas')
    .post(
        function(req, res){
           api_preguntas.agregar(req, res);
        }
    );
module.exports = router;   