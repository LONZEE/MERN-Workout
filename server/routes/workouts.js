const express = require('express');
// const Workout = require('../models/Workout');
const router = express.Router();
const { createWorkout, getWorkout, getWorkouts } = require('../controllers/workoutCont');

//GET all workouts
router.get('/', getWorkouts);

//GET a specific workout

router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//PUT (update) a specific workout
router.patch('/:id', (req, res) => {
    res.json({ message: `You updated workout ${req.params.id}` });
});

//DELETE a specific workout
router.delete('/:id', (req, res) => {
    res.json({ message: `You deleted workout ${req.params.id}` });
});

module.exports = router;