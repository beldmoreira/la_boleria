import Joi from "joi";

export const PostCakes = Joi.object({
    name: Joi
    .string()
    .pattern(/^\w{2,}$/)
    .required(),
    price:Joi
    .number()
    .required(),
    description:Joi
    .string()
    .optional(),
    image:Joi
    .string()
    .uri()
    .required()
});



