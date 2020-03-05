const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userTypeSchema = new Schema({
    description: {
        type: String,
        required: [true, 'Descripcion del tipo necesario']
    }
});

module.exports = mongoose.model('UserType', userTypeSchema);