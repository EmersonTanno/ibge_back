import { Module } from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { EvolutionController } from './evolution.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [EvolutionController],
  providers: [EvolutionService],
})
export class EvolutionModule {}
