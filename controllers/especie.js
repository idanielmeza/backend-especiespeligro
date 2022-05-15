const Especie = require("../models/especie");
const Estado = require("../models/estado");
const Habitad = require("../models/habitad");
const Tipo = require("../models/tipo");

const getEspecies = async (req, res) => {
    try {
        const { desde = 0, limite = 5, estado, habitad, tipo } = req.query;

        if (estado) {
            const { _id } = await Estado.findOne({ nombre: estado });
            const [total, especies] = await Promise.all([
                Especie.countDocuments({ estado: _id }),
                Especie.find({ estado: _id })
                    .skip(Number(desde))
                    .limit(Number(limite))
                    .populate("tipo")
                    .populate("estado")
                    .populate("habitad")
            ]);
            res.status(200).json({
                total,
                especies
            });
        }else if(habitad){
            const { _id } = await Habitad.findOne({ nombre: habitad });
            const [total, especies] = await Promise.all([
                Especie.countDocuments({ habitad: _id }),
                Especie.find({ habitad: _id })
                    .skip(Number(desde))
                    .limit(Number(limite))
                    .populate("tipo")
                    .populate("estado")
                    .populate("habitad")
            ]);
            res.status(200).json({
                total,
                especies
            });
        }else if(tipo){
            const { _id } = await Tipo.findOne({ nombre: tipo });
            const [total, especies] = await Promise.all([
                Especie.countDocuments({ tipo: _id }),
                Especie.find({ tipo: _id })
                    .skip(Number(desde))
                    .limit(Number(limite))
                    .populate("tipo")
                    .populate("estado")
                    .populate("habitad")
            ]);
            res.status(200).json({
                total,
                especies
            });
        }else{
            const [total, especies] = await Promise.all([
                Especie.countDocuments(),
                Especie.find()
                    .skip(Number(desde))
                    .limit(Number(limite))
                    .populate("tipo")
                    .populate("estado")
                    .populate("habitad")
            ]);
            res.status(200).json({
                total,
                especies
            });
        }

    } catch (error) {
        //console.log(error);
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const getEspecie = async (req, res) => {
    try {
        const especie = await Especie.findById(req.params.id);
        res.status(200).json(especie);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const postEspecie = async (req, res) => {
    try {
        const especie = new Especie(req.body);
        await especie.save();
        res.status(201).json(especie);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const putEspecie = async (req, res) => {
    try {
        const especie = await Especie.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(especie);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const buscadorEspecie = async (req, res) => {
    try {
        const { nombre,desde=0, limite=6 } = req.query;
        const [total, especies] = await Promise.all([
            Especie.countDocuments({ nombre: new RegExp(nombre, "i") }),
            Especie.find({ nombre: new RegExp(nombre, "i") })
                .skip(Number(desde))
                .limit(Number(limite))
                .populate("tipo")
                .populate("estado")
                .populate("habitad")
        ]);
        res.status(200).json({
            total,
            especies
        });

    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

module.exports = {
    getEspecies,
    getEspecie,
    postEspecie,
    putEspecie,
    buscadorEspecie
};

