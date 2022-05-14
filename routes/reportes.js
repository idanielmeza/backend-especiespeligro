const {Router} = require('express');
const { check } = require('express-validator');
const { getReportes, getReporte, postReportes, putReportes, deleteReportes } = require('../controllers/reportes');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

router.get('/', getReportes);
router.get('/:id', getReporte);
router.post('/', postReportes);
router.put('/:id', putReportes);
router.delete('/:id', deleteReportes);


module.exports = router;