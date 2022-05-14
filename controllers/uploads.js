const {subirArchivo} = require('../helpers')

const cloudinary = require('cloudinary').v2

cloudinary.config(process.env.CLOUDINARY_URL);

const {Usuario,Producto} = require('../models')
const path = require('path')
const fs = require('fs')


const cargarArchivo = async(req,res)=>{

    try {
        const pathArchivo = await subirArchivo(req.files,undefined, 'img');

        res.json({path: pathArchivo})

    } catch (msg) {
        res.status(400).json({msg})  
    } 
    
}

const actualizarImagen = async(req,res)=>{

    const {id,coleccion} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el usuario'})
            }
            break;
    
        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el producto'})
            }
            break;
    
        default:
            return res.status(500).json({msg:'Ups esto no funciona'});
    }

    // Limpiar imagenes previas (a remplazar)

    if(modelo.img){
        //Hay que borrar la imagen del servidor
        const pathImage = path.join(__dirname,'../uploads/', coleccion, modelo.img)
        if(fs.existsSync(pathImage)){
            fs.unlinkSync(pathImage)
        }
    }
    
    const nombre= await subirArchivo(req.files,undefined, coleccion);
    
    modelo.img = nombre;

    await modelo.save();

    res.json(modelo);
}

const mostrarImagen = async(req, res)=>{

    const {id,coleccion} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el usuario'})
            }
            break;
    
        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el producto'})
            }
            break;
    
        default:
            return res.status(500).json({msg:'Ups esto no funciona'});
    }

    // Limpiar imagenes previas (a remplazar)

    if(modelo.img){
        //Hay que borrar la imagen del servidor
        return res.json({img:modelo.img});
    }

    res.sendFile( path.join (__dirname,'../assets/no-image.jpg'));


} 

const actualizarImagenCloudinary = async(req,res)=>{

    const {id,coleccion} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el usuario'})
            }
            break;
    
        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo){
                return res.status(400).json({msg:'No existe el producto'})
            }
            break;
    
        default:
            return res.status(500).json({msg:'Ups esto no funciona'});
    }

    // Limpiar imagenes previas (a remplazar)

    if(modelo.img){
        
        const nombreArr = modelo.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [public_id] = nombre.split('.');
        cloudinary.uploader.destroy(public_id);

    }

    const {tempFilePath} = req.files.archivo;

    const {secure_url} = await cloudinary.uploader.upload(tempFilePath);
    
    modelo.img = secure_url;

    await modelo.save();

    res.json(modelo);
}

module.exports ={
    cargarArchivo,
    actualizarImagen,
    mostrarImagen,
    actualizarImagenCloudinary
}