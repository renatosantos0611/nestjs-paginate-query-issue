import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('without-paginate')
export class WithoutPaginateController {
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return id;
  }
}
