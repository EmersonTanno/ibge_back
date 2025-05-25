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

  async getNameDataByUF(name: string, uf: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/censos/nomes/${name}?localidade=${uf}`);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar dados do IBGE por UF.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async getTopNamesByLocalidade(uf: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/censos/nomes/masculino+feminino?localidade=${uf}`);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar os nomes mais comuns na localidade.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
