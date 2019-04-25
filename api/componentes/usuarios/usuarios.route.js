'use strict';

const express = require('express');
const router = express.Router();
const api_usuario = require('./usuarios.api');

router.param('id_padre_familia', function(req, res, next, id_padre_familia){
    req.body.id_padre_familia = id_padre_familia;
    next();
});

router.param('id_centro_educativo', function (req, res, next, id_centro_educativo) {
    req.body.id_centro_educativo = id_centro_educativo;
    next();
});

router.route('/registrar_padre_familia')
    .post(
        function (req, res) {
            api_usuario.registrar_padre_familia(req, res);
        }
    );

router.route('/registrar_centro_educativo')
    .post(
        function (req, res) {
            api_usuario.registrar_centro_educativo(req, res);
        }
    );


router.route('/registrar_servicio')
    .post(
        function (req, res) {
            api_usuario.agregar_servicios(req, res);
        }
    );

router.route('/registrar_idioma')
    .post(
        function (req, res) {
            api_usuario.agregar_idioma(req, res);
        }
    );

    router.route('/registrar_preferncia')
    .post(
        function (req, res) {
            api_usuario.agregar_preferencia(req, res);
        }
    );

router.route('/registrar_adminitrador')
    .post(
        function (req, res) {
            api_usuario.registrar_administrador(req, res);
        }
    );

    router.route('/actualizar_padre_familia')
    .post(
        function(req , res){
            api_usuario.actualizar(req, res);
        }
    );

router.route('/listar_instituciones')
    .get(
        function (req, res) {
            api_usuario.listar_instituciones(req, res);
        }
    );

router.route('/listar_instituciones_por_fecha')
    .get(
        function (req, res) {
            api_usuario.listar_instituciones_por_fecha(req, res);
        }
    );

router.route('/listar_padre_familia')
    .get(
        function (req, res) {
            api_usuario.listar_padre_familia(req, res);
        }
    );

router.route('/buscar_centro_educativo')
    .post(function (req, res) {
        api_usuario.buscar_centro_educativo(req, res);
    });


router.route('/buscar_padre_familia')
    .post(function(req , res){
        api_usuario.buscar_padre_familia(req , res);
});

router.route('/buscar_favoritos_padre_familia')
    .post(function (req, res) {
        api_usuario.buscar_favoritos_padre_familia(req, res);
    });

    router.route('/buscar_padre_familia/:id_padre_familia')
.get(
    function(req , res){
        api_usuario.buscar_por_id(req, res);
    }
);

router.route('/validar_credenciales')
    .post(function (req, res) {
        api_usuario.validar(req, res);
    });

router.route('/agregar_favorito')
    .post(
        function (req, res) {
            api_usuario.agregar_favorito(req, res);
        }
    );

router.route('/eliminar_favorito')
    .post(
        function (req, res) {
            api_usuario.eliminar_favorito(req, res);
        }
    );
router.route('/buscar_centro/:id_centro_educativo')
    .get(
        function (req, res) {
            api_usuario.buscar_id(req, res);
        }
    )
router.route('/borrar_centro_educativo')
    .post(function (req, res) {
        api_usuario.eliminar(req, res);
    });

router.route('/eliminar_padre_familia')
.post(function (req, res) {
    api_usuario.eliminar_padre_familia(req, res);
});

router.route('/actualizar_centro_educativo')
    .post(
        function (req, res) {
            api_usuario.actualizar_centro_educativo(req, res);
        }
    );
router.route('/eliminar_idioma')
    .post(
        function (req, res) {
            api_usuario.eliminar_idioma(req, res);
        }
    );
router.route('/eliminar_servicio')
    .post(
        function (req, res) {
            api_usuario.eliminar_servicio(req, res);
        }
    );
router.route('/aprobar_centro_educativo')
    .post(function (req, res) {
        api_usuario.aprobar_centro_educativo(req, res);
    });

router.route('/deshabilitar_padre_familia')
    .post(function (req, res) {
        api_usuario.deshabilitar(req, res);
    });

router.route('/habilitar_padre_familia')
    .post(function (req, res) {
        api_usuario.habilitar(req, res);
    });

router.route('/listar_instituciones_por_evaluacion')
.get(
    function (req, res) {
        api_usuario.listar_instituciones_por_evaluacion(req, res);
    }
);

router.route('/agregar_contrasena')
    .post(
        function (req, res) {
            api_usuario.agregar_contrasena(req, res);
        }
    );
module.exports = router; 
router.route('/listar_instituciones_top_mep')
    .get(
        function (req, res) {
            api_usuario.listar_instituciones_top_mep(req, res);
        }
    );

router.route('/agregar_visitas')
    .post(function (req, res) {
        api_usuario.agregar_visitas(req, res);
    });

    router.route('/asignar_etiquetas')
      .post(function(req,res){
        api_usuario.asignar_etiquetas(req,res);
  });

router.route('/remover_etiquetas')
  .post(function(req, res){
    api_usuario.remover_etiquetas(req, res);
  });

router.route('/deshabilitar_ce')
.post(function(req,res){
  api_usuario.deshabilitar_ce(req, res);
});

router.route('/habilitar_ce')
.post(function(req,res){
  api_usuario.habilitar_ce(req, res);
});
module.exports = router; 
