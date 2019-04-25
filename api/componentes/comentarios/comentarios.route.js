'use strict';

const express = require('express');
const router = express.Router();
const api_comentarios = require('./comentarios.api');

router.route('/registrar_comentarios')
    .post(
        function (req, res) {
            api_comentarios.registrar_comentario(req, res);

        }
    );

router.route('/listar_comentarios')
    .get(
        function (req, res) {
            api_comentarios.listar_comentarios(req, res);
        }
    )

router.route('/buscar_comentario/:id')
    .get(
        function (Req, res) {
            api_comentarios.buscar_por_id(req, res);
        }
    )

router.route('/actualizar_comentario')
    .post(
        function (req, res) {
            api_comentarios.actualizar_comentarios(req, res);
        }
    )

router.param('id_comentario', function (req, res, next, id_comentario) {
    req.body.id_comentario = id_comentario;
    next();
        }
    );

router.route('/eliminar_comentario')
    .post(
        function (req, res) {
            api_comentarios.eliminar_comentario(req, res);
        }
    );

module.exports = router;
