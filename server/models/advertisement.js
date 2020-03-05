const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let adverSchema = new Schema({
    idCourse: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    notice: {
        type: String,
        required: true
    },
    datAdvertisement: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Advertisement', adverSchema);