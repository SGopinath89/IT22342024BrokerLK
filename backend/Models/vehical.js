const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
