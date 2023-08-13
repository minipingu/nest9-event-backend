import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id) {
    return id;
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
  remove(@Param('id') id) {
    return id;
  }
}
