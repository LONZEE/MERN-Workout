const express = require('express');

const router = express.Router();
const { createCardio, getCardio, getCardios } = require('../controllers/cardioCont');

//GET all cardio
router.get('/', getCardios);

//GET a specific cardio
router.get('/:id', getCardio);
//POST a new cardio

router.post('/', createCardio);

//PUT (update) a specific cardio
router.patch('/:id', (req, res) => {
    res.json({ message: `You updated cardio ${req.params.id}` });
});

//DELETE a specific cardio
router.delete('/:id', (req, res) => {
    res.json({ message: `You deleted cardio ${req.params.id}` });
});




module.exports = router;