import express from "express";
import {} from "dotenv/config"
import todoPostRouter from "./src/routes/todoPostRouter";
import todoUserRouter from "./src/routes/todoUserRouter";
import { loggerMiddleware } from "./src/routes/logger";
import { jsonParser, xmlParser } from "./src/middleware/bodyParser";
import cors from "cors"
import { DBConn } from "./src/config/database";

const app = express()
const port = 3000

DBConn()

app.use(jsonParser, xmlParser, loggerMiddleware, cors())
app.use(todoPostRouter, todoUserRouter)

app.listen(port, ()=> {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})