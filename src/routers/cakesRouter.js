import { Router } from "express";
import cakesControllers from "../controllers/cakesControllers.js";
import joiValidation from "../middlewares/joiValidation.js";
import {cakesSchemas} from "../schemas/cakesSchemas.js"

const cakesRouter = Router();

cakesRouter.post (
    "/cakes",
    joiValidation(cakesSchemas),
    cakesControllers.createCake
    );

export default cakesRouter;