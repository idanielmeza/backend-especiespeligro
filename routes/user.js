const {Router} = require("express");
const { check } = require("express-validator");
const {usuariosGet,usuariosPut,usuariosPost} = require("../controllers/user");
const {emailExiste ,idUsuarioExiste} = require("../helpers/db-validators");

const {validarCampos} = require("../middlewares");


const router = Router();

router.get("/", usuariosGet);

router.put("/:id",[
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(idUsuarioExiste),
    validarCampos

] ,usuariosPut);

router.post("/", [
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("password","El password es obligatorio y mayor de 6 caracteres").isLength({min: 6}),
    check("correo","El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),
    validarCampos
],usuariosPost);



module.exports = router;