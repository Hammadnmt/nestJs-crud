import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  // async login({
  //   email,
  //   password,
  // }: {
  //   email: string;
  //   password: string;
  // }): Promise<User | null> {
  //   try {
  //     const user = await this.userService.findUser({ email, password });
  //     if (!user) {
  //       return null;
  //     }
  //     return user;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  login(user: { name: string; id: string }): any {
    try {
      const payload = { username: user.name, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.error('Login failed:', error);
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
