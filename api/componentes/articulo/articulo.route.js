'use strict';
const express = require('express');
const router = express.Router();
const api_articulo = require('./articulo.api');

router.param('id_articulo', function(req, res, next, id_articulo){
    req.body.id_articulo = id_articulo;
    next();
});

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

    router.route('/modificar_articulo')
    .post(
        function (req, res) {
            api_articulo.modificar_articulo(req, res);
        }
    );
    
    router.route('/eliminar_articulo')
    .post(
        function (req, res) {
            api_articulo.eliminar_articulo(req, res);
        }
    );

    router.route('/buscar_articulo/:id_articulo')
    .get(
        function(req,res){
            api_articulo.buscar_articulo(req,res);
        }
    );
    
module.exports = router;