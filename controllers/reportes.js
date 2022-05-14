const Reporte = require('../models/reporte');


const getReportes = async (req, res) => {

    const reportes = await Reporte.find({});

    if (!reportes) {
        return res.status(404).json({
            ok: false,
            msg: 'No hay reportes'
        });
    }

    res.status(200).json({
        ok: true,
        reportes
    });

}

const getReporte = async (req, res) => {

    const reportes = await Reporte.findById(req.params.id);

    if (!reportes) {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontró el reporte'
        });
    }

    res.status(200).json({
        ok: true,
        reportes
    });

}

const postReportes = async (req, res) => {
    const reporte = new Reporte(req.body);

    try {
        await reporte.save();
        res.status(201).json({
            ok: true,
            reporte
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear reporte'
        });
    }
}

const putReportes = async (req, res) => {

    const id = req.params.id;
    const data = req.body;

    try {
        const reporte = await Reporte.findByIdAndUpdate(id, data);

        res.status(200).json({
            ok: true,
            reporte
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar reporte'
        });
    }

}

const deleteReportes = async (req, res) => {

    const id = req.params.id;

    try {
        const reporte = await Reporte.findByIdAndDelete(id);

        res.status(200).json({
            ok: true,
            reporte
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar reporte'
        });
    }

}


module.exports = {
    getReportes,
    getReporte,
    postReportes,
    putReportes,
    deleteReportes
}