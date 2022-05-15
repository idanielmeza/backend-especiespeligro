const {model,Schema} = require("mongoose");

const tipoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model("Tipo",tipoSchema);
