import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }
  async validate(email: string, password: string): Promise<any> {
    try {
      console.log('Validating user with email:', email);
      const user = await this.authService.validateUser({ email, password });
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      console.error('Validation failed:', error);
      return null;
    }
  }
}
