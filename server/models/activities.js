const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let activitiesSchema = new Schema({
    idCourse: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    activity: {
        type: String,
        required: [true, 'Titulo de la actividad requerida']
    },
    description: {
        type: String,
        required: false
    },
    datActivity: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Activities', activitiesSchema);