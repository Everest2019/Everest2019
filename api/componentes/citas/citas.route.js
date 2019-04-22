'use strict';

const express = require('express');
const router = express.Router();
const api_citas = require('./citas.api');

router.route('/registrar_cita')
    .post(
        function(req,res){
            api_citas.registrar_cita(req,res);
        }
);

router.route('/listar_citas')
    .get(
        function(req,res){
            api_citas.listar_citas(req,res);
        }
);

router.route('/eliminar_cita')
    .post(
        function(req,res){
            api_citas.eliminar_cita(req,res);
        }
);

module.exports = router;