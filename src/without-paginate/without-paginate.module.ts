import { Module } from '@nestjs/common';
import { WithoutPaginateController } from './without-paginate.controller';

@Module({
  controllers: [WithoutPaginateController],
})
export class WithoutPaginateModule {}
