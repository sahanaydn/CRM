import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

 export interface TestService{

  getName():string;
 }

 

@Injectable()
export class IbrahimTestService1 implements TestService  {
  getName(): string {
    return 'IbrahimTestService1!';
  }
}


@Injectable()
export class IbrahimTestService2 implements TestService   {
  getName(): string {
    return 'IbrahimTestService2!';
  }
}


