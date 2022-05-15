const Habitad = require("../models/habitad");

const getHabitads = async(req,res) => {
    try {
        const {desde=0,limite=5} = req.query;
        const [total, habitads] = await Promise.all([
            Habitad.countDocuments(),
            Habitad.find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]);
        res.status(200).json({
            total,
            habitads
        });
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const getHabitad = async(req,res) => {
    try {
        const habitad = await Habitad.findById(req.params.id);
        req.status(200).json(habitad);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const postHabitad = async(req,res) => {
    try {
        const habitad = new Habitad(req.body);
        await habitad.save();
        res.status(201).json(habitad);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const putHabitad = async(req,res) => {
    try {
        const habitad = await Habitad.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(habitad);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

module.exports = {
    getHabitad,
    getHabitads,
    postHabitad,
    putHabitad
};

