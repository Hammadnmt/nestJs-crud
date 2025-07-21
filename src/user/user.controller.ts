import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('/new')
  async createUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<any> {
    try {
      return await this.userService.addUser(userData);
    } catch (error) {
      console.log(error);
    }
  }
}
