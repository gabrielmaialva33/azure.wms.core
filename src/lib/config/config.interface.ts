import { ConfigType } from '@nestjs/config';

import { app, database, jwt, dev_corp_db } from '@src/lib/config';

export interface IConfig {
  app: ConfigType<typeof app>;
  jwt: ConfigType<typeof jwt>;
  database: ConfigType<typeof database>;
  dev_corp_db: ConfigType<typeof dev_corp_db>;
}
