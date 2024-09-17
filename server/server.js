require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutsRouter = require('./routes/workouts');
const cardioRouter = require('./routes/cardio');


// Create an express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Define a route on the root URL of the server
app.use('/api/workouts', workoutsRouter);
app.use('/api/cardio', cardioRouter);

// Connect to the database  
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to the database & Server is listening on port 4000!!!");
        });
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

