const express = require('express');

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
router.post('/', (req, res) => {
    res.json({ message: "You created a new workout" });
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