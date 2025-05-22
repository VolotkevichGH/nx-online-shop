import * as Joi from 'joi';
import { getPostgresEnvironment } from './postgres.environment';
import { registerAs } from '@nestjs/config';

export const validationSchema = Joi.object({
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
});
export const configuration = registerAs('postgres', () => {
  const env = getPostgresEnvironment();


  return {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USERNAME,
    name: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
  };
});
