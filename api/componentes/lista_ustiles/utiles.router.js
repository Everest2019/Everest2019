'use strict';
const express = require('express');
const router = express.Router();
const api_utiles = require('./utiles.api');

router.param('id_lista_utiles', function (req, res, nex, id_lista_utiles) {
    req.body.id_lista_utiles = id_lista_utiles;
    nex();
});

router.route('/registrar_utiles')
    .post(
        function (req, res) {
            api_utiles.registrar_utiles(req, res);
        }
    );

router.route('/actualizar_lista_utiles')
    .post(
        function (req, res) {
            api_utiles.actualizar(req, res);
        }
    );
router.route('/lista_utiles')
    .get(
        function (req, res) {
            api_utiles.listar_todo(req, res);
        }
    );

router.route('/buscar_lista_utiles/:id_lista_utiles')
    .get(
        function (req, res) {
            api_utiles.buscar_por_id(req, res);
        }
    );

router.route('/borrar_lista_utiles')
    .post(function (req, res) {
        api_utiles.borrar(req, res);
    });

module.exports = router;