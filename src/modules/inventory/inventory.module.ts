import { Module } from '@nestjs/common';

import { InventoryService } from '@src/modules/inventory/services/inventory.service';
import { InventoryController } from '@src/modules/inventory/controllers/inventory.controller';
import { InventoryRepository } from '@src/modules/inventory/repositories/inventory.repository';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, InventoryRepository],
})
export class InventoryModule {}
