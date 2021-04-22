const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const car_Schema = new Schema({
    datetime: {
        type: String,
    },
    device_id: {
        type: String,
        required: [true, 'field is required']
    },
    door_id: {
        type: String,
    },
    event_type_id: {
        type: String,
        required: [true, 'field is required']
    },
    user_id_id: {
        type: String,
        required: [true, 'field is required']
    },
});


const car = mongoose.model('car',car_Schema);

module.exports = car;