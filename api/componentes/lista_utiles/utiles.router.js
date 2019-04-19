'use strict';
const express = require('express');
const router = express.Router();
const api_registrar = require('./utiles.api');

router.param('id_lista_utiles', function (req, res, nex, id_lista_utiles) {
    req.body.id_lista_utiles = id_lista_utiles;
    nex();
});

router.route('/registrar_utiles')
.post( 
    function(req,res){
        api_registrar.registrar_utiles(req,res);
    }
);

router.route('/actualizar_lista_utiles')
    .post(
        function (req, res) {
            api_registrar.actualizar(req, res);
        }
    );

router.route('/listar_utiles')
.get(
    function(req,res){
        api_registrar.listar_utiles(req,res)
    }
)

router.route('/buscar_lista_utiles/:id_lista_utiles')
    .get(
        function (req, res) {
            api_registrar.buscar_por_id(req, res);
        }
    );

router.route('/borrar_lista_utiles')
    .post(function (req, res) {
        api_registrar.borrar(req, res);
    });


module.exports = router;