'use strict';

const mongoose = require('mongoose');

let modelo_rangos_puntuacion = new mongoose.Schema(
    {
    estrella1: {type: Number, required: true},
    estrella2: {type: Number, required: true},
    estrella3: {type: Number, required: true},
    estrella4: {type: Number, required: true},
    estrella5: {type: Number, required: true}
    }
);

module.exports =  mongoose.model('rangos_puntuacion', modelo_rangos_puntuacion);