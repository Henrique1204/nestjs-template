import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostgresModule } from '@database/postgresql/postgres.module';

import { HealthModule } from '@routes/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PostgresModule,
    HealthModule,
  ],
})
export class AppModule {}
