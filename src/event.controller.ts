import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  HttpCode,
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First event' },
      { id: 2, name: 'Second event' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'First event' };
  }

  //lesson 3-16 request body
  @Post()
  create(@Body() input) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id) {
    return id;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    return id;
  }
}
