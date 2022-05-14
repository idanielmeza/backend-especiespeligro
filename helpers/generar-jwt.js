const jwt = require('jsonwebtoken');

const generarJWT = (uid = '')=>{
    return new Promise( (res,rej) =>{

        const payload = {uid};

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {expiresIn: '4h'},
            (e,token) =>{
                if(e){
                    console.log(e);
                    rej('No se pudo generar el token');
                }else{
                    res(token);
                }
            }
        )

    })
}

module.exports ={
    generarJWT
}