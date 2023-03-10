import { Module } from '@nestjs/common';

import { NestConfigModule } from '@src/lib/config/config.module';
import { NestObjectionModule } from '@src/lib/orm/objection/objection.module';
import { InventoryModule } from '@src/modules/inventory/inventory.module';

@Module({
  imports: [NestConfigModule, NestObjectionModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
