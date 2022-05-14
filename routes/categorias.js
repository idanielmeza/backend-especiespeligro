const {Router} = require('express');
const { check } = require('express-validator');
const { validarJWT , validarCampos, esAdmin} = require('../middlewares');
const {crearCategoria, obtenerCategoria,obtenerCategoriaID,actualizarCategoria, borrarCategoria} = require('../controllers/categorias');
const { idCategoriaExiste } = require('../helpers/db-validators');


const router = Router();

// /api/categorias


//Obtener todas las categorias - publico
router.get('/', obtenerCategoria)

//Obtener una categoria por id - publlico
router.get('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(idCategoriaExiste),
    validarCampos
] ,obtenerCategoriaID)

//Crear categoria - privado - cualquier persona con token valido
router.post('/', [
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty()
    ,validarCampos
],crearCategoria)

//Actualiza registro por id - privado - cualquiera con token valido
router.put('/:id',[
    validarJWT,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(idCategoriaExiste),
    check('nombre','El nombre es obligatorio').not().isEmpty()
    ,validarCampos
] ,actualizarCategoria)

//Borrar una categoria - Admin
router.delete('/:id',[
    validarJWT,
    esAdmin,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(idCategoriaExiste),
    validarCampos
] ,borrarCategoria)


module.exports = router;