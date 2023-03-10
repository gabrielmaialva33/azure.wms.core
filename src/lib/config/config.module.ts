import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { validate, ValidateSchema } from '@src/lib/config/validate';
import { app, sqlite, database, jwt, dev_corp_db } from '@src/lib/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [app, database, jwt, sqlite, dev_corp_db],
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema: ValidateSchema,
      validate: validate,
      validationOptions: { abortEarly: true },
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class NestConfigModule {}
