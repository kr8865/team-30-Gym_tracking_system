const User = require('../models/userModel');
const Plan = require('../models/Plan');
const Attendance = require('../models/Attendance');
const Workout = require('../models/Workout');

// @desc    Get all membership plans
// @route   GET /api/member/plans
// @access  Public
const getPlans = async (req, res) => {
    try {
        const plans = await Plan.find({});
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Purchase a membership plan (Mock)
// @route   POST /api/member/purchase
// @access  Private
const purchasePlan = async (req, res) => {
    const { planId } = req.body;
    const userId = req.user.id; // From auth middleware

    try {
        const plan = await Plan.findById(planId);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + plan.durationMonths);

        const user = await User.findByIdAndUpdate(
            userId,
            {
                membership: {
                    plan: planId,
                    startDate,
                    endDate,
                    isActive: true,
                },
            },
            { new: true }
        ).populate('membership.plan');

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Mark attendance (Check-in)
// @route   POST /api/member/check-in
// @access  Private
const markAttendance = async (req, res) => {
    const userId = req.user.id;

    try {
        // Check if already checked in today
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const existingAttendance = await Attendance.findOne({
            user: userId,
            date: { $gte: startOfDay },
        });

        if (existingAttendance) {
            return res.status(400).json({ message: 'Already checked in today' });
        }

        const attendance = await Attendance.create({
            user: userId,
            status: 'present',
        });

        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Log a workout
// @route   POST /api/member/workout
// @access  Private
const logWorkout = async (req, res) => {
    const { exercises, durationMinutes, notes } = req.body;
    const userId = req.user.id;

    try {
        const workout = await Workout.create({
            user: userId,
            exercises,
            durationMinutes,
            notes,
        });

        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user's workout history
// @route   GET /api/member/workouts
// @access  Private
const getWorkouts = async (req, res) => {
    const userId = req.user.id;

    try {
        const workouts = await Workout.find({ user: userId }).sort({ date: -1 });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPlans,
    purchasePlan,
    markAttendance,
    logWorkout,
    getWorkouts,
};
