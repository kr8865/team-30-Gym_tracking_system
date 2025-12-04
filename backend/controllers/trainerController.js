const User = require('../models/User');
const Diet = require('../models/Diet');
const Workout = require('../models/Workout');

// @desc    Get all clients (members)
// @route   GET /api/trainer/clients
// @access  Private/Trainer
const getClients = async (req, res) => {
    try {
        const clients = await User.find({ role: 'member' }).select('-password');
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Assign diet plan to client
// @route   POST /api/trainer/diet
// @access  Private/Trainer
const assignDiet = async (req, res) => {
    const { userId, meals, name } = req.body;
    const trainerId = req.user.id;

    try {
        const diet = await Diet.create({
            user: userId,
            assignedBy: trainerId,
            name,
            meals,
        });
        res.status(201).json(diet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get client progress (workouts)
// @route   GET /api/trainer/client/:id/progress
// @access  Private/Trainer
const getClientProgress = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.params.id }).sort({ date: -1 });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getClients,
    assignDiet,
    getClientProgress,
};
