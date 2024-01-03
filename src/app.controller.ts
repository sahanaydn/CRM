import { Controller, Get, Inject } from '@nestjs/common';
import { AppService, TestService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly userService: UsersService,
      @Inject('abc') private service:TestService,
    ) {}

  @Get()
  getHello(): any {
    return this.userService.findAll()
    return this.appService.getHello();
  }
}
