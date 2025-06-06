import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IbgeApiService {
  private readonly baseUrl = 'https://servicodados.ibge.gov.br/api/v2';

  async getNameData(name: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/censos/nomes/${name}`);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar dados do IBGE para o nome informado.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async getRankingByDecadeAndLocation(decade: number, localidade: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/censos/nomes/ranking?decada=${decade}&localidade=${localidade}`
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar ranking por década e localidade.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

}
