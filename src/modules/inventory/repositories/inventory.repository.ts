import { BaseRepository } from '@src/common/base.repository';
import { DEV_CORP_DB } from '@src/lib/config';

import { from, map } from 'rxjs';

export class InventoryRepository extends BaseRepository {
  constructor() {
    super(DEV_CORP_DB);
  }

  list() {
    return from(this.connection.from('PDA_TB_CLIENTE').select('*')).pipe(
      map((data) => data),
    );
  }
}
