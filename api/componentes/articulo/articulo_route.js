'use strict';
const express = require('express');
const router = express.Router();
const api_articulo = require('./articulo_api');

router.route('/registrar_articulo')
    .post(
        function (req, res) {
            api_articulo.registrar_articulo(req, res);
        }
    );
    router.route('/listar_articulo')
    .get(
        function (req, res) {
            api_articulo.listar(req, res);
        }
    )
module.exports = router;