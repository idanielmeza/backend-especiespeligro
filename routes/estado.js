const {Router} = require('express');
const {check} = require('express-validator');
const {getEstados,getEstadoID,postEstado,putEstado} = require('../controllers/estado');
const {validarCampos} = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getEstados);

router.get('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
],getEstadoID);

router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty().trim().escape(),
    validarCampos
],postEstado);

router.put('/:id',[
    check('nombre','El nombre es obligatorio').not().isEmpty().trim().escape(),
    validarCampos
],putEstado);

module.exports = router;