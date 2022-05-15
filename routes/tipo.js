const {Router} = require("express");
const {check} = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");
const {getTipos, getTipo, postTipo, putTipo} = require("../controllers/tipo");

const router = Router();

router.get("/", getTipos);

router.get("/:id",[
    check("id", "El id es obligatorio").isMongoId(),
    validarCampos
] ,getTipo);

router.post("/", [
    check("nombre", "El nombre es obligatorio").not().isEmpty().trim().escape(),
    validarCampos
], postTipo);

router.put("/:id", [
    check("id", "El id es obligatorio").isMongoId(),
    check("nombre", "El nombre es obligatorio").not().isEmpty().trim().escape(),
    validarCampos
], putTipo);

module.exports = router;