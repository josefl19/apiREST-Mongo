const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let scheduleSchema = new Schema({
    idCourse: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Schedule', scheduleSchema);