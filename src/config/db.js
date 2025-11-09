import mongoose from "mongoose";

export const conexionMongo = async () => {
    try {
        await mongoose.connect(process.env.BD_URL, { dbName: "BD-Empleados" });
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error);
    }
}