import {Router} from "express";
import cakesRouter from "../routers/cakesRouter.js";

const router = Router();

router.use(cakesRouter)


export default router;