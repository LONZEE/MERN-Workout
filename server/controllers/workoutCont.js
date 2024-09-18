const Workout = require('../models/Workout');
const mongoose = require('mongoose');

//GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);

};

//GET a specific workout
const getWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No workout with id: ${id}` });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ message: `Workout with id ${id} not found` });
        
    }
    res.status(200).json(workout);
};
//POST a new workout
const createWorkout = async (req, res) => {
    const { name, description, duration, date, repetitions, sets, weight } = req.body;
// add documentation to db  
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
};
//PUT (update) a specific workout
const updateWorkout =async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No workout with id: ${id}` });
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ message: `Workout with id ${id} not found` });
    }
    res.status(200).json(workout);
}



//DELETE a specific workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No workout with id: ${id}` });
    }
    const workout = await Workout.findByIdAndRemove({_id: id});

    if (!workout) {
        return res.status(404).json({ message: `Workout with id ${id} not found` });
    }
    res.json({ message: "Workout deleted successfully." });
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};