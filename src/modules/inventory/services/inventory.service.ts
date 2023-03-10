import { Injectable } from '@nestjs/common';
import { InventoryRepository } from '@src/modules/inventory/repositories/inventory.repository';

@Injectable()
export class InventoryService {
  constructor(private readonly inventoryRepository: InventoryRepository) {}

  list() {
    return this.inventoryRepository.list();
  }
}
