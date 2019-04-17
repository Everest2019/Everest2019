'use strict';
const modelo_articulo = require('./articulo.model');

module.exports.registrar_articulo = (req, res) => {
    let nuevo_articulo = new modelo_articulo(
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        }
    );
    nuevo_articulo.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo ingresar el artículo`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registro correctamente`
                }
            );
        }
    });
};
module.exports.listar = (req, res) => {
    modelo_articulo.find().then(
        function (articulo) {
            if (articulo.length > 0) {
                res.json(
                    {
                        success: true,
                        articulo: articulo
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        articulo: 'No se encontraron articulos'
                    }
                )
            }
        }
    )
};

module.exports.modificar_articulo = (req,res) =>{
    modelo_articulo.findByIdAndUpdate(req.body.id_articulo,
        {
            $set: req.body
        },
        function(error){
            if(error){
                res.json({
                    success: false,
                    msg: `No se pudo modificar el articulo, revisar el error: ${error}`
                });
            }
            else{
                res.json({
                    success: true,
                    msg: `El articulo ha sido modificado correctamente`
                });
            }
        });
};

module.exports.eliminar_articulo = function(req, res){
    modelo_articulo.findByIdAndDelete(req.body.id_articulo,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el articulo'});
            }else{
                res.json({success: true ,msg: 'El articulo se eliminó con éxito'}); 
            }
        }
    )
};

module.exports.buscar_articulo = (req,res) =>{
    modelo_articulo.findOne({_id: req.body.id_articulo}).then(

        function(articulo){
            if(articulo){
                res.json({
                    articulo: articulo
                });
            }
            else{
                res.json({
                    articulo: 'No se encontró el articulo'
                })
            }
            
            
        })

};
