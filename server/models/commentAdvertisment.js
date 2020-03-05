const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commAdvSchema = new Schema({
    idAdvertisment: {
        type: Schema.Types.ObjectId,
        ref: 'Advertisment'
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    comment: {
        type: String,
        required: [true, 'Comentario requerido']
    },
    datComAdvertisment: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('commentAdvertisment', commAdvSchema);