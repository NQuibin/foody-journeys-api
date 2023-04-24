import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @HttpCode(501)
  users(): string {
    return 'Not implemented';
  }
}
