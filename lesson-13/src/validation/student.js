import Joi from 'joi';

export const studentSchema = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    'string.base': 'Student name must be a string',
    'any.required': 'Student name is required',
  }),
  age: Joi.number().required(),
  gender: Joi.string().valid('male', 'female').required(),
  onDuty: Joi.boolean(),
});
