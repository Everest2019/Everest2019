
'use strict';

const express = require('express');
const router = express.Router();
const api_centros_educativos = require('./centro_educativo_api');

router.route('/registrar_centro_educativo')
    .post(
        function(req,res){
            api_centros_educativos.registrar(req,res);
        }
    );

module.exports = router;