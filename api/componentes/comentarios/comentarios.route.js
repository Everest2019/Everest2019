'use strict';

const express = require('express');
const router = express.Router();
const api_comentarios = require('./comentarios.api');

router.param('id_comentario', function (req, res, next, id_comentario) {
    req.body.id_comentario = id_comentario;
    next();
        });
    

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

router.route('/buscar_comentario/:id_comentario')
    .get(
        function (req, res) {
            api_comentarios.buscar_por_id(req, res);
        }
    )

router.route('/eliminar_comentario')
    .post(
        function (req, res) {
            api_comentarios.eliminar_comentario(req, res);
        }
    );

module.exports = router;
