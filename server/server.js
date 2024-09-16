require('dotenv').config();

const express = require('express');
const workoutsRouter = require('./routes/workouts');


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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 4000!!!");
});