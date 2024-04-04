const { default: mongoose } = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Debe tener al menos 3 caracteres'],
        require: [true, 'Debes agregar un nombre a tu pirata']
    },
    image: {
        type: String,
        require: [true, 'Debes agregar una imagen a tu pirata']
    }, 
    treasure: {
      type: Number,
      require: [true, 'Debes marcar cuantos tesoros tiene tu pirata']
    },
    phrase: {
        type: String,
        require: [true, 'Tu pirata debe tener una phrase']
    },
    position: {
        type: String,
        require: [true, 'Tu pirata debe tener una posicion']
    },
    accessory: {
        type: Array,    
    }
});

PirateSchema.plugin(uniqueValidator);

const PirateModel = mongoose.model("Piratas", PirateSchema);


module.exports = PirateModel;