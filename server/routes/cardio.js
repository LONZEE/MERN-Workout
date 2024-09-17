const express = require('express');

const router = express.Router();


//GET all cardio
router.get('/', (req, res) => {
    res.json({ message: "Welcome to the cardio route" });
});

//GET a specific cardio
router.get('/:id', (req, res) => {
    res.json({ message: `You requested cardio ${req.params.id}` });
});

//POST a new cardio

router.post('/', (req, res) => {
    

    res.json({ message: "You created a new cardio" });
}
);

//PUT (update) a specific cardio
router.patch('/:id', (req, res) => {
    res.json({ message: `You updated cardio ${req.params.id}` });
});

//DELETE a specific cardio
router.delete('/:id', (req, res) => {
    res.json({ message: `You deleted cardio ${req.params.id}` });
});




module.exports = router;