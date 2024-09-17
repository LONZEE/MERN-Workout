const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();


//GET all workouts
router.get('/', (req, res) => {
    res.json({ message: "Welcome to the workouts route" });
});

//GET a specific workout

router.get('/:id', (req, res) => {
    res.json({ message: `You requested workout ${req.params.id}` });
});

//POST a new workout
router.post('/', async (req, res) => {
    const { name, description, duration, date, repetitions, sets, weight } = req.body;

    try {
        const workout = await Workout.create({
            name,
            description,
            duration,
            date,
            repetitions,
            sets,
            weight
        });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ message: "Error creating workout", error: err });
    }
});

//PUT (update) a specific workout
router.patch('/:id', (req, res) => {
    res.json({ message: `You updated workout ${req.params.id}` });
});

//DELETE a specific workout
router.delete('/:id', (req, res) => {
    res.json({ message: `You deleted workout ${req.params.id}` });
});

module.exports = router;