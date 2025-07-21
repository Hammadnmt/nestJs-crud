import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_CONSTANTS } from '../contants/JWT_CNST';

export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_CONSTANTS.secert,
      ignoreExpiration: false,
    });
  }
  validate(payload: { username: string; sub: string }) {
    return { name: payload.username, id: payload.sub };
  }
}
