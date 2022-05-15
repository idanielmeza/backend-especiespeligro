const {subirArchivo} = require("../helpers");


const cargarArchivo = async(req,res)=>{

    try {
        const pathArchivo = await subirArchivo(req.files,undefined, "img");

        res.json({path: pathArchivo});

    } catch (msg) {
        res.status(400).json({msg});  
    } 
    
};




module.exports ={
    cargarArchivo
};