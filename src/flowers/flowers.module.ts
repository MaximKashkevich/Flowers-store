import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigService],
})
export class FlowersModule {}
