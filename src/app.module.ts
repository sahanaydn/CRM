import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  AppService,
  IbrahimTestService1,
  IbrahimTestService2,
} from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'abc',
      useClass: IbrahimTestService2,
    },
    {
      provide: 'xyz',
      useClass: IbrahimTestService1,
    },
  ],
})
export class AppModule {}
