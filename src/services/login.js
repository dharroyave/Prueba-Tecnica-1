import { empleadoModel } from "../models/empleado.js";
import { generateToken } from "../config/jwt.js";
import bcryptjs from "bcryptjs";

export const login = async (request, response) => {
    try {
        const { emailLogin, passwordLogin } = request.body;
        const empleadoFound = await empleadoModel.findOne({
            email: emailLogin
        });

        console.log("empleado encontrado", empleadoFound);

        if (!empleadoFound) {
            return response.status(404).json({
                "mensaje": "El empleado no existe, regístrelo por favor"
            });
        }

        const validPassword = await bcryptjs.compare(passwordLogin, empleadoFound.password);

        if (!validPassword) {
            return response.status(401).json({
                "mensaje": "Contraseña incorrecta"
            });
        }

        const payload = {
            id: empleadoFound._id,
            user: empleadoFound.email
        }

        if (empleadoFound.role === "admin") {
            payload.admin = true;
        } else {
            payload.admin = false;
        }

        const token = await generateToken(payload);
        console.log("payload: ", payload);
        console.log("token: ", token);

        return response.status(200).json({
            "mensaje": "Inicio de sesión exitoso",
            "token": token
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Error al iniciar sesión",
            "error": error.message || error
        });
    }
}