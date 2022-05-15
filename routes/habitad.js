const {Router} = require("express");
const {check} = require("express-validator");
const {getHabitad, getHabitads, postHabitad, putHabitad} = require("../controllers/habitad");
const {validarCampos} = require("../middlewares/validar-campos");


const router = Router();

router.get("/", getHabitads);


router.get("/:id", [
    check("id", "El id es obligatorio").isMongoId(),
    validarCampos
],getHabitad);

router.post("/", [
    check("nombre","El habitad es obligatorio").not().isEmpty().trim().escape(),
    validarCampos
],postHabitad);

router.put("/:id",[
    check("id", "El id es obligatorio").isMongoId(),
    check("nombre","El habitad es obligatorio").not().isEmpty().trim().escape(),
    validarCampos
],putHabitad);


module.exports = router;