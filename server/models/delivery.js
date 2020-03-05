const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let deliverySchema = new Schema({
    file: {
        type: String,
        required: false
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    idActivity: {
        type: Schema.Types.ObjectId,
        required: 'Activities'
    },
    datDelivery: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Delivery', deliverySchema);