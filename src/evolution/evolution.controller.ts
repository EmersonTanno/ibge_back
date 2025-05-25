import { Controller, Get, Query } from '@nestjs/common';
import { EvolutionService } from './evolution.service';

@Controller('evolution')
export class EvolutionController {
  constructor(private readonly evolutionService: EvolutionService) {}

  @Get()
  async getNameEvolution(@Query('name') name: string) {
    return this.evolutionService.getNameEvolution(name);
  }
}