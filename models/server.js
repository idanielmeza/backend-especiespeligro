const express = require("express");
const cors = require("cors");
// const fileUpload = require('express-fileUpload');
const {dbConnection} = require("../database/config");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 80;

        this.paths = {
            usuarios: "/api/usuarios",
            auth: "/api/auth",
            // uploads: '/api/uploads',
            reportes: "/api/reportes",
            tipos: "/api/tipos",
            habitad: "/api/habitad",
            estado: "/api/estado",
            especie: "/api/especie",
            buscador: "/api/buscador"
        };

        //Conectar a db
        this.conectarDB();

        //Middleware
        this.middlewares();

        //Rutas de app
        this.router();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        // //Carga de archivos
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath:true
        // }));

    }

    router(){
        this.app.use(this.paths.auth,require("../routes/auth"));
        this.app.use(this.paths.usuarios,require("../routes/user"));
        // this.app.use(this.paths.uploads,require('../routes/uploads'));
        this.app.use(this.paths.tipos, require("../routes/tipo"));
        this.app.use(this.paths.habitad, require("../routes/habitad"));
        this.app.use(this.paths.reportes, require("../routes/reportes"));
        this.app.use(this.paths.estado, require("../routes/estado"));
        this.app.use(this.paths.especie, require("../routes/especie"));
        this.app.use(this.paths.buscador, require("../routes/buscador"));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;