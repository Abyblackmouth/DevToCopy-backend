import express from "express";
import {} from "dotenv/config"
import { jsonParser, xmlParser } from "./src/middleware/bodyParser";
import todoPostRouter from "./src/routes/todoPostRouter";
import todoUserRouter from "./src/routes/todoUserRouter";
import registerRouter from "./src/routes/registerRouter";   
import { loggerMiddleware } from "./src/middleware/logger";
import sessionsRouter from "./src/routes/sessionRouter";
import cors from "cors"
import { DBConn } from "./src/config/database";

const app = express()
const port = 3000

DBConn()

app.use(jsonParser, xmlParser, loggerMiddleware, cors())
app.use(todoPostRouter, todoUserRouter, registerRouter, sessionsRouter)

app.listen(port, ()=> {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})