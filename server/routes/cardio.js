const express = require('express');

const router = express.Router();
const { createCardio, getCardio, getCardios, updateCardio, deleteCardio } = require('../controllers/cardioCont');

//GET all cardio
router.get('/', getCardios);

//GET a specific cardio
router.get('/:id', getCardio);
//POST a new cardio

router.post('/', createCardio);

//PUT (update) a specific cardio
router.patch('/:id', updateCardio);

//DELETE a specific cardio
router.delete('/:id', deleteCardio);

module.exports = router;