const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    repetitions: { type: Number, required: true },
    sets: { type: Number, required: true },
    weight: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);