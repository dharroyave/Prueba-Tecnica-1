import express from "express";
import { postDepartamento, getAllDepartamento, putDepartamentoById, deleteDepartamentoById } from "../controllers/departamento.controller.js";
import { auth } from "../middleware/auth.js";

// 2 Configurar las rutas.
export const departamentoRouter = express.Router();

// Ruta para el POST
departamentoRouter.post("/crear", auth("admin"), postDepartamento);

// Ruta para el GET
departamentoRouter.get("/mostrar", getAllDepartamento);

// Ruta para el PUT
departamentoRouter.put("/actualizar/:id", auth("admin"), putDepartamentoById);

// Ruta para el DELETE
departamentoRouter.delete("/eliminar/:id", auth("admin"), deleteDepartamentoById);