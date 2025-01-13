import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @EventPattern('message')
  handleMessage(message: string) {
    this.microserviceService.handleMessage(message);
  }
}
