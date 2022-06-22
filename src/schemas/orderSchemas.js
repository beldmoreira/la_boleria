import Joi from "joi";

export const orderSchemas = Joi.object({
    clientId: Joi
    .number()
    .required(),
    cakeId:Joi
    .number()
    .required(),
    quantity:Joi
    .number()
    .min(0)
    .max(5)
    .required(),
    totalPrice: Joi
    .number()
    .required()

});

