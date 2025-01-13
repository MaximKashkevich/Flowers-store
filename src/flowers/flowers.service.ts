import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
import { EnumAppMode } from 'src/types';
import { CreateFlowersDto } from './flowers.dto';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prisma.flower.findMany();
  }

  create(dto: CreateFlowersDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
