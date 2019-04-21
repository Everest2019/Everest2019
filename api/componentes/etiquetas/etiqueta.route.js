'use strict';
const express = require('express');
const router = express.Router();
const api_etiquetas = require('./etiqueta.api');


router.param('id_etiquetas', function (req, res, next, id_etiquetas) {
    req.body.id_etiquetas = id_etiquetas;
    next();
});

router.route('/registrar_etiquetas')
    .post(
        function (req, res) {
            api_etiquetas.registrar_etiquetas(req, res);
        }
    );

router.route('/actualizar_etiquetas')
    .post(
        function (req, res) {
            api_etiquetas.actualizar(req, res);
        }
    );

router.route('/listar_etiquetas')
    .get(
        function (req, res) {
            api_etiquetas.consultar_todo(req, res);
        }
    );

router.route('/buscar_etiquetas/:id_etiquetas')
    .get(
        function (req, res) {
            api_etiquetas.buscar_por_id(req, res);
        }
    );

router.route('/borrar_etiquetas')
    .post(function (req, res) {
        api_etiquetas.borrar(req, res);
    });
    
module.exports = router;