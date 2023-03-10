import { Knex } from 'knex';
import { registerAs } from '@nestjs/config';

import { DatabaseUtils } from '@src/utils/database.utils';
import { Env } from '@src/lib/config/env';

const { host, user, password, database } = DatabaseUtils.parseConnectionString(
  Env.DB_CONNECTION_STRING,
);

export const DevCorpDbConfig = {
  client: 'mssql',
  connection: {
    host: host,
    port: 1433,
    user,
    password,
    database,
    encrypt: true,
    debug: true,
  },
  debug: Env.DB_DEBUG,
} as Knex.Config<Knex.MsSqlConnectionConfig>;

export const dev_corp_db = registerAs('dev_corp_db', () => DevCorpDbConfig);
