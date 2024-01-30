import { Controller, Get } from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

@Controller('with-paginate')
export class WithPaginateController {
  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return query;
  }
}
