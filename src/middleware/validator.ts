import joi from '@hapi/joi';
import { addUser, editUser } from '../interface.def';

export const validateAdd = (requestBody: any, schema: any) => {
  const { error, value } = joi.validate<addUser>(requestBody, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
  return { error, value };
};

export const validateUpdate = (requestBody: any, schema: any) => {
  const { error, value } = joi.validate<editUser>(requestBody, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
  return { error, value };
};
