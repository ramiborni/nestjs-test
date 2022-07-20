import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //VALIDATION MIDDLEWARE
      whitelist: true, //PASS ONLY VALIDATED PROPERTIES WITHOUT ANY ADDITIONAL PROPERTIES
      forbidNonWhitelisted: true, //ACCEPT ONLY VALIDATED PROPERTIES WITHOUT ANY ADDITIONAL PROPERTIES
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
