const Reporte = require('../models/reporte');


const getReportes = async (req, res) => {

    const {limite=5, desde=0, tipo='todos'} = req.query;

    try {

        if(tipo === 'todos'){
            const [total, reportes] = await Promise.all([
                Reporte.countDocuments({}),
                Reporte.find({})
                .skip(Number(desde))
                .limit(Number(limite))
            ]);
        }else if(tipo === 'finalizados'){
            const [total, reportes] = await Promise.all([
                Reporte.countDocuments({finalizado: true}),
                Reporte.find({finalizado: true})
                .skip(Number(desde))
                .limit(Number(limite))
            ]);
        }else if(tipo === 'noFinalizados'){
            const [total, reportes] = await Promise.all([
                Reporte.countDocuments({finalizado: false}),
                Reporte.find({finalizado: false})
                .skip(Number(desde))
                .limit(Number(limite))
            ]);
        }


        if (!reportes) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontraron los reportes'
            });
        }
    
        res.status(200).json({
            total,
            reportes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error'});
    }
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