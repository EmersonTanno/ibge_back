import { Injectable } from '@nestjs/common';
import { IbgeApiService } from 'src/common/utils/ibge-api.service';

@Injectable()
export class ComparisonService {
  constructor(private readonly ibgeApiService: IbgeApiService) {}

  async compareNamesByTime(name1: string, name2: string): Promise<any[]> {
    const data1 = await this.ibgeApiService.getNameData(name1);
    const data2 = await this.ibgeApiService.getNameData(name2);

    if (!data1.length || !data2.length) {
      return [];
    }

    const res1 = data1[0].res;
    const res2 = data2[0].res;

    const allDecades = new Set<string>();

    res1.forEach((entry) => allDecades.add(entry.periodo));
    res2.forEach((entry) => allDecades.add(entry.periodo));

    const sortedDecades = Array.from(allDecades)
      .map((p) => p.replace(/[\[\]\s]/g, ''))
      .sort();

    const result = sortedDecades.map((decada) => {
      const d1 = res1.find((r) => r.periodo.replace(/[\[\]\s]/g, '') === decada);
      const d2 = res2.find((r) => r.periodo.replace(/[\[\]\s]/g, '') === decada);

      return {
        decada,
        nome1: {
          nome: name1,
          frequencia: d1 ? d1.frequencia : 0,
        },
        nome2: {
          nome: name2,
          frequencia: d2 ? d2.frequencia : 0,
        },
      };
    });

    return result;
  }
}
