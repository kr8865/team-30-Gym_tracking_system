const express = require('express');
const router = express.Router();
const {
    getStats,
    getMembers,
    updateMemberStatus,
    getEquipment,
    addEquipment,
    updateEquipmentStatus,
} = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

// Middleware to check if user is admin
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

router.get('/stats', protect, admin, getStats);
router.get('/members', protect, admin, getMembers);
router.put('/member/:id', protect, admin, updateMemberStatus);
router.get('/equipment', protect, admin, getEquipment);
router.post('/equipment', protect, admin, addEquipment);
router.put('/equipment/:id', protect, admin, updateEquipmentStatus);

module.exports = router;
