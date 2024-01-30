import { Module } from '@nestjs/common';
import { WithPaginateController } from './with-paginate.controller';

@Module({
  controllers: [WithPaginateController],
})
export class WithPaginateModule {}
