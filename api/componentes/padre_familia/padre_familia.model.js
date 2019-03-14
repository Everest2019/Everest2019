'use strict';

const mongoose = require ('mongoose');
let schema_padre_familia = new mongoose.Schema(
    {
        primer_nombre : {type: String, requiered: true},
        segundo_nombre : {type: String, requiered: true},
        primera_pellido : {type: String, requiered: true},
        segundo_apellido : {type: String, requiered: true},
        identificacion : {type: String, requiered: true},
        cantidad_hijos : {type: String, requiered: true},
        edad_hijos : {type: String, requiered: true},
        provincia : {type: String, requiered: true},
        canton : {type: String, requiered: true},
        distrito : {type: String, requiered: true}
    }
);

module.exports = mongoose.model('padre_famiñia', schema_padre_familia);