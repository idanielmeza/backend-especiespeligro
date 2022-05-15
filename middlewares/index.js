const validaCampos = require("../middlewares/validar-campos");
const validaJWT = require("../middlewares/validar-jwt");
const validarArchivoSubir = require("../middlewares/validar-archivo");

module.exports = {
    ...validaCampos,
    ...validaJWT,
    ...validarArchivoSubir
};