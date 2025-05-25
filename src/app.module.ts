import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvolutionModule } from './evolution/evolution.module';
import { TrendModule } from './trend/trend.module';

@Module({
  imports: [EvolutionModule, TrendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
