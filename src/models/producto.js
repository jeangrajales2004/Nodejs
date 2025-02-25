const mongoose = require("../config/connection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
  nombre: {
    type: String, 
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

const modeloProducto = mongoose.model("productos", schemaProducto);

module.exports = modeloProducto;