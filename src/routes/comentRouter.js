import { Router } from "express";
import { getComents, createComents } from "../controllers/comentController";

const comentRouter = Router()

comentRouter.route("/posts/:id/coments")
    .get(getComents)
    .post(createComents)


export default comentRouter