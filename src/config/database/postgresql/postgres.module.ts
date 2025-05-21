import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DBConfigService } from './postgres.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}
