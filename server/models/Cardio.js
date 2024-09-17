const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    distance: { type: Number, required: true },
    calories: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Cardio', cardioSchema);