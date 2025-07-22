import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SCRT as string,
      ignoreExpiration: false,
    });
  }
  validate(payload: { username: string; sub: string }) {
    return { name: payload.username, id: payload.sub };
  }
}
