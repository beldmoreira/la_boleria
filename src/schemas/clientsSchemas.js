import Joi from "joi";

export const clientsSchemas = Joi.object({
    name: Joi
    .string()
    .required(),
    address:Joi
    .string()
    .required(),
    phone:Joi
    .string()
    .min(10)
    .max(11)
    .required()
});
