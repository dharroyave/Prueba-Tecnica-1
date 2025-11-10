import express from "express";
import { postEmpleado, getAllEmpleados, putEmpleadoById, deleteEmpleadoById } from "../controllers/empleado.controller.js";
import { auth } from "../middleware/auth.js";

// 2 Configurar las rutas.
export const empleadoRouter = express.Router();

// Ruta para el POST
empleadoRouter.post("/", postEmpleado);

// Ruta para el GET
empleadoRouter.get("/", auth("admin"), getAllEmpleados);

// Ruta para el PUT
empleadoRouter.put("/:id", putEmpleadoById);

// Ruta para el DELETE
empleadoRouter.delete("/:id", deleteEmpleadoById);