/* eslint-disable prettier/prettier */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';
import { SampleMiddleware } from './common/middlwares/sample-middleware';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/NestJs-testingW'),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SampleMiddleware).forRoutes({
      path: 'products',
      method: RequestMethod.GET,
    });
  }
}
