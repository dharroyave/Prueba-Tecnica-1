import { mongoose } from "mongoose";

const DepartamentoSchema = new mongoose.Schema({
    codigoDepartamento: {
        type: Number,
        required: true,
    },
    nombreDepartamento: {
        type: String,
        required: true,
    }
});

export const departamentoModel = mongoose.model("departamento", DepartamentoSchema);
