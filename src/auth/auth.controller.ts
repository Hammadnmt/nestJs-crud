import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServic: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): any {
    try {
      return req.user;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }
}
