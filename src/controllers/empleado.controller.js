import { empleadoModel } from "../models/empleado.js";
import bcryptjs from "bcryptjs";

// 1. Método para CREAR un usuario -> POST
export const postUser = async (request, response) => {
    try {
        //destructuración de request.body
        const { name, username, email, age, password, role } = request.body;
        //.hash() para encriptar la contraseña
        const codedPassword = await bcryptjs.hash(password, 10);

        await userModel.create({
            name,
            username,
            email,
            age,
            password: codedPassword,
            role
        });

        return response.status(201).json({
            "mensaje": "Usuario creado correctamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear un usuario",
            "error": error.message || error
        })
    }
}

// 2. Método para MOSTRAR todos los usuarios -> GET
export const getAllUsers = async (request, response) => {
    try {
        const allUsers = await userModel.find();
        return response.status(200).json({
            "mensaje": "Petición exitosa",
            "data": allUsers
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear producto",
            "error": error.message || error
        })
    }
}

// 3. Método para ACTUALIZAR un usuario -> PUT
export const putUserById = async (request, response) => {
    try {

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear producto",
            "error": error.message || error
        })
    }
}

// 4. Método para ELIMINAR un usuario -> DELETE
export const deleteUserById = async (request, response) => {
    try {
        const idForDelete = request.params.id;
        await userModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Usuario eliminado exitósamente"
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrió un error al crear producto",
            "error": error.message || error
        })
    }
}