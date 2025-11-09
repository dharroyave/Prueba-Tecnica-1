// 1. importar las dependencias que necesite
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";
import { loginRouter } from "./src/routes/login.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// 2. configurar las dependencias que necesitemos
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo();
const _filename = fileURLToPath(import.meta.url); 
const _dirname = path.dirname(_filename);


// 3. funcionalidades que necesite agregar
app.get("/",(request,response)=>{
 response.send("Server works!")
});

// ojo debo cambiar
app.use(cors()); //habilitar cors
app.use(express.json()); //es para usar formato json
app.use("/products", productRouter);
app.use("/users", userRouter)
app.use("/login", loginRouter);
app.use('/uploads', express.static(path.join(_dirname, 'src/uploads')));


// 4. levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});