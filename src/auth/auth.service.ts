import { Injectable } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    try {
      const user = await this.userService.findUser({ email, password });
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async validateUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    try {
      return await this.userService.verifyUser({ email, password });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
