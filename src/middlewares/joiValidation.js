const joiValidation = (objectSchema) => {
    return (req, res, next) => {
      const { error } = objectSchema.validate(req.body, { abortEarly: false });
      if (error) res.status(422).send(error.details.map((detail) => detail.message).join());
      else next();
    };
  };
  
  export default joiValidation;