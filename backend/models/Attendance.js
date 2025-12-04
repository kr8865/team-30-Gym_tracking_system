const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    checkInTime: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['present', 'absent'], // Can be expanded
        default: 'present',
    },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
