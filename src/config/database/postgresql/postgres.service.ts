import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DBConfigService {
  constructor(@Inject(ConfigService) private readonly _: ConfigService) {}

  createTypeOrmOptions = () => {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Remover em PROD.
      ssl: {
        rejectUnauthorized: false, // ⚠️ Remover em PROD
      },
    } as TypeOrmModuleOptions;
  };
}
