import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [ConfigModule.forRoot(), FlowersModule],
})
export class AppModule {}
