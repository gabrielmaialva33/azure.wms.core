import 'dotenv/config';

import { registerAs } from '@nestjs/config';

import { Env } from '@src/lib/config';

export const jwt = registerAs('jwt', () => ({
  secret: Env.JWT_SECRET,
  accessExpiry: /^\d+$/.test(Env.JWT_EXPIRES_IN)
    ? +Env.JWT_EXPIRES_IN // if number, parse to string
    : Env.JWT_EXPIRES_IN,
  refreshExpiry: +Env.JWT_REFRESH_EXPIRES_IN,
}));
