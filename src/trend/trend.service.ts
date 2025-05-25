import { Injectable } from '@nestjs/common';
import { IbgeApiService } from 'src/common/utils/ibge-api.service';

@Injectable()
export class TrendService {
  constructor(private readonly ibgeApiService: IbgeApiService) {}

  async getTopNamesRankingEvolution(ufCode: string): Promise<any> {
    const decades = [
      1930, 1940, 1950, 1960, 1970, 1980,
      1990, 2000, 2010
    ];

    const evolutionByDecade: {
      decada: string;
      top1: { nome: string | null; frequencia: number | null };
      top2: { nome: string | null; frequencia: number | null };
      top3: { nome: string | null; frequencia: number | null };
    }[] = [];


    for (const decada of decades) {
      const res = await this.ibgeApiService.getRankingByDecadeAndLocation(decada, ufCode);

      if (!res || !res[0] || !res[0].res) continue;

      const top3 = res[0].res.slice(0, 3);

      evolutionByDecade.push({
        decada: decada.toString(),
        top1: {
          nome: top3[0]?.nome || null,
          frequencia: top3[0]?.frequencia || null
        },
        top2: {
          nome: top3[1]?.nome || null,
          frequencia: top3[1]?.frequencia || null
        },
        top3: {
          nome: top3[2]?.nome || null,
          frequencia: top3[2]?.frequencia || null
        }
      });
    }

    return evolutionByDecade;
  }
}
