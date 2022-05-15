const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");


const usuariosGet = async(req,res)=>{

    const {limite=5, desde=0} = req.query;

    try {
        const [total, usuarios] = await Promise.all([
            Usuario.countDocuments({estado: true}),
            Usuario.find({estado: true})
                .skip(Number(desde))
                .limit(Number(limite))
        ]);
    
    
        res.status(200).json({
            total,
            usuarios
        });
    } catch (error) {
        res.status(500).json({msg:"Hubo un error"});
    }

    
};

const usuariosPut = async(req,res)=>{
    const id = req.params.id;
    const {_id,password,google,correo ,...resto} = req.body;

    //TODO VALIDAR CONTRA db
    if(password){
        //Encrypter password
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    try {
        const usuario = await Usuario.findByIdAndUpdate(id, resto);


        res.status(201).json({
            message: "Usuario Actualizado",
            usuario
        });
    } catch (error) {
        res.status(500).json({msg:"Hubo un error"});
    }

    
};

const usuariosPost = async(req,res)=>{
    
    const {nombre,correo,password,rol} = req.body;

    const usuario = new Usuario({nombre,correo,password,rol});

    //Encrypter password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en base de datos

    try {
        await usuario.save();

        res.status(201).json({
            message: "Usuario Creado",
            usuario
        });
    } catch (error) {
        res.status(500).json({msg:"Hubo un error"});
    }

};



module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost

};