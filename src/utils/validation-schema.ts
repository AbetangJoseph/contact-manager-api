import joi from '@hapi/joi'

export const userSchema = {
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
}
