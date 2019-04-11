'use strict';
const express = require('express');
const router = express.Router();
const api_preguntas = require('./preguntas.api');

router.param('id', function (req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/registrar_pregunta')
    .post(
        function (req, res) {
            api_preguntas.registrar_pregunta(req, res);
        }
    );
router.route('/actualizar_pregunta')
    .post(
        function (req, res) {
            api_preguntas.actualizar(req, res);
        }
    );
router.route('/listar_pregunta')
    .get(
        function (req, res) {
            api_preguntas.listar(req, res);
        }
    )
router.route('/buscar_pregunta/:id')
    .get(
        function (req, res) {
            api_preguntas.buscar_por_id(req, res);
        }
    )
router.route('/borrar_pregunta')
    .post(function (req, res) {
        api_preguntas.borrar(req, res);
    });
module.exports = router;   