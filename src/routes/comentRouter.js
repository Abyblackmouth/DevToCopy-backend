import { Router } from "express";
import { getComents } from "../controllers/comentController";

const comentRouter = Router()

comentRouter.route("/posts/:id/coments")
    .get(getComents)


export default comentRouter