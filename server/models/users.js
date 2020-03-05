const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nombre necesario']
    },
    lastName: {
        type: String,
        required: [true, 'Apellidos necesario']
    },
    birdDate: {
        type: Date,
        required: [true, 'Fecha de nacimiento necesaria']
    },
    password: {
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Correo electronico necesario']
    },
    idUserType: {
        type: Schema.Types.ObjectId,
        ref: 'UserType'
    }
});

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('Users', userSchema);