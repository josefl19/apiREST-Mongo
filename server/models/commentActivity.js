const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commActSchema = new Schema({
    idActivity: {
        type: Schema.Types.ObjectId,
        ref: 'Activities'
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    comment: {
        type: String,
        required: [true, 'Comentario requerido']
    },
    datComActivity: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('commentActivity', commActSchema);