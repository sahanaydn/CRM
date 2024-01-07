import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDocument } from './schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return ` this id  ${id}`;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() allProps: UserDocument) {
    return this.usersService.create(allProps);
  }

  // @Put(':id')
  // update(@Param('id') id, @Body() allProps: UserDocument) {}

  @Delete(':id')
  delete(@Param('id') id: string): void {}
}
