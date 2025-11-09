import { departamentoModel } from "../models/departamento.js";

// 1. Método POST
export const postDepartamento = async (request, response) => {
    try {
        await departamentoModel.create(newDepartamento);
        return response.status(201).json({
            "mensaje": "Departamento creado exitosamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear el departamento",
            "error": error.message || error
        });
    }
}

// 2. Método para MOSTRAR todos los productos -> GET
export const getAllDepartamento = async (request, response) => {
    try {
        const allDepartamento = await departamentoModel.find();
        return response.status(200).json({
            "mensaje": "Petición exitosa",
            "data": allDepartamento
        });

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrió un error al mostrar departamentos",
            "error": error.message || error
        });
    }
}

// 3. Método PUT
export const putDepartamentoById = async (request, response) => {
    try {
        const idForUpdate = request.params.id;
        const dataForUpdate = request.body;
        await departamentoModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
            "mensaje": "Departamento actualizado exitósamente"
        });
    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrió un error al actualizar departamento",
            "error": error.message || error
        });
    }
}

// 4. Método DELETE
export const deleteDepartamentoById = async (request, response) => {
    try {
        const idForDelete = request.params.id;
        await departamentoModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Departamento eliminado exitósamente"
        });
    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrió un error al eliminar departamento",
            "error": error.message || error
        });
    }
}