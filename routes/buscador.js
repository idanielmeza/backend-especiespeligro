const router = require("express").Router();
const {buscadorEspecie} = require("../controllers/especie");
const {check} = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");

router.get("/",[
    check("nombre", "El nombre es obligatorio").not().isEmpty().trim().escape(),
    validarCampos
] ,buscadorEspecie);

module.exports = router;