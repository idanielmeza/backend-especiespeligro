const Especie = require('../models/especie');

const getEspecies = async(req,res)=>{
    try{
        const {desde=0,limite=5} = req.query;
        const [total, especies] = await Promise.all([
            Especie.countDocuments(),
            Especie.find()
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('tipo')
            .populate('estado')
            .populate('habitad')
        ])
        res.status(200).json({
            total,
            especies
        });
    }catch(error){
        console.log(error);
        res.status(500).json({msg:'Hubo un error'});
    }
}

const getEspecie = async(req,res)=>{
    try{
        const especie = await Especie.findById(req.params.id);
        res.status(200).json(especie);
    }catch(error){
        res.status(500).json({msg:'Hubo un error'});
    }
}

const postEspecie = async(req,res)=>{
    try{
        const especie = new Especie(req.body);
        await especie.save();
        res.status(201).json(especie);
    }catch(error){
        res.status(500).json({msg:'Hubo un error'});
    }
}

const putEspecie = async(req,res)=>{
    try{
        const especie = await Especie.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(especie);
    }catch(error){
        res.status(500).json({msg:'Hubo un error'});
    }
}

module.exports = {
    getEspecies,
    getEspecie,
    postEspecie,
    putEspecie
}

