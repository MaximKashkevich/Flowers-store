import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string): string {
    return `MicroService message: ${message}`;
  }
}
