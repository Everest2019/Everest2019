'use strict';

const express = require('express');
const router = express.Router();
const actividadesApi= require('./actividades.api');

router.route('/registrar_actividad').post(function(req,res){
    actividadesApi.registrar_actividad(req,res);
});

router.route('/listar_actividad').get(function(req,res){
    actividadesApi.listar_actividades(req,res);
});

module.exports = router;

