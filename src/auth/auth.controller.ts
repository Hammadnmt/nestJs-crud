import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JWTGuard } from 'src/common/guards/JwtGuard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServic: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): any {
    try {
      return this.authServic.login(req.user);
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }
  @UseGuards(JWTGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}
