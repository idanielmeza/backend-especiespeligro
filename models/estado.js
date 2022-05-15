const {model,Schema} = require("mongoose");

const estadoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model("Estado",estadoSchema);