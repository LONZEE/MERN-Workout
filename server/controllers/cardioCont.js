const Cardio = require('../models/Cardio');

//GET all cardio
const getCardios = async (req, res) => {
    const cardio = await Cardio.find({}).sort({ createdAt: -1 });
    res.status(200).json(cardio);

};

//GET a specific cardio
const getCardio = async (req, res) => {
    const {id} = rep.params;

    const cardio = await Cardio.findById(id);

    if (!cardio) {
        return res.status(404).json({ message: `Cardio with id ${id} not found` });
        
    }
    res.status(200).json(cardio);
};

//POST a new cardio

const createCardio = async (req, res) => {
    const { name, description, duration, date, distance, calories } = req.body;
// add documentation to db
    try {
        const cardio = await Cardio.create({
            name,
            description,
            duration,
            distance,
            calories
        });
        res.status(200).json(cardio);
    } catch (err) {
        res.status(400).json({ message: "Error creating cardio", error: err });
    }
};  

//PUT (update) a specific cardio

const updateCardio = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No cardio with id: ${id}` });
    }

    const cardio = await Cardio.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!cardio) {
        return res.status(404).json({ message: `Cardio with id ${id} not found` });
    }

    res.status(200).json(cardio);
}

//DELETE a specific cardio
const deleteCardio = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No cardio with id: ${id}` });
    }
    const cardio = await Cardio.findByIdAndRemove({_id: id});

    if (!cardio) {
        return res.status(404).json({ message: `Cardio with id ${id} not found` });
    }

    res.json({ message: `Cardio with id ${id} deleted successfully` });
}

module.exports = {
    getCardios,
    getCardio,
    createCardio,
    updateCardio,
    deleteCardio
};
