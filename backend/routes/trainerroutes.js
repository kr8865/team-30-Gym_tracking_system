const express = require('express');
const router = express.Router();
const {
    getClients,
    assignDiet,
    getClientProgress,
} = require('../controllers/trainerController');
const { protect } = require('../middleware/authMiddleware');

// Middleware to check if user is trainer
const trainer = (req, res, next) => {
    if (req.user && (req.user.role === 'trainer' || req.user.role === 'admin')) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as a trainer' });
    }
};

router.get('/clients', protect, trainer, getClients);
router.post('/diet', protect, trainer, assignDiet);
router.get('/client/:id/progress', protect, trainer, getClientProgress);

module.exports = router;
