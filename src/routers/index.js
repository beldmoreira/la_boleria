import {Router} from "express";
import cakesRouter from "../routers/cakesRouter.js";
import ordersRouter from "../routers/ordersRouter.js"
import clientsRouter from "./clientsRouter.js";

const router = Router();

router.use(cakesRouter)
router.use(clientsRouter)
router.use(ordersRouter)


export default router;