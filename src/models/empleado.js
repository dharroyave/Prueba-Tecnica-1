import mongoose from "mongoose";

const EmpleadoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true,
    },
    apellido2: {
        type: String,
        required: true,
    },
    codigo_departamento: {
        type: Number,
        required: true
    },
    role:{
        type: String,
        enum:['admin','empleado'],
        required:true,
    }
});

export const empleadoModel = mongoose.model("Empleado", EmpleadoSchema);