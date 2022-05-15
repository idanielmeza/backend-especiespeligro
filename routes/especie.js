const {Router} = require("express");
const {check} = require("express-validator");
const {getEspecie,getEspecies,postEspecie,putEspecie, buscadorEspecie} = require("../controllers/especie");
const {validarCampos} = require("../middlewares/validar-campos");


const router = Router();

router.get("/", getEspecies);

router.get("/:id",[
    check("id", "No es un ID valido").isMongoId(),
    validarCampos
],getEspecie);

router.post("/", [
    check("nombre","El nombre es obligatorio").not().isEmpty().trim().escape(),
    check("tipo","El tipo es obligatorio").isMongoId(),
    check("habitad","El habitad es obligatorio").isMongoId(),
    check("estado","El estado es obligatorio").isMongoId(),
    validarCampos
],postEspecie);



router.put("/:id",[
    check("id", "No es un ID valido").isMongoId(),
    check("nombre","El nombre es obligatorio").not().isEmpty().trim().escape(),
    check("tipo","El tipo es obligatorio").isMongoId(),
    check("habitad","El habitad es obligatorio").isMongoId(),
    check("estado","El estado es obligatorio").isMongoId(),
    validarCampos
],putEspecie);


module.exports = router;