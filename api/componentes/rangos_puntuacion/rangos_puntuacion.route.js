'use strict';

const express = require('express');
const router = express.Router();
const api_rangos_puntuacion = require('./rangos_puntuacion.api');

router.route('/registrar_rangos_puntuacion')
    .post(
        function (req, res) {
            api_rangos_puntuacion.agregar_rangos_puntuacion(req, res);
        }
    );

router.route('/listar_rangos_puntuacion')
.get(
    function (req, res) {
        api_rangos_puntuacion.listar_rangos_puntuacion(req, res);
    }
);

router.route('/modificar_rangos_puntuacion')
    .post(
        function (req, res) {
            api_rangos_puntuacion.modificar_rangos_puntuacion(req, res);
        }
    );


module.exports = router;