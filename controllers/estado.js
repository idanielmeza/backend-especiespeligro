const Estado = require("../models/estado");

const getEstados = async(req,res) => {
    try {
        const {desde=0,limite=5} = req.query;
        const [total, estados] = await Promise.all([
            Estado.countDocuments(),
            Estado.find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]);
        res.status(200).json({
            total,
            estados
        });
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const getEstado = async(req,res) => {
    try {
        const estado = await Estado.findById(req.params.id);
        req.status(200).json(estado);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const postEstado = async(req,res) => {
    try {
        const estado = new Estado(req.body);
        await estado.save();
        res.status(201).json(estado);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

const putEstado = async(req,res) => {
    try {
        const estado = await Estado.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(estado);
    } catch (error){
        res.status(500).json({msg: "Hubo un error"});
    }
};

module.exports = {
    getEstado,
    getEstados,
    postEstado,
    putEstado
};

