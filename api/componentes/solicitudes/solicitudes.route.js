'use strict';
const express = require('express');
const router = express.Router();
const api_solicitud = require('./solicitudes.api');

router.param('id', function (req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/registrar_solicitud')
    .post(
        function (req, res) {
            api_solicitud.registrar_solicitud(req, res);
        }
    );
    router.route('/buscar_solicitud/:id')
    .get(
        function (req, res) {
            api_solicitud.buscar_por_id(req, res);
        }
    )

router.route('/listar_solicitudes')
    .get(
        function (req, res) {
            api_solicitud.listar_solicitudes(req, res);
        }
    );
router.route('/borrar_solicitud')
    .post(function (req, res) {
        api_solicitud.borrar(req, res);
    });
    
module.exports = router;