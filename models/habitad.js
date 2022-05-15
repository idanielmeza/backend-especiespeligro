const {model,Schema} = require("mongoose");

const habitadSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model("Habitad",habitadSchema);