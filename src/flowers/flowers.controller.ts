import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';
import { FlowersService } from './flowers.service';

@Controller('flowers') // Маршрут: /flowers
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get() // Обрабатывает GET-запросы
  @UseGuards(AuthGuard) // Добавляем Guard для проверки доступа
  findAll() {
    return this.flowersService.findAll(); // Возвращает данные из сервиса
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto);
  }
}
