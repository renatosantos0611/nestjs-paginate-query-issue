import { Module } from '@nestjs/common';
import { WithPaginateModule } from './with-paginate/with-paginate.module';
import { WithoutPaginateModule } from './without-paginate/without-paginate.module';

@Module({
  imports: [WithoutPaginateModule, WithPaginateModule],
})
export class AppModule {}
