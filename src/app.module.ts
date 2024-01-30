import { Module } from '@nestjs/common';
import { WithoutPaginateModule } from './without-paginate/without-paginate.module';
import { WithPaginateModule } from './with-paginate/with-paginate.module';

@Module({
  imports: [WithoutPaginateModule, WithPaginateModule],
})
export class AppModule {}
