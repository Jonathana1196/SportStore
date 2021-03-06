const mongoose = require('mongoose');
const { Schema } = mongoose;

const Schemaproducto = new Schema({
    NombreArticulo: {
        type: String, required: true
    },
    Marca: {
        type: String, required: true
    },
    Precio: {
        type: Number, required: true
    },
    Deportes: {
        type: Array
    },
    Edicion: {
        type: String, required: true
    },
    Inventario: {
        type: String, required: true
    },
    Vendidos: {
        type: String
    },
    Imagen: {
        data: Buffer,
        contentype: String
    },
    TipoProducto: {
        type: String, required: true
    }
});

module.exports = mongoose.model('producto', Schemaproducto);