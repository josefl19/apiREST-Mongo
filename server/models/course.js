const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let courseSchema = new Schema({
    idTeacher: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
        required: [true, 'El curso necesita un nombre']
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Course', courseSchema);