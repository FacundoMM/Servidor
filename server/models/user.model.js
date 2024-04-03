const { default: mongoose } = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator");

const ProductoSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, 'Debe tener al menos 3 caracteres']
    },
    price: {
        type: String,
        minlength: [3, 'Debe tener al menos 3 caracteres']
    }, 
    description: {
      type: String,
      minlength: [3, 'Campo debe tener 5 caracteres']  
    } 
});

ProductoSchema.plugin(uniqueValidator);

const ProductoModel = mongoose.model("Producto", ProductoSchema);


module.exports = ProductoModel;