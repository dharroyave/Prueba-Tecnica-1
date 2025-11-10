import { empleadoModel } from "../models/empleado.js";
import bcryptjs from "bcryptjs";

// 1. Método POST
export const postEmpleado = async (request, response) => {
    try {
        const { codigo, nombre, apellido1, apellido2, email, codigo_departamento, password, role } = request.body;
        const codedPassword = await bcryptjs.hash(password, 10);

        await empleadoModel.create({
            codigo,
            nombre,
            apellido1,
            apellido2,
            email,
            codigo_departamento,
            password: codedPassword,
            role
        });

        return response.status(201).json({
            "mensaje": "empleado creado correctamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear un empleado",
            "error": error.message || error
        })
    }
}

// 2. Método GET
export const getAllEmpleados = async (request, response) => {
    try {
        const allEmpleados = await empleadoModel.find();
        return response.status(200).json({
            "mensaje": "Petición exitosa",
            "data": allEmpleados
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al mostrar empleado",
            "error": error.message || error
        })
    }
}

// 3. Método PUT
export const putEmpleadoById = async (request, response) => {
    try {
        const idForUpdate = request.params.id;
        const dataForUpdate = request.body;
        await empleadoModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
            "mensaje": "Empleado actualizado exitósamente"
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al Actualizar Empleado",
            "error": error.message || error
        })
    }
}

// 4. Método DELETE
export const deleteEmpleadoById = async (request, response) => {
    try {
        const idForDelete = request.params.id;
        await empleadoModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Empleado eliminado exitósamente"
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear Empleado",
            "error": error.message || error
        })
    }
}