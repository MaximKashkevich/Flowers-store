import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value.name) {
      throw new BadRequestException('Name is required');
    }
    return value; // возвращаем преобразованное значение
  }
}
