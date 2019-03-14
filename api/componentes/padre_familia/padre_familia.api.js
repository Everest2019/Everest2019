'use strict';
const modelo_padre_familia = require('./padre_familia.model');

module.exports.registrar = (req, res) =>{
    let nuevo_padre_familia = new modelo_padre_familia(
        {
            primer_nombre : req.body.primer_nombre,
            segundo_nombre : req.body.segundo_nombre,
            primer_apellido : req.body.primer_apellido,
            segundo_apellido : req.body.segundo_apellido,
            identificacion : req.body.identificacion,
            cantidad_hijos : req.body.cantidad_hijos,
            edad_hijos : req.body.edad_hijos,
            provincia : req.body.provincia,
            cantón : req.body.canton,
            distrito : req.body.distrito
        }
    );
    nuevo_usuario.save(function(error){
        if(error){
            res.json(
                {
                    sucess : false,
                    msg:`No se pudo registrar el usuario ocurrio el siguiente error`
                }
            );
        }else{
            res.jso(
                {
                    sucess : true,
                    msg : `Usuario registrado correctamente`
                }
            );
        }
    });
}
module.exports.listar_todos = (req, res) =>{
    modelo_padre_familia.find().then(
        function(padre_familia){
            if(usuarios.length > 0){
                res.json(
                    {
                        sucess : true,
                        padre_familia : padre_familia
                    }
                )
            }else{
                res.json(
                    {
                        sucess : false,
                        padre_familia : 'No se encontraron usuarios'
                    }
                )
            }
        }
    )
}