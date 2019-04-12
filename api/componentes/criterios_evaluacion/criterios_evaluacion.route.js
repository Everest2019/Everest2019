'use strict';

const express = require('express');
const router = express.Router();
const api_criterios_evaluacion = require('./criterios_evaluacion.api');

router.param('id_criterio', function(req, res, next, id_criterio){
    req.body.id_criterio = id_criterio;
    next();
});

router.route('/registrar_criterio_evaluacion')
    .post(
        function(req,res){
            api_criterios_evaluacion.registrar_criterios_evaluacion(req,res);
        }
    );

router.route('/listar_criterios_evaluacion')
        .get(
            function(req,res){
                api_criterios_evaluacion.mostrar_criterios(req,res);
            }
        );

router.route('/modificar_criterio_evaluacion')
    .post(
        function(req,res){
            api_criterios_evaluacion.modificar_criterio(req,res);
        }
    )

router.route('/eliminar_criterio_evaluacion')
.post(
    function(req,res){
        api_criterios_evaluacion.eliminar_criterio(req,res);
    }
)

router.route('/buscar_criterio_evaluacion/:id_criterio')
    .get(
        function(req,res){
            api_criterios_evaluacion.buscar_criterio(req,res);
        }
    )

module.exports = router;