const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Operational', 'Maintenance', 'Broken'],
        default: 'Operational',
    },
    lastMaintained: {
        type: Date,
        default: Date.now,
    },
    nextMaintenanceDue: {
        type: Date,
    },
});

module.exports = mongoose.model('Equipment', equipmentSchema);
