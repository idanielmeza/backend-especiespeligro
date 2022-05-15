const {Router} = require("express");
const { check } = require("express-validator");
const { getReportes, getReporte, postReportes, putReportes, deleteReportes } = require("../controllers/reportes");
const {validarCampos} = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();

router.get("/", [
    // validarJWT
],getReportes);

router.get("/:id", [
    check("id", "El id es obligatorio").isMongoId(),
    validarCampos,
    // validarJWT
],getReporte);

router.post("/", [
    check("titulo", "El titulo es obligatorio").not().isEmpty().trim().escape(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty().trim().escape(),
    check("email", "El email es obligatorio").not().isEmpty().trim().escape(),
    check("ubicacion", "La ubicacion es obligatoria").not().isEmpty().trim().escape(),
    check("estado", "El estado es obligatorio").not().isEmpty().trim().escape(),
    // check('finalizado', 'El finalizado es obligatorio').not().isEmpty().trim().escape(),
    validarCampos,
    // validarJWT
],postReportes);

router.put("/:id", [
    check("id", "El id es obligatorio").isMongoId(),
    check("titulo", "El titulo es obligatorio").not().isEmpty().trim().escape(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty().trim().escape(),
    check("email", "El email es obligatorio").not().isEmpty().trim().escape(),
    check("ubicacion", "La ubicacion es obligatoria").not().isEmpty().trim().escape(),
    check("estado", "El estado es obligatorio").not().isEmpty().trim().escape(),
    check("finalizado", "El finalizado es obligatorio").not().isEmpty().trim().escape(),
    validarCampos,
    // validarJWT
],putReportes);

router.delete("/:id", [
    check("id", "El id es obligatorio").isMongoId(),
    validarCampos,
    // validarJWT
],deleteReportes);


module.exports = router;