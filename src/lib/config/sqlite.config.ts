import { Knex } from 'knex';
import { registerAs } from '@nestjs/config';

export const SqliteConfig = {
  client: 'better-sqlite3',
  connection: {
    filename: `${process.cwd()}/database.sqlite`,
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: `${process.cwd()}/src/database/migrations`,
  },
  seeds: {
    directory: `${process.cwd()}/src/database/seeds`,
  },
} as Knex.Config<Knex.Sqlite3ConnectionConfig>;

export const sqlite = registerAs('sqlite', () => SqliteConfig);
