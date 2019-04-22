'use strict';

const modelo_bitacora = require('./bitacora.model');

module.exports.registrar_accion = (req,res) =>{
    let nueva_accion = new modelo_bitacora(
        {
            usuario: req.body.usuario,
            detalle: req.body.detalle,
            fecha: req.body.fecha
        }
    )
    nueva_accion.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: 'No se pudo agregar la acción a la bitácora'
            });
        }
        else{
            res.json({
                success: true,
                msg: 'La acción fue agregada correctamente'
            })
        }
    })
};

module.exports.listar_bitacora = (req,res) =>{
    modelo_bitacora.find().sort({fecha: -1}).then(
        function(acciones){
            if(acciones.length > 0){
                res.json({
                    success: true,
                    acciones: acciones
                })
            }
            else{
                res.json({
                    success: false,
                    msg: 'No hay acciones registradas'
                })
            }
        }
    )
};