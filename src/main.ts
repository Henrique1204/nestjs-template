import { NestFactory } from '@nestjs/core';

import { ErrorMiddleware } from '@middleware/error.middleware';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiPrefix = 'api';

  app.setGlobalPrefix(apiPrefix);
  app.enableCors();

  app.useGlobalFilters(new ErrorMiddleware());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
