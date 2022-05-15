const { Usuario } = require("../models");


const emailExiste = async(correo)=>{
    const existe = await Usuario.findOne({correo});
    if(existe){
        throw new Error (`El correo ${correo} ya esta en uso`);
    }
};

const idUsuarioExiste = async (id) => {
    const existe = await Usuario.findById(id);
    if(!existe){
        throw new Error (`El id ${id} no existe`);
    }
};



module.exports={

    emailExiste,
    idUsuarioExiste,

};