import { Controller, Get, Query } from '@nestjs/common';
import { TrendService } from './trend.service';

@Controller('trend')
export class TrendController {
  constructor(private readonly trendService: TrendService) {}

  @Get('top-names')
  async getTopNames(@Query('localidade') localidade: string) {
    return this.trendService.getTopNamesRankingEvolution(localidade);
  }
}
