const Joi = require("@hapi/joi");

//Register Validation
exports.registerValidation = data => {
  const userValidation = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return userValidation.validate(data);
};

exports.loginValidation = data => {
  const userValidation = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return userValidation.validate(data);
};
