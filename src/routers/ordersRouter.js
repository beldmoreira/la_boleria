import { Router } from "express";
import joiValidation from "../middlewares/joiValidation.js";
import {orderSchemas} from "../schemas/orderSchemas.js";
import ordersControllers from "../controllers/ordersControllers.js";

const ordersRouter = Router();

ordersRouter.post(
    "/order",
    joiValidation(orderSchemas),
    ordersControllers.createOrder
);

ordersRouter.get(
    "/orders",
    ordersControllers.getOrders
);

ordersRouter.get(
    "/orders/:id",
    ordersControllers.getOrderId
);

export default ordersRouter;
