import { Router } from "express";
import joiValidation from "../middlewares/joiValidation.js";
import { clientsSchemas } from "../schemas/clientsSchemas.js";
import clientControllers from "../controllers/clientsControllers.js";

const clientsRouter = Router();

clientsRouter.post(
    "/clients",
    joiValidation(clientsSchemas),
    clientControllers.createClient
);

clientsRouter.get(
    "/clients/:id/orders",
    clientControllers.getClientsOrders
)

export default clientsRouter;
