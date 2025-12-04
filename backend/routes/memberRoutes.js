const express = require('express');
const router = express.Router();
const {
    getPlans,
    purchasePlan,
    markAttendance,
    logWorkout,
    getWorkouts,
} = require('../controllers/memberController');
const { protect } = require('../middleware/authMiddleware');

router.get('/plans', getPlans);
router.post('/purchase', protect, purchasePlan);
router.post('/check-in', protect, markAttendance);
router.post('/workout', protect, logWorkout);
router.get('/workouts', protect, getWorkouts);

module.exports = router;
