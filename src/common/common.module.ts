import { Module } from '@nestjs/common';
import { IbgeApiService } from './utils/ibge-api.service';

@Module({
  providers: [IbgeApiService],
  exports: [IbgeApiService],
})
export class CommonModule {}
