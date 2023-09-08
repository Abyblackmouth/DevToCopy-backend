import { Router } from "express";
import { getComents, createComents, getComentsById } from "../controllers/comentController";

const comentRouter = Router()

comentRouter.route("/posts/:id/coments")
    .get(getComentsById)
/*     .post(createComents) */

comentRouter.route("/coments")
/* .get(getComents) */
    .post(createComents)

    

export default comentRouter