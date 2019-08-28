import joi from '@hapi/joi';
import { addContact, editContact } from '../interface.def';

export const validateAdd = (requestBody: any, schema: any) => {
  const { error, value } = joi.validate<addContact>(requestBody, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
  return { error, value };
};

export const validateUpdate = (requestBody: any, schema: any) => {
  const { error, value } = joi.validate<editContact>(requestBody, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
  return { error, value };
};
