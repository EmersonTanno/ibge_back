import { Injectable } from '@nestjs/common';
import { IbgeApiService } from 'src/common/utils/ibge-api.service';

@Injectable()
export class EvolutionService {
  constructor(private readonly ibgeApiService: IbgeApiService) {}

  async getNameEvolution(
    name: string,
    startDecade?: string,
    endDecade?: string,
  ): Promise<any> {
    const data = await this.ibgeApiService.getNameData(name);

    if (!data || !data.length) {
      return {
        nome: name,
        periods: [],
      };
    }

    const periods = data[0].res
      .map((item: any) => {
        const period = item.periodo.replace(/[\[\]\s]/g, '');
        const [start, end] = period.split(',');

        return {
          start,
          end,
          frequency: item.frequencia,
        };
      })
      .filter(period => {
        if (!startDecade || !endDecade) return true;
        const start = parseInt(startDecade, 10);
        const end = parseInt(endDecade, 10);
        const periodStart = parseInt(period.start, 10);
        return periodStart >= start && periodStart < end;
      });

    return {
      nome: data[0].nome,
      periods,
    };
  }
}
