import {Router} from "express";
import orderRouter from "../routers/orderRouter.js";
import cakesRouter from "../routers/cakesRouter.js";
import clientsRouter from "../routers/clientsRouter.js";


const router = Router();

router.use(orderRouter)
router.use(cakesRouter)
router.use(clientsRouter)

export default router;