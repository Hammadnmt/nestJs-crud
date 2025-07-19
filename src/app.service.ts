import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { hello: boolean } {
    return { hello: true };
  }
}
