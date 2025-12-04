const User = require('../models/User');
const Plan = require('../models/Plan');
const Equipment = require('../models/Equipment');

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getStats = async (req, res) => {
    try {
        const memberCount = await User.countDocuments({ role: 'member' });
        const trainerCount = await User.countDocuments({ role: 'trainer' });

        // Calculate estimated revenue (simplified: sum of active plan prices)
        // In a real app, we'd have a Transaction model.
        const activeMembers = await User.find({ 'membership.isActive': true }).populate('membership.plan');
        const revenue = activeMembers.reduce((acc, user) => {
            return acc + (user.membership.plan ? user.membership.plan.price : 0);
        }, 0);

        res.json({
            members: memberCount,
            trainers: trainerCount,
            revenue: revenue.toFixed(2),
            activeMembers: activeMembers.length,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all members
// @route   GET /api/admin/members
// @access  Private/Admin
const getMembers = async (req, res) => {
    try {
        const members = await User.find({ role: 'member' }).populate('membership.plan');
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update member status (e.g. cancel membership)
// @route   PUT /api/admin/member/:id
// @access  Private/Admin
const updateMemberStatus = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.membership.isActive = req.body.isActive;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all equipment
// @route   GET /api/admin/equipment
// @access  Private/Admin
const getEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.find({});
        res.json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add new equipment
// @route   POST /api/admin/equipment
// @access  Private/Admin
const addEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.create(req.body);
        res.status(201).json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update equipment status
// @route   PUT /api/admin/equipment/:id
// @access  Private/Admin
const updateEquipmentStatus = async (req, res) => {
    try {
        const equipment = await Equipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStats,
    getMembers,
    updateMemberStatus,
    getEquipment,
    addEquipment,
    updateEquipmentStatus,
};
