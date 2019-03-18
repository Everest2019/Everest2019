'use strict';
const express = require('express');
const router = express.Router();
const api_contrasena = require('./contrasena_api');

router.route('/contrasena')
    .post(
        function (req, res) {
            api_contrasena.contrasena(req, res);
        }
    );
module.exports = router;