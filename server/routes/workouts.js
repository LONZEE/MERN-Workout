const express = require('express');
// const Workout = require('../models/Workout');
const router = express.Router();
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutCont');

//GET all workouts
router.get('/', getWorkouts);

//GET a specific workout

router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//PUT (update) a specific workout
router.patch('/:id', updateWorkout);

//DELETE a specific workout
router.delete('/:id', deleteWorkout);

module.exports = router;