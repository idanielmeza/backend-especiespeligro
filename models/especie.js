const {model,Schema} = require("mongoose");

const especieSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
    },
    img:{
        type: String,
    },
    tipo:{
        type: [Schema.Types.ObjectId],
        ref: "Tipo",
    },
    estado:{
        type: [Schema.Types.ObjectId],
        ref: "Estado",
    },
    habitad:{
        type: [Schema.Types.ObjectId],
        ref: "Habitad",
    },
    problematica:{
        type: Number
    }
});

module.exports = model("Especie",especieSchema);