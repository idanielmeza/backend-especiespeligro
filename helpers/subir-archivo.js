const path = require('path');
const { v4: uuid } =  require('uuid');
const subirArchivo = (files, extensionesValidas= ['png','jpg','jpeg','gif'], carpeta='')=>{

    return new Promise((resolve, reject)=>{

        const {archivo} = files;

        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[nombreCortado.length -1];

        //Validar Extension
        if(!extensionesValidas.includes(extension)){
            return reject('Tipo de archivo invalido')
        }

        const nombre = uuid() + '.'+ extension;
        const uploadPath =path.join( __dirname, '../uploads/',carpeta ,nombre );

        archivo.mv(uploadPath, (err)=> {
            if (err) {

                reject(err);
            }
            resolve(nombre);
        });

    })

    

}

module.exports = {
    subirArchivo
}