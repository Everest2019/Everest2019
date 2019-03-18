'use strict';

const express = require('express');
const router = express.Router();
const api_usuario = require('./usuarios.api');

router.route('/registrar_padre_familia')
    .post(
        function(req, res){
           api_usuario.registrar_padre_familia(req, res);
        }
    );

router.route('/registrar_centro_educativo')
.post(
    function(req, res){
        api_usuario.registrar_centro_educativo(req, res);
    }
);

router.route('/registrar_adminitrador')
    .post(
        function(req, res){
           api_usuario.registrar_administrador(req, res);
        }
    );

router.route('/registrar_centro_educativo')
.post(
    function(req, res){
        api_usuario.registrar_centro_educativo(req, res);
    }
);

router.route('/listar_instituciones')
        .get(
            function (req, res){
                api_usuario.listar_instituciones(req, res);
            }
        )

module.exports = router; 