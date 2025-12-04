const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    time: String, // e.g., "Breakfast", "10:00 AM"
    description: String,
    calories: Number,
    protein: Number, // grams
    carbs: Number, // grams
    fats: Number, // grams
});

const dietSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Trainer
    },
    name: {
        type: String,
        default: 'Weekly Plan',
    },
    meals: [mealSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Diet', dietSchema);
