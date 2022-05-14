const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

router.post('/', [
    check('habitad','El habitad es obligatorio').not().isEmpty().trim().escape(),
    validarCampos
]);

router.put('/:id', [
    check('id', 'El id es obligatorio').isMongoId(),
    validarCampos
]);

module.exports = router;