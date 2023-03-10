import { ObjectionService } from '@squareboat/nestjs-objection';

export class BaseRepository {
  constructor(private readonly db: string) {}

  protected get connection() {
    return ObjectionService.connection(this.db);
  }

  protected get transaction() {
    return ObjectionService.connection(this.db).transaction();
  }
}
