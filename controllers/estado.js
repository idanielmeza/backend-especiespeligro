const Estado = require('../models');

const getEstados = async (req, res) => {
    try {
        const estados = await Tipo.find();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

const getEstadoID = async (req, res) => {
    try {
        const estado = await Tipo.findById(req.params.id);
        res.status(200).json(estado);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

const postEstado = async (req, res) => {
    try {
        const estado = new Estado(req.body);
        await estado.save();
        res.status(201).json(tipo);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

const putEstado = async (req, res) => {
    try {
        const estado = await Estado.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(estado);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

module.exports = {
    getEstados,
    getEstadoID,
    postEstado,
    putEstado
}
