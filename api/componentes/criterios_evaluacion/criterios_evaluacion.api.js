'use strict';

const modelo_criterios_evaluacion = require('./criterios_evaluacion.model');

module.exports.registrar_criterios_evaluacion = (req,res) =>{
    let nuevo_criterio_evaluacion = new modelo_criterios_evaluacion(
        {
            nombre: req.body.nombre
        }
    )
    nuevo_criterio_evaluacion.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: 'No se pudo agregar el nuevo criterio'
            })
        }
        else{
            res.json({
                success: true,
                msg: 'El nuevo criterio fue agregado correctamente'
            })
        }
    })

};

module.exports.mostrar_criterios=(req,res)=>{
    modelo_criterios_evaluacion.find().then(
        function(criterios_evaluacion){
            if(criterios_evaluacion.length > 0){
                res.json(
                    {
                        success:true,
                        criterios_evaluacion: criterios_evaluacion
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        criterios_evaluacion:'No se ha encontrado etiquetas'
                    }
                )
            }
        }
    )
};

module.exports.modificar_criterio = (req,res) =>{
    modelo_criterios_evaluacion.findByIdAndUpdate(req.body.id_criterio,
        {
            $set: req.body
        },
        function(error){
            if(error){
                res.json({
                    success: false,
                    msg: `No se pudo modificar el criterio, revisar el error: ${error}`
                });
            }
            else{
                res.json({
                    success: true,
                    msg: `El criterio ha sido modificado correctamente`
                });
            }
        });
};

module.exports.eliminar_criterio = function(req, res){
    modelo_criterios_evaluacion.findByIdAndDelete(req.body.id_criterio,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el criterio'});
            }else{
                res.json({success: true ,msg: 'El criterio se eliminó con éxito'}); 
            }
        }
    )
};

module.exports.buscar_criterio = (req,res) =>{
    modelo_criterios_evaluacion.findOne({_id: req.body.id_criterio}).then(

        function(criterio_evaluacion){
            if(criterio_evaluacion){
                res.json({
                    criterio_evaluacion: criterio_evaluacion
                });
            }
            else{
                res.json({
                    criterio_evaluacion: 'No se encontró el criterio de evaluación'
                })
            }
            
            
        })
    

};