import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryService } from '@src/modules/inventory/services/inventory.service';
import {
  CreateInventoryDto,
  UpdateInventoryDto,
} from '@src/modules/inventory/dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  list() {
    return this.inventoryService.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return `This action returns a #${id} inventory`;
  }

  @Post()
  create(@Body() data: CreateInventoryDto) {
    return `This action creates a inventory`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} inventory`;
  }
}
