import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `SERVER IS RUNNING! 🚀\n\n **TO SWAGGER** -> ROUTE /api`;
  }
}
