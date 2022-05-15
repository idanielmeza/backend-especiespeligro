const {model,Schema} = require("mongoose");

const reporteSchema = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    email:{
        type: String,
    },
    ubicacion:{
        type: String,
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref: "Estado"
    },
    finalizado:{
        type: Boolean,
        default: false
    }
});

module.exports = model("Reporte",reporteSchema);