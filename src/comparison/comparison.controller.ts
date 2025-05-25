import { Controller, Get, Query } from '@nestjs/common';
import { ComparisonService } from './comparison.service';

@Controller('comparison')
export class ComparisonController {
  constructor(private readonly comparisonService: ComparisonService) {}

  @Get()
  async getNameEvolution(
    @Query('name1') name1: string,
    @Query('name2') name2: string,
  ) {
    return this.comparisonService.compareNamesByTime(name1, name2);
  }
}
