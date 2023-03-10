import { registerAs } from '@nestjs/config';

import { SqliteConfig } from '@src/lib/config/sqlite.config';
import { DevCorpDbConfig } from '@src/lib/config/dev-corp-db.config';

export const DEFAULT_DB = 'sqlite';
export const DEV_CORP_DB = 'dev_corp_db';

export const database = registerAs('database', () => ({
  isGlobal: true,
  default: DEFAULT_DB,
  connections: {
    [DEFAULT_DB]: { ...SqliteConfig },
    [DEV_CORP_DB]: { ...DevCorpDbConfig },
  },
}));
