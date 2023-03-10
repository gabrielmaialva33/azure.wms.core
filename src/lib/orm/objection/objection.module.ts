import { Global, Module } from '@nestjs/common';

import { ObjectionModule } from '@squareboat/nestjs-objection';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BaseRepository } from '@src/common/base.repository';

@Global()
@Module({
  imports: [
    ObjectionModule.registerAsync({
      name: 'wms',
      imports: [ConfigModule],
      inject: [ConfigService],
      isGlobal: true,
      useFactory: (config: ConfigService) => config.get('database'),
    }),
  ],
  providers: [BaseRepository],
})
export class NestObjectionModule {}
