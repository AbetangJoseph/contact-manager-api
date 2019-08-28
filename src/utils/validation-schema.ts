import joi from '@hapi/joi';

export const addContactSchema = {
  firstname: joi.string().required(),
  lastname: joi
    .string()
    .optional()
    .allow(''),
  mobile: joi
    .string()
    .min(10)
    .max(14)
    .required(),
  address: joi
    .string()
    .optional()
    .allow(),
  email: joi
    .string()
    .email()
    .optional()
    .lowercase()
    .allow(''),
  company: joi
    .string()
    .optional()
    .allow(''),
  website: joi
    .string()
    .optional()
    .allow(''),
};

export const updateContactSchema = {
  firstname: joi.string().optional(),
  lastname: joi.string().optional(),
  mobile: joi
    .string()
    .min(10)
    .max(14)
    .optional(),
  address: joi.string().optional(),
  email: joi
    .string()
    .email()
    .optional()
    .lowercase(),
  company: joi.string().optional(),
  website: joi.string().optional(),
};
