import joi from '@hapi/joi'

interface User {
  firstname: string
  lastname?: string
  mobile: string
  address?: string
  email?: string
  company?: string
  website?: string
}

export const validateInput = (requestBody: any, schema: any) => {
  const { error, value } = joi.validate<User>(requestBody, schema, {
    abortEarly: false,
    stripUnknown: true,
  })
  return { error, value }
}
