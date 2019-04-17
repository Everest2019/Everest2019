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