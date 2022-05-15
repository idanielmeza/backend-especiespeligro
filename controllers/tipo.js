const Tipo = require("../models/tipo");

const getTipos = async (req, res) => {
    try {
        const { desde = 0, limite = 5 } = req.query;
        const [total, tipos] = await Promise.all([
            Tipo.countDocuments(),
            Tipo.find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]);
        res.status(200).json({
            total,
            tipos
        });
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const getTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        res.status(200).json(tipo);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const postTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        await tipo.save();
        res.status(201).json(tipo);
    } catch (error) {
        //console.log(error);
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const putTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(tipo);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" });
    }
};

module.exports = {
    getTipos,
    getTipo,
    postTipo,
    putTipo
};

