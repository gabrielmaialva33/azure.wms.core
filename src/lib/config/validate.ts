import { z } from 'zod';
import { Logger } from '@nestjs/common';
import * as process from 'process';

export const ValidateSchema = z.object({
  // APP
  HOST: z.string().trim().default('0.0.0.0'),
  PORT: z
    .string()
    .trim()
    .default('80')
    .transform((value) => Number(value)),
  // DB
  DB_HOST: z.string().trim().default('localhost'),
  DB_PORT: z
    .string()
    .trim()
    .default('1433')
    .transform((value) => Number(value)),
  DB_USERNAME: z.string().trim().default('sa'),
  DB_PASSWORD: z.string().trim().default('Wms@551238'),
  DB_NAME: z.string().trim().default('model'),
  DB_SSL: z.string().trim().default('false'),
  DB_DEBUG: z
    .string()
    .trim()
    .default('false')
    .transform((value) => value === 'true'),
  // REDIS
  REDIS_HOST: z.string().trim().default('localhost'),
  REDIS_PORT: z
    .string()
    .trim()
    .default('6379')
    .transform((value) => Number(value)),
  REDIS_PASSWORD: z.string().trim().default(''),
  REDIS_TTL: z.string().trim().default('10'),
  REDIS_URI: z.string().trim().default('redis://localhost:6379'),
  // JWT
  JWT_SECRET: z.string().trim().default('secret'),
  JWT_EXPIRES_IN: z.string().trim().default('1d'),
  JWT_REFRESH_EXPIRES_IN: z.string().trim().default('30d'),
  // WMS
  DB_CONNECTION_STRING: z.string().trim().default(''),
  API_TOKEN: z.string().trim().default(''),
});

export function validate(config: Record<string, unknown>) {
  const result: any = ValidateSchema.safeParse(config);

  if (!result.success) {
    for (const { message, path } of result.error.issues)
      Logger.error(message, path.join('.'));
    process.exit(1);
  }

  return result.data;
}
