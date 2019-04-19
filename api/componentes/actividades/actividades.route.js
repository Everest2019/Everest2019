'use strict';
const express = require('express');
const router = express.Router();
const api_actividades = require('./actividades.api');

router.param('id_actividades', function (req, res, next, id_actividades) {
    req.body.id_actividades = id_actividades;
    next();
});

router.route('/registrar_actividades')
    .post(
        function (req, res) {
            api_actividades.registrar(req, res);
        }
    );

router.route('/actualizar_actividades')
    .post(
        function (req, res) {
            api_actividades.actualizar(req, res);
        }
    );

router.route('/listar_actividades')
    .get(
        function (req, res) {
            api_actividades.listar_todas(req, res);
        }
    );

router.route('/buscar_actividades/:id_actividades')
    .get(
        function (req, res) {
            api_actividades.buscar_por_id(req, res);
        }
    );

router.route('/borrar_actividades')
    .post(function (req, res) {
        api_actividades.borrar(req, res);
    });
module.exports = router; 