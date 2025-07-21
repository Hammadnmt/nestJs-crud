import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/passport-local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from './contants/JWT_CNST';
import { JWTStrategy } from './strategy/passport-jwt.strategy';
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_CONSTANTS.secert,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JWTStrategy],
})
export class AuthModule {}
