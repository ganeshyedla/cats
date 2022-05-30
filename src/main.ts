import { NestFactory } from '@nestjs/core';
import {CatsModule} from './cat/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule, {
    logger: ['verbose']
  });
  await app.listen(3000);
}
bootstrap();
