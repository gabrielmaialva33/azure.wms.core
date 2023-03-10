import 'dotenv/config';

import { registerAs } from '@nestjs/config';

import { Env } from '@src/lib/config';

export const app = registerAs('app', () => ({
  host: Env.HOST,
  port: Env.PORT,
  url: `${Env.HOST}:${Env.PORT}`,
}));
