const {Router} = require("express");
const { check } = require("express-validator");
const { cargarArchivo} = require("../controllers/uploads");

const { validarArchivoSubir } = require("../middlewares");
// const {validarCampos} = require('../middlewares/validar-campos');

const router = Router();

router.post("/",validarArchivoSubir,cargarArchivo);


module.exports = router;